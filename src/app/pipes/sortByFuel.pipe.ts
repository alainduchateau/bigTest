import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortByFuel' })
export class sortByFuelPipe implements PipeTransform {
  transform(collection: any[], property: string): any[] {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if (!collection) {
      return null;
    }

    if (!property || property ==="all") {
      return collection;
    } else {
      var filteredCollection = collection.filter(car => car.FuelCode === property);
      return filteredCollection;
    }

  }
}