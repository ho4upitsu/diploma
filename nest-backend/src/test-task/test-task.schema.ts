import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ModuleDocument = HydratedDocument<TestTask>;

@Schema()
export class TestTask {
  @Prop({
    required: true,
  })
  module_id: Types.ObjectId;

  @Prop({
    required: true,
    unique: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  options: string[];

  @Prop({
    required: true,
  })
  correct_answer: string;
}

export const TestTaskSchema = SchemaFactory.createForClass(TestTask);
