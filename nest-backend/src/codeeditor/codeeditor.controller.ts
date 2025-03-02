import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CodeService } from './codeeditor.service';

@Controller('codeeditor')
export class CodeeditorController {
  constructor(private readonly codeeditorService: CodeService) {}

  @Post('/execute')
  async executeCode(@Body() { code }: { code: string }) {
    try {
      // Викликаємо сервіс з отриманим кодом
      const result = await this.codeeditorService.executeCode(code);
      return result; // Повертаємо результат виконання
    } catch (error) {
      // Якщо сталася помилка, кидаємо відповідну помилку
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
