import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { loginmodel, Myservice } from '../myservice';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private myservice:Myservice, private router:Router){}

  loginModel = new loginmodel()
  Data: any

  ngOnInit(): void {
    if(Boolean( sessionStorage.getItem("isLoggedin")))
    {
      this.router.navigate(['/dashboard']);
    }
  }

  @Output() loginEvent = new EventEmitter<string>();

  send(val:any) {
    this.loginEvent.emit(val);
  }

  onSubmit(form: loginmodel) {
    this.myservice.Login(form).subscribe(data=>{
      this.Data = data.result
      alert(data.response);
      if(data.response=='Login Successfully!!')
      {
        this.send(true);
        sessionStorage.setItem("isLoggedin","true")
        sessionStorage.setItem("number",this.Data.phoneNumber)
        this.router.navigate(['/dashboard']);
      }
      else
      {
        this.send(false);
      }
      sessionStorage.setItem("number",this.Data.phoneNumber)
    })
  }
}
