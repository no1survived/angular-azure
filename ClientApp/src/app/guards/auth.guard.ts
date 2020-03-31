import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from "@angular/router";
import { AuthService } from "../sevices/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router){

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.loggedIn) {
            return true;
        } else {
            this.router.navigate(["/"]);
            return false;
        }
    }

}