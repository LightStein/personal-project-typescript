import { IDGenerator } from './IDGenerator'
const IDGen = new IDGenerator("Group")
export interface Group {"id":string, "room":number,"pupils":Array<string>}

export class GroupsModel{
    groups: Map<string,Group>

    constructor(){
        this.groups = new Map()

    }

    async add(room: number){

        const id = IDGen.getID()
        this.groups.set(id,{"id":id, "room": room,"pupils": []})
        return id
    }

    async addPupil(groupId: string, pupilId:string){
        this.groups.get(groupId)["pupils"].push(pupilId);
    }

    async removePupil(groupId: string, pupilId: string){
        let i = (this.groups.get(groupId)["pupils"].indexOf(pupilId));
        delete this.groups.get(groupId)["pupils"][i];
        this.groups.get(groupId)["pupils"].splice(i,1);
    }

    async update(groupId:string, room:Number){
        this.groups.get(groupId)["room"] = room["room"]
    }

    async read(groupId: string){
        return this.groups.get(groupId)
    }
    
    async readAll(){
        return this.groups
    }
}
