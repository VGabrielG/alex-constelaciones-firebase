import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiMusica } from './mi-musica';

describe('MiMusica', () => {
  let component: MiMusica;
  let fixture: ComponentFixture<MiMusica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiMusica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiMusica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
