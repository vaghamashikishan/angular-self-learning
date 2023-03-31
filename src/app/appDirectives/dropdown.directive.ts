import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef) { }

  @HostBinding('class.active') activeClass: boolean = false;
  @HostListener('click') dropDownEffect() {
    this.activeClass = !this.activeClass;
  }
}
