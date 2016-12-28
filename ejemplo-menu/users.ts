/// <reference path="typings/angular2/angular2.d.ts" />
 
import {
  Component,
  View,
  bootstrap,
  NgFor
} from 'angular2/angular2';
 
import {
  httpInjectables,
  Http
} from 'angular2/http';
 
import {
    Inject
} from 'angular2/di';
 
import {
    HttpFactory
} from 'angular2/src/http/http';
 
@Component({
  selector: "users"
})
 
@View({
  template: `
    <div class="col-md-6 col-md-offset-3 well">
        <input type="button" class="btn btn-success btn-block" (click)="get()" value="Fetch Users">
        <hr>
        <ul>
           <li *ng-for="#user of users">
             Id: {{ user.name }} | Name: {{ user.name }} | JSON: {{ user | json }}
           </li>
        </ul>
    </div>
    `,
    directives: [NgFor]
})
 
class Users
{
    users: Array<Object>;
    http: any;
    constructor( @Inject(HttpFactory) http )
    {
        this.http = http;
    }
 
    get()
    {
        this.http('resources/users.json')
 
        .map(res => res.json())
    
        .subscribe(users => this.users = users);
    }
}
 
bootstrap(Users, [ httpInjectables ]);