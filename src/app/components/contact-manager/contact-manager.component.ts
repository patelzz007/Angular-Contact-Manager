import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContacts';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.scss'],
})
export class ContactManagerComponent implements OnInit {
  public loading: boolean = false; // required for the spinner
  public contacts: IContact[] = [];
  public errorMessage: string | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getAllContactsFromServer();
  }

  public getAllContactsFromServer() {
    this.loading = true; // start the spinner
    this.contactService.getAllContacts().subscribe(
      (data: IContact[]) => {
        // access to data contact array
        this.contacts = data;
        this.loading = false; // once receive data, stop the spinner
      },
      (error) => {
        // return error
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }

  public clickDeleteContact(contactId: string | undefined) {
    if (contactId) {
      // if have contactId
      this.contactService.deleteContact(contactId).subscribe(
        (data: {}) => {
          this.getAllContactsFromServer();
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }
}
