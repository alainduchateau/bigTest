import { Pipe, PipeTransform } from '@angular/core';
import { filteringService } from "../services/filtering.service";

@Pipe({ name: 'sortByFuel' })
export class sortByFuelPipe implements PipeTransform {

  fuelProvision:any[];
  filteredCollection:any[];

  constructor(public filteringService:filteringService){
    this.fuelProvision = this.filteringService.fuelTypeProvision;
  }

  transform(collection: any[], property: string): any[] {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if (!collection) {
      return null;
    }
   // If no data in property or "All fuels" (index 0)
    if (!property || property ==="0") {
      return collection;
    } else {
      // If property, scan the fuel provision to find a matching
      this.fuelProvision .forEach(fuelType => {
        // If matching
          if(fuelType.id === Number(property)){
            // filter by the fuel reference
            this.filteredCollection = collection.filter(car => car.FuelCode === fuelType.reference);
          }
        });
      // Return the filter collection
      return this.filteredCollection;
    }
  }
}