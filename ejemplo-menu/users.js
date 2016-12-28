/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var di_1 = require('angular2/di');
var http_2 = require('angular2/src/http/http');
var Users = (function () {
    function Users(http) {
        this.http = http;
    }
    Users.prototype.get = function () {
        var _this = this;
        this.http('resources/users.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (users) { return _this.users = users; });
    };
    Users = __decorate([
        angular2_1.Component({
            selector: "users"
        }),
        angular2_1.View({
            template: "\n    <div class=\"col-md-6 col-md-offset-3 well\">\n        <input type=\"button\" class=\"btn btn-success btn-block\" (click)=\"get()\" value=\"Fetch Users\">\n        <hr>\n        <ul>\n           <li *ng-for=\"#user of users\">\n             Id: {{ user.name }} | Name: {{ user.name }} | JSON: {{ user | json }}\n           </li>\n        </ul>\n    </div>\n    ",
            directives: [angular2_1.NgFor]
        }),
        __param(0, di_1.Inject(http_2.HttpFactory))
    ], Users);
    return Users;
})();
angular2_1.bootstrap(Users, [http_1.httpInjectables]);
