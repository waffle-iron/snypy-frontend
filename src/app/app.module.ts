import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxResourceFactoryModule } from 'ngx-resource-factory';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { NgPipesModule } from 'ngx-pipes';

import { ServicesModule } from './services/services.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

/**
 * Icons
 */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { LabelsComponent } from './components/labels/labels.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { MenuComponent } from './components/menu/menu.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { SnippetComponent } from './components/snippet/snippet.component';
import { SnippetOptionsComponent } from './components/snippet-options/snippet-options.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SnippetModalComponent } from './components/snippet-modal/snippet-modal.component';
import { SnippetOrderComponent } from './components/snippet-order/snippet-order.component';

library.add(
  fas.faCoffee,
  fas.faCode,
  fas.faSyncAlt,
  fas.faGlobe,
  fas.faEye,
  fas.faEyeSlash,
  fas.faTag,
  fas.faCloudUploadAlt,
  fas.faCloudDownloadAlt,
  fas.faUser,
  fas.faPlus,
  fas.faStar,
  far.faStar,
  fas.faTrash,
);

@NgModule({
  declarations: [
    AppComponent,
    LabelsComponent,
    LanguagesComponent,
    MenuComponent,
    SnippetsComponent,
    SnippetComponent,
    SnippetOptionsComponent,
    FooterComponent,
    HeaderComponent,
    SnippetModalComponent,
    SnippetOrderComponent
  ],
  entryComponents: [
    SnippetModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxResourceFactoryModule.forRoot(),
    NgbModule.forRoot(),
    FontAwesomeModule,
    PerfectScrollbarModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot(),
    NgPipesModule,

    ServicesModule.forRoot(),
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
