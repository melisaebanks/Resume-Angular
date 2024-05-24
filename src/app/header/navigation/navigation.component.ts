import { Component, EventEmitter, Output } from '@angular/core';
import { Links, ShowResume } from '../../links';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent
{

  @Output() cv = new EventEmitter<ShowResume>();

  onClicked(){
    let publish : ShowResume =
    {
      showResume:true,
      publisher:"creative"
    }
    console.log("Child navigation clicked");
    this.cv.emit(publish);
  }

  links:Links[] =
  [
    {
        url: "#about",
        name:"About"
    },
    {
        url: "#skills",
        name:"Skills"
    },
    {
        url: "#portfolio",
        name:"Portfolio"
    },
    {
        url: "#experience",
        name:"Experience"
    },
    {
        url: "#contact",
        name:"Contact"
    }
  ]

}
