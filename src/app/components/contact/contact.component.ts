import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
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
      try {
        this.loading = true;
        setInterval(() => {
          if (this.loading) {
            this.progressValue = this.progressValue < 100
              ? this.progressValue += 10
              : 0;
          } else {
            this.progressValue = 0;
          }
        }, 200);
        this.emailService.sendEmail(this.message).subscribe(response => {
          this.loading = false;
          if (response.statusCode === 200) {
            this.sent = true;
            this.responseMessage = response.responseMessage;
          } else {
            this.failure = true;
            this.responseMessage = "No se pudo enviar el mensaje, disculpas";
          }
          timer(3500).subscribe(() => {
            this.sent = false;
            this.message = new Message();
          });
        });
      } catch (error) {
        this.failure = true;
        this.responseMessage = error;
        timer(3500).subscribe(() => {
          this.failure = false;
        });
      }
    } else {
      this.failure = true;
      this.responseMessage = "Debe completar todos los campos";
      timer(3500).subscribe(() => {
        this.failure = false;
      });
    }

  }
  validarFormulario(): boolean {
    return this.message.from !== undefined && this.message.emailFrom !== undefined
      && this.message.subject !== undefined && this.message.body !== undefined;
  }
}
