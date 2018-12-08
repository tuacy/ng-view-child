import {Component, OnInit} from '@angular/core';
import {ChildService} from './child.service';
import {StringTokenService} from './string-token-service';

@Component({
  selector: 'app-child',
  template: `
    <h1>自定义的一个子组件</h1>
  `,
  styleUrls: ['./child.component.less'],
  providers: [
    ChildService,
    {provide: 'tokenService', useClass: StringTokenService}
  ]
})
export class ChildComponent implements OnInit {

  constructor(public childService: ChildService) {
  }

  ngOnInit() {
  }

}
