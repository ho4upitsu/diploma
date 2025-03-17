import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CodeTask } from './entities/code-task.schema';
import { Module } from '../module/entities/modules.schema';
import { CreateCodeTaskDto } from './dto/code-task.dto';
import { Model, Types } from 'mongoose';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CodeTaskService {
  constructor(
    @InjectModel(CodeTask.name) private readonly codeTaskModel: Model<CodeTask>,
    @InjectModel(Module.name) private readonly moduleModel: Model<Module>,
    private readonly httpService: HttpService,
  ) {}

  async create(createCodeTaskDto: CreateCodeTaskDto): Promise<CodeTask> {
    try {
      const { module_id, name, description, validationRules } =
        createCodeTaskDto;

      if (!Types.ObjectId.isValid(module_id)) {
        throw new HttpException('Invalid module ID', HttpStatus.BAD_REQUEST);
      }

      const module = await this.moduleModel.findById(module_id);
      if (!module) {
        throw new HttpException('Module not found', HttpStatus.NOT_FOUND);
      }

      const codeTask = new this.codeTaskModel({
        module_id,
        name,
        description,
        validationRules,
      });

      return await codeTask.save();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: string): Promise<CodeTask | null> {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new HttpException('Invalid task ID', HttpStatus.BAD_REQUEST);
      }

      const codeTask = await this.codeTaskModel.findById(id).lean();
      if (!codeTask) {
        throw new HttpException('Code task not found', HttpStatus.NOT_FOUND);
      }

      return codeTask;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<CodeTask[]> {
    try {
      return await this.codeTaskModel.find().lean();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findCodeTaskForModule(module_id: string): Promise<CodeTask> {
    try {
      if (!Types.ObjectId.isValid(module_id)) {
        throw new HttpException('Invalid module ID', HttpStatus.BAD_REQUEST);
      }

      const codeTask = await this.codeTaskModel.findOne({ module_id }).lean();

      if (!codeTask) {
        throw new HttpException(
          'Code task for module not found',
          HttpStatus.NOT_FOUND,
        );
      }
      return codeTask;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async executeCodeTask(code: string): Promise<any> {
    try {
      const response = await this.httpService
        .post('http://localhost:5001/express/execute', code)
        .toPromise();
      return response?.data;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
