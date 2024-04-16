import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PensiyaDocument = HydratedDocument<Pensiya>;

@Schema()
export class Pensiya {
  @Prop()
  point: number;

  @Prop()
  pointValue: number;

  @Prop()
  fixedPayment: number;
}

export const PensiyaSchema = SchemaFactory.createForClass(Pensiya);
