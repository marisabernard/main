"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
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
        imports: [common_1.CommonModule, platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule.forRoot(ROUTES, { useHash: false })],
        exports: [router_1.RouterModule],
        providers: [resume_service_1.ResumeService, show_service_1.ShowService]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map