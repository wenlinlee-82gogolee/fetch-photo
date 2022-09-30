import { Component, OnInit } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  photo: string = '';
  constructor(private fetchPhoto: FetchPhotoService) {}

  ngOnInit(): void {}

  onClick() {
    this.fetchPhoto.getPhoto().subscribe((response) => {
      this.photo = response.urls.regular;
    });
  }
}
