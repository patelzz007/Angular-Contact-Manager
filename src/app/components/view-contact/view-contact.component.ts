import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IContact } from 'src/app/models/IContacts';
import { IGroup } from 'src/app/models/IGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss'],
})
export class ViewContactComponent implements OnInit {
  public loading: boolean = false;
  public contactId: string | null = null;
  public contact: IContact = {} as IContact;
  public errorMessage: string | null = null;
  public group: IGroup = {} as IGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.contactId = param.get('contactId'); // the contactId have to match with the one in the router
    });
    if (this.contactId) {
      // if contactId is available
      this.loading = true;
      this.contactService.getContact(this.contactId).subscribe(
        (data: IContact) => {
          // get contact data
          this.contact = data;
          this.loading = false;
          this.contactService.getGroup(data).subscribe((data: IGroup) => {
            // get the group by providing the contact object that is the data itself
            this.group = data;
          });
        },
        (error) => {
          // catch error
          this.errorMessage = error;
          this.loading = false;
        }
      );
    }
  }

  public isNotEmpty() {
    // check if contact & group object is empty or not | if both not empty then is not empty (true)
    return (
      Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0
    );
  }
}
