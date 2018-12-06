import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Purchase } from 'src/app/models/purchase.model';
import { DashboardService } from 'src/app/service/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-purchase',
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.scss']
})
export class CreatePurchaseComponent implements OnInit {

  purchaseForm : FormGroup;
  purchase : Purchase;

  constructor( private purchaseService : DashboardService ,private formBuider : FormBuilder, private router : Router) { }

  ngOnInit() {
    this.purchaseForm = this.formBuider.group({
      produit : ['', [Validators.required, Validators.minLength(3)]],
      quantite : ['', Validators.required],
      motif : ['', Validators.required],
      lien : ['', Validators.required]
    });
  }

  onSavePurchase(){
    const date = new Date();
    const dateJour :string  = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
    this.purchase = {... this.purchaseForm.value, 
      idUser : 2, 
      commentaire_acheteur:'',
      date_validation:'',
      etat : "en attente", 
      date_creation : dateJour};
    console.log(this.purchase);
    this.purchaseService.addPurchase(this.purchase).subscribe(()=>{
      this.purchaseForm.reset();
      this.router.navigate(['/dashboard']);
    })
    this.purchaseForm.reset();

  }

}
