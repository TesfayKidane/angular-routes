import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import {DbService} from './service/db.service';
import { DetailComponent } from './detail/detail.component';
import {MyguardService} from './Guard/myguard.service';
const MY_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'students', component: StudentComponent},
  {path: 'profile/:id', component: DetailComponent, canActivate: [MyguardService]},
  {path: '**', redirectTo: '/' }
  ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [DbService, MyguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
