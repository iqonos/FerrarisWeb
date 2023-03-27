import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  sendEmail(e:Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_jd1x3qu',
        'ZURdf0lRO4v_QFvHE',
        'ZURdf0lRO4v_QFvHE'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

}
