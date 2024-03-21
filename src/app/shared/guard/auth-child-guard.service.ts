import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LogInService } from "../services/log-in.service";
import { Injectable } from "@angular/core";
@Injectable()
// export class AuthChildGuardService implements CanActivateChild{
//    constructor(private loginServ: LogInService, private router: Router){}
//     canActivateChild(activeRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//         return this.loginServ.isLoggedIn().then((value : boolean)=>{
//             if(value){
//                 return true;
//             }else{
//                 console.log('please login to access this part!');
//                 this.router.navigate(['login']);
//                 return false;
//             }
//          })
//     }
// }

export class AuthChildGuardService{
      constructor(private loginServ: LogInService, private router: Router){}
      canActivateChild(activeRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
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