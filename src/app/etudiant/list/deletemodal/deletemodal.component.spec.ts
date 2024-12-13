import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemodaleComponent } from './deletemodal.component';

describe('DeletemodaleComponent', () => {
  let component: DeletemodaleComponent;
  let fixture: ComponentFixture<DeletemodaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletemodaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletemodaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
