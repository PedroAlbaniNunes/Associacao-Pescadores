import "dotenv/config";
import { z } from "zod";

const esquema = z.object({
  DATABASE_URL: z.string().min(1),
  JWT_SEGREDO: z.string().min(8),
  PORTA: z.coerce.number().default(3333),
  HOST: z.string().default("0.0.0.0"),
  ORIGEM_PERMITIDA: z.string().default("http://localhost:5173"),
  ADMIN_EMAIL_PADRAO: z.string().email().default("admin@pescadores.local"),
  ADMIN_SENHA_PADRAO: z.string().min(4).default("admin123"),
  ADMIN_NOME_PADRAO: z.string().default("Administrador"),
});

const resultado = esquema.safeParse(process.env);

if (!resultado.success) {
  console.error("❌ Variáveis de ambiente inválidas:", resultado.error.format());
  throw new Error("Variáveis de ambiente inválidas");
}

export const ambiente = resultado.data;
