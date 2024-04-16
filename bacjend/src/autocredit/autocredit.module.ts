import { Module } from '@nestjs/common';
import { AutocreditController } from './autocredit.controller';
import { AutocreditService } from './autocredit.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Autocredit, AutocreditSchema } from './autocredit.schema';
import { ReportModule } from 'src/report/report.module';

@Module({
  imports: [
    ReportModule,
    MongooseModule.forFeature([
      { name: Autocredit.name, schema: AutocreditSchema },
    ]),
  ],
  controllers: [AutocreditController],
  providers: [AutocreditService],
})
export class AutocreditModule {}
