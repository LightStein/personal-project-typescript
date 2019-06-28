export interface Subject { title: string; lessons: number; id: string; }
export class LMSModel {
    public id: string;
    public subjects: Map<string,Subject>;

    constructor() {
        this.subjects = new Map();
    }

    public async remove(subject: Subject) {

        if (this.verify(subject)) {
            this.subjects.delete(subject.id);
        }
    }

    public async add(subject: Subject){
        this.subjects.set(subject.id, subject);
    }

    public async verify(subject: Subject){
        return this.subjects.has(subject.id);
    }

    public async readAll(){
        return this.subjects;
    }
}