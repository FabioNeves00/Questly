import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UsersService } from '@user/users.service';
import { hash, verify } from 'argon2';
import { SignUpDto } from './dto/credential-sign-up.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '@common/types/jwt';
import { FastifyRequestWithCookie } from '@common/types/fastify-with-cookie';
import { DEFAULT_COOKIE_NAME } from '@common/constants';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) { }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (user.length === 0) throw new NotFoundException('User not found');

    const matchPassword = await verify(user[0].password, password);
    if (!matchPassword) throw new NotFoundException('Invalid credentials');

    return user;
  }

  async signUp(signUpDto: SignUpDto) {
    const user = await this.usersService.findOneByEmail(signUpDto.email);
    if (user.length > 0) throw new BadRequestException('Email already been used');

    const hashedPassword = await hash(signUpDto.password);
    const newUser = await this.usersService.create({ ...signUpDto, password: hashedPassword })
    const token = this.generateToken({
      email: newUser[0].email,
      sub: newUser[0].id,
    });
    return { user: newUser, token };
  }

  async signIn(email: string, password: string) {
    const user = await this.validateUser(email, password);
    const token = this.generateToken({
      email: user[0].email,
      sub: user[0].id,
    });
    delete user[0].password;
    return { user, token };
  }

  async getUserFromTokenInRequest(request: FastifyRequestWithCookie): Promise<JwtPayload> {
    const isInHeader = request.headers.authorization !== undefined;
    const isInCookie = request.cookies[DEFAULT_COOKIE_NAME] !== undefined;

    if (!isInHeader && !isInCookie) {
      throw new NotFoundException('No session found');
    }

    const token = isInHeader ? request.headers.authorization.replace("Bearer", "").trim() : request.cookies[DEFAULT_COOKIE_NAME];
    const replacedToken = token.split(".");
    replacedToken.pop();
    const joinedToken = replacedToken.join(".");
    return this.jwtService.decode(joinedToken);
  }

  async verifySessionInRequest(request: FastifyRequestWithCookie): Promise<JwtPayload> {
    const isInHeader = request.headers.authorization !== undefined;
    const isInCookie = request.cookies[DEFAULT_COOKIE_NAME] !== undefined;

    if (!isInHeader && !isInCookie) {
      throw new NotFoundException('No session found');
    }

    const token = isInHeader ? request.headers.authorization.replace("Bearer", "").trim() : request.cookies[DEFAULT_COOKIE_NAME];
    const replacedToken = token.split(".");
    replacedToken.pop();
    const joinedToken = replacedToken.join(".");
    return this.jwtService.verify(joinedToken);
  }

  private generateToken(user: { email: string, sub: string }) {
    return this.jwtService.sign(user);
  }
}
