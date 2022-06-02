import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { LoginChercheurComponent } from './login-chercheur/login-chercheur.component';
import { RegisterChercheurComponent } from './register-chercheur/register-chercheur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { DistinctionChercheurModule } from './view/distinction/distinction-chercheur.module';
import { DistinctionChercheurRoutingModule } from './view/distinction/distinction-chercheur-routing.module';
import { ReferentielChercheurModule } from './view/referentiel/referentiel-chercheur.module';
import { ReferentielChercheurRoutingModule } from './view/referentiel/referentiel-chercheur-routing.module';
import { CampagneChercheurModule } from './view/campagne/campagne-chercheur.module';
import { CampagneChercheurRoutingModule } from './view/campagne/campagne-chercheur-routing.module';
import { FormulaireChercheurModule } from './view/formulaire/formulaire-chercheur.module';
import { FormulaireChercheurRoutingModule } from './view/formulaire/formulaire-chercheur-routing.module';
import { ChercheurChercheurModule } from './view/chercheur/chercheur-chercheur.module';
import { ChercheurChercheurRoutingModule } from './view/chercheur/chercheur-chercheur-routing.module';


import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';

@NgModule({
  declarations: [
   LoginChercheurComponent,
   RegisterChercheurComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
  DistinctionChercheurModule,
  DistinctionChercheurRoutingModule,
  ReferentielChercheurModule,
  ReferentielChercheurRoutingModule,
  CampagneChercheurModule,
  CampagneChercheurRoutingModule,
  FormulaireChercheurModule,
  FormulaireChercheurRoutingModule,
  ChercheurChercheurModule,
  ChercheurChercheurRoutingModule,
  ],
  exports: [
  LoginChercheurComponent,
  RegisterChercheurComponent,
    DistinctionChercheurModule,
    ReferentielChercheurModule,
    CampagneChercheurModule,
    FormulaireChercheurModule,
    ChercheurChercheurModule,
  ],
  entryComponents: [],
})
export class ChercheurModule { }
