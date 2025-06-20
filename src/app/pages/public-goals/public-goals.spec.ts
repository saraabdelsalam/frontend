import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicGoals } from './public-goals';

describe('PublicGoals', () => {
  let component: PublicGoals;
  let fixture: ComponentFixture<PublicGoals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicGoals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicGoals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
