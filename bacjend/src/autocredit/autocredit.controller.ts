import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AutocreditService } from './autocredit.service';
import { CreateCreditDto } from 'src/shared/credit.dto';
import { ReportService } from 'src/report/report.service';
import { AUTOCREDIT_TERMS_VALUES } from './const';
import { getMonthlyPayment, getOverpayment, getTotalPayout } from 'src/helpers';

@Controller('autocredit')
export class AutocreditController {
  constructor(
    private autoCreditService: AutocreditService,
    private reportService: ReportService,
  ) {}

  @Post()
  create(@Body() dto: CreateCreditDto) {
    return this.autoCreditService.create(dto);
  }

  @Get('/report')
  async getReport(@Res() res: Response) {
    const data = await this.autoCreditService.findAll();
    const transformedDataKey = data.map((item) => ({
      'Стоимость автомобиля, ₽': item.price.toString().split('.').join(','),
      'Первоначальный взнос, ₽': item.initialPayment
        .toString()
        .split('.')
        .join(','),
      Срок: AUTOCREDIT_TERMS_VALUES[item.term],
      'Ставка, %': item.rate.toString().split('.').join(','),
      'Сумма кредита, ₽': `${item.price - item.initialPayment}`,
      'Ежемесячный платеж, ₽': `${+getMonthlyPayment(item).toFixed(2).toLocaleString()}`,
      'Переплата по кредиту, ₽': `${+getOverpayment(item).toFixed(2).toLocaleString()}`,
      'Общая выплата, ₽': `${+getTotalPayout(item).toFixed(2).toLocaleString()}`,
    }));

    const excelBase64 = this.reportService.createReport(
      transformedDataKey,
      'Автокредит',
    );
    res.send(excelBase64);
  }
}
