import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Message } from 'src/app/models/message';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message: Message = new Message();
  loading: boolean = false;
  sent: boolean = false;
  failure: boolean = false;
  progressValue: number = 0;
  responseMessage?: string;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.validarFormulario()) {
      this.loading = true;
      interval(200).subscribe(value => {
        if (this.loading) {
          this.progressValue = this.progressValue < 100
            ? this.progressValue += (value * 2)
            : 0;
        } else {
          this.progressValue = 0;
          this.loading = false;
        }
      });
      this.emailService.sendEmail(this.message).subscribe(response => {
        this.loading = false;
        if (response.statusCode === 200) {
          this.sent = true;
          this.responseMessage = response.responseMessage;
        } else {
          this.failure = true;
          this.responseMessage = "No se pudo enviar el mensaje, disculpas";
        }
        interval(3500).subscribe(_ => {
          this.sent = false;
          this.message = new Message();
        });
      });
    } else {
      this.failure = true;
      this.responseMessage = "Debe completar todos los campos";
      interval(3500).subscribe(_ => {
        this.failure = false;
      });
    }

  }
  validarFormulario(): boolean {
    return this.message.from !== undefined && this.message.emailFrom !== undefined
      && this.message.subject !== undefined && this.message.body !== undefined;
  }
}
