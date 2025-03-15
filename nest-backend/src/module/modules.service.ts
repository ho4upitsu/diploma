import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Module } from './entities/modules.schema';
import { Model } from 'mongoose';
import { CreateModuleDto } from './dto/create-module.dto';

@Injectable()
export class ModuleService {
  constructor(
    @InjectModel(Module.name) private readonly moduleModel: Model<Module>,
  ) {}

  async create(createModuleDto: CreateModuleDto): Promise<Module> {
    console.log(createModuleDto);
    const { name, description } = createModuleDto;
    const module = new this.moduleModel({ name, description });
    return module.save();
  }

  async findAll(): Promise<Module[] | null> {
    return this.moduleModel.find().exec();
  }

  async findOne(id: string): Promise<Module | null> {
    console.log(id);
    const module = await this.moduleModel.findById(id).exec();
    if (!module) {
      throw new HttpException('Module not found', HttpStatus.NOT_FOUND);
    }
    return module;
  }

  async remove(id: string): Promise<Module | null> {
    const module = await this.moduleModel.findById(id).exec();
    if (!module) {
      throw new HttpException('Module not found', HttpStatus.NOT_FOUND);
    }
    return module;
  }
}
