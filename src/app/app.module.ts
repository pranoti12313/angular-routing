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
import { AppRoutingMoudle } from "./app.routing.module";
import { FacultyDetailsComponent } from "./faculty-details/faculty-details.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AuthGuardService } from "./shared/guard/auth-guard.service";
import { LogInService } from "./shared/services/log-in.service";
import { LoginComponent } from "./login/login.component";
import { AuthChildGuardService } from "./shared/guard/auth-child-guard.service";


@NgModule({
    declarations : [ AppComponent,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        ServiceComponent,
        ContactComponent,
        FacultyDetailsComponent,
        NotfoundComponent,
        LoginComponent
       
    ],
    imports :[
        BrowserModule,
        HttpClientModule,
        NoopAnimationsModule,
        AppRoutingMoudle 
    ],
    providers :  [
        LogInService,
        AuthGuardService,
        AuthChildGuardService
    ],
    bootstrap : [AppComponent],
})
export class AppModule {}