import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ModuleDocument = HydratedDocument<Lecture>;

@Schema()
export class Lecture {
  @Prop({
    required: true,
    unique: true,
  })
  module_id: Types.ObjectId;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  content: string;
}

export const LectureSchema = SchemaFactory.createForClass(Lecture);
