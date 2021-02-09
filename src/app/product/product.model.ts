export class Product {
  constructor(
    public name:string,
    public price: number,
    public color: string,
    public description: string,
    public imgpath: string | ArrayBuffer,
    public status: string
    ) {}
}
