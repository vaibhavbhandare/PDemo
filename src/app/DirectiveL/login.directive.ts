import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[change]'
})

export class LoginDirective {

    constructor(private e1: ElementRef) {
        e1.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('green');
    }

    highlight(color) {
        this.e1.nativeElement.style.backgroundColor = color;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

}
