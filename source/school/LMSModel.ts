export interface Subject {title: string, lessons: number, id:string}
export class LMSModel{
    id: string
    subjects: Map<string,Subject>
    
    constructor(){
        this.subjects = new Map()
    }
    
    async remove(subject: Subject){
        for (let x in this.subjects)
        if (this.verify(subject)){
            this.subjects.delete(subject.id)
        }
    }

    async add(subject: Subject){
        this.subjects.set(subject.id, subject)
    }

    async verify(subject: Subject){
        return this.subjects.has(subject.id)
    }

    async readAll(){
        return this.subjects
    }
}