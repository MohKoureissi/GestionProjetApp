import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDeBordProjetComponent } from './tableau-de-bord-projet.component';

describe('TableauDeBordProjetComponent', () => {
  let component: TableauDeBordProjetComponent;
  let fixture: ComponentFixture<TableauDeBordProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableauDeBordProjetComponent]
    });
    fixture = TestBed.createComponent(TableauDeBordProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
