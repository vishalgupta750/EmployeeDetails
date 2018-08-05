import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService implements OnInit {

  constructor(private https: HttpClient) { }

  configUrl = 'assets/data.json';


  ngOnInit() {
    this.getData();
  }

  getData() {
    return this.https.get('https://www.hackertrail.com/media/frontends/d/m1qjyhm89x/sampledata.json');
  }

}
