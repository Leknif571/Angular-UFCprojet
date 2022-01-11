import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCombattantComponent } from './update-combattant.component';

describe('UpdateCombattantComponent', () => {
  let component: UpdateCombattantComponent;
  let fixture: ComponentFixture<UpdateCombattantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCombattantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCombattantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
