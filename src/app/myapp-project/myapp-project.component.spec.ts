import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappProjectComponent } from './myapp-project.component';

describe('MyappProjectComponent', () => {
  let component: MyappProjectComponent;
  let fixture: ComponentFixture<MyappProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyappProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyappProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
