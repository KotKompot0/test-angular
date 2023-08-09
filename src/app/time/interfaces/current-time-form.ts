import { FormControl } from "@angular/forms";

export interface ICurrentTimeForm {
  timeZone: FormControl<string|null>
}

export class CurrentTimeForm {
  timeZone: string;

  constructor(timeZone: string) {
    this.timeZone = timeZone;
  }
}
