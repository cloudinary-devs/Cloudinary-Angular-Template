import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudinaryUploadWidgetComponent } from './cloudinary-upload-widget.component';

describe('CloudinaryUploadWidgetComponent', () => {
  let component: CloudinaryUploadWidgetComponent;
  let fixture: ComponentFixture<CloudinaryUploadWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudinaryUploadWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloudinaryUploadWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
