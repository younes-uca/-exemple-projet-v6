
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { KeyWordAdminComponent } from './key-word-admin/key-word-admin.component';



    import { DisciplineScientifiqueParentAdminComponent } from './discipline-scientifique-parent-admin/discipline-scientifique-parent-admin.component';



    import { DisciplineScientifiqueAdminComponent } from './discipline-scientifique-admin/discipline-scientifique-admin.component';



    import { DisciplineScientifiqueErcAssociationAdminComponent } from './discipline-scientifique-erc-association-admin/discipline-scientifique-erc-association-admin.component';



    import { DisciplineScientifiqueErcParentAdminComponent } from './discipline-scientifique-erc-parent-admin/discipline-scientifique-erc-parent-admin.component';



    import { EnjeuxIrdAdminComponent } from './enjeux-ird-admin/enjeux-ird-admin.component';



    import { SemanticRelationshipAdminComponent } from './semantic-relationship-admin/semantic-relationship-admin.component';



    import { DisciplineScientifiqueErcAdminComponent } from './discipline-scientifique-erc-admin/discipline-scientifique-erc-admin.component';



    import { KeyWordDisciplineScientifiqueErcAdminComponent } from './key-word-discipline-scientifique-erc-admin/key-word-discipline-scientifique-erc-admin.component';


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
                                    component: KeyWordAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'discipline-scientifique-parent',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueParentAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'discipline-scientifique',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'discipline-scientifique-erc-association',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueErcAssociationAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'discipline-scientifique-erc-parent',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueErcParentAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'enjeux-ird',
                            children: [
                                {
                                    path: 'list',
                                    component: EnjeuxIrdAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'semantic-relationship',
                            children: [
                                {
                                    path: 'list',
                                    component: SemanticRelationshipAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'discipline-scientifique-erc',
                            children: [
                                {
                                    path: 'list',
                                    component: DisciplineScientifiqueErcAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'key-word-discipline-scientifique-erc',
                            children: [
                                {
                                    path: 'list',
                                    component: KeyWordDisciplineScientifiqueErcAdminComponent ,
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
export class ReferentielAdminRoutingModule { }
