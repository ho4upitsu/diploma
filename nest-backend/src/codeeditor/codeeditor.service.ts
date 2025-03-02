import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CodeService {
  async executeCode(code: string): Promise<string> {
    try {
      const response = await axios.post('http://localhost:5001/execute', {
        code,
      });

      // Перевірка, чи статус відповіді є 200
      if (response.status === 200) {
        return response.data; // Повертаємо результат виконання коду
      }

      // Якщо статус не 200, кидаємо виняток
      throw new HttpException('Execution failed', HttpStatus.BAD_REQUEST);
    } catch (error) {
      // Обробка помилок та передача повідомлення з помилкою
      throw new HttpException(
        error.response ? error.response.data : error.message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
