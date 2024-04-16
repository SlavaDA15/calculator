import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { CalculatorsService } from './calculators.service';
import { Response } from 'express';

@Controller('calculators')
export class CalculatorsController {
  constructor(private calculatorService: CalculatorsService) {}

  @Get()
  async findAll(@Res() res: Response, @Query() query: { path?: string }) {
    if (query.path) {
      const foundedRoute = await this.calculatorService.findByPath(query.path);
      if (foundedRoute.length) {
        res.send([]);
      } else {
        throw new NotFoundException();
      }

      return;
    }
    const routes = await this.calculatorService.findAll();
    res.send(routes);
  }

  @Get('/routes')
  async getRoutes(@Res() res: Response) {
    const routes = await this.calculatorService.findAllEnables();
    res.send(routes);
  }

  @Put(':id')
  async updateRoute(
    @Param('id') id: string,
    @Body() value: { value: boolean },
    @Res() res: Response,
  ) {
    const item = await this.calculatorService.updateRoute(id, value);
    res.send(item);
  }
}
