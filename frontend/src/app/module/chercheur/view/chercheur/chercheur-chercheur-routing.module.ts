
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { DisciplineScientifiqueChercheurChercheurComponent } from './discipline-scientifique-chercheur-chercheur/discipline-scientifique-chercheur-chercheur.component';



    import { IdentifiantAuteurExpertChercheurComponent } from './identifiant-auteur-expert-chercheur/identifiant-auteur-expert-chercheur.component';



    import { IdentifiantRechercheChercheurComponent } from './identifiant-recherche-chercheur/identifiant-recherche-chercheur.component';



    import { EnjeuxIrdChercheurChercheurComponent } from './enjeux-ird-chercheur-chercheur/enjeux-ird-chercheur-chercheur.component';


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
                                    component: DisciplineScientifiqueChercheurChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'identifiant-auteur-expert',
                            children: [
                                {
                                    path: 'list',
                                    component: IdentifiantAuteurExpertChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'identifiant-recherche',
                            children: [
                                {
                                    path: 'list',
                                    component: IdentifiantRechercheChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'enjeux-ird-chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: EnjeuxIrdChercheurChercheurComponent ,
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
export class ChercheurChercheurRoutingModule { }
