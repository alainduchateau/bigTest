import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByPrice' })
export class filterByPricePipe implements PipeTransform {
  transform(collection: any[], property): any[] {
    if (collection === null ||  property === null) {
      return collection
    } else {
      //Apply filter collection by property
      var filteredCollection = collection.filter(car => car.BigDealPrice <= +property);
      return filteredCollection;
    }
  }
}