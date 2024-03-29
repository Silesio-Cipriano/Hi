import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { NormalInputComponent } from './components/inputs/normal-input/normal-input.component';
import { DashboardRoutingModule } from './pages/dashboard/dashboard-routing.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { PagesModule } from './pages/pages.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    NormalInputComponent,
    PrimaryButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    PagesModule,
    DashboardRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
