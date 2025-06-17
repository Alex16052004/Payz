import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { AddMoney } from './add-money/add-money';
import { Payment } from './payment/payment';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    { path: "", redirectTo:'/login', pathMatch: 'full'},
    { path: "login", component: Login},
    { path: "signup", component: Signup},
    { path: "add-money", component: AddMoney},
    { path: "payment", component: Payment},
    { path: "dashboard", component: Dashboard}
];
