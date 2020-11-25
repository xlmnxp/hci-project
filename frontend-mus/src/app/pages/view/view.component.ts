import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  private id: string;
  public fileInfo: any = {};
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.httpClient.get('/api/upload/' + this.id).subscribe((result) => {
        this.fileInfo = result;
        this.fileInfo.path = (location.protocol + "//" + location.host + "/") + this.fileInfo.path;
        this.fileInfo.view = (location.protocol + "//" + location.host + "/view/") + this.fileInfo.id;
      })
    })
  }

}
