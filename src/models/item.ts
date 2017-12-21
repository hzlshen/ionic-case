export class Item{
  constructor(fields:any){
    for (const f in fields){
      this[f] = fields[f];
    }
  }
}

export interface Item {
  [prop: string]: any;
}
