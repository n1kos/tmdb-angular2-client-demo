import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCollectionsDetailsComponent } from './movie-collections-details.component';

describe('MovieCollectionsDetailsComponent', () => {
  let component: MovieCollectionsDetailsComponent;
  let fixture: ComponentFixture<MovieCollectionsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCollectionsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCollectionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
