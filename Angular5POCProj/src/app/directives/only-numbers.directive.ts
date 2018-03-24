import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  private regex: RegExp = new RegExp(/[0-9]+/g);

  constructor(private el: ElementRef) { }

 @HostListener('keydown', [ '$event' ])
 onKeyDown(event: KeyboardEvent) {
   // Do not use event.keycode this is deprecated.
   // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
   const current: string = this.el.nativeElement.value;
   console.log('value of current:-' + current);
   // We need this because the current value on the DOM element
   // is not yet updated with the value from this event
   const next: string = current.concat(event.key);
   console.log('value of next:-' + next);
   if (next && !String(next).match(this.regex)) {
       event.preventDefault();
    }

   //For the following code backspace doesn't work
  // if (!event.key.match(this.regex)) {
      // event.preventDefault();
  // }

  }
}
