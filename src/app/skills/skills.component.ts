import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../reference.service';
import { skill } from '../interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: skill[];

  constructor(private service : ReferenceService) {
    this.skills = [{
      name:"",
      percentage:"",
      style:""
    }];
   }

  ngOnInit(): void {
    this.skills.pop();
      for(let skill of this.service.getSkills()){
           let item : skill = {
            name:skill.skill,
            percentage:skill.percentage + "%",
            style:"width: "+skill.percentage+"%"
           };
           this.skills.push(item);
        }
      }

}
