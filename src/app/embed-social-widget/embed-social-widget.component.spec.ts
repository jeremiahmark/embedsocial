import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedSocialWidgetComponent } from './embed-social-widget.component';

describe('EmbedSocialWidgetComponent', () => {
  let component: EmbedSocialWidgetComponent;
  let fixture: ComponentFixture<EmbedSocialWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedSocialWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbedSocialWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
