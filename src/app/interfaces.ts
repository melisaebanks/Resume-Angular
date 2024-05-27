import { ExperienceComponent } from './experience/experience.component';
export interface Links
{
  url:string,
  name:string,
  class?: Array<string>
}

export interface ShowResume
{
  showResume:boolean,
  publisher:string
}

export interface contact{
  name:string,
  subject:string,
  email:string,
  message:string
}

export interface profile
{
  name:string,
  title:string,
  description:string,
  age: number,
  email: string,
  phone:string,
  address:string,
  language: string
}

export interface education{
  institution:string,
  timeline:string,
  certificationType:string,
  certificationName:string,
  description:string
}

export interface experience{
  company:string,
  timeline:string,
  title:string,
  description:string
}

export interface skill{
  name:string,
  percentage:string,
  style:string
}
