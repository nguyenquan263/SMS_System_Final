import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptHccComponent } from './transcript-hcc.component';

describe('TranscriptHccComponent', () => {
  let component: TranscriptHccComponent;
  let fixture: ComponentFixture<TranscriptHccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscriptHccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptHccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
