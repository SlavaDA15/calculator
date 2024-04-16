import { Injectable } from '@nestjs/common';
import { Autocredit } from './autocredit.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCreditDto } from 'src/shared/credit.dto';

@Injectable()
export class AutocreditService {
  constructor(
    @InjectModel(Autocredit.name) private autoCreditModel: Model<Autocredit>,
  ) {}

  async create(createAutocreditDto: CreateCreditDto): Promise<Autocredit> {
    const createdAutocredit = new this.autoCreditModel(createAutocreditDto);
    return createdAutocredit.save();
  }

  async findAll() {
    return await this.autoCreditModel
      .find({}, { _id: 0, __v: 0 })
      .lean()
      .exec();
  }
}
