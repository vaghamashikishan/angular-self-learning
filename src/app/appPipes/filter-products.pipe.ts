import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter((product: any) => {
      return (
        product.price <= searchTerm ||
        product.id == searchTerm ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    });
  }
}
