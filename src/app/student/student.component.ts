import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DbService} from '../service/db.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() message1;
  @Output() outputMesg: EventEmitter<string>;

  students = [];
  constructor(private db: DbService) {
    this.outputMesg = new EventEmitter();
  }

  ngOnInit() {
    this.students = this.db.getData();
  }
  onClick() {
    this.outputMesg.emit('Message from the child to the parent');
  }
}
