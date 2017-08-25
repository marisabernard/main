"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
//import 'hammerjs';
var resume_component_1 = require("./resume/resume.component");
var resume_service_1 = require("./resume/resume.service");
var show_component_1 = require("./show/show.component");
var show_service_1 = require("./show/show.service");
var ROUTES = [
    {
        path: '',
        redirectTo: '/resume',
        pathMatch: 'full'
    },
    {
        path: 'resume',
        component: resume_component_1.ResumeComponent
    },
    {
        path: 'show',
        component: show_component_1.ShowComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        declarations: [resume_component_1.ResumeComponent, show_component_1.ShowComponent],
        imports: [common_1.CommonModule, platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule.forRoot(ROUTES, { useHash: false }), animations_1.BrowserAnimationsModule, material_1.MdAutocompleteModule,
            material_1.MdButtonModule,
            material_1.MdButtonToggleModule,
            material_1.MdCardModule,
            material_1.MdCheckboxModule,
            material_1.MdChipsModule,
            material_1.MdCoreModule,
            material_1.MdDatepickerModule,
            material_1.MdDialogModule,
            material_1.MdExpansionModule,
            material_1.MdGridListModule,
            material_1.MdIconModule,
            material_1.MdInputModule,
            material_1.MdListModule,
            material_1.MdMenuModule,
            material_1.MdNativeDateModule,
            material_1.MdProgressBarModule,
            material_1.MdProgressSpinnerModule,
            material_1.MdRadioModule,
            material_1.MdRippleModule,
            material_1.MdSelectModule,
            material_1.MdSidenavModule,
            material_1.MdSliderModule,
            material_1.MdSlideToggleModule,
            material_1.MdSnackBarModule,
            material_1.MdTabsModule,
            material_1.MdToolbarModule,
            material_1.MdTooltipModule, flex_layout_1.FlexLayoutModule],
        exports: [router_1.RouterModule],
        providers: [resume_service_1.ResumeService, show_service_1.ShowService]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map