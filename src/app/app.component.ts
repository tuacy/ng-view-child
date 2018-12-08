import {AfterViewInit, Component, ElementRef, QueryList, TemplateRef, ViewChild, ViewChildren, ViewRef} from '@angular/core';
import {ChildComponent} from './child.component';
import {TestDirective} from './test.directive';
import {ChildService} from './child.service';
import {StringTokenService} from './string-token-service';

@Component({
  selector: 'app-root',
  template: `
    <!-- view child dom -->
    <div #domLabel>
      abc
      <div #domLabel>cba</div>
    </div>
    <ng-template #domTemplate>
      <div>默认我是不会显示的</div>
    </ng-template>
    <!-- view child for Component -->
    <app-child #appChild></app-child>
    <app-child></app-child>
    <!-- view child for Directive -->
    <input appTestDirective #divTestDirective="appTest"/>
    <br/>
    <input appTestDirective/>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  /**** DOM节点对应的 ****/
    // DOM节点只能使用模板应用变量来找到
  @ViewChild('domLabel') domLabelChild: ElementRef; // 找到第一个符合条件的节点
  @ViewChildren('domLabel') domLabelChildList: QueryList<ElementRef>; // 找到所有符合条件的节点
  @ViewChild('domTemplate') domTemplate: TemplateRef<any>; // 查找嵌入元素
  /**** 组件 ****/
  @ViewChild('appChild') componentChild: ChildComponent; // 找到一个子组件
  @ViewChild('appChild', {read: ElementRef}) componentChildElement: ElementRef; // 直接找到子组件的DOM
  // 使用Type找到所有的ChildComponent
  @ViewChildren(ChildComponent) componentChildList: QueryList<ChildComponent>; //
  /**** 指令Directive ****/
  @ViewChildren('divTestDirective') testDirective: TestDirective; //
  @ViewChildren(TestDirective) testDirectiveList: QueryList<TestDirective>; //
  /**** provider ****/
  @ViewChild(ChildService) childService: ChildService;
  @ViewChild('tokenService') tokenService: StringTokenService;

  ngAfterViewInit(): void {
    // DOM节点
    console.log(this.domLabelChild.nativeElement);
    if (this.domLabelChildList != null && this.domLabelChildList.length !== 0) {
      this.domLabelChildList.forEach(elementRef => console.log(elementRef.nativeElement));
    }
    // 组件
    // 指令
    console.log(this.childService.value);
    console.log(this.tokenService.value);
  }
}
