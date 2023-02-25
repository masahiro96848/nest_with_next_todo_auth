import { Injectable } from '@nestjs/common';
import { Todo, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateTodoDto } from 'src/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Todo[]> {
    return await this.prisma.todo.findMany();
  }

  async create(createTodoDto: CreateTodoDto) {
    return await this.prisma.todo.create({
      data: {
        title: createTodoDto.title,
        content: createTodoDto.content,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.todo.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: {
        id,
      },
      data: {
        title: updateTodoDto.title,
        content: updateTodoDto.content,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }
}
