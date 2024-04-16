import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Calculator } from './calculators.schema';
import { Model } from 'mongoose';

@Injectable()
export class CalculatorsService {
  constructor(
    @InjectModel(Calculator.name) private calculatorMode: Model<Calculator>,
  ) {}

  async findAllEnables() {
    return await this.calculatorMode
      .find({ enabled: true }, { _id: 0, __v: 0, enabled: 0 })
      .lean()
      .exec();
  }

  async findAll() {
    return await this.calculatorMode.find({}, { _id: 0, __v: 0 }).lean().exec();
  }

  async updateRoute(id: string, value: { value: boolean }) {
    return await this.calculatorMode.findOneAndUpdate(
      { id },
      { $set: { enabled: value.value } },
      { new: true },
    );
  }

  async findByPath(path: string) {
    return await this.calculatorMode.find({ path, enabled: true });
  }
}
