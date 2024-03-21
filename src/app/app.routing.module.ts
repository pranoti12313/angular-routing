import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServiceComponent } from "./service/service.component";
import { ContactComponent } from "./contact/contact.component";
import { RouterModule, Routes } from "@angular/router";
import { FacultyDetailsComponent } from "./faculty-details/faculty-details.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./shared/guard/auth-guard.service";
import { AuthChildGuardService } from "./shared/guard/auth-child-guard.service";
const routs : Routes = [
    {path : '', component : HomeComponent},
    {path : 'service', component :ServiceComponent },
    {path : 'about', component : AboutComponent},
    // {path : 'contact', canActivate : [AuthGuardService], component : ContactComponent, children : [
    //     {path : ':facName/:facContact', component:FacultyDetailsComponent}
    // ]},
    {path : 'contact', canActivateChild : [AuthChildGuardService], component : ContactComponent, children : [
        {path : ':facName/:facContact', component:FacultyDetailsComponent}
    ]},
    {path : 'login', component : LoginComponent},
    {path : 'not-found', component : NotfoundComponent},
    {path : '**', redirectTo : '/not-found'} 

];

@NgModule({
   
    imports :[
        BrowserModule,
        HttpClientModule,
        NoopAnimationsModule,
        RouterModule.forRoot(routs)
    ],
    exports :[
        RouterModule
    ]
   
})
export class AppRoutingMoudle {}