import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { CreatePurchaseComponent } from './components/create-purchase/create-purchase.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardService } from './service/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    CreatePurchaseComponent,
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
