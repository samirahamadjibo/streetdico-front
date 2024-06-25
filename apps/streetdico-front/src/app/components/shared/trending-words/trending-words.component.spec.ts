import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingWordsComponent } from './trending-words.component';

describe('TrendingWordsComponent', () => {
  let component: TrendingWordsComponent;
  let fixture: ComponentFixture<TrendingWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendingWordsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
