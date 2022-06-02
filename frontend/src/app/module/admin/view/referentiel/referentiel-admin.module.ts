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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { KeyWordCreateAdminComponent } from './key-word-admin/create-admin/key-word-create-admin.component';
import { KeyWordEditAdminComponent } from './key-word-admin/edit-admin/key-word-edit-admin.component';
import { KeyWordViewAdminComponent } from './key-word-admin/view-admin/key-word-view-admin.component';
import { KeyWordListAdminComponent } from './key-word-admin/list-admin/key-word-list-admin.component';
import { KeyWordAdminComponent } from './key-word-admin/key-word-admin.component';
import { DisciplineScientifiqueParentCreateAdminComponent } from './discipline-scientifique-parent-admin/create-admin/discipline-scientifique-parent-create-admin.component';
import { DisciplineScientifiqueParentEditAdminComponent } from './discipline-scientifique-parent-admin/edit-admin/discipline-scientifique-parent-edit-admin.component';
import { DisciplineScientifiqueParentViewAdminComponent } from './discipline-scientifique-parent-admin/view-admin/discipline-scientifique-parent-view-admin.component';
import { DisciplineScientifiqueParentListAdminComponent } from './discipline-scientifique-parent-admin/list-admin/discipline-scientifique-parent-list-admin.component';
import { DisciplineScientifiqueParentAdminComponent } from './discipline-scientifique-parent-admin/discipline-scientifique-parent-admin.component';
import { DisciplineScientifiqueCreateAdminComponent } from './discipline-scientifique-admin/create-admin/discipline-scientifique-create-admin.component';
import { DisciplineScientifiqueEditAdminComponent } from './discipline-scientifique-admin/edit-admin/discipline-scientifique-edit-admin.component';
import { DisciplineScientifiqueViewAdminComponent } from './discipline-scientifique-admin/view-admin/discipline-scientifique-view-admin.component';
import { DisciplineScientifiqueListAdminComponent } from './discipline-scientifique-admin/list-admin/discipline-scientifique-list-admin.component';
import { DisciplineScientifiqueAdminComponent } from './discipline-scientifique-admin/discipline-scientifique-admin.component';
import { DisciplineScientifiqueErcAssociationCreateAdminComponent } from './discipline-scientifique-erc-association-admin/create-admin/discipline-scientifique-erc-association-create-admin.component';
import { DisciplineScientifiqueErcAssociationEditAdminComponent } from './discipline-scientifique-erc-association-admin/edit-admin/discipline-scientifique-erc-association-edit-admin.component';
import { DisciplineScientifiqueErcAssociationViewAdminComponent } from './discipline-scientifique-erc-association-admin/view-admin/discipline-scientifique-erc-association-view-admin.component';
import { DisciplineScientifiqueErcAssociationListAdminComponent } from './discipline-scientifique-erc-association-admin/list-admin/discipline-scientifique-erc-association-list-admin.component';
import { DisciplineScientifiqueErcAssociationAdminComponent } from './discipline-scientifique-erc-association-admin/discipline-scientifique-erc-association-admin.component';
import { DisciplineScientifiqueErcParentCreateAdminComponent } from './discipline-scientifique-erc-parent-admin/create-admin/discipline-scientifique-erc-parent-create-admin.component';
import { DisciplineScientifiqueErcParentEditAdminComponent } from './discipline-scientifique-erc-parent-admin/edit-admin/discipline-scientifique-erc-parent-edit-admin.component';
import { DisciplineScientifiqueErcParentViewAdminComponent } from './discipline-scientifique-erc-parent-admin/view-admin/discipline-scientifique-erc-parent-view-admin.component';
import { DisciplineScientifiqueErcParentListAdminComponent } from './discipline-scientifique-erc-parent-admin/list-admin/discipline-scientifique-erc-parent-list-admin.component';
import { DisciplineScientifiqueErcParentAdminComponent } from './discipline-scientifique-erc-parent-admin/discipline-scientifique-erc-parent-admin.component';
import { EnjeuxIrdCreateAdminComponent } from './enjeux-ird-admin/create-admin/enjeux-ird-create-admin.component';
import { EnjeuxIrdEditAdminComponent } from './enjeux-ird-admin/edit-admin/enjeux-ird-edit-admin.component';
import { EnjeuxIrdViewAdminComponent } from './enjeux-ird-admin/view-admin/enjeux-ird-view-admin.component';
import { EnjeuxIrdListAdminComponent } from './enjeux-ird-admin/list-admin/enjeux-ird-list-admin.component';
import { EnjeuxIrdAdminComponent } from './enjeux-ird-admin/enjeux-ird-admin.component';
import { SemanticRelationshipCreateAdminComponent } from './semantic-relationship-admin/create-admin/semantic-relationship-create-admin.component';
import { SemanticRelationshipEditAdminComponent } from './semantic-relationship-admin/edit-admin/semantic-relationship-edit-admin.component';
import { SemanticRelationshipViewAdminComponent } from './semantic-relationship-admin/view-admin/semantic-relationship-view-admin.component';
import { SemanticRelationshipListAdminComponent } from './semantic-relationship-admin/list-admin/semantic-relationship-list-admin.component';
import { SemanticRelationshipAdminComponent } from './semantic-relationship-admin/semantic-relationship-admin.component';
import { DisciplineScientifiqueErcCreateAdminComponent } from './discipline-scientifique-erc-admin/create-admin/discipline-scientifique-erc-create-admin.component';
import { DisciplineScientifiqueErcEditAdminComponent } from './discipline-scientifique-erc-admin/edit-admin/discipline-scientifique-erc-edit-admin.component';
import { DisciplineScientifiqueErcViewAdminComponent } from './discipline-scientifique-erc-admin/view-admin/discipline-scientifique-erc-view-admin.component';
import { DisciplineScientifiqueErcListAdminComponent } from './discipline-scientifique-erc-admin/list-admin/discipline-scientifique-erc-list-admin.component';
import { DisciplineScientifiqueErcAdminComponent } from './discipline-scientifique-erc-admin/discipline-scientifique-erc-admin.component';
import { KeyWordDisciplineScientifiqueErcCreateAdminComponent } from './key-word-discipline-scientifique-erc-admin/create-admin/key-word-discipline-scientifique-erc-create-admin.component';
import { KeyWordDisciplineScientifiqueErcEditAdminComponent } from './key-word-discipline-scientifique-erc-admin/edit-admin/key-word-discipline-scientifique-erc-edit-admin.component';
import { KeyWordDisciplineScientifiqueErcViewAdminComponent } from './key-word-discipline-scientifique-erc-admin/view-admin/key-word-discipline-scientifique-erc-view-admin.component';
import { KeyWordDisciplineScientifiqueErcListAdminComponent } from './key-word-discipline-scientifique-erc-admin/list-admin/key-word-discipline-scientifique-erc-list-admin.component';
import { KeyWordDisciplineScientifiqueErcAdminComponent } from './key-word-discipline-scientifique-erc-admin/key-word-discipline-scientifique-erc-admin.component';

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

    KeyWordCreateAdminComponent,
    KeyWordListAdminComponent,
    KeyWordViewAdminComponent,
    KeyWordEditAdminComponent,
    KeyWordAdminComponent,
    DisciplineScientifiqueParentCreateAdminComponent,
    DisciplineScientifiqueParentListAdminComponent,
    DisciplineScientifiqueParentViewAdminComponent,
    DisciplineScientifiqueParentEditAdminComponent,
    DisciplineScientifiqueParentAdminComponent,
    DisciplineScientifiqueCreateAdminComponent,
    DisciplineScientifiqueListAdminComponent,
    DisciplineScientifiqueViewAdminComponent,
    DisciplineScientifiqueEditAdminComponent,
    DisciplineScientifiqueAdminComponent,
    DisciplineScientifiqueErcAssociationCreateAdminComponent,
    DisciplineScientifiqueErcAssociationListAdminComponent,
    DisciplineScientifiqueErcAssociationViewAdminComponent,
    DisciplineScientifiqueErcAssociationEditAdminComponent,
    DisciplineScientifiqueErcAssociationAdminComponent,
    DisciplineScientifiqueErcParentCreateAdminComponent,
    DisciplineScientifiqueErcParentListAdminComponent,
    DisciplineScientifiqueErcParentViewAdminComponent,
    DisciplineScientifiqueErcParentEditAdminComponent,
    DisciplineScientifiqueErcParentAdminComponent,
    EnjeuxIrdCreateAdminComponent,
    EnjeuxIrdListAdminComponent,
    EnjeuxIrdViewAdminComponent,
    EnjeuxIrdEditAdminComponent,
    EnjeuxIrdAdminComponent,
    SemanticRelationshipCreateAdminComponent,
    SemanticRelationshipListAdminComponent,
    SemanticRelationshipViewAdminComponent,
    SemanticRelationshipEditAdminComponent,
    SemanticRelationshipAdminComponent,
    DisciplineScientifiqueErcCreateAdminComponent,
    DisciplineScientifiqueErcListAdminComponent,
    DisciplineScientifiqueErcViewAdminComponent,
    DisciplineScientifiqueErcEditAdminComponent,
    DisciplineScientifiqueErcAdminComponent,
    KeyWordDisciplineScientifiqueErcCreateAdminComponent,
    KeyWordDisciplineScientifiqueErcListAdminComponent,
    KeyWordDisciplineScientifiqueErcViewAdminComponent,
    KeyWordDisciplineScientifiqueErcEditAdminComponent,
    KeyWordDisciplineScientifiqueErcAdminComponent,
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
  ],
  exports: [
  KeyWordCreateAdminComponent,
  KeyWordListAdminComponent,
  KeyWordViewAdminComponent,
  KeyWordEditAdminComponent,
  KeyWordAdminComponent,
  DisciplineScientifiqueParentCreateAdminComponent,
  DisciplineScientifiqueParentListAdminComponent,
  DisciplineScientifiqueParentViewAdminComponent,
  DisciplineScientifiqueParentEditAdminComponent,
  DisciplineScientifiqueParentAdminComponent,
  DisciplineScientifiqueCreateAdminComponent,
  DisciplineScientifiqueListAdminComponent,
  DisciplineScientifiqueViewAdminComponent,
  DisciplineScientifiqueEditAdminComponent,
  DisciplineScientifiqueAdminComponent,
  DisciplineScientifiqueErcAssociationCreateAdminComponent,
  DisciplineScientifiqueErcAssociationListAdminComponent,
  DisciplineScientifiqueErcAssociationViewAdminComponent,
  DisciplineScientifiqueErcAssociationEditAdminComponent,
  DisciplineScientifiqueErcAssociationAdminComponent,
  DisciplineScientifiqueErcParentCreateAdminComponent,
  DisciplineScientifiqueErcParentListAdminComponent,
  DisciplineScientifiqueErcParentViewAdminComponent,
  DisciplineScientifiqueErcParentEditAdminComponent,
  DisciplineScientifiqueErcParentAdminComponent,
  EnjeuxIrdCreateAdminComponent,
  EnjeuxIrdListAdminComponent,
  EnjeuxIrdViewAdminComponent,
  EnjeuxIrdEditAdminComponent,
  EnjeuxIrdAdminComponent,
  SemanticRelationshipCreateAdminComponent,
  SemanticRelationshipListAdminComponent,
  SemanticRelationshipViewAdminComponent,
  SemanticRelationshipEditAdminComponent,
  SemanticRelationshipAdminComponent,
  DisciplineScientifiqueErcCreateAdminComponent,
  DisciplineScientifiqueErcListAdminComponent,
  DisciplineScientifiqueErcViewAdminComponent,
  DisciplineScientifiqueErcEditAdminComponent,
  DisciplineScientifiqueErcAdminComponent,
  KeyWordDisciplineScientifiqueErcCreateAdminComponent,
  KeyWordDisciplineScientifiqueErcListAdminComponent,
  KeyWordDisciplineScientifiqueErcViewAdminComponent,
  KeyWordDisciplineScientifiqueErcEditAdminComponent,
  KeyWordDisciplineScientifiqueErcAdminComponent,
  ],
  entryComponents: [],
})
export class ReferentielAdminModule { }
