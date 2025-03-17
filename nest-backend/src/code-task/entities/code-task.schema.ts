import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type MongooseModule = HydratedDocument<CodeTask>;

@Schema()
export class CodeTask {
  @Prop({ required: true })
  module_id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({
    type: [String],
    enum: ['promise', 'array', 'object', 'async'],
    default: [],
  })
  validationRules: string[];
}

export const CodeTaskSchema = SchemaFactory.createForClass(CodeTask);
