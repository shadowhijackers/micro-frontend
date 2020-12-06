import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';


const NAV_DATAS = [
  {
    name: 'My Profile',
    routerLink: '.',
    icon: 'home'
  },
  {
    name: 'Buyer (Clients) Profile',
    routerLink: '.',
    icon: 'people'
  },
  {
    name: 'My Service Profile',
    routerLink: '.',
    icon: 'person'
  },
  {
    name: 'My Team',
    routerLink: '.',
    icon: 'person'
  },
  {
    name: 'My Profile',
    routerLink: '.',
    icon: 'home'
  },
  {
    name: 'Buyer Profile',
    routerLink: '.',
    icon: 'people'
  },
  {
    name: 'My Service Profile',
    routerLink: '.',
    icon: 'person'
  },
  {
    name: 'My Team',
    routerLink: '.',
    icon: 'person'
  },
];

@Component({
  selector: 'thx-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  navDatas = NAV_DATAS;
  @Input() isMenuOpen: any = false;

  constructor() { }

  ngOnInit() {
  }

}
