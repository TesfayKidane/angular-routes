import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {DbService} from '../service/db.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MyguardService implements CanActivate {
  constructor(public db: DbService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean
    | Observable<boolean>
    | Promise<boolean> {
    if (this.db.getDataById(route.params.id) === null)
      return false;
    return true;
  }




}
