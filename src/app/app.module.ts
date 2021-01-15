import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LogComponent } from './component/log/log.component';
import { LogFormComponent } from './component/log-form/log-form.component';
import {LogService} from './services/log.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
