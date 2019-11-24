import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import {of} from "rxjs";


describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
    });

    usersService = TestBed.get(UsersService);
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  describe('all', () => {

    it('return all users', () => {
      const userResponse = [
        {
          id: '1',
          name: 'Jane',
          role: 'Designer',
          pokemon: 'Blastoise'
        },
        {
          id: '2',
          name: 'Bob',
          role: 'Developer',
          pokemon: 'Charizard'
        }
      ];

      let response: any;

      spyOn(usersService, 'all').and.returnValue(of(userResponse));

      usersService.all().subscribe((users: object) => {
        response = users;
      })

      expect(response).toEqual(userResponse);
    })
  })
});
