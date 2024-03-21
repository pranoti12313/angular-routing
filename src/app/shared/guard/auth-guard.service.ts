import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LogInService } from "../services/log-in.service";


@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private loginServ : LogInService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        // console.log('trying...');
        // return true 
 return this.loginServ.isLoggedIn().then((value : boolean)=>{
    if(value){
        return true;
    }else{
        console.log('please login to access this part!');
        this.router.navigate(['login']);
        return false;
    }
 })
    }
}