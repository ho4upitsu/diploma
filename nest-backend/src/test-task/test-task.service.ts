import { CreateTestTaskDto } from './dto/create-test-task.dto';
import { UpdateTestTaskDto } from './dto/update-test-task.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Module } from '../module/entities/modules.schema';
import { TestTask } from './entities/test-task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TestTaskService {
  constructor(
    @InjectModel(TestTask.name) private readonly testTaskModel: Model<TestTask>,
    @InjectModel(Module.name) private readonly moduleModel: Model<Module>,
  ) {}
  async create(createTestTaskDto: CreateTestTaskDto): Promise<TestTask> {
    try {
      const { module_id, name, options, correct_answer } = createTestTaskDto;
      const module = await this.moduleModel.findById(module_id).exec();
      if (!module) {
        throw new HttpException('Module not found', HttpStatus.NOT_FOUND);
      }
      const isCorrectAnswer = options.includes(correct_answer);
      if (!isCorrectAnswer) {
        throw new HttpException(
          'Correct answer is not in options',
          HttpStatus.BAD_REQUEST,
        );
      }
      const testTask = new this.testTaskModel({
        module_id,
        name,
        options,
        correct_answer,
      });
      return await testTask.save();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<TestTask[] | null> {
    try {
      const testTasks = await this.testTaskModel.find().exec();
      if (!testTasks) {
        throw new HttpException('Test tasks not found', HttpStatus.NO_CONTENT);
      }
      return testTasks;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findOne(id: string): Promise<TestTask | null> {
    try {
      const testTask = this.testTaskModel.findById(id).exec();
      if (!testTask) {
        throw new HttpException('Test task not found', HttpStatus.NOT_FOUND);
      }
      return testTask;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findTestTasksForModule(module_id: string): Promise<TestTask[] | null> {
    try {
      const testTasks = await this.testTaskModel.find({ module_id }).exec();
      if (!testTasks) {
        throw new HttpException('Test tasks not found', HttpStatus.NO_CONTENT);
      }
      return testTasks;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: string) {
    try {
      const testTask = await this.testTaskModel.findByIdAndDelete(id).exec();
      if (!testTask) {
        throw new HttpException('Test task not found', HttpStatus.NOT_FOUND);
      }
      return testTask;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
