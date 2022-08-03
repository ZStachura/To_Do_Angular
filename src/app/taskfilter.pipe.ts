import { Pipe, PipeTransform } from '@angular/core';
import { Kanban } from './Kanban';

@Pipe({
  name: 'taskfilter',
  pure: false
})
export class TaskfilterPipe implements PipeTransform {

  transform(input: Kanban[],ifdone:boolean): Kanban[] {
    return input.filter(item=>item.done==ifdone)
    }
}
