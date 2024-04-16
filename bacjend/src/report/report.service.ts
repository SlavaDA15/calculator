import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';

@Injectable()
export class ReportService {
  constructor() {}

  createReport(data: any[], sheetName: string) {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(workbook, worksheet, `${sheetName}`);

    const excelBase64 = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'base64',
    });

    return excelBase64;
  }
}
