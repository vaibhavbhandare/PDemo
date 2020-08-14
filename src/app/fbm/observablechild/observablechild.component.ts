import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-observablechild',
  templateUrl: './observablechild.component.html',
  styleUrls: ['./observablechild.component.scss']
})
export class ObservablechildComponent implements OnInit {

@Input() rafelTitle: any;
@Output() valueChange = new EventEmitter<any>();

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjectService.msgBroadcaster.subscribe(data => {
      alert(data);
    });
  }

  changename() {
    this.valueChange.emit('5 Jets');
  }

  getCount(): number {
    return 101;
  }


}
