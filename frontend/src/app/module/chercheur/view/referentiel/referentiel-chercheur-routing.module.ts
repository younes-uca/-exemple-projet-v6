
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { KeyWordChercheurComponent } from './key-word-chercheur/key-word-chercheur.component';



    import { DisciplineScientifiqueParentChercheurComponent } from './discipline-scientifique-parent-chercheur/discipline-scientifique-parent-chercheur.component';



    import { DisciplineScientifiqueChercheurComponent } from './discipline-scientifique-chercheur/discipline-scientifique-chercheur.component';



    import { DisciplineScientifiqueErcAssociationChercheurComponent } from './discipline-scientifique-erc-association-chercheur/discipline-scientifique-erc-association-chercheur.component';



    import { DisciplineScientifiqueErcParentChercheurComponent } from './discipline-scientifique-erc-parent-chercheur/discipline-scientifique-erc-parent-chercheur.component';



    import { EnjeuxIrdChercheurComponent } from './enjeux-ird-chercheur/enjeux-ird-chercheur.component';



    import { SemanticRelationshipChercheurComponent } from './semantic-relationship-chercheur/semantic-relationship-chercheur.component';



    import { DisciplineScientifiqueErcChercheurComponent } from './discipline-scientifique-erc-chercheur/discipline-scientifique-erc-chercheur.component';



    import { KeyWordDisciplineScientifiqueErcChercheurComponent } from './key-word-discipline-scientifique-erc-chercheur/key-word-discipline-scientifique-erc-chercheur.component';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'key-word',
                            children: [
                                {
                                    path: 'list',
                                    component: KeyWordChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'discipline-scientifique-parent',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueParentChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'discipline-scientifique',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'discipline-scientifique-erc-association',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueErcAssociationChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'discipline-scientifique-erc-parent',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueErcParentChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'enjeux-ird',
                            children: [
                                {
                                    path: 'list',
                                    component: EnjeuxIrdChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'semantic-relationship',
                            children: [
                                {
                                    path: 'list',
                                    component: SemanticRelationshipChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'discipline-scientifique-erc',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueErcChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'key-word-discipline-scientifique-erc',
                            children: [
                                {
                                    path: 'list',
                                    component: KeyWordDisciplineScientifiqueErcChercheurComponent ,
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
export class ReferentielChercheurRoutingModule { }
