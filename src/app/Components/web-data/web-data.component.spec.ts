import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDataComponent } from './web-data.component';

describe('WebDataComponent', () => {
  let component: WebDataComponent;
  let fixture: ComponentFixture<WebDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebDataComponent]
    });
    fixture = TestBed.createComponent(WebDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
