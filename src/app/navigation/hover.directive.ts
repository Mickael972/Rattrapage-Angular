import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  @Input('appHover')
  color = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseover')
  onMouseOver(event: MouseEvent): void {
    this.el.nativeElement.style =
      'border: 2px solid black; padding: 50px; transition: border 0.3s ease, padding 0.3s ease; border-radius: 10px;';
  }

  @HostListener('mouseout')
  onMouseOut(event: MouseEvent): void {
    this.el.nativeElement.style =
      'transition: border 0.3s ease, padding 0.3s ease';
  }
}
