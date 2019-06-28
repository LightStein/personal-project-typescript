import { GroupsModel, IDGenerator, LMSModel, PupilsModel, TeachersModel} from "./index";

const IDGen = new IDGenerator("Gradebook");
interface Record {"pupilId": string; "teacherId": string; "subjectId": string; "lesson": number; "mark": number; }
interface Gradebook {"level": number; "groupId": string; "records": Map<string, Record>; }
export class GradebooksModel {
    public teachers: TeachersModel;
    public pupils: PupilsModel;
    public groups: GroupsModel;
    public lms: LMSModel;
    public gradebooks: Map<string, Gradebook>;

    constructor(groups: GroupsModel, teachers: TeachersModel, pupils: PupilsModel, lms: LMSModel) {
        this.teachers = teachers;
        this.pupils = pupils;
        this.groups = groups;
        this.lms = lms;
        this.gradebooks = new Map();
    }

    public async add(level: number, groupId: string){

        const id = IDGen.getID();

        this.gradebooks.set(id, { level, groupId, records: new Map()});
        return id;
    }

    public async addRecord(gradebookId: string, record: Record) {
        this.gradebooks.get(gradebookId).records.set(record.pupilId, record);
    }

    public async read(gradebookId: string, pupilId: string) {

            const pp = this.pupils.pupils.get(pupilId);
            const tc = this.teachers.teachers.get(this.gradebooks.get(gradebookId).records.get(pupilId).teacherId);
            const subj = this.lms.subjects.get(this.gradebooks.get(gradebookId).records.get(pupilId).subjectId);
            const resObj = {

                name: `${pp.name.first} ${pp.name.last}`,
                records: [
                    {
                    lesson: this.gradebooks.get(gradebookId).records.get(pupilId).lesson,
                    mark: this.gradebooks.get(gradebookId).records.get(pupilId).mark,
                    subject: subj.title,
                    teacher: `${tc.name.first} ${pp.name.last}`},
                ],
            };
            return resObj;
    }

    public async readAll(gradebookId: string) {
        const res = [];
        for (let x of this.gradebooks) {
            res.push(x);
        }
        return res;
    }
}
