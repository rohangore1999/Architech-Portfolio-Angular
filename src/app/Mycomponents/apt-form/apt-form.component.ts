import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-apt-form',
  templateUrl: './apt-form.component.html',
  styleUrls: ['./apt-form.component.css']
})
export class AptFormComponent implements OnInit {
  name: string;
  email;
  comment: string;
  phone: string;

  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit() {
    console.log(this.name)
    console.log(this.email)
    console.log(this.comment)
    console.log(this.phone)
  }

}
