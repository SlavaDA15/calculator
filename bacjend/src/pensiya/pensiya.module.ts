import { Module } from '@nestjs/common';
import { PensiyaController } from './pensiya.controller';
import { PensiyaService } from './pensiya.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Pensiya, PensiyaSchema } from './pensiya.schema';
import { ReportModule } from 'src/report/report.module';

@Module({
  imports: [
    ReportModule,
    MongooseModule.forFeature([{ name: Pensiya.name, schema: PensiyaSchema }]),
  ],
  controllers: [PensiyaController],
  providers: [PensiyaService],
})
export class PensiyaModule {}
