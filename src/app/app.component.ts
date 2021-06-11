import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  isAdmin: boolean;

  constructor(
    private authService :AuthService, private router:Router) { }
    ngOnInit(): void {


      this.authService.whoAmI()
      .subscribe((res:{ status: number, user?: User}) =>
      {
          if(res.status==200)
          {
            console.log(res);
            
          }
          else
          {
            console.log('wrong');
            
          }
      }, 
      (err) => 
      console.log(err)
      
      )
        
      

    }


   

}
