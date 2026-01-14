import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
    constructor(private configService: ConfigService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const apiKey = request.headers['x-api-key'];
        const validApiKey = this.configService.get<string>('API_KEY');

        if (!apiKey || apiKey !== validApiKey) {
            throw new UnauthorizedException('Llave no válida');
        };

        return true;
    }
};

//is this a class with a method that checks the validity of the api key returning a boolean to the caller?