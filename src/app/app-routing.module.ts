import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntitiesMainViewComponent} from "./entity/entities-main-view/entities-main-view.component";
import {
  MainConfigurationViewComponent
} from "./configuration/main-configuration-view/main-configuration-view.component";
import {EntityFormComponent} from "./configuration/entity-form/entity-form.component";
import {EntitiesTableComponent} from "./configuration/entities-table/entities-table.component";

const routes: Routes = [
  { path: 'entities', component: EntitiesMainViewComponent },
  {
    path: 'configuration',
    children: [
      {
        path: '',
        redirectTo: 'entities',
        pathMatch: 'full'
      },
      {
        path: 'entities',
        component: MainConfigurationViewComponent,
        children: [
          {
            path: '',
            component: EntitiesTableComponent,
          },
          {
            path: 'create',
            component: EntityFormComponent
          }
        ]
      },

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
