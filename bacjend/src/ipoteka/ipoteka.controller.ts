import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { IpotekaService } from './ipoteka.service';
import { CreateCreditDto } from 'src/shared/credit.dto';
import { ReportService } from 'src/report/report.service';
import { Response } from 'express';
import { IPOTEKA_TERMS_VALUES } from './const';
import { getMonthlyPayment, getOverpayment, getTotalPayout } from '../helpers';

@Controller('ipoteka')
export class IpotekaController {
  constructor(
    private ipotekaService: IpotekaService,
    private reportService: ReportService,
  ) {}

  @Post()
  create(@Body() dto: CreateCreditDto) {
    return this.ipotekaService.create(dto);
  }

  @Get('/report')
  async getReports(@Res() res: Response) {
    const data = await this.ipotekaService.findAll();

    const transformedDataKey = data.map((item) => ({
      'Стоимость недвижимости, ₽': item.price.toString().split('.').join(','),
      'Первоначальный взнос, ₽': item.initialPayment
        .toString()
        .split('.')
        .join(','),
      Срок: IPOTEKA_TERMS_VALUES[item.term],
      'Ставка, %': item.rate.toString().split('.').join(','),
      'Сумма кредита, ₽': `${item.price - item.initialPayment}`,
      'Ежемесячный платеж, ₽': `${+getMonthlyPayment(item).toFixed(2).toLocaleString()}`,
      'Переплата по кредиту, ₽': `${+getOverpayment(item).toFixed(2).toLocaleString()}`,
      'Общая выплата, ₽': `${+getTotalPayout(item).toFixed(2).toLocaleString()}`,
    }));

    const excelBase64 = this.reportService.createReport(
      transformedDataKey,
      'Ипотека',
    );
    res.send(excelBase64);
  }
}
