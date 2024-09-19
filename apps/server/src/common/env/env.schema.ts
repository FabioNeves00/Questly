import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.string().transform((v) => parseInt(v)),
  DATABASE_NAME: z.string(),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.string().transform((v) => parseInt(v)),
  COOKIE_SECRET: z.string(),
  JWT_SECRET: z.string(),
});

export type IEnv = z.infer<typeof envSchema>;
