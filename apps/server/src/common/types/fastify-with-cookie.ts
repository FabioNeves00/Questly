import { FastifyRequest } from "fastify";

export type FastifyRequestWithCookie = FastifyRequest & { cookies: Record<string, string> };
