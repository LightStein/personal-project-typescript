import { IDGenerator } from './IDGenerator'
const IDGen = new IDGenerator("Teacher")
enum Gender {male, female}
export interface Teacher {"name":{"first":string, "last":string},"image":string, "dateOfBirth":string, "emails":Array<{"email":string, "primary":boolean}>, "phones":Array<{"phone":string,"primary":boolean}>,"sex":Gender, "subjects":Array<{"subject":string}>, "description"?:string}

export class TeachersModel{
    teachers: Map<string,string | object | Array<object> | Gender>;

    constructor(){
        this.teachers = new Map();
    }

    async add(teacher: Teacher){
        // creating random ID starting with T (teacher)
        const time = new Date();
        let id = IDGen.getID()
    
        // using update method for both updating and creating purposes
        this.update(id, teacher)
        return id
    }


    async read(targetId: string){
        // simply returning whole object
        return this.teachers.get(targetId)
    }


    async update(targetId: string, teacher: Teacher){
        
        // appending a new teacher data to teachers object {id: Data}
        this.teachers.set(targetId, teacher)
    }

    async remove(targetId: string){
        this.teachers.delete(targetId)
    }
}