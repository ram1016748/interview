import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchingDataUsingHttpComponent } from './fetching-data-using-http.component';

describe('FetchingDataUsingHttpComponent', () => {
  let component: FetchingDataUsingHttpComponent;
  let fixture: ComponentFixture<FetchingDataUsingHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchingDataUsingHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchingDataUsingHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
