import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { PensiyaService } from './pensiya.service';
import { CreatePensiyaDto } from './pensiya.dto';
import { ReportService } from 'src/report/report.service';

@Controller('pensiya')
export class PensiyaController {
  constructor(
    private pensiyaService: PensiyaService,
    private reportService: ReportService,
  ) {}

  @Post()
  create(@Body() dto: CreatePensiyaDto) {
    return this.pensiyaService.create(dto);
  }

  @Get('/report')
  async getReport(@Res() res: Response) {
    const data = await this.pensiyaService.findAll();
    const transformedDataKey = data.map((item) => ({
      'Пенсионные баллы': item.point.toString().split('.').join(','),
      'Стоимость балла': item.pointValue.toString().split('.').join(','),
      'Фисированная выплата': item.fixedPayment.toString().split('.').join(','),
      'Страховая выплата, ₽': `${(item.point * item.pointValue + item.fixedPayment).toFixed(2)}`,
    }));

    const excelBase64 = this.reportService.createReport(
      transformedDataKey,
      'Автокредит',
    );
    res.send(excelBase64);
  }
}
