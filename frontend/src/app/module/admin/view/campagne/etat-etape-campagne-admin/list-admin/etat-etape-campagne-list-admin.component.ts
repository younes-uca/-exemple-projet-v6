import {Component, OnInit} from '@angular/core';
import {EtatEtapeCampagneService} from 'src/app/controller/service/EtatEtapeCampagne.service';
import {EtatEtapeCampagneVo} from 'src/app/controller/model/EtatEtapeCampagne.model';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {RoleService} from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-etat-etape-campagne-list-admin',
  templateUrl: './etat-etape-campagne-list-admin.component.html',
  styleUrls: ['./etat-etape-campagne-list-admin.component.css']
})
export class EtatEtapeCampagneListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'EtatEtapeCampagne';


    constructor(private datePipe: DatePipe, private etatEtapeCampagneService: EtatEtapeCampagneService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {

        if(!this.searchAction) {
            this.loadEtatEtapeCampagnes();
            this.searchAction = true;
            this.sortByLibelle();
            this.sortByOrdre();
            this.sortByCode();
            this.initCol();
        }
        this.initExport();
    }

    // methods
    public async loadEtatEtapeCampagnes() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtatEtapeCampagne', 'list');
        isPermistted ? this.etatEtapeCampagneService.findAll().subscribe(etatEtapeCampagnes => this.etatEtapeCampagnes = etatEtapeCampagnes, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});

    }


  public searchRequest(){
        this.etatEtapeCampagneService.findByCriteria(this.searchEtatEtapeCampagne).subscribe(etatEtapeCampagnes=>{

            this.etatEtapeCampagnes = etatEtapeCampagnes;
           this.searchEtatEtapeCampagne = new EtatEtapeCampagneVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'code', header: 'Code'},
                            {field: 'ordre', header: 'Ordre'},
        ];
    }

    public async editEtatEtapeCampagne(etatEtapeCampagne: EtatEtapeCampagneVo){
        const isPermistted = await this.roleService.isPermitted('EtatEtapeCampagne', 'edit');
         if(isPermistted){
          this.etatEtapeCampagneService.findByIdWithAssociatedList(etatEtapeCampagne).subscribe(res => {
           this.selectedEtatEtapeCampagne = res;
            this.editEtatEtapeCampagneDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }

    }



   public async viewEtatEtapeCampagne(etatEtapeCampagne: EtatEtapeCampagneVo){
        const isPermistted = await this.roleService.isPermitted('EtatEtapeCampagne', 'view');
        if(isPermistted){
           this.etatEtapeCampagneService.findByIdWithAssociatedList(etatEtapeCampagne).subscribe(res => {
           this.selectedEtatEtapeCampagne = res;
            this.viewEtatEtapeCampagneDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async openCreateEtatEtapeCampagne(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedEtatEtapeCampagne = new EtatEtapeCampagneVo();
            this.createEtatEtapeCampagneDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }


    public async deleteEtatEtapeCampagne(etatEtapeCampagne: EtatEtapeCampagneVo){
       const isPermistted = await this.roleService.isPermitted('EtatEtapeCampagne', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Etat etape campagne) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.etatEtapeCampagneService.delete(etatEtapeCampagne).subscribe(status=>{
                          if(status > 0){
                          const position = this.etatEtapeCampagnes.indexOf(etatEtapeCampagne);
                          position > -1 ? this.etatEtapeCampagnes.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Etat etape campagne Supprimé',
                        life: 3000
                    });
                                     }

                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'Problème de permission'
              });
             }
    }


public async duplicateEtatEtapeCampagne(etatEtapeCampagne: EtatEtapeCampagneVo) {

     this.etatEtapeCampagneService.findByIdWithAssociatedList(etatEtapeCampagne).subscribe(
	 res => {
	       this.initDuplicateEtatEtapeCampagne(res);
	       this.selectedEtatEtapeCampagne = res;
	       this.selectedEtatEtapeCampagne.id = null;
            this.createEtatEtapeCampagneDialog = true;

});

	}

	initDuplicateEtatEtapeCampagne(res: EtatEtapeCampagneVo) {


	}

  initExport() : void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.etatEtapeCampagnes.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Code': e.code ,
                    'Ordre': e.ordre ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchEtatEtapeCampagne.libelle ? this.searchEtatEtapeCampagne.libelle : environment.emptyForExport ,
            'Code': this.searchEtatEtapeCampagne.code ? this.searchEtatEtapeCampagne.code : environment.emptyForExport ,
            'Ordre Min': this.searchEtatEtapeCampagne.ordreMin ? this.searchEtatEtapeCampagne.ordreMin : environment.emptyForExport ,
            'Ordre Max': this.searchEtatEtapeCampagne.ordreMax ? this.searchEtatEtapeCampagne.ordreMax : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get etatEtapeCampagnes() : Array<EtatEtapeCampagneVo> {
           return this.etatEtapeCampagneService.etatEtapeCampagnes;
       }
    set etatEtapeCampagnes(value: Array<EtatEtapeCampagneVo>) {
        this.etatEtapeCampagneService.etatEtapeCampagnes = value;
       }

    get etatEtapeCampagneSelections() : Array<EtatEtapeCampagneVo> {
           return this.etatEtapeCampagneService.etatEtapeCampagneSelections;
       }
    set etatEtapeCampagneSelections(value: Array<EtatEtapeCampagneVo>) {
        this.etatEtapeCampagneService.etatEtapeCampagneSelections = value;
       }




    get selectedEtatEtapeCampagne() : EtatEtapeCampagneVo {
           return this.etatEtapeCampagneService.selectedEtatEtapeCampagne;
       }
    set selectedEtatEtapeCampagne(value: EtatEtapeCampagneVo) {
        this.etatEtapeCampagneService.selectedEtatEtapeCampagne = value;
       }

    get createEtatEtapeCampagneDialog() :boolean {
           return this.etatEtapeCampagneService.createEtatEtapeCampagneDialog;
       }
    set createEtatEtapeCampagneDialog(value: boolean) {
        this.etatEtapeCampagneService.createEtatEtapeCampagneDialog= value;
       }

    get editEtatEtapeCampagneDialog() :boolean {
           return this.etatEtapeCampagneService.editEtatEtapeCampagneDialog;
       }
    set editEtatEtapeCampagneDialog(value: boolean) {
        this.etatEtapeCampagneService.editEtatEtapeCampagneDialog= value;
       }
    get viewEtatEtapeCampagneDialog() :boolean {
           return this.etatEtapeCampagneService.viewEtatEtapeCampagneDialog;
       }
    set viewEtatEtapeCampagneDialog(value: boolean) {
        this.etatEtapeCampagneService.viewEtatEtapeCampagneDialog = value;
       }

     get searchEtatEtapeCampagne() : EtatEtapeCampagneVo {
        return this.etatEtapeCampagneService.searchEtatEtapeCampagne;
       }
    set searchEtatEtapeCampagne(value: EtatEtapeCampagneVo) {
        this.etatEtapeCampagneService.searchEtatEtapeCampagne = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }

/*   For search   */
    get searchAction(): boolean{
       return  this.etatEtapeCampagneService.searchAction;
    }
    set searchAction(value: boolean){
        this.etatEtapeCampagneService.searchAction = value;
    }

    /*   For sort   */

    get sortLibelle(): number {
       return this.etatEtapeCampagneService.sortByLibelle;
    }

    get sortCode(): number {
       return this.etatEtapeCampagneService.sortByCode;
    }

    get sortOrdre(): number {
       return this.etatEtapeCampagneService.sortByOrdre;
    }




     sortByLibelle() {
        if(this.sortLibelle === 1) {
            this.etatEtapeCampagneService.sortByLibelle = -1;
        }
        else{
            this.etatEtapeCampagneService.sortByLibelle = 1;
        }
         console.log('sort Libelle : '+this.sortLibelle);
     }

    sortByCode() {
        if(this.sortCode === 1) {
            this.etatEtapeCampagneService.sortByCode = -1;
        }
        else{
            this.etatEtapeCampagneService.sortByCode = 1;
        }
        console.log('sort Code : '+this.sortCode);
    }

    sortByOrdre() {
        if(this.sortOrdre === 1) {
            this.etatEtapeCampagneService.sortByOrdre = -1;
        }
        else{
            this.etatEtapeCampagneService.sortByOrdre = 1;
        }
        console.log('sort Ordre : '+this.sortOrdre);
    }




}
