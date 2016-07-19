import {Directive, ElementRef, EventEmitter, Renderer, Inject} from '@angular/core';

@Directive({
  selector: '[highlight]',
  inputs: ['message'],
  host: {
    '(mouseenter)': 'onmouseEnter()',
    '(mouseleave)': 'onmouseLeave()',
    '(click)': 'onClick($event)'
  }
})
export class Highlight {

  message: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer
  ) { }

  onClick($event) {
    alert(this.message);
  }

  onmouseEnter() {
    this.color('#f00');
  }

  onmouseLeave() {
    this.color();
  }

  private color(color: string = '') {
    this.renderer.setElementStyle(this.element.nativeElement, 'color', color);
  }
}
