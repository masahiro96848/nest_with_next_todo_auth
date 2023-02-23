import { Injectable } from '@nestjs/common';
import { Todo, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Todo[]> {
    return await this.prisma.todo.findMany();
  }
}
