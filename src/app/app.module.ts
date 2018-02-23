import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { PosterComponent } from './poster/poster.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { UploadComponent } from './upload/upload.component';
import { HeroesComponent } from './heroes/heroes.component';

 const appRoutes: Routes = [
  {
path: 'signup', component: SignupComponent},
{ path: '', redirectTo: '/signup', pathMatch: 'full'}


];

@NgModule({
  declarations: [
    AppComponent,
    PosterComponent,
    HomeComponent,
    NavbarComponent,
    SignupComponent,
    UploadComponent,
    HeroesComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
