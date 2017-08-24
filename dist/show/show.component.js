"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var testing_1 = require("@angular/http/testing");
var show_entity_1 = require("./show.entity");
var show_service_1 = require("./show.service");
var ShowComponent = (function () {
    function ShowComponent(showService, backend) {
        var _this = this;
        this.showService = showService;
        this.backend = backend;
        // Fake Shows DB
        this.db = [
            new show_entity_1.Show('1', 'Show Title 1'),
            new show_entity_1.Show('2', 'Show Title 2'),
            new show_entity_1.Show('3', 'Show Title 3'),
            new show_entity_1.Show('4', 'Show Title 4'),
            new show_entity_1.Show('5', 'Show Title 5')
        ];
        this.backend.connections.subscribe(function (c) {
            var singleShowMatcher = /\/api\/show\/([0-9]+)/i;
            // return all shows
            // GET: /show
            if (c.request.url === "http://localhost:8091/api/show" && c.request.method === 0) {
                var res = new http_1.Response(new http_1.ResponseOptions({
                    body: JSON.stringify(_this.db)
                }));
                c.mockRespond(res);
            }
            else if (c.request.url.match(singleShowMatcher) && c.request.method === 0) {
                var matches = _this.db.filter(function (t) {
                    return t._id == c.request.url.match(singleShowMatcher)[1];
                });
                c.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                    body: JSON.stringify(matches[0])
                })));
            }
            else if (c.request.url === 'http://localhost:8091/api/show' && c.request.method === 1) {
                var newShow_1 = JSON.parse(c.request._body);
                var existingShow = _this.db.filter(function (show) { return show._id == newShow_1._id; });
                if (existingShow && existingShow.length === 1) {
                    Object.assign(existingShow[0], newShow_1);
                    c.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                        body: JSON.stringify(existingShow[0])
                    })));
                }
                else {
                    newShow_1._id = parseInt(_.max(_this.db, function (t) {
                        return t._id;
                    })._id || 0, 10) + 1 + '';
                    _this.db.push(newShow_1);
                    c.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                        body: JSON.stringify(newShow_1)
                    })));
                }
            }
            else if (c.request.url.match(singleShowMatcher) && c.request.method === 3) {
                var showId = c.request.url.match(singleShowMatcher)[1];
                var pos = _.indexOf(_.pluck(_this.db, '_id'), showId);
                _this.db.splice(pos, 1);
                c.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                    body: JSON.stringify({})
                })));
            }
        });
    }
    ShowComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.showService.loadAllShows();
    };
    ShowComponent.prototype.ngAfterViewChecked = function () {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
    };
    return ShowComponent;
}());
__decorate([
    core_1.Input('show'),
    __metadata("design:type", show_entity_1.Show)
], ShowComponent.prototype, "show", void 0);
ShowComponent = __decorate([
    core_1.Component({
        selector: 'app-show',
        templateUrl: './app/show/show.component.html',
        styleUrls: ['./app/show/show.component.css']
    }),
    __metadata("design:paramtypes", [show_service_1.ShowService, testing_1.MockBackend])
], ShowComponent);
exports.ShowComponent = ShowComponent;
//# sourceMappingURL=show.component.js.map