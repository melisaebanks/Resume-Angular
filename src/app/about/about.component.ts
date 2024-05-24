import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

info = {
  age:24,
  email:"enquiry@humber.ca",
  phone:"+1416-675-3111",
  address:"205 Humber College Blvd, Etobicoke, ON M9W 5L7",
  language: "English, Spanish"
};

abouthtml = "<p>Hello! I am Melisa Ebanks-Johnson, a Web Developer, Software Architect and Application Developer.</p>"+
"<p>This template is built using AngularJs. I am also proficient and certified in HTML, CSS, and JavaScript. On the server side of things, I make very efficent APIs "+
 "using C#, entity framework and Microsoft SQL Server.</p>"

profile = {
aboutInfo: this.abouthtml,
basicInfo:this.info
};

}
