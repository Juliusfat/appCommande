import { Pipe, PipeTransform } from '@angular/core';
import { Purchase } from '../models/purchase.model'; 

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(purchases: Purchase[], searchText: string) {
    return purchases.filter(purchase => purchase.produit.indexOf(searchText) !== -1);
  }
}
