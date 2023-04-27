import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interface/userInterface';

@Pipe({
  name: 'userFilter',
  pure: false,
})
export class UserFilterPipe implements PipeTransform {
  transform(value: User[], key?: boolean): User[] {
    if (key === undefined) {
      return value;
    }
    return value.filter((user) => user.isDeleted === key);
  }
}
