import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pensiya } from './pensiya.schema';
import { Model } from 'mongoose';
import { CreatePensiyaDto } from './pensiya.dto';

@Injectable()
export class PensiyaService {
  constructor(
    @InjectModel(Pensiya.name) private pensiyaModel: Model<Pensiya>,
  ) {}

  async create(createPensiyaDto: CreatePensiyaDto): Promise<Pensiya> {
    const createdPensiya = new this.pensiyaModel(createPensiyaDto);
    return createdPensiya.save();
  }

  async findAll() {
    return await this.pensiyaModel.find({}, { _id: 0, __v: 0 }).lean().exec();
  }
}
