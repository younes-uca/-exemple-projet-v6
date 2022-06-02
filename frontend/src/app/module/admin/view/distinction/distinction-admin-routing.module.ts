
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



    import { DistinctionAdminComponent } from './distinction-admin/distinction-admin.component';



    import { DistinctionDisciplineScientifiqueAdminComponent } from './distinction-discipline-scientifique-admin/distinction-discipline-scientifique-admin.component';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'distinction',
                            children: [
                                {
                                    path: 'list',
                                    component: DistinctionAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'distinction-discipline-scientifique',
                            children: [
                                {
                                    path: 'list',
                                    component: DistinctionDisciplineScientifiqueAdminComponent ,
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
export class DistinctionAdminRoutingModule { }
