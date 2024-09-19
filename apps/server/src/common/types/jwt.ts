export type JwtBase = {
  sub: string;
  iat: number;
  exp: number;
}

export type JwtPayload = JwtBase & {
  email: string;
}
