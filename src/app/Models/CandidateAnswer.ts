export class CandidateAnswer{
    constructor(
            public id:number,
            public questionID:number,
            public questionBodyText:string,
            public answerBodyText:string,
            public isCorrect:boolean,
            public candidateID:number
    ){}
}