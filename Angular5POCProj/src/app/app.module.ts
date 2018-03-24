import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HoaComponent } from './hoa/hoa.component';
import { BusinessComponent } from './business/business.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { UserServiceService } from './service/user-service.service';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { CapializeFirstCharPipe } from './pipes/capialize-first-char.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HoaComponent,
    BusinessComponent,
    PagenotfoundComponent,
    RegisterComponent,
    OnlyNumbersDirective,
    CapializeFirstCharPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
