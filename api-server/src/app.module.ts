import { Module } from '@nestjs/common';
import { TodoService } from './todo/todo.service';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule],
})
export class AppModule {}
