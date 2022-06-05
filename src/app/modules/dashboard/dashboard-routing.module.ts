import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from 'src/app/modules/dashboard/components/dashboard-page/dashboard-page.component';
import { GraphPageComponent } from 'src/app/modules/dashboard/components/graph-page/graph-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'graph',
    component: GraphPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
