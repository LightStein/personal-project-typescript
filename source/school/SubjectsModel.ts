import { IDGenerator } from './IDGenerator'
const IDGen = new IDGenerator("Subject")

export class SubjectsModel{
    title: string
    lessons: number
    id: string
    constructor(obj: {title: string, lessons: number}){
        this.title = obj.title;
        this.lessons = obj.lessons;
        this.id = IDGen.getID();
    }
}