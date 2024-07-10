import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guards';

@UseGuards(GoogleAuthGuard)
@Controller('auth')
export class AuthController {
  @Get('google/login')
  handleLogin() {
    return { msg: 'google authentication' };
  }

  // api/auth/google/redirect
  @Get('google/redirect')
  handleRedirect() {
    return { msg: 'OK' };
  }
}
