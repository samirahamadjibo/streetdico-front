import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPublishersComponent } from './last-publishers.component';

describe('LastPublishersComponent', () => {
  let component: LastPublishersComponent;
  let fixture: ComponentFixture<LastPublishersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastPublishersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LastPublishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
