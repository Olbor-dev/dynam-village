import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], order: string = 'asc'): any[] {
    if (!products || products.length === 0) return [];
    return products.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
  }

}
