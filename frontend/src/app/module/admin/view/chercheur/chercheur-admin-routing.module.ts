
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { DisciplineScientifiqueChercheurAdminComponent } from './discipline-scientifique-chercheur-admin/discipline-scientifique-chercheur-admin.component';



    import { IdentifiantAuteurExpertAdminComponent } from './identifiant-auteur-expert-admin/identifiant-auteur-expert-admin.component';



    import { IdentifiantRechercheAdminComponent } from './identifiant-recherche-admin/identifiant-recherche-admin.component';



    import { EnjeuxIrdChercheurAdminComponent } from './enjeux-ird-chercheur-admin/enjeux-ird-chercheur-admin.component';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'discipline-scientifique-chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueChercheurAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'identifiant-auteur-expert',
                            children: [
                                {
                                    path: 'list',
                                    component: IdentifiantAuteurExpertAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'identifiant-recherche',
                            children: [
                                {
                                    path: 'list',
                                    component: IdentifiantRechercheAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'enjeux-ird-chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: EnjeuxIrdChercheurAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class ChercheurAdminRoutingModule { }
