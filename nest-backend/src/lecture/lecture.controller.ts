import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { CreateLectureDto } from './dto/create-lecture.dto';

@Controller('lecture')
export class LectureController {
  constructor(private readonly lectureService: LectureService) {}

  @Post('/create')
  create(@Body() createLectureDto: CreateLectureDto) {
    return this.lectureService.create(createLectureDto);
  }

  @Get('/getAllLectures')
  findAll() {
    return this.lectureService.findAll();
  }

  @Get('/getLecture/:id')
  findOne(@Param('id') id: string) {
    return this.lectureService.findOne(id);
  }

  @Get('/getLectureForModule/:id')
  findLectureForModule(@Param('id') id: string) {
    return this.lectureService.findLectureForModule(id);
  }

  @Delete('/deleteLecture/:id')
  remove(@Param('id') id: string) {
    return this.lectureService.remove(id);
  }
}
