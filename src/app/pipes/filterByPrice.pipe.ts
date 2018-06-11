import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByPrice' })
export class filterByPricePipe implements PipeTransform {
  transform(collection: any[], property: number): any[] {
    
    var filteredCollection = collection.filter(car => car.BigDealPrice <= property);

    return filteredCollection;

  }
}