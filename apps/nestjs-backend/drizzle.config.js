import * as path from "node:path";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/common/database/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: {
      rejectUnauthorized: false,
      ca: path.resolve(__dirname, "src/common/database", "global-bundle.pem"),
    },
  },
  verbose: true,
  strict: true,
});
