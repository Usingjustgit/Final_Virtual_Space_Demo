import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

export class RoleGaurd implements CanActivate {
  constructor() {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> | any {
    const ctx = context.switchToHttp();
    const req: any = ctx.getRequest<Request>();

    if (!req.user.isAdmin) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
