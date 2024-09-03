import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from "@angular/material/icon";
import {FooterComponent} from "./infrastructure/footer/footer.component";
import {HeaderComponent} from "./infrastructure/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavigationComponent } from './infrastructure/main-navigation/main-navigation.component';
import { EntitiesMainViewComponent } from './entity/entities-main-view/entities-main-view.component';
import { EntitiesListSideBarComponent } from './entity/entities-list-side-bar/entities-list-side-bar.component';
import { MainConfigurationViewComponent } from './configuration/main-configuration-view/main-configuration-view.component';
import { ConfigurationSideNavBarComponent } from './configuration/configuration-side-nav-bar/configuration-side-nav-bar.component';
import { EntitiesTableComponent } from './configuration/entities-table/entities-table.component';
import { EntityFormComponent } from './configuration/entity-form/entity-form.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {LoaderComponent} from "./shared/loader/loader.component";
import {ToastrModule} from "ngx-toastr";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainNavigationComponent,
    EntitiesMainViewComponent,
    EntitiesListSideBarComponent,
    MainConfigurationViewComponent,
    ConfigurationSideNavBarComponent,
    EntitiesTableComponent,
    EntityFormComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      closeButton: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
