export class Answer{
    constructor(
        public ID:number,
        public BodyText:string,
        public IsCorrect:boolean,
        public QuestionID:number
    )
    {
       
    }
}