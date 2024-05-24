import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      name : "HTML",
      percentage: "width: 95%;"
    },
    {
      name : "JavaScript",
      percentage: "width: 85%;"
    },
    {
      name : "CSS",
      percentage: "width: 85%;"
    },
    {
      name : "C#",
      percentage: "width: 90%;"
    },
    {
      name : ".NET",
      percentage: "width: 87%;"
    },
    {
      name : "Microsoft SQL Server",
      percentage: "width: 85%;"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
