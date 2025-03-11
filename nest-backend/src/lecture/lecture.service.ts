import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lecture } from './lecture.schema';
import { Model } from 'mongoose';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { Module } from '../module/modules.schema';

@Injectable()
export class LectureService {
  constructor(
    @InjectModel(Lecture.name) private readonly lectureModel: Model<Lecture>,
    @InjectModel(Module.name) private readonly moduleModel: Model<Module>,
  ) {}

  async create(createLectureDto: CreateLectureDto): Promise<Lecture> {
    try {
      const { module_id, name, content } = createLectureDto;
      const module = await this.moduleModel.findById(module_id).exec();
      if (!module) {
        throw new HttpException('Module not found', HttpStatus.NOT_FOUND);
      }
      const lecture = new this.lectureModel({
        module_id,
        name,
        content,
      });
      await lecture.save();
      return lecture;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<Lecture[] | null> {
    try {
      const lectures = await this.lectureModel.find().exec();
      if (!lectures) {
        throw new HttpException('Lectures not found', HttpStatus.NO_CONTENT);
      }
      return lectures;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: string): Promise<Lecture | null> {
    try {
      const lecture = await this.lectureModel.findById(id).exec();
      if (!lecture) {
        throw new HttpException('Lecture not found', HttpStatus.NOT_FOUND);
      }
      return lecture;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: string): Promise<Lecture | null> {
    try {
      const lecture = await this.lectureModel.findByIdAndDelete(id).exec();
      if (!lecture) {
        throw new HttpException('Lecture not found', HttpStatus.NOT_FOUND);
      }
      return lecture;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
