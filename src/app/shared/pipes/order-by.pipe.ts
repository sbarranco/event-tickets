import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true,
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], sortBy: string): any[] {
    if (!array || !sortBy) {
      return array;
    }

    return array.sort((a, b) => {
      const dateA = new Date(a[sortBy]).getTime();
      const dateB = new Date(b[sortBy]).getTime();

      return dateA - dateB;
    });
  }
}
