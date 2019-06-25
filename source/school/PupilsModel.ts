import { IDGenerator } from './IDGenerator'
const IDGen = new IDGenerator("Pupil")
enum Gender {male, female}
interface Pupil {"name":{"first":string, "last":string}, "image":string, "dateOfBirth":string, "phones":Array<{"phone":string,"primary":boolean}>, "sex":Gender}

export class PupilsModel{
    pupils: Map<string,string | object | Array<object> | Gender>;

    constructor(){
        this.pupils = new Map()
    }
    
    async add(pupil: Pupil){
        // creating random ID starting with P (pupil)
        let id:string = IDGen.getID();
        
        if (!pupil["description"]){
            pupil["description"] = "no description"
        }
        // using update method for both updating and creating purposes
        this.update(id, pupil)
        return id
    }


    async read(targetId: string){
        // simply returning whole object
        return this.pupils.get(targetId)
    }


    async update(targetId: string, pupil: Pupil){
        // appending a new pupil data to pupils object {id: Data}
        this.pupils.set(targetId,pupil)
    }


    async remove(targetId: string){
        delete this.pupils[targetId]
    }
}

