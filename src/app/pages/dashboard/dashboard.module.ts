import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, X } from 'lucide-angular';
import { ActionBtnComponent } from 'src/app/components/buttons/action-btn/action-btn.component';
import { CardStatusComponent } from 'src/app/components/card-status/card-status.component';
import { NotificationComponent } from 'src/app/components/notification/notification.component';
import { SvgIconComponent } from 'src/app/components/svg-icon/svg-icon.component';
import { ToDoComponent } from 'src/app/components/to-do/to-do.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';



@NgModule({
  declarations: [
    HomeComponent,
    SvgIconComponent, 
    DashboardComponent,
    CardStatusComponent, 
    TasksComponent,
    ActionBtnComponent,
    ToDoComponent,
    NotificationComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule.pick({X}),
    DashboardRoutingModule,
  ],
  exports:[
    HomeComponent,SvgIconComponent,DashboardComponent,TasksComponent,CardStatusComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DashboardModule { }
