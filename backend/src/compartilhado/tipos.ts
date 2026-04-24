import "@fastify/jwt";

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: {
      sub: string;
      nome: string;
      email: string;
      papel: string;
    };
    user: {
      sub: string;
      nome: string;
      email: string;
      papel: string;
    };
  }
}
