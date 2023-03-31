import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackGround]'
})
export class BackGroundDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement, 'margin', '2rem 0');
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'grey');
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'yellow');
  }

  // changeBackgroundClick(color: string) {
  //   this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  // }

  @HostBinding('style.color') color: string = '';
  @HostListener('click') myHover() {
    console.log('Hovering...');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'grey');
    this.color = 'pink';
  }

}
