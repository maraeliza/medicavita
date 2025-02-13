export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClasseType{
  name:string,
  description?:string,
  image: string
}