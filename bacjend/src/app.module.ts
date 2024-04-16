import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IpotekaModule } from './ipoteka/ipoteka.module';
import { AutocreditModule } from './autocredit/autocredit.module';
import { PensiyaModule } from './pensiya/pensiya.module';
import { ReportModule } from './report/report.module';
import { CalculatorsModule } from './calculators/calculators.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/calculators'),
    IpotekaModule,
    AutocreditModule,
    PensiyaModule,
    ReportModule,
    CalculatorsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
