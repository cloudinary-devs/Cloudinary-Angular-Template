import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CloudinaryModule} from '@cloudinary/ng';
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';
import { face } from '@cloudinary/url-gen/qualifiers/focusOn';
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { max } from "@cloudinary/url-gen/actions/roundCorners";
import { format } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { solid } from "@cloudinary/url-gen/actions/border";
import { CloudinaryUploadWidgetComponent } from './cloudinary-upload-widget/cloudinary-upload-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CloudinaryModule, CloudinaryUploadWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  image!: CloudinaryImage;
  image1!: CloudinaryImage;
  image2!: CloudinaryImage;

  ngOnInit() {

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'react-template'
      }
    });

    /**
     * Examples on how to manipulate your image on the fly.
     * For more information visit our docs:
     * https://cloudinary.com/documentation/image_transformations
     * https://cloudinary.com/documentation/angular_image_transformations
     */
    this.image = cld.image('woman-blackdress-stairs.jpg').resize(fill().height(250));
    this.image1 = cld.image('woman-blackdress-stairs.jpg').resize(
      thumbnail()
        .width(200)
        .height(200)
        .gravity(focusOn(face()))
    ).roundCorners(max()).delivery(format(auto()));
    this.image2 = cld.image('woman-blackdress-stairs.jpg').resize(fill().height(250).aspectRatio("1.0"))
    .border(solid(5, "lightblue"));
  }
}
