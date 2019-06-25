import { Group, Pupil, Subject, Teacher, Gender, IDGenerator} from './index';
const IDGen = new IDGenerator("Gradebook")
interface Record {"pupilId":string, "teacherId": string, "subjectId": string, "lesson": Number, "mark":Number}
interface Gradebook{"level":number, "groupId": string, "records":Map<string, Record>}
export class GradebooksModel{
    teachers: Map<string, string | object | Array<object> | Gender>
    pupils: Map<string, string | object | Array<object> | Gender>
    groups: Map<string, Group>
    lms: Map<string, Subject>
    gradebooks: Map<string, Gradebook>

    constructor(groups: Map<string,Group>, teachers: Map<string,string | object | Array<object> | Gender>, pupils: Map<string,string | object | Array<object> | Gender>, lms: Map<string,Subject>){
        this.teachers = teachers;
        this.pupils = pupils;
        this.groups = groups;
        this.lms = lms;
        this.gradebooks = new Map()
    }

    async add(level:number, groupId:string){

        const id = IDGen.getID();

        this.gradebooks.set(id, {"level":level, "groupId": groupId, "records":new Map()})
        return id
    }


    async addRecord(gradebookId: string, record: Record){
        this.gradebooks.get(gradebookId)["records"].set(record["pupilId"], record)
    }


    async read(gradebookId, pupilId){
   
                    const pp = this.pupils.pupils.get(pupilId)
                    const tc = this.teachers.teachers.get(this.gradebooks.get(gradebookId).records.get(pupilId).teacherId)
                    const subj = this.lms.subjects.get(this.gradebooks.get(gradebookId).records.get(pupilId).subjectId)
                    const res_obj = {
                        name:`${pp.name.first} ${pp.name.last}`,
                        "records":[
                            {teacher:`${tc.name.first} ${pp.name.last}`,
                            'subject': subj.title,
                            'lesson': this.gradebooks.get(gradebookId).records.get(pupilId).lesson,
                            'mark': this.gradebooks.get(gradebookId).records.get(pupilId).mark}
                        ]
                        }
                return res_obj
    
        return "No Data found"
    }

    async readAll(gradebookId){
        let res = []
        for (let x of this.gradebooks){
            res.push(x)
        }
        return res
    }
}