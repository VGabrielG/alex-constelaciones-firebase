import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosAudiovisuales } from './productos-audiovisuales';

describe('ProductosAudiovisuales', () => {
  let component: ProductosAudiovisuales;
  let fixture: ComponentFixture<ProductosAudiovisuales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosAudiovisuales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosAudiovisuales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
