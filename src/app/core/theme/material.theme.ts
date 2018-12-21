import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { FileUploadModule } from 'ng2-file-upload';

import {
  MatCardActions,
  MatCard,
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTextareaAutosize,
  MatInputModule,
  MatTableModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatSliderModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatGridListModule,
  MatChipsModule,
  MatDialogModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatProgressBarModule
} from '@angular/material';

import { HeaderComponent } from './../layout/header/header.component';
import { FooterComponent } from './../layout/footer/footer.component';
import { LayoutComponent } from './../layout/layout/layout.component';
import { SearchInputComponent } from './../layout/search/search.component';

import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe } from '../../shared/pipes';

import { DEFAULT_THEME } from '../../../assets/scss/theme/theme.default';
import { COSMIC_THEME } from '../../../assets/scss/theme/theme.cosmic';
import { CORPORATE_THEME } from '../../../assets/scss/theme/theme.corporate';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const MAT_MODULES = [
    MatCardActions,
    MatCard,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTextareaAutosize,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatSliderModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatChipsModule,
    MatDialogModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatProgressBarModule,
  NgbModule,
  TextMaskModule,
  FileUploadModule
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  LayoutComponent
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
];

// const MAT_THEME_PROVIDERS = [
//   ...NbThemeModule.forRoot(
//     {
//       name: 'default',
//     },
//     [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME ],
//   ).providers,
//   //...NbSidebarModule.forRoot().providers,
//   //...NbMenuModule.forRoot().providers,
// ];

@NgModule({
  imports: [...BASE_MODULES, ...MAT_MODULES],
  exports: [...BASE_MODULES, ...MAT_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES]
})

export class MaterialThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: MaterialThemeModule,
     // providers: [...MAT_THEME_PROVIDERS],
    };
  }
}
