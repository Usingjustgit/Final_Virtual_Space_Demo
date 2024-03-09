import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthLocalStratergy } from './auth.local';
import { UserModule } from 'src/user_information/user.module';
import { JwtStratergy } from './auth.jwt';

@Module({
  imports: [
    JwtModule.register({
      secretOrKeyProvider: () => process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    forwardRef(() => UserModule),
  ],
  controllers: [],
  providers: [AuthService, AuthLocalStratergy, JwtStratergy],
  exports: [AuthService],
})
export class AuthModule {}
