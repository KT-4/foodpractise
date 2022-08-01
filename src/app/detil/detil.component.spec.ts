import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetilComponent } from './detil.component';

describe('DetilComponent', () => {
  let component: DetilComponent;
  let fixture: ComponentFixture<DetilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
