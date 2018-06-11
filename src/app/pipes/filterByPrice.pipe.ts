import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByPrice' })
export class filterByPricePipe implements PipeTransform {
  transform(collection: any[], property: number): any[] {
    // prevents the application from breaking if the array of objects doesn't exist yet
    return collection;

  }
}