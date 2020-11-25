import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public uploads: any = [];
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onUploadComplate(event) {
    this.uploads = event.originalEvent.body.map(file => {
      file.path = (location.protocol + "//" + location.host + "/") + file.path;
      file.view = (location.protocol + "//" + location.host + "/view/") + file.id;
      return file;
    });
    // this.route.navigate(['/view', event.originalEvent.body[0].id])
  }
}
