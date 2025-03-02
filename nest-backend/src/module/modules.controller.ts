import {
  Controller,
  HttpException,
  Post,
  HttpStatus,
  Get,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ModuleService } from './modules.service';
import { CreateModuleDto } from './create-module.dto';
import { Module } from './modules.schema';

@Controller('module')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Post('/createModule')
  async create(@Body() createModuleDto: CreateModuleDto): Promise<Module> {
    try {
      const module = await this.moduleService.create(createModuleDto);
      return module;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/getAllModules')
  async findAll(): Promise<Module[] | null> {
    try {
      const modules = await this.moduleService.findAll();
      return modules;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/getModule/:id')
  async findOne(@Param('id') id: string): Promise<Module | null> {
    try {
      const module = await this.moduleService.findOne(id);
      return module;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/deleteModule/:id')
  async remove(@Param('id') id: string): Promise<Module | null> {
    try {
      const deletedModule = await this.moduleService.remove(id);
      return deletedModule;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
