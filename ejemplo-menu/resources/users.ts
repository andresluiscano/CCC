/// <reference path="typings/angular2/angular2.d.ts" />
 
import {
  Component,
  View,
  bootstrap,
  NgFor
} from 'angular2/angular2';
 
class Members
{
   get()
   {
       return fetch('resources/users.json');
   }
}
 
@Component({
    selector: 'members',
    appInjector: [
        Members
    ]
})
 
@View({
  template: `
  <div class="col-md-6 col-md-offset-3 well">
          <input type="button" class="btn btn-success btn-block" (click)="get()" value="Fetch Members">
          <hr>
          <ul>
             <li *ng-for="#user of users">
               Id: {{ user.name }} | Name: {{ user.name }} | JSON: {{ user | json }}
             </li>
          </ul>
      </div>`,
    directives: [NgFor]
})
 
class App
{
    members:Members;
    users: Array<Object>;
 
    constructor(members:Members)
    {
        this.members = members;
    }
 
    get()
    {
        return this.members.get()
        .then(users => users.json())
        .then(users => this.users = users);
    }
}
 
bootstrap(App);