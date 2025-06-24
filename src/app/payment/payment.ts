import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice, paymentModel, Transaction } from '../myservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [CommonModule, FormsModule],
  providers:[Myservice],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
  userlist: any;
  constructor(private myservice: Myservice, private router: Router) { }

  ngOnInit(): void {
    this.userPhonenumber = sessionStorage.getItem("number");
    this.getBalance();
    this.getallUser();
    this.loadTransactions();
  }

  userPhonenumber: any;
  payment = new paymentModel();
  currentBalance: string = '';
  transactions: Transaction[] = [];

  getBalance() {
    this.myservice.balance(this.userPhonenumber).subscribe(data => {
      this.currentBalance = data.result.amount;
    })
  }

  loadTransactions() {
    this.myservice.getTransactions(this.userPhonenumber).subscribe(data => {
      this.transactions = data.result;
    })
  }

  onPayment(form: paymentModel) {
    this.userPhonenumber = sessionStorage.getItem('number');
    this.payment.senderPhoneNumber = this.userPhonenumber;
    this.myservice.Payment(form).subscribe((data) => {
      alert(data.response);
      this.router.navigate(['/dashboard']);
    });
  }

  getallUser() {
    this.myservice.getUserlist().subscribe(data => {
      this.userlist = data.result
    })
  }

}
