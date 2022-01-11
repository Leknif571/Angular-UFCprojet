import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCombattantComponent } from './new-combattant.component';

describe('NewCombattantComponent', () => {
  let component: NewCombattantComponent;
  let fixture: ComponentFixture<NewCombattantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCombattantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCombattantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
