export class Answer{
    constructor(
        public ID:number,
        public bodyText:string,
        public isCorrect:boolean,
        public questionID:number
    )
    {
       
    }
}