"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var application = require("application");
var nativescript_fonticon_1 = require("nativescript-fonticon");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
nativescript_fonticon_1.TNSFontIcon.debug = true; //Optional. Will output the css mapping to console.
nativescript_fonticon_1.TNSFontIcon.paths = {
    'fa': './assets/fontawesome.css'
};
nativescript_fonticon_1.TNSFontIcon.loadCss();
application.setResources({ fonticon: nativescript_fonticon_1.fonticon });
application.start({ moduleName: 'main-page' });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './assets/fontawesome.css',
                })
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFFL0MseUNBQTJDO0FBQzNDLCtEQUE0RDtBQUM1RCx1RUFBa0Y7QUFDbEYsbUNBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsbURBQW1EO0FBQzdFLG1DQUFXLENBQUMsS0FBSyxHQUFHO0lBQ2xCLElBQUksRUFBRSwwQkFBMEI7Q0FDakMsQ0FBQztBQUNGLG1DQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7QUFFdEIsV0FBVyxDQUFDLFlBQVksQ0FBRSxFQUFFLFFBQVEsa0NBQUEsRUFBRSxDQUFFLENBQUM7QUFDekMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBb0IvQztJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBbEJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUMvQixJQUFJLEVBQUUsMEJBQTBCO2lCQUNoQyxDQUFDO2FBQ0M7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ2FwcGxpY2F0aW9uJztcbmltcG9ydCB7VE5TRm9udEljb24sIGZvbnRpY29ufSBmcm9tICduYXRpdmVzY3JpcHQtZm9udGljb24nO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUsIFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuVE5TRm9udEljb24uZGVidWcgPSB0cnVlOyAvL09wdGlvbmFsLiBXaWxsIG91dHB1dCB0aGUgY3NzIG1hcHBpbmcgdG8gY29uc29sZS5cblROU0ZvbnRJY29uLnBhdGhzID0ge1xuICAnZmEnOiAnLi9hc3NldHMvZm9udGF3ZXNvbWUuY3NzJ1xufTtcblROU0ZvbnRJY29uLmxvYWRDc3MoKTtcblxuYXBwbGljYXRpb24uc2V0UmVzb3VyY2VzKCB7IGZvbnRpY29uIH0gKTtcbmFwcGxpY2F0aW9uLnN0YXJ0KHsgbW9kdWxlTmFtZTogJ21haW4tcGFnZScgfSk7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuXHRcdFx0J2ZhJzogJy4vYXNzZXRzL2ZvbnRhd2Vzb21lLmNzcycsXG5cdFx0fSlcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19