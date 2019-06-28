import { IDGenerator } from "./IDGenerator";
const IDGen = new IDGenerator("Pupil");
export type Gender = "male" | "female";
export interface Pupil {
    "name": {"first": string, "last": string};
    "image": string; "dateOfBirth": string;
    "phones": Array<{"phone": string, "primary": boolean}>;
     "sex": "male" | "feSmale"; "description"?: string; }
export class PupilsModel {
    public pupils: Map<string, Pupil>;

    constructor() {
        this.pupils = new Map();
    }

    public async add(pupil: Pupil) {
        // creating random ID starting with P (pupil)
        const id: string = IDGen.getID();

        // using update method for both updating and creating purposes
        this.update(id, pupil);
        return id;
    }

    public async read(targetId: string) {
        // simply returning whole object
        return this.pupils.get(targetId);
    }

    public async update(targetId: string, pupil: Pupil) {
        // appending a new pupil data to pupils object {id: Data}
        this.pupils.set(targetId, pupil);
    }

    public async remove(targetId: string) {
        this.pupils.delete(targetId);
    }
}