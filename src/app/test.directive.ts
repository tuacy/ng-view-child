import {Directive, ElementRef} from '@angular/core';

/**
 * 指令，测试使用,这里使用了exportAs，就是为了方便我们精确的找到指令
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
