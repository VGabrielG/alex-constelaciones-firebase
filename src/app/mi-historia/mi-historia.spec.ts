import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiHistoria } from './mi-historia';

describe('MiHistoria', () => {
  let component: MiHistoria;
  let fixture: ComponentFixture<MiHistoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiHistoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiHistoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
