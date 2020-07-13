import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component'
import { DataService } from './login/data.service';
import { ProUpdaterComponent } from './products/pro-updater/pro-updater.component';
import { HeaderComponent } from './header/header.component';
import { SignUpFormComponent } from './signup/signupform.component';
import { RoutingHeaderComponent } from './routing-header/routing-header.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './users/user.service';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';
import { AgGridModule } from 'ag-grid-angular';

import { AgGridTreeComponent } from './ag-grid-tree/ag-grid-tree.component';
import { StartUpComponent } from './startup-metrics-component/StartUpComponent.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
    LoginComponent,
    InventoryComponent,
    ProUpdaterComponent,
    HeaderComponent,
    SignUpFormComponent,
    RoutingHeaderComponent,
    UsersComponent,
    PageNotFoundComponent,
    UserdetailsComponent,
    StartUpComponent,
    AgGridTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgGridModule.withComponents([StartUpComponent,AgGridTreeComponent])
  ],
  entryComponents:[SignUpFormComponent],
 providers:[UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
