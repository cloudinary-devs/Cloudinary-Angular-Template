import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cloudinary-upload-widget',
  standalone: true,
  imports: [],
  templateUrl: './cloudinary-upload-widget.component.html',
  styleUrls: ['./cloudinary-upload-widget.component.scss'],
})
export class CloudinaryUploadWidgetComponent implements OnInit {
  myWidget: any;
  uwConfig = {
    cloudName: "YOUR CLOUD NAME",
    uploadPreset: "YOUR UPLOAD PRESET NAME",
    multiple: true,
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  };

  /**
   * Load Cloudinary Upload Widget Script
   * https://cloudinary.com/documentation/angular_image_and_video_upload
   */

  ngOnInit(): void {
    this.myWidget = (window as any).cloudinary.createUploadWidget(
      this.uwConfig, (error: any, result: { event: string; info: { secure_url: string } }) => this.processUploads(error, result)
    );
  }

  processUploads(error: any, result: { event: string; info: { secure_url: string } }): void {
    if (!error && result && result.event === 'success') {
      console.log('Done! Here is the image info: ', result.info);
      const uploadedImage = document?.getElementById('uploadedimage');
      if (uploadedImage) {
        uploadedImage.setAttribute('src', result.info.secure_url);
      }
    }
  }

  openWidget(): void {
    this.myWidget.open();
  }
}
