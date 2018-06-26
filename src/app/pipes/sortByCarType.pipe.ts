import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortByCarType' })
export class sortByCarTypePipe implements PipeTransform {
  transform(collection: any[], carType): any[] {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if (!collection || !carType) {
      return null;
    }
    
    switch (carType) {
      case "1":
      console.log("par ici "+carType);
        var filteredCollection = collection.filter(car => !car.FirstImmatDate);
        break;
      case "2":
      console.log("par ici "+carType);
        var filteredCollection = collection.filter(car => car.FirstImmatDate);
        break;
      default:
        var filteredCollection = collection;
    }
    return filteredCollection;
  }
}