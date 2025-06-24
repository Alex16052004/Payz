import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { AddMoney } from './add-money/add-money';
import { Payment } from './payment/payment';
import { Sidebar } from "./sidebar/sidebar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, Signup, Login, AddMoney, Payment, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  constructor(private router: Router) {}

  protected title = 'payz';
  isLoggedin=false;
  ngOnInit(): void {
    this.isLoggedin = Boolean( sessionStorage.getItem("isLoggedin"))
  }

  received(event: any) {
    this.isLoggedin = event;
  }



}
