import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(email: string, phone: string, date: string): void {
    console.log(`Email: ${email}, Phone: ${phone}, Date: ${date}`);
  }

}
