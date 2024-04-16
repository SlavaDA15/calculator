import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  private isAdmin = false;

  @Post('/signin')
  async login(@Res() res: Response) {
    this.isAdmin = true;
    res.send();
  }

  @Post('/signout')
  signout(@Res() res: Response) {
    this.isAdmin = false;
    res.send();
  }

  @Get()
  async getAuth(@Res() res: Response) {
    res.send({ isAdmin: this.isAdmin });
  }
}
