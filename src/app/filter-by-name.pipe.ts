import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: any[], searchText: string): any[] {
    if (!products || !searchText) return products;
    return products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
  }

}
