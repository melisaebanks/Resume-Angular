import { Links, contact, education, experience, profile, skill } from './interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor() { }

  getReferences() {
    return [
      { image: 'assets/beautiful_black_woman.jpg', name: 'Person One', position: 'Position One', testimonial: 'This is a testimonial from Person One.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  In massa tempor nec feugiat nisl pretium fusce.' },
      { image: 'assets/beautiful_black_woman_.jpg', name: 'Person Two', position: 'Position Two', testimonial: 'This is a testimonial from Person Two. Viverra adipiscing at in tellus. Urna nec tincidunt praesent semper feugiat.' },
      { image: 'assets/database_image_3.jpg', name: 'Person Three', position: 'Position Three', testimonial: 'This is a testimonial from Person Three. Scelerisque fermentum dui faucibus in ornare. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Massa placerat duis ultricies lacus sed.' }
    ];
  }

  getBio() : profile{
    return{
      name:"Melisa Ebanks-Johnson",
      title:"Web and desktop application developer",
      description:"<p>Hello! I am Melisa Ebanks-Johnson, a Web Developer, Software Architect and Application Developer.</p>"+
      "<p>This template is built using Angular. I am also proficient and certified in HTML, CSS, and JavaScript. On the server side of things, I make very efficent APIs "+
       "using C#, entity framework and Microsoft SQL Server.</p>",
      age: 24,
      email: "enquiry@humber.ca",
      phone:"+1416-675-3111",
      address:"205 Humber College Blvd, Etobicoke, ON M9W 5L7",
      language: "English, Spanish"
    };
  }

  getSkills(){
    return[
      {skill:"HTML",percentage:95},
      {skill:"CSS",percentage:85},
      {skill:".NET",percentage:90},
      {skill:"JavaScript",percentage:85},
      {skill:"C#",percentage:95},
      {skill:"Microsoft SQL Server",percentage:85},
    ];
  }

  getExperience():experience[]{
    return[
      {company:"Humber College", timeline:"January 2024 - June 2024", title:"Fullstack Developer", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra. Id consectetur purus ut faucibus pulvinar elementum integer."},
      {company:"Freelance Developer", timeline:"January 2018 - Present", title:"Fullstack Developer", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra. Id consectetur purus ut faucibus pulvinar elementum integer."},
      {company:"DCI Solutions", timeline:"March 2013 - January 2018", title:"Web and desktop application Developer", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra. Id consectetur purus ut faucibus pulvinar elementum integer."},
    ];
  }
  getEducation() : education[] {
    return[
      {institution:"Humber College", timeline:"2024 - 2024", certificationType:"Certificate", certificationName:"Fullstack Cloud Development", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra. Id consectetur purus ut faucibus pulvinar elementum integer. "},
      {institution:"Microsoft", timeline:"2015 - 2015", certificationType:"Certificate", certificationName:"Microsoft Certified", description:"Ut venenatis tellus in metus vulputate eu scelerisque. Id interdum velit laoreet id. Proin libero nunc consequat interdum varius sit amet mattis. Nibh venenatis cras sed felis eget velit aliquet sagittis id. "},
      {institution:"University of Technology, Jamaica", timeline:"2007 - 2012", certificationType:"Bachelor of Science", certificationName:"BSc. Computing and Information Technology", description:"Et ligula ullamcorper malesuada proin. Turpis tincidunt id aliquet risus feugiat in ante. Ornare arcu odio ut sem nulla. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. "}
    ];
  }

  postContact(contact: contact){
    console.log(contact);
  }

  getSocialLinks():Links[] {
    return [
      {
        url: "https://www.github.com/melisaebanks",
        name:"github",
        class: ["fa-brands", "fa-github"]
      },
      {
        url: "https://www.twitter.com",
        name:"X",
        class: ["fa-brands", "fa-x-twitter"]
      },
      {
        url: "https://www.instagram.com",
        name:"instagram",
        class: ["fa-brands", "fa-instagram"]
      },
      {
        url: "https://www.linkedin.com/melisa-ebanks-johnson",
        name:"linkedin",
        class: ["fa-brands", "fa-linkedin-in"]
      }
    ]
  }

  postPrint()
  {
    console.log("Resume is printing.");
  }
}
