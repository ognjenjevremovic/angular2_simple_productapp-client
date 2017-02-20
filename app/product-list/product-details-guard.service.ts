import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductDetailsGuard implements CanActivate {

    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id: number = +route.params['id'];
        if (isNaN(id) || id < 1) {
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }
}