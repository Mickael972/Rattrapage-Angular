import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent  implements OnInit{
  menus = [
    { name: 'Pizza', price: 23, description: 'Fromage, sauce tomate, pepperoni', image: 'assets/pizza.jpg', desserts: 'Tarte au Pomme', starters: 'Salade' },
    { name: 'Pates', price: 28, description: 'Pate à la sauce tomate avec des boulettes de viande haché', image: 'assets/pasta.jpg', desserts: 'Tiramisu', starters: 'Salade' },
    { name: 'Salades', price: 16, description: 'Laitue avec poulets, tomates et parmesan', image: 'assets/salad.jpg', desserts: 'Flan', starters: 'bruschetta' },
  ];

  selectedMenu: any;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onSelect(menu: any): void {
    this.selectedMenu = menu;
  }
}
