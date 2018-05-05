import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EslTranscriptComponent } from './esl-transcript.component';

describe('EslTranscriptComponent', () => {
  let component: EslTranscriptComponent;
  let fixture: ComponentFixture<EslTranscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EslTranscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EslTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
