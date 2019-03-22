import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { StyleChanger } from './style-changer.directive';
import { LabelMaxLinesDirective } from "./label-max-lines.directive";

import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
// import { TNSFontIconModule, TNSFontIconService } from 'nativescript-ngx-fonticon';
// TNSFontIcon.debug = true; //Optional. Will output the css mapping to console.
// TNSFontIcon.paths = {
//   'fa': './assets/fontawesome.css'
// };
// TNSFontIcon.loadCss();

@NgModule({
    imports: [
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIGaugeModule,
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptFormsModule,
        TNSCheckBoxModule
    ],
    declarations: [
        HomeComponent, StyleChanger, LabelMaxLinesDirective
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
