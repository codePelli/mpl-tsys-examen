import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmoviesComponent } from './detailmovies.component';

describe('DetailmoviesComponent', () => {
  let component: DetailmoviesComponent;
  let fixture: ComponentFixture<DetailmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailmoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
