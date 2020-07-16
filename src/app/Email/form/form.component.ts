import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Email } from '../email.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit(): void { }

  public para: string;

  public assunto: string;

  public corpo: string;

  postEmail(): any {

    let obj = {
      para: this.para,
      assunto: this.assunto,
      corpo: this.corpo
    }

    this.emailService.postEmail(obj)
      .subscribe(
        response => {
          console.log(response)
        },
        err => {
          console.log(err)
        }
      );
  }

}
