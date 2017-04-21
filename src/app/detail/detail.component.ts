import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DbService} from '../service/db.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
   id = '';
   students = [];
   student ;
  constructor(private route: ActivatedRoute, private db: DbService) {
    route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.student = this.db.getDataById(this.id);
    });
  }

  ngOnInit() {
  }

}
