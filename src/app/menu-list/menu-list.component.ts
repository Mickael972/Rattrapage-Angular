import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent  implements OnInit{
  menus = [
    { name: 'Pizza', price: 10, description: 'Fromage, sauce tomate, pepperoni', image: 'assets/pizza.jpg', desserts: 'Tarte au Pomme', starters: 'Salade' },
    { name: 'Pasta', price: 12, description: 'Pate à la sauce tomate avec des boulettes de viande haché', image: 'assets/pasta.jpg', desserts: 'Tiramisu', starters: 'Salade' },
    { name: 'Salad', price: 8, description: 'Laitue avec poulets, tomates et parmesan', image: 'assets/salad.jpg', desserts: 'Flan', starters: 'bruschetta' },
  ];

  selectedMenu: any;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onSelect(menu: any): void {
    this.selectedMenu = menu;
  }
}
