import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimOutletName',
  standalone: true
})
export class TrimOutletNamePipe implements PipeTransform {

  transform(title: string, outletName: string): unknown {
    return title.replace(` - ${outletName}`, '');
  }

}
