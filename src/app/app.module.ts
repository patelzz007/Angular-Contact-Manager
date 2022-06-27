import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { appRoutes } from "./app.routing";
import { ExtraOptions, PreloadAllModules, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ContactManagerComponent } from "./components/contact-manager/contact-manager.component";
import { AddContactComponent } from "./components/add-contact/add-contact.component";
import { EditContactComponent } from "./components/edit-contact/edit-contact.component";
import { ViewContactComponent } from "./components/view-contact/view-contact.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { BishenComponent } from "./bishen/bishen.component";

const routerConfig: ExtraOptions = {
	preloadingStrategy: PreloadAllModules,
	scrollPositionRestoration: "enabled",
};

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		ContactManagerComponent,
		AddContactComponent,
		EditContactComponent,
		ViewContactComponent,
		SpinnerComponent,
		PageNotFoundComponent,
		HelloWorldComponent,
		BishenComponent,
	],
	imports: [BrowserModule, RouterModule.forRoot(appRoutes, routerConfig), HttpClientModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
