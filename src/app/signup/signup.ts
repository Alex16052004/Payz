import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice, signupmodel } from '../myservice';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  constructor(private myservice:Myservice, private router:Router){}

  signupModel = new signupmodel()
  Data: any

  onSubmit(form: signupmodel) {
    this.myservice.Signup(form).subscribe(data=>{
      this.Data = data.result
      alert(data.response);
    })
  }
}
