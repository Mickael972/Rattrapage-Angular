import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent  implements OnInit{
  menus = [
    { name: 'Pizza', price: 10, description: 'Cheese, tomato sauce, and pepperoni', image: 'assets/pizza.jpg' },
    { name: 'Pasta', price: 12, description: 'Pasta with tomato sauce and meatballs', image: 'assets/pasta.jpg' },
    { name: 'Salad', price: 8, description: 'Lettuce, tomato, and ranch dressing', image: 'assets/salad.jpg' },
  ];

  selectedMenu: any;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onSelect(menu: any): void {
    this.selectedMenu = menu;
  }
}
