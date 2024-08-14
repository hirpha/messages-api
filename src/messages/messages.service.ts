import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.reposiitory";

@Injectable()
export class MessagesService{
     

    constructor(public messageRepo :  MessagesRepository){ }


    async findAll(){
        return this.messageRepo.findAll();
    }

    async findOne(id :string){
        return this.messageRepo.findOne(id)
    }

    async createMessage(content: string){
        return this.messageRepo.createMessage(content)
    }
}