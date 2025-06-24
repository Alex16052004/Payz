import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Add, Myservice } from '../myservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-money',
  providers: [Myservice],
  imports: [CommonModule, FormsModule],
  templateUrl: './add-money.html',
  styleUrl: './add-money.css',
})
export class AddMoney {
  constructor(private myservice: Myservice,private router: Router) {}

  userPhonenumber: any;
  addMoneyModel = new Add();

  onAddMoney(form: Add) {
    this.userPhonenumber = sessionStorage.getItem('number');
    this.addMoneyModel.phoneNumber = this.userPhonenumber;
    this.myservice.addMoney(this.addMoneyModel).subscribe((data) => {
      alert(data.response);
      this.router.navigate(['/sidebar']);
    });
  }
}
