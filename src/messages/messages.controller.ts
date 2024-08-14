import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
constructor(public messageService: MessagesService ){ }
    @Get()
     listMessages(){
   return this.messageService.findAll();

    }

    @Post()
    createMessage(@Body() body:CreateMessageDto){
      return this.messageService.createMessage(body.content);

    }

    @Get('/:id')
   async getMessageById(@Param('id') id:string){
   const message = await this.messageService.findOne(id);

   if(!message){
    throw new NotFoundException("message not found");
   }

   return message;

    }
}
