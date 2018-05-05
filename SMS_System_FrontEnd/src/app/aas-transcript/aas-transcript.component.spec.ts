import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AasTranscriptComponent } from './aas-transcript.component';

describe('AasTranscriptComponent', () => {
  let component: AasTranscriptComponent;
  let fixture: ComponentFixture<AasTranscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AasTranscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AasTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
