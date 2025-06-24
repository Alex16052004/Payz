import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

  @Output() loginEvent = new EventEmitter<string>();

  logout(){
    sessionStorage.removeItem("isLoggedin");
    sessionStorage.removeItem("number");
    this.send(false);
    this.router.navigate(['/login']);
  }

  send(val:any)
  {
    this.loginEvent.emit(val)
  }
}
