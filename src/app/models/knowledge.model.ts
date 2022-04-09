export class KnowledgeModel{
    title:string;
    description:string;
    myproducts:string;
    myknowledge:string;
    constructor(titel:string,description:string,myproducts:string,myknowledge:string){
        this.title=titel;
        this.description=description;
        this.myproducts=myproducts;
        this.myknowledge=myknowledge;
    }
}