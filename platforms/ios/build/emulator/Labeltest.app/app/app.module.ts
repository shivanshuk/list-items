import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import * as application from 'application';
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
import { TNSFontIconModule, TNSFontIconService } from 'nativescript-ngx-fonticon';
TNSFontIcon.debug = true; //Optional. Will output the css mapping to console.
TNSFontIcon.paths = {
  'fa': './assets/fontawesome.css'
};
TNSFontIcon.loadCss();

application.setResources( { fonticon } );
application.start({ moduleName: 'main-page' });

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        TNSFontIconModule.forRoot({
			'fa': './assets/fontawesome.css',
		})
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
