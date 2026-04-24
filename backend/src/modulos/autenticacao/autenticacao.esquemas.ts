import { z } from "zod";

export const esquemaLogin = z.object({
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(4, "Senha muito curta"),
});

export type EntradaLogin = z.infer<typeof esquemaLogin>;
