import { Module } from '@nestjs/common';
import { CalculatorsController } from './calculators.controller';
import { CalculatorsService } from './calculators.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Calculator, CalculatorSchema } from './calculators.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Calculator.name, schema: CalculatorSchema },
    ]),
  ],
  controllers: [CalculatorsController],
  providers: [CalculatorsService],
})
export class CalculatorsModule {}
