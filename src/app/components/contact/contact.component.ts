import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact = new Contact();
  loading: boolean = false;
  sent: boolean = false;
  progressValue: number = 0;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.contact);
    this.loading = true;
    interval(200).subscribe(value => {
      this.progressValue += value;
    });
    this.emailService.sendEmail(this.contact).subscribe(response => {
      console.log(response);
      this.loading = false;
      this.sent = true;
    });
  }
}
