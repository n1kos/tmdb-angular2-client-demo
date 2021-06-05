import { AbstractControl, ValidatorFn } from "@angular/forms";

export function alphaMin3(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    control.value?.match(/^([a-z]+){3}$/i) ? null : { wrong: control.value };
}
