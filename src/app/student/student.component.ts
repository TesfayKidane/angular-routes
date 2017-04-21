import { Component, OnInit } from '@angular/core';
import {DbService} from '../service/db.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students = [];
  constructor(private db: DbService) { }

  ngOnInit() {
    this.students = this.db.getData();
  }
}
