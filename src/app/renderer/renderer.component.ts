import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BackGroundDirective } from '../appDirectives/back-ground.directive';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements OnInit, AfterViewInit {

  @ViewChild('box') box!: ElementRef;

  @ViewChild(BackGroundDirective) directive!: BackGroundDirective;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.box.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.box.nativeElement, 'padding', '2rem');
    this.renderer.addClass(this.box.nativeElement, 'class1');
    this.renderer.addClass(this.box.nativeElement, 'class2');
    var text = this.renderer.createText('This is created text from TS file with help of renderer');
    this.renderer.appendChild(this.box.nativeElement, text)
  }

  changeBackgroundClick(color: string) {
    // this.directive.changeBackgroundClick(color);
  }

}
