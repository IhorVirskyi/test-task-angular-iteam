import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUser } from 'src/app/core/models';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.sass']
})
export class UsersPageComponent implements OnInit {

  users$: Observable<User[]> = this.usersService.getAll();

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
  }

}
