import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiCallsService } from './api-calls.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<AppComponent>;

  // * We use beforeEach so our tests are run in isolation
  beforeEach(() => {
    TestBed.configureTestingModule({
      // * here we configure our testing module with all the declarations,
      // * imports, and providers necessary to this component
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ApiCallsService],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance; // The component instantiation
    element = fixture.nativeElement; // The HTML reference
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'SapientTest'`, () => {
    expect(component.title).toEqual('SapientTest');
  });
});
