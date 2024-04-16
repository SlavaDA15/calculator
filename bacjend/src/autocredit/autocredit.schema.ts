import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Credit } from 'src/shared/credit.schema';

export type AutocreditDocument = HydratedDocument<Autocredit>;

@Schema()
export class Autocredit extends Credit {}

export const AutocreditSchema = SchemaFactory.createForClass(Autocredit);
