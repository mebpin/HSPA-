import {IPropertyBase} from  './ipropertybase'
export class Property implements IPropertyBase {
  Id: number;
  SellRent: number;
  Name: string;
  PropertyType: string;
  BHK: number;
  FurnishingType: string;
  Price: number;
  BuiltArea: number;
  CarpetArea?: number;
  Address: string;
  Address2?: string;
  City: string;
  FloorNo?: string;
  TotalFloor?: string;
  ReadyToMove: number;
  AOP?: string;
  MainEntrance?: string;
  Security?: number;
  Gated?: number;
  Maintenance?: number;
  Possession?: string;
  Image?: string;
  Description?: string;
  PostedOn: string;
  PostedBy: number;
}
