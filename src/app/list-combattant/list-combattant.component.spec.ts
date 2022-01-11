import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCombattantComponent } from './list-combattant.component';

describe('ListCombattantComponent', () => {
  let component: ListCombattantComponent;
  let fixture: ComponentFixture<ListCombattantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCombattantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCombattantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
