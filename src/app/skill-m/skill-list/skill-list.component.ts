import { Component, OnInit } from '@angular/core';
import { SkillServiceService } from '../skill-service.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css'],
})
export class SkillListComponent implements OnInit {

  constructor(private skillservice:SkillServiceService) { 

  }

  ngOnInit() {
  }


}
