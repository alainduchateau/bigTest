import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortByCarType' })
export class sortByCarTypePipe implements PipeTransform {
  transform(collection: any[], carType: string): any[] {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if (!collection || !carType) {
      return null;
    }
    switch (carType) {
      case "New":
        var filteredCollection = collection.filter(car => !car.FirstImmatDate);
        break;
      case "secondHand":
        var filteredCollection = collection.filter(car => car.FirstImmatDate);
        break;
      default:
        var filteredCollection = collection;
    }
    return filteredCollection;
  }
}