import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Credit {
  @Prop()
  price: number;

  @Prop()
  initialPayment: number;

  @Prop()
  term: number;

  @Prop()
  rate: number;
}
