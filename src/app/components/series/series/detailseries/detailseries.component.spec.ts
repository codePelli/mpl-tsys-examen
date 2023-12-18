import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailseriesComponent } from './detailseries.component';

describe('DetailseriesComponent', () => {
  let component: DetailseriesComponent;
  let fixture: ComponentFixture<DetailseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailseriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
