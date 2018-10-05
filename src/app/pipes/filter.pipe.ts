import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search?: any): any {
    if(search=='')
    return value;

    return value.filter(state=>{
      if(state.value.name.toLowerCase().indexOf(search.toLowerCase())!=-1) return true
    })
  }

}
