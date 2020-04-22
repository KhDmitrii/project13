import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project13';
  personForm: FormGroup;
  disabledForms = false;

  constructor() {}

  ngOnInit() {
    this.personForm = new FormGroup({
      // firstName: new FormControl()
      // firstName: new FormControl('Чем инициализируется')
      firstName: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      lastName: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      middleName: new FormControl({ value: '', disabled: this.disabledForms }),
      seriaP: new FormControl({ value: '0000', disabled: this.disabledForms }, [
        Validators.maxLength(4),
        Validators.minLength(4),
      ]),
      numberP: new FormControl(
        { value: '000000', disabled: this.disabledForms },
        [Validators.maxLength(6), Validators.minLength(6)]
      ),
      inn: new FormControl(
        { value: '00000000000000', disabled: this.disabledForms },
        [Validators.maxLength(14), Validators.minLength(14)]
      ),
      email: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.email,
      ]),
      phone: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
    });
    // this.personForm.patchValue({
    //   firstName: 'значение'
    // });
    console.log(this.personForm.value);
  }
}
