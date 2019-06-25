export class IDGenerator{
    type: string
    code: string
    constructor(type: string){
        const time = new Date();
        this.type = String(type).toLowerCase()
        this.code = ((time.getMinutes() * time.getMilliseconds()).toString())
    }

    getID(){
        let header = ''
        switch(this.type){
            case "teacher":
                header = "T"
                break;
            case "pupil":
                header = "P"
                break;
            case "group":
                header = "G"
                break;
            case "gradebook":
                header = "B"
                break;
            case "subject":
                header = "S"
                break;
        }
        return header + this.code
    }


}