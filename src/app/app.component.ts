import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  exampleFormGroup: FormGroup;
  title = 'app1';
  constructor(fb: FormBuilder) {
    this.exampleFormGroup = fb.group(
      {
        a: [],
        b: []
      }
    )
  }

  a() {
    console.log(this.exampleFormGroup.value)
  }
}
