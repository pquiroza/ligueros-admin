import { Component } from '@angular/core';
import { MENU_ITEMS } from './admin-menu';
import * as firebase from 'firebase';


@Component({
  selector: 'ngx-admin',
  styleUrls: ['admin.component.scss'],
  template: `
    <ngx-one-column-layout>
    <nb-menu [items]="menu"></nb-menu>

      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class AdminComponent {

  menu = MENU_ITEMS;



constructor(){

}









}
