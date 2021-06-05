// import { AbstractControl, ValidatorFn } from '@angular/forms';

// @Directive({
//     selector: '[appWhitespaceValidator]',
//     providers: [{ provide: NG_VALIDATORS, useExisting: WhitespaceValidatorDirective , multi: true}]
// })
// export class WhitespaceValidatorDirective implements Validator {

//     validate(control: AbstractControl): { [key: string]: any } {
//         const isValid      = !control.value || (!control.value.startsWith(' ') && !control.value.endsWith(' '));
//         return isValid ? null : { 'whitespace': true };
//     }
// }

import { Directive } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
} from "@angular/forms";

@Directive({
  selector: "[appOnlyWords]",
  // providers: [{ provide: NG_VALIDATORS,  multi: true}]
})
export class OnlyWordsDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): { [key: string]: any } {
    const isValid = !control.value;
    return { key: "test" };
  }
}
