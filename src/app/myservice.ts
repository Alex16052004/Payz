import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  constructor(private http: HttpClient) {}

  Signup(data: signupmodel): Observable<any> {
    return this.http.post<any>(
      'https://skytm-api.azurewebsites.net/api/Auth/signup',
      data
    );
  }

  Login(data: loginmodel): Observable<any> {
    return this.http.post<any>(
      'https://skytm-api.azurewebsites.net/api/Auth/login',
      data
    );
  }

  addMoney(data: Add): Observable<any> {
    return this.http.post<any>(
      'https://skytm-api.azurewebsites.net/api/Wallet/add',
      data
    );
  }

  Payment(data: paymentModel): Observable<any> {
    return this.http.post<any>(
      'https://skytm-api.azurewebsites.net/api/Transactions/pay',
      data
    );
  }

  balance(phoneNumber:string): Observable<any> {
    return this.http.get<any>(`https://skytm-api.azurewebsites.net/api/Users/balance?phoneNumber=${phoneNumber}`);
  }

  getTransactions(phoneNumber: string): Observable<TransactionResponse> {
    return this.http.get<TransactionResponse>(`https://skytm-api.azurewebsites.net/api/Transactions/history?phoneNumber=${phoneNumber}`);
  }

  getUserlist():Observable<any> {
    return this.http.get<any>('https://skytm-api.azurewebsites.net/api/Users/basic-list')
  }
}
export class signupmodel {
  username!: string;
  email!: string;
  phoneNumber!: string;
  gender!: string;
  password!: string;
}

export class loginmodel {
  phoneNumber!: string;
  password!: string;
}

export class Add {
  phoneNumber!: string;
  amount!:number;
}

export class paymentModel {;
  receiverPhoneNumber!: string;
  amount!: number;
  phoneNumber: any;
}
 
export interface Transaction {
  transactionId: number;
  userId: number;
  receiverId: number;
  receiverName: string;
  receiverPhoneNumber: string;
  transactionType: string;
  transactionDate: string;
  initialAmount: number;
  transferAmount: number;
}

export interface TransactionResponse {
  result: Transaction[];
  response: string;
  responseCode: string;
}