import {Directive, ElementRef} from '@angular/core';

/**
 * 指令，测试使用
 */
@Directive({
  selector: '[appTestDirective]',
  exportAs: 'appTest'
})
export class TestDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.value = '我添加了指令';
  }

}
