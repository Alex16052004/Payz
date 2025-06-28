import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  constructor(private http: HttpClient) {}

  transactionUpdated = new Subject<void>();

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

  balance(phoneNumber: string): Observable<any> {
    return this.http.get<any>(
      `https://skytm-api.azurewebsites.net/api/Users/balance?phoneNumber=${phoneNumber}`
    );
  }

  getTransactions(phoneNumber: string): Observable<TransactionResponse> {
    return this.http.get<TransactionResponse>(
      `https://skytm-api.azurewebsites.net/api/Transactions/history?phoneNumber=${phoneNumber}`
    );
  }

  getUserlist(): Observable<any> {
    return this.http.get<any>(
      'https://skytm-api.azurewebsites.net/api/Users/basic-list'
    );
  }

  DeleteTransactionById(tid: number): Observable<any> {
    return this.http.delete<any>(
      `https://skytm-api.azurewebsites.net/api/Transactions/DeleteTransectionById?tid=${tid}`
    );
  }

  DeleteTransaction(phoneNumber: string): Observable<any> {
    return this.http.delete<any>(
      `https://skytm-api.azurewebsites.net/api/Transactions/history?phoneNumber=${phoneNumber}`
    );
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
  amount!: number;
}

export class paymentModel {
  senderPhoneNumber!: string;
  receiverPhoneNumber!: string;
  amount!: 0;
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
