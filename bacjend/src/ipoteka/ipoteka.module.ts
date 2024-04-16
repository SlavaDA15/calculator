import { Module } from '@nestjs/common';
import { IpotekaController } from './ipoteka.controller';
import { IpotekaService } from './ipoteka.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Ipoteka, IpotekaSchema } from './ipoteka.schema';
import { ReportModule } from 'src/report/report.module';

@Module({
  imports: [
    ReportModule,
    MongooseModule.forFeature([{ name: Ipoteka.name, schema: IpotekaSchema }]),
  ],
  controllers: [IpotekaController],
  providers: [IpotekaService],
})
export class IpotekaModule {}
