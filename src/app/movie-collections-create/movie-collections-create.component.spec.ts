import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCollectionsCreateComponent } from './movie-collections-create.component';

describe('MovieCollectionsCreateComponent', () => {
  let component: MovieCollectionsCreateComponent;
  let fixture: ComponentFixture<MovieCollectionsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCollectionsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCollectionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
