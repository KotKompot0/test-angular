import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { ApiService } from "../api/api.service";
import { CurrentTimeForm, ICurrentTimeForm } from "./interfaces/current-time-form";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  form: CurrentTimeForm = new CurrentTimeForm("Europe/Amsterdam");
  currentTimeForm: FormGroup<ICurrentTimeForm>
  currentTime: string;
  constructor(private apiService: ApiService) { }

  onSubmit() {
    this.currentTimeForm = new FormGroup<ICurrentTimeForm>({
        timeZone: new FormControl(this.form.timeZone, Validators.required)
      }
    )
    if (this.currentTimeForm.valid){
      this.setCurrentTime(this.form.timeZone)
    }
  }

  setCurrentTime(timeZone: string){
    this.apiService.currentTime({timeZone: timeZone}).subscribe(
      response => {
            this.currentTime = response.time;
      },
      error => {
        this.currentTime = error.error
      }
    )
  }

  ngOnInit() {
    this.setCurrentTime("Europe/Amsterdam")
  }
}
