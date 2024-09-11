import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantIdentifyComponent } from './plant-identify.component';

describe('PlantIdentifyComponent', () => {
  let component: PlantIdentifyComponent;
  let fixture: ComponentFixture<PlantIdentifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantIdentifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantIdentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
