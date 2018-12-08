import {Injectable} from '@angular/core';

@Injectable()
export class ChildService {

  public value: string;

  constructor() {
    this.value = 'Service 变量';
  }
}
