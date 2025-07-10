import { uuid } from "uuidv4";

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string){
        // this.name = props.name; forma padrão
        Object.assign(this, props); // passa as propriedades para o this

        if(!id) {
            this.id = uuid();
        }
    }
}