import { Injectable } from '@angular/core';
import { Purchase } from '../models/purchase.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  purchases: Purchase[] = [];
  purchasesSubject = new Subject<Purchase[]>();

  options = { headers : new HttpHeaders({ 
    'content-Type' : 'application/json'
  })};

   constructor(private http: HttpClient) { }

  emitPurchase() {
    this.purchasesSubject.next(this.purchases);
  }

  getPurchase() {
    this.http.get<Purchase[]>('http://localhost:4000/allDemand')
      .subscribe(
        (response) => {
          console.log(response);
          this.purchases = response;
          this.emitPurchase();
        }
      )
  }
  addPurchase(purchase: Purchase) {
    return this.http.post<Purchase[]>('http://localhost:4000/form',  purchase, this.options  ); //, { responseType  : 'json' }
  }
}
