import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserList } from './interfaces/userList';
import { Observable, of } from 'rxjs';

const userList: UserList[] = [
  {
    nombres: 'Juan, Pérez',
    saldoDisponible: 1500,
  },
  {
    nombres: 'María, González',
    saldoDisponible: 2000,
  },
  {
    nombres: 'Carlos, López',
    saldoDisponible: 1300,
  },
  {
    nombres: 'Ricardo, Pérez',
    saldoDisponible: 1900,
  },
];

const mockedUserService: {
  getUsers: () => Observable<UserList[]>;
} = {
  getUsers: () => of(userList),
};

describe('UserComponent', () => {
  let fixture: ComponentFixture<UserComponent>;
  let userComponent: UserComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [UserComponent],
      providers: [{ provide: UserService, useValue: mockedUserService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    userComponent = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(userComponent).toBeTruthy();
  });

  it(`should have a variable called "users" with value "[]" as default`, () => {
    expect(userComponent.users).toBeTruthy();
    expect(userComponent.users).toEqual([]);
  });

  it(`should call getUsers, ngOnInit()`, () => {
    const getUsers = spyOn(mockedUserService, 'getUsers');
    getUsers.and.returnValue(of(userList));
    userComponent.ngOnInit();
    expect(mockedUserService.getUsers).toHaveBeenCalled();
    expect(userComponent.users).toEqual(userList);
    expect(userComponent.users.length).toEqual(4);
    expect(userComponent.saldoMayor).toEqual(2000);
  });
});
