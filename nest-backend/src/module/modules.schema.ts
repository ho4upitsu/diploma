import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ModuleDocument = HydratedDocument<Module>;

@Schema()
export class Module {
  @Prop({
    required: true,
    unique: true,
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
  })
  description: string;
}

export const ModuleSchema = SchemaFactory.createForClass(Module);
