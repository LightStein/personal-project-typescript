import { IDGenerator } from "./IDGenerator";
const IDGen = new IDGenerator("Group");
export interface Group {"id": string; "room": number; "pupils": Array<string>; }

export class GroupsModel {
    public groups: Map<string, Group>;

    constructor() {
        this.groups = new Map();

    }

    public async add(room: number) {

        const id = IDGen.getID();
        this.groups.set(id, {id, room, pupils: []});
        return id;
    }

    public async addPupil(groupId: string, pupilId: string){
        this.groups.get(groupId).pupils.push(pupilId);
    }

    public async removePupil(groupId: string, pupilId: string) {
        let i = (this.groups.get(groupId).pupils.indexOf(pupilId));
        delete this.groups.get(groupId).pupils[i];
        this.groups.get(groupId).pupils.splice(i, 1);
    }

    public async update(groupId: string, room: {room: number}) {
        this.groups.get(groupId).room = room.room;
    }

    public async read(groupId: string) {
        return this.groups.get(groupId);
    }

    public async readAll() {
        return this.groups;
    }
}
