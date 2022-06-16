import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models/IContacts';
import { IGroup } from 'src/app/models/IGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  public loading: boolean = false;
  public contact: IContact = {} as IContact;
  public errorMessage: string | null = null;
  public groups: IGroup[] = {} as IGroup[];

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.contactService.getAllGroups().subscribe(
      (data: IGroup[]) => {
        // get all the groups from server
        this.groups = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  public createSubmit() {
    this.contactService.createContact(this.contact).subscribe(
      (data: IContact) => {
        // submit data to service
        this.router.navigate(['/']).then(); // if created successfully, navigate to homepage
      },
      (error) => {
        this.errorMessage = error;
        this.router.navigate(['/contacts/add']).then();
      }
    );
  }
}
