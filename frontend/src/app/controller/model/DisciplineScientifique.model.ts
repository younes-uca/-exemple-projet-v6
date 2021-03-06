import {DisciplineScientifiqueParentVo} from './DisciplineScientifiqueParent.model';
import {DisciplineScientifiqueErcAssociationVo} from './DisciplineScientifiqueErcAssociation.model';



export class DisciplineScientifiqueVo {

    public id: number;

    public libelleFr: string;
    public libelleEng: string;
    public code: string;
     public niveau: number;
    public archive: null | boolean;
    public dateArchivage: Date;
    public dateCreation: Date;
    public disciplineScientifiqueErcLibelle: string;
                public niveauMax: string ;
                public niveauMin: string ;
                public dateArchivageMax: string ;
                public dateArchivageMin: string ;
                public dateCreationMax: string ;
                public dateCreationMin: string ;
      public disciplineScientifiqueParentVo: DisciplineScientifiqueParentVo ;
      public disciplineScientifiqueErcAssociationsVo: Array<DisciplineScientifiqueErcAssociationVo>;

}
