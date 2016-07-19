import {Directive, ElementRef, Renderer, Input} from '@angular/core';
import {Http} from '@angular/http';

@Directive({
  selector: '[lazy]',
  host: {
    '(click)': 'load()'
  }
})
export class Lazy {

  hasLoad: boolean = false;
  root: string = 'http://127.0.0.1:9000';

  @Input('lazy') url: string = '';

  constructor(
    private element: ElementRef,
    private renderer: Renderer,
    private http: Http
  ) { }

  load() {
    if (!this.hasLoad) {
      this.http.get(this.root + this.url)
        .map(res => res.json()).subscribe((data) => {
          this.setInner(data);
        });
    }
  }

  setInner(content) {
    this.renderer.setElementProperty(
      this.element.nativeElement, 'innerHTML', content
    );
    this.hasLoad = true;
  }
}
