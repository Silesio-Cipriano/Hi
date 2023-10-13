import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CardStatusComponent } from '../components/card-status/card-status.component';
import { SvgIconComponent } from '../components/svg-icon/svg-icon.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [HomeComponent,SvgIconComponent, DashboardComponent,CardStatusComponent, TasksComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports:[
    HomeComponent,SvgIconComponent,DashboardComponent,TasksComponent,CardStatusComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DashboardModule { }
