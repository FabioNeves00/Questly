import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.number().int().min(0).max(65535),
  DATABASE_NAME: z.string(),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.number().int().min(0).max(65535),
});

export type IEnv = z.infer<typeof envSchema>;
