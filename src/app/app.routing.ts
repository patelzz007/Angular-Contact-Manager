import { RouterModule, Route } from "@angular/router";
import { AddContactComponent } from "./components/add-contact/add-contact.component";
import { ContactManagerComponent } from "./components/contact-manager/contact-manager.component";
import { EditContactComponent } from "./components/edit-contact/edit-contact.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ViewContactComponent } from "./components/view-contact/view-contact.component";

export const appRoutes: Route[] = [
	{ path: "", redirectTo: "contacts/admin", pathMatch: "full" },
	{ path: "contacts/admin", component: ContactManagerComponent },
	{ path: "contacts/add", component: AddContactComponent },
	{ path: "contacts/edit/:contactId", component: EditContactComponent },
	{ path: "contacts/view/:contactId", component: ViewContactComponent },
	{ path: "**", component: PageNotFoundComponent },
];
