import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ipoteka } from './ipoteka.schema';
import { Model } from 'mongoose';
import { CreateCreditDto } from 'src/shared/credit.dto';

@Injectable()
export class IpotekaService {
  constructor(
    @InjectModel(Ipoteka.name) private ipotekaModel: Model<Ipoteka>,
  ) {}

  async create(createIpotekaDto: CreateCreditDto): Promise<Ipoteka> {
    const createdIpoteka = new this.ipotekaModel(createIpotekaDto);
    return createdIpoteka.save();
  }

  async findAll() {
    return await this.ipotekaModel.find({}, { _id: 0, __v: 0 }).lean().exec();
  }
}
