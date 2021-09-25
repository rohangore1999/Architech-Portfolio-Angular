import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SenderService } from 'src/app/Service/sender.service';

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

  constructor(private _snackBar: MatSnackBar, private sender:SenderService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.name)
    console.log(this.email)
    console.log(this.comment)
    console.log(this.phone)

    this.sender.send_post_request(
      {
        "name": this.name,
        "email": this.email,
        "comment": this.comment,
        "phone": this.phone
      }).subscribe()
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
