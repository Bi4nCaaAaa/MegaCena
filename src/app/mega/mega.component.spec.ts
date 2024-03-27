import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaSenaComponent } from './mega.component';

describe('MegaComponent', () => {
  let component: MegaSenaComponent;
  let fixture: ComponentFixture<MegaSenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MegaSenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaSenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
