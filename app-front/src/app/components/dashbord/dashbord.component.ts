import { Component, OnInit, OnDestroy } from '@angular/core';
import { Purchase } from 'src/app/models/purchase.model';
import { Subscription } from 'rxjs';
import { DashboardService } from 'src/app/service/dashboard.service';
import { FilterPipe} from '../../pipe/filter.pipe';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit, OnDestroy {

  query : string = '';
  purchases : Purchase[];
  purchasesSubscription : Subscription;

  constructor(private dashboardService : DashboardService) { }

  ngOnInit() {
    this.purchasesSubscription = this.dashboardService.purchasesSubject.subscribe(
      (purchases : Purchase[])=>{
        this.purchases = purchases;
      }
    );
    this.dashboardService.getPurchase();
  }

  ngOnDestroy(){
    this.purchasesSubscription.unsubscribe();
  }

  resetFilter(){
    this.query='';
  }



}
