import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Credit } from 'src/shared/credit.schema';

export type IpotekaDocument = HydratedDocument<Ipoteka>;

@Schema()
export class Ipoteka extends Credit {}

export const IpotekaSchema = SchemaFactory.createForClass(Ipoteka);
