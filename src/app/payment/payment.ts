import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice, paymentModel } from '../myservice';

@Component({
  selector: 'app-payment',
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
  userlist: any;
  constructor(private myservice: Myservice) {}

  ngOnInit(): void {
    this.userPhonenumber = sessionStorage.getItem("number");
    this.getallUser();
  }

  userPhonenumber: any;
  payment = new paymentModel();

  onPayment(form: paymentModel) {
    this.userPhonenumber = sessionStorage.getItem('number');
    this.payment.phoneNumber = this.userPhonenumber;
    this.myservice.Payment(this.payment).subscribe((data) => {
      alert(data.response);
    });
  }

    getallUser() {
    this.myservice.getUserlist().subscribe(data=>{
      this.userlist = data.result
    })
  }

}
