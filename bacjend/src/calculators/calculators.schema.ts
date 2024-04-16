import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CalculatorDocument = HydratedDocument<Calculator>;

@Schema()
export class Calculator {
  @Prop()
  label: string;

  @Prop()
  path: string;

  @Prop()
  enabled: boolean;
}

export const CalculatorSchema = SchemaFactory.createForClass(Calculator);
