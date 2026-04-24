
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Associado
 * 
 */
export type Associado = $Result.DefaultSelection<Prisma.$AssociadoPayload>
/**
 * Model HistoricoStatusAssociado
 * 
 */
export type HistoricoStatusAssociado = $Result.DefaultSelection<Prisma.$HistoricoStatusAssociadoPayload>
/**
 * Model Loja
 * 
 */
export type Loja = $Result.DefaultSelection<Prisma.$LojaPayload>
/**
 * Model Permissao
 * 
 */
export type Permissao = $Result.DefaultSelection<Prisma.$PermissaoPayload>
/**
 * Model Reuniao
 * 
 */
export type Reuniao = $Result.DefaultSelection<Prisma.$ReuniaoPayload>
/**
 * Model PresencaReuniao
 * 
 */
export type PresencaReuniao = $Result.DefaultSelection<Prisma.$PresencaReuniaoPayload>
/**
 * Model Mensalidade
 * 
 */
export type Mensalidade = $Result.DefaultSelection<Prisma.$MensalidadePayload>
/**
 * Model LogAuditoria
 * 
 */
export type LogAuditoria = $Result.DefaultSelection<Prisma.$LogAuditoriaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.associado`: Exposes CRUD operations for the **Associado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Associados
    * const associados = await prisma.associado.findMany()
    * ```
    */
  get associado(): Prisma.AssociadoDelegate<ExtArgs>;

  /**
   * `prisma.historicoStatusAssociado`: Exposes CRUD operations for the **HistoricoStatusAssociado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoricoStatusAssociados
    * const historicoStatusAssociados = await prisma.historicoStatusAssociado.findMany()
    * ```
    */
  get historicoStatusAssociado(): Prisma.HistoricoStatusAssociadoDelegate<ExtArgs>;

  /**
   * `prisma.loja`: Exposes CRUD operations for the **Loja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lojas
    * const lojas = await prisma.loja.findMany()
    * ```
    */
  get loja(): Prisma.LojaDelegate<ExtArgs>;

  /**
   * `prisma.permissao`: Exposes CRUD operations for the **Permissao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissaos
    * const permissaos = await prisma.permissao.findMany()
    * ```
    */
  get permissao(): Prisma.PermissaoDelegate<ExtArgs>;

  /**
   * `prisma.reuniao`: Exposes CRUD operations for the **Reuniao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reuniaos
    * const reuniaos = await prisma.reuniao.findMany()
    * ```
    */
  get reuniao(): Prisma.ReuniaoDelegate<ExtArgs>;

  /**
   * `prisma.presencaReuniao`: Exposes CRUD operations for the **PresencaReuniao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PresencaReuniaos
    * const presencaReuniaos = await prisma.presencaReuniao.findMany()
    * ```
    */
  get presencaReuniao(): Prisma.PresencaReuniaoDelegate<ExtArgs>;

  /**
   * `prisma.mensalidade`: Exposes CRUD operations for the **Mensalidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensalidades
    * const mensalidades = await prisma.mensalidade.findMany()
    * ```
    */
  get mensalidade(): Prisma.MensalidadeDelegate<ExtArgs>;

  /**
   * `prisma.logAuditoria`: Exposes CRUD operations for the **LogAuditoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogAuditorias
    * const logAuditorias = await prisma.logAuditoria.findMany()
    * ```
    */
  get logAuditoria(): Prisma.LogAuditoriaDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Associado: 'Associado',
    HistoricoStatusAssociado: 'HistoricoStatusAssociado',
    Loja: 'Loja',
    Permissao: 'Permissao',
    Reuniao: 'Reuniao',
    PresencaReuniao: 'PresencaReuniao',
    Mensalidade: 'Mensalidade',
    LogAuditoria: 'LogAuditoria'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuario" | "associado" | "historicoStatusAssociado" | "loja" | "permissao" | "reuniao" | "presencaReuniao" | "mensalidade" | "logAuditoria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Associado: {
        payload: Prisma.$AssociadoPayload<ExtArgs>
        fields: Prisma.AssociadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssociadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssociadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociadoPayload>
          }
          findFirst: {
            args: Prisma.AssociadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssociadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociadoPayload>
          }
          findMany: {
            args: Prisma.AssociadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociadoPayload>[]
          }
          create: {
            args: Prisma.AssociadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociadoPayload>
          }
          createMany: {
            args: Prisma.AssociadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssociadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociadoPayload>[]
          }
          delete: {
            args: Prisma.AssociadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociadoPayload>
          }
          update: {
            args: Prisma.AssociadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociadoPayload>
          }
          deleteMany: {
            args: Prisma.AssociadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssociadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssociadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociadoPayload>
          }
          aggregate: {
            args: Prisma.AssociadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssociado>
          }
          groupBy: {
            args: Prisma.AssociadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssociadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssociadoCountArgs<ExtArgs>
            result: $Utils.Optional<AssociadoCountAggregateOutputType> | number
          }
        }
      }
      HistoricoStatusAssociado: {
        payload: Prisma.$HistoricoStatusAssociadoPayload<ExtArgs>
        fields: Prisma.HistoricoStatusAssociadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoStatusAssociadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoStatusAssociadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoStatusAssociadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoStatusAssociadoPayload>
          }
          findFirst: {
            args: Prisma.HistoricoStatusAssociadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoStatusAssociadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoStatusAssociadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoStatusAssociadoPayload>
          }
          findMany: {
            args: Prisma.HistoricoStatusAssociadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoStatusAssociadoPayload>[]
          }
          create: {
            args: Prisma.HistoricoStatusAssociadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoStatusAssociadoPayload>
          }
          createMany: {
            args: Prisma.HistoricoStatusAssociadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoricoStatusAssociadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoStatusAssociadoPayload>[]
          }
          delete: {
            args: Prisma.HistoricoStatusAssociadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoStatusAssociadoPayload>
          }
          update: {
            args: Prisma.HistoricoStatusAssociadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoStatusAssociadoPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoStatusAssociadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoStatusAssociadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoricoStatusAssociadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoStatusAssociadoPayload>
          }
          aggregate: {
            args: Prisma.HistoricoStatusAssociadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoricoStatusAssociado>
          }
          groupBy: {
            args: Prisma.HistoricoStatusAssociadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoStatusAssociadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoStatusAssociadoCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoStatusAssociadoCountAggregateOutputType> | number
          }
        }
      }
      Loja: {
        payload: Prisma.$LojaPayload<ExtArgs>
        fields: Prisma.LojaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LojaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LojaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>
          }
          findFirst: {
            args: Prisma.LojaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LojaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>
          }
          findMany: {
            args: Prisma.LojaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>[]
          }
          create: {
            args: Prisma.LojaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>
          }
          createMany: {
            args: Prisma.LojaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LojaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>[]
          }
          delete: {
            args: Prisma.LojaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>
          }
          update: {
            args: Prisma.LojaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>
          }
          deleteMany: {
            args: Prisma.LojaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LojaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LojaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LojaPayload>
          }
          aggregate: {
            args: Prisma.LojaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoja>
          }
          groupBy: {
            args: Prisma.LojaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LojaGroupByOutputType>[]
          }
          count: {
            args: Prisma.LojaCountArgs<ExtArgs>
            result: $Utils.Optional<LojaCountAggregateOutputType> | number
          }
        }
      }
      Permissao: {
        payload: Prisma.$PermissaoPayload<ExtArgs>
        fields: Prisma.PermissaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          findFirst: {
            args: Prisma.PermissaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          findMany: {
            args: Prisma.PermissaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>[]
          }
          create: {
            args: Prisma.PermissaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          createMany: {
            args: Prisma.PermissaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>[]
          }
          delete: {
            args: Prisma.PermissaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          update: {
            args: Prisma.PermissaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          deleteMany: {
            args: Prisma.PermissaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          aggregate: {
            args: Prisma.PermissaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissao>
          }
          groupBy: {
            args: Prisma.PermissaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissaoCountArgs<ExtArgs>
            result: $Utils.Optional<PermissaoCountAggregateOutputType> | number
          }
        }
      }
      Reuniao: {
        payload: Prisma.$ReuniaoPayload<ExtArgs>
        fields: Prisma.ReuniaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReuniaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReuniaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          findFirst: {
            args: Prisma.ReuniaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReuniaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          findMany: {
            args: Prisma.ReuniaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>[]
          }
          create: {
            args: Prisma.ReuniaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          createMany: {
            args: Prisma.ReuniaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReuniaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>[]
          }
          delete: {
            args: Prisma.ReuniaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          update: {
            args: Prisma.ReuniaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          deleteMany: {
            args: Prisma.ReuniaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReuniaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReuniaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          aggregate: {
            args: Prisma.ReuniaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReuniao>
          }
          groupBy: {
            args: Prisma.ReuniaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReuniaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReuniaoCountArgs<ExtArgs>
            result: $Utils.Optional<ReuniaoCountAggregateOutputType> | number
          }
        }
      }
      PresencaReuniao: {
        payload: Prisma.$PresencaReuniaoPayload<ExtArgs>
        fields: Prisma.PresencaReuniaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresencaReuniaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaReuniaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresencaReuniaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaReuniaoPayload>
          }
          findFirst: {
            args: Prisma.PresencaReuniaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaReuniaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresencaReuniaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaReuniaoPayload>
          }
          findMany: {
            args: Prisma.PresencaReuniaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaReuniaoPayload>[]
          }
          create: {
            args: Prisma.PresencaReuniaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaReuniaoPayload>
          }
          createMany: {
            args: Prisma.PresencaReuniaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PresencaReuniaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaReuniaoPayload>[]
          }
          delete: {
            args: Prisma.PresencaReuniaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaReuniaoPayload>
          }
          update: {
            args: Prisma.PresencaReuniaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaReuniaoPayload>
          }
          deleteMany: {
            args: Prisma.PresencaReuniaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresencaReuniaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PresencaReuniaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaReuniaoPayload>
          }
          aggregate: {
            args: Prisma.PresencaReuniaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresencaReuniao>
          }
          groupBy: {
            args: Prisma.PresencaReuniaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresencaReuniaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresencaReuniaoCountArgs<ExtArgs>
            result: $Utils.Optional<PresencaReuniaoCountAggregateOutputType> | number
          }
        }
      }
      Mensalidade: {
        payload: Prisma.$MensalidadePayload<ExtArgs>
        fields: Prisma.MensalidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensalidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensalidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensalidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensalidadePayload>
          }
          findFirst: {
            args: Prisma.MensalidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensalidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensalidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensalidadePayload>
          }
          findMany: {
            args: Prisma.MensalidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensalidadePayload>[]
          }
          create: {
            args: Prisma.MensalidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensalidadePayload>
          }
          createMany: {
            args: Prisma.MensalidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensalidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensalidadePayload>[]
          }
          delete: {
            args: Prisma.MensalidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensalidadePayload>
          }
          update: {
            args: Prisma.MensalidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensalidadePayload>
          }
          deleteMany: {
            args: Prisma.MensalidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensalidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MensalidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensalidadePayload>
          }
          aggregate: {
            args: Prisma.MensalidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensalidade>
          }
          groupBy: {
            args: Prisma.MensalidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensalidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensalidadeCountArgs<ExtArgs>
            result: $Utils.Optional<MensalidadeCountAggregateOutputType> | number
          }
        }
      }
      LogAuditoria: {
        payload: Prisma.$LogAuditoriaPayload<ExtArgs>
        fields: Prisma.LogAuditoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogAuditoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogAuditoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          findFirst: {
            args: Prisma.LogAuditoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogAuditoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          findMany: {
            args: Prisma.LogAuditoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>[]
          }
          create: {
            args: Prisma.LogAuditoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          createMany: {
            args: Prisma.LogAuditoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogAuditoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>[]
          }
          delete: {
            args: Prisma.LogAuditoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          update: {
            args: Prisma.LogAuditoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          deleteMany: {
            args: Prisma.LogAuditoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogAuditoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogAuditoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          aggregate: {
            args: Prisma.LogAuditoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogAuditoria>
          }
          groupBy: {
            args: Prisma.LogAuditoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogAuditoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogAuditoriaCountArgs<ExtArgs>
            result: $Utils.Optional<LogAuditoriaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    logsAuditoria: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logsAuditoria?: boolean | UsuarioCountOutputTypeCountLogsAuditoriaArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLogsAuditoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAuditoriaWhereInput
  }


  /**
   * Count Type AssociadoCountOutputType
   */

  export type AssociadoCountOutputType = {
    lojas: number
    permissoes: number
    presencas: number
    mensalidades: number
    historicoStatus: number
  }

  export type AssociadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lojas?: boolean | AssociadoCountOutputTypeCountLojasArgs
    permissoes?: boolean | AssociadoCountOutputTypeCountPermissoesArgs
    presencas?: boolean | AssociadoCountOutputTypeCountPresencasArgs
    mensalidades?: boolean | AssociadoCountOutputTypeCountMensalidadesArgs
    historicoStatus?: boolean | AssociadoCountOutputTypeCountHistoricoStatusArgs
  }

  // Custom InputTypes
  /**
   * AssociadoCountOutputType without action
   */
  export type AssociadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssociadoCountOutputType
     */
    select?: AssociadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssociadoCountOutputType without action
   */
  export type AssociadoCountOutputTypeCountLojasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LojaWhereInput
  }

  /**
   * AssociadoCountOutputType without action
   */
  export type AssociadoCountOutputTypeCountPermissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissaoWhereInput
  }

  /**
   * AssociadoCountOutputType without action
   */
  export type AssociadoCountOutputTypeCountPresencasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresencaReuniaoWhereInput
  }

  /**
   * AssociadoCountOutputType without action
   */
  export type AssociadoCountOutputTypeCountMensalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensalidadeWhereInput
  }

  /**
   * AssociadoCountOutputType without action
   */
  export type AssociadoCountOutputTypeCountHistoricoStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoStatusAssociadoWhereInput
  }


  /**
   * Count Type ReuniaoCountOutputType
   */

  export type ReuniaoCountOutputType = {
    presencas: number
  }

  export type ReuniaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presencas?: boolean | ReuniaoCountOutputTypeCountPresencasArgs
  }

  // Custom InputTypes
  /**
   * ReuniaoCountOutputType without action
   */
  export type ReuniaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReuniaoCountOutputType
     */
    select?: ReuniaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReuniaoCountOutputType without action
   */
  export type ReuniaoCountOutputTypeCountPresencasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresencaReuniaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senhaHash: string | null
    papel: string | null
    criadoEm: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senhaHash: string | null
    papel: string | null
    criadoEm: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senhaHash: number
    papel: number
    criadoEm: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senhaHash?: true
    papel?: true
    criadoEm?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senhaHash?: true
    papel?: true
    criadoEm?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senhaHash?: true
    papel?: true
    criadoEm?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    criadoEm: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    papel?: boolean
    criadoEm?: boolean
    logsAuditoria?: boolean | Usuario$logsAuditoriaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    papel?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    papel?: boolean
    criadoEm?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logsAuditoria?: boolean | Usuario$logsAuditoriaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      logsAuditoria: Prisma.$LogAuditoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senhaHash: string
      papel: string
      criadoEm: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logsAuditoria<T extends Usuario$logsAuditoriaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$logsAuditoriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senhaHash: FieldRef<"Usuario", 'String'>
    readonly papel: FieldRef<"Usuario", 'String'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.logsAuditoria
   */
  export type Usuario$logsAuditoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    where?: LogAuditoriaWhereInput
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    cursor?: LogAuditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogAuditoriaScalarFieldEnum | LogAuditoriaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Associado
   */

  export type AggregateAssociado = {
    _count: AssociadoCountAggregateOutputType | null
    _min: AssociadoMinAggregateOutputType | null
    _max: AssociadoMaxAggregateOutputType | null
  }

  export type AssociadoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    email: string | null
    telefone: string | null
    embarcacao: string | null
    numeroCarteira: string | null
    status: string | null
    dataCadastro: Date | null
    observacoes: string | null
    atualizadoEm: Date | null
  }

  export type AssociadoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cpf: string | null
    email: string | null
    telefone: string | null
    embarcacao: string | null
    numeroCarteira: string | null
    status: string | null
    dataCadastro: Date | null
    observacoes: string | null
    atualizadoEm: Date | null
  }

  export type AssociadoCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    email: number
    telefone: number
    embarcacao: number
    numeroCarteira: number
    status: number
    dataCadastro: number
    observacoes: number
    atualizadoEm: number
    _all: number
  }


  export type AssociadoMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    email?: true
    telefone?: true
    embarcacao?: true
    numeroCarteira?: true
    status?: true
    dataCadastro?: true
    observacoes?: true
    atualizadoEm?: true
  }

  export type AssociadoMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    email?: true
    telefone?: true
    embarcacao?: true
    numeroCarteira?: true
    status?: true
    dataCadastro?: true
    observacoes?: true
    atualizadoEm?: true
  }

  export type AssociadoCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    email?: true
    telefone?: true
    embarcacao?: true
    numeroCarteira?: true
    status?: true
    dataCadastro?: true
    observacoes?: true
    atualizadoEm?: true
    _all?: true
  }

  export type AssociadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Associado to aggregate.
     */
    where?: AssociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associados to fetch.
     */
    orderBy?: AssociadoOrderByWithRelationInput | AssociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Associados
    **/
    _count?: true | AssociadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssociadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssociadoMaxAggregateInputType
  }

  export type GetAssociadoAggregateType<T extends AssociadoAggregateArgs> = {
        [P in keyof T & keyof AggregateAssociado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssociado[P]>
      : GetScalarType<T[P], AggregateAssociado[P]>
  }




  export type AssociadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssociadoWhereInput
    orderBy?: AssociadoOrderByWithAggregationInput | AssociadoOrderByWithAggregationInput[]
    by: AssociadoScalarFieldEnum[] | AssociadoScalarFieldEnum
    having?: AssociadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssociadoCountAggregateInputType | true
    _min?: AssociadoMinAggregateInputType
    _max?: AssociadoMaxAggregateInputType
  }

  export type AssociadoGroupByOutputType = {
    id: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao: string | null
    numeroCarteira: string
    status: string
    dataCadastro: Date
    observacoes: string | null
    atualizadoEm: Date
    _count: AssociadoCountAggregateOutputType | null
    _min: AssociadoMinAggregateOutputType | null
    _max: AssociadoMaxAggregateOutputType | null
  }

  type GetAssociadoGroupByPayload<T extends AssociadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssociadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssociadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssociadoGroupByOutputType[P]>
            : GetScalarType<T[P], AssociadoGroupByOutputType[P]>
        }
      >
    >


  export type AssociadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    telefone?: boolean
    embarcacao?: boolean
    numeroCarteira?: boolean
    status?: boolean
    dataCadastro?: boolean
    observacoes?: boolean
    atualizadoEm?: boolean
    lojas?: boolean | Associado$lojasArgs<ExtArgs>
    permissoes?: boolean | Associado$permissoesArgs<ExtArgs>
    presencas?: boolean | Associado$presencasArgs<ExtArgs>
    mensalidades?: boolean | Associado$mensalidadesArgs<ExtArgs>
    historicoStatus?: boolean | Associado$historicoStatusArgs<ExtArgs>
    _count?: boolean | AssociadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["associado"]>

  export type AssociadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    telefone?: boolean
    embarcacao?: boolean
    numeroCarteira?: boolean
    status?: boolean
    dataCadastro?: boolean
    observacoes?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["associado"]>

  export type AssociadoSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    email?: boolean
    telefone?: boolean
    embarcacao?: boolean
    numeroCarteira?: boolean
    status?: boolean
    dataCadastro?: boolean
    observacoes?: boolean
    atualizadoEm?: boolean
  }

  export type AssociadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lojas?: boolean | Associado$lojasArgs<ExtArgs>
    permissoes?: boolean | Associado$permissoesArgs<ExtArgs>
    presencas?: boolean | Associado$presencasArgs<ExtArgs>
    mensalidades?: boolean | Associado$mensalidadesArgs<ExtArgs>
    historicoStatus?: boolean | Associado$historicoStatusArgs<ExtArgs>
    _count?: boolean | AssociadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssociadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssociadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Associado"
    objects: {
      lojas: Prisma.$LojaPayload<ExtArgs>[]
      permissoes: Prisma.$PermissaoPayload<ExtArgs>[]
      presencas: Prisma.$PresencaReuniaoPayload<ExtArgs>[]
      mensalidades: Prisma.$MensalidadePayload<ExtArgs>[]
      historicoStatus: Prisma.$HistoricoStatusAssociadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cpf: string
      email: string
      telefone: string
      embarcacao: string | null
      numeroCarteira: string
      status: string
      dataCadastro: Date
      observacoes: string | null
      atualizadoEm: Date
    }, ExtArgs["result"]["associado"]>
    composites: {}
  }

  type AssociadoGetPayload<S extends boolean | null | undefined | AssociadoDefaultArgs> = $Result.GetResult<Prisma.$AssociadoPayload, S>

  type AssociadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssociadoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssociadoCountAggregateInputType | true
    }

  export interface AssociadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Associado'], meta: { name: 'Associado' } }
    /**
     * Find zero or one Associado that matches the filter.
     * @param {AssociadoFindUniqueArgs} args - Arguments to find a Associado
     * @example
     * // Get one Associado
     * const associado = await prisma.associado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssociadoFindUniqueArgs>(args: SelectSubset<T, AssociadoFindUniqueArgs<ExtArgs>>): Prisma__AssociadoClient<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Associado that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssociadoFindUniqueOrThrowArgs} args - Arguments to find a Associado
     * @example
     * // Get one Associado
     * const associado = await prisma.associado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssociadoFindUniqueOrThrowArgs>(args: SelectSubset<T, AssociadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssociadoClient<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Associado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociadoFindFirstArgs} args - Arguments to find a Associado
     * @example
     * // Get one Associado
     * const associado = await prisma.associado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssociadoFindFirstArgs>(args?: SelectSubset<T, AssociadoFindFirstArgs<ExtArgs>>): Prisma__AssociadoClient<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Associado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociadoFindFirstOrThrowArgs} args - Arguments to find a Associado
     * @example
     * // Get one Associado
     * const associado = await prisma.associado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssociadoFindFirstOrThrowArgs>(args?: SelectSubset<T, AssociadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssociadoClient<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Associados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Associados
     * const associados = await prisma.associado.findMany()
     * 
     * // Get first 10 Associados
     * const associados = await prisma.associado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const associadoWithIdOnly = await prisma.associado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssociadoFindManyArgs>(args?: SelectSubset<T, AssociadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Associado.
     * @param {AssociadoCreateArgs} args - Arguments to create a Associado.
     * @example
     * // Create one Associado
     * const Associado = await prisma.associado.create({
     *   data: {
     *     // ... data to create a Associado
     *   }
     * })
     * 
     */
    create<T extends AssociadoCreateArgs>(args: SelectSubset<T, AssociadoCreateArgs<ExtArgs>>): Prisma__AssociadoClient<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Associados.
     * @param {AssociadoCreateManyArgs} args - Arguments to create many Associados.
     * @example
     * // Create many Associados
     * const associado = await prisma.associado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssociadoCreateManyArgs>(args?: SelectSubset<T, AssociadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Associados and returns the data saved in the database.
     * @param {AssociadoCreateManyAndReturnArgs} args - Arguments to create many Associados.
     * @example
     * // Create many Associados
     * const associado = await prisma.associado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Associados and only return the `id`
     * const associadoWithIdOnly = await prisma.associado.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssociadoCreateManyAndReturnArgs>(args?: SelectSubset<T, AssociadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Associado.
     * @param {AssociadoDeleteArgs} args - Arguments to delete one Associado.
     * @example
     * // Delete one Associado
     * const Associado = await prisma.associado.delete({
     *   where: {
     *     // ... filter to delete one Associado
     *   }
     * })
     * 
     */
    delete<T extends AssociadoDeleteArgs>(args: SelectSubset<T, AssociadoDeleteArgs<ExtArgs>>): Prisma__AssociadoClient<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Associado.
     * @param {AssociadoUpdateArgs} args - Arguments to update one Associado.
     * @example
     * // Update one Associado
     * const associado = await prisma.associado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssociadoUpdateArgs>(args: SelectSubset<T, AssociadoUpdateArgs<ExtArgs>>): Prisma__AssociadoClient<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Associados.
     * @param {AssociadoDeleteManyArgs} args - Arguments to filter Associados to delete.
     * @example
     * // Delete a few Associados
     * const { count } = await prisma.associado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssociadoDeleteManyArgs>(args?: SelectSubset<T, AssociadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Associados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Associados
     * const associado = await prisma.associado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssociadoUpdateManyArgs>(args: SelectSubset<T, AssociadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Associado.
     * @param {AssociadoUpsertArgs} args - Arguments to update or create a Associado.
     * @example
     * // Update or create a Associado
     * const associado = await prisma.associado.upsert({
     *   create: {
     *     // ... data to create a Associado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Associado we want to update
     *   }
     * })
     */
    upsert<T extends AssociadoUpsertArgs>(args: SelectSubset<T, AssociadoUpsertArgs<ExtArgs>>): Prisma__AssociadoClient<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Associados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociadoCountArgs} args - Arguments to filter Associados to count.
     * @example
     * // Count the number of Associados
     * const count = await prisma.associado.count({
     *   where: {
     *     // ... the filter for the Associados we want to count
     *   }
     * })
    **/
    count<T extends AssociadoCountArgs>(
      args?: Subset<T, AssociadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssociadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Associado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssociadoAggregateArgs>(args: Subset<T, AssociadoAggregateArgs>): Prisma.PrismaPromise<GetAssociadoAggregateType<T>>

    /**
     * Group by Associado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssociadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssociadoGroupByArgs['orderBy'] }
        : { orderBy?: AssociadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssociadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssociadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Associado model
   */
  readonly fields: AssociadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Associado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssociadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lojas<T extends Associado$lojasArgs<ExtArgs> = {}>(args?: Subset<T, Associado$lojasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findMany"> | Null>
    permissoes<T extends Associado$permissoesArgs<ExtArgs> = {}>(args?: Subset<T, Associado$permissoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findMany"> | Null>
    presencas<T extends Associado$presencasArgs<ExtArgs> = {}>(args?: Subset<T, Associado$presencasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencaReuniaoPayload<ExtArgs>, T, "findMany"> | Null>
    mensalidades<T extends Associado$mensalidadesArgs<ExtArgs> = {}>(args?: Subset<T, Associado$mensalidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensalidadePayload<ExtArgs>, T, "findMany"> | Null>
    historicoStatus<T extends Associado$historicoStatusArgs<ExtArgs> = {}>(args?: Subset<T, Associado$historicoStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoStatusAssociadoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Associado model
   */ 
  interface AssociadoFieldRefs {
    readonly id: FieldRef<"Associado", 'String'>
    readonly nome: FieldRef<"Associado", 'String'>
    readonly cpf: FieldRef<"Associado", 'String'>
    readonly email: FieldRef<"Associado", 'String'>
    readonly telefone: FieldRef<"Associado", 'String'>
    readonly embarcacao: FieldRef<"Associado", 'String'>
    readonly numeroCarteira: FieldRef<"Associado", 'String'>
    readonly status: FieldRef<"Associado", 'String'>
    readonly dataCadastro: FieldRef<"Associado", 'DateTime'>
    readonly observacoes: FieldRef<"Associado", 'String'>
    readonly atualizadoEm: FieldRef<"Associado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Associado findUnique
   */
  export type AssociadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Associado
     */
    select?: AssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociadoInclude<ExtArgs> | null
    /**
     * Filter, which Associado to fetch.
     */
    where: AssociadoWhereUniqueInput
  }

  /**
   * Associado findUniqueOrThrow
   */
  export type AssociadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Associado
     */
    select?: AssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociadoInclude<ExtArgs> | null
    /**
     * Filter, which Associado to fetch.
     */
    where: AssociadoWhereUniqueInput
  }

  /**
   * Associado findFirst
   */
  export type AssociadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Associado
     */
    select?: AssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociadoInclude<ExtArgs> | null
    /**
     * Filter, which Associado to fetch.
     */
    where?: AssociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associados to fetch.
     */
    orderBy?: AssociadoOrderByWithRelationInput | AssociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Associados.
     */
    cursor?: AssociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Associados.
     */
    distinct?: AssociadoScalarFieldEnum | AssociadoScalarFieldEnum[]
  }

  /**
   * Associado findFirstOrThrow
   */
  export type AssociadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Associado
     */
    select?: AssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociadoInclude<ExtArgs> | null
    /**
     * Filter, which Associado to fetch.
     */
    where?: AssociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associados to fetch.
     */
    orderBy?: AssociadoOrderByWithRelationInput | AssociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Associados.
     */
    cursor?: AssociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Associados.
     */
    distinct?: AssociadoScalarFieldEnum | AssociadoScalarFieldEnum[]
  }

  /**
   * Associado findMany
   */
  export type AssociadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Associado
     */
    select?: AssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociadoInclude<ExtArgs> | null
    /**
     * Filter, which Associados to fetch.
     */
    where?: AssociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associados to fetch.
     */
    orderBy?: AssociadoOrderByWithRelationInput | AssociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Associados.
     */
    cursor?: AssociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associados.
     */
    skip?: number
    distinct?: AssociadoScalarFieldEnum | AssociadoScalarFieldEnum[]
  }

  /**
   * Associado create
   */
  export type AssociadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Associado
     */
    select?: AssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Associado.
     */
    data: XOR<AssociadoCreateInput, AssociadoUncheckedCreateInput>
  }

  /**
   * Associado createMany
   */
  export type AssociadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Associados.
     */
    data: AssociadoCreateManyInput | AssociadoCreateManyInput[]
  }

  /**
   * Associado createManyAndReturn
   */
  export type AssociadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Associado
     */
    select?: AssociadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Associados.
     */
    data: AssociadoCreateManyInput | AssociadoCreateManyInput[]
  }

  /**
   * Associado update
   */
  export type AssociadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Associado
     */
    select?: AssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Associado.
     */
    data: XOR<AssociadoUpdateInput, AssociadoUncheckedUpdateInput>
    /**
     * Choose, which Associado to update.
     */
    where: AssociadoWhereUniqueInput
  }

  /**
   * Associado updateMany
   */
  export type AssociadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Associados.
     */
    data: XOR<AssociadoUpdateManyMutationInput, AssociadoUncheckedUpdateManyInput>
    /**
     * Filter which Associados to update
     */
    where?: AssociadoWhereInput
  }

  /**
   * Associado upsert
   */
  export type AssociadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Associado
     */
    select?: AssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Associado to update in case it exists.
     */
    where: AssociadoWhereUniqueInput
    /**
     * In case the Associado found by the `where` argument doesn't exist, create a new Associado with this data.
     */
    create: XOR<AssociadoCreateInput, AssociadoUncheckedCreateInput>
    /**
     * In case the Associado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssociadoUpdateInput, AssociadoUncheckedUpdateInput>
  }

  /**
   * Associado delete
   */
  export type AssociadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Associado
     */
    select?: AssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociadoInclude<ExtArgs> | null
    /**
     * Filter which Associado to delete.
     */
    where: AssociadoWhereUniqueInput
  }

  /**
   * Associado deleteMany
   */
  export type AssociadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Associados to delete
     */
    where?: AssociadoWhereInput
  }

  /**
   * Associado.lojas
   */
  export type Associado$lojasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    where?: LojaWhereInput
    orderBy?: LojaOrderByWithRelationInput | LojaOrderByWithRelationInput[]
    cursor?: LojaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LojaScalarFieldEnum | LojaScalarFieldEnum[]
  }

  /**
   * Associado.permissoes
   */
  export type Associado$permissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    where?: PermissaoWhereInput
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    cursor?: PermissaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Associado.presencas
   */
  export type Associado$presencasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresencaReuniao
     */
    select?: PresencaReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaReuniaoInclude<ExtArgs> | null
    where?: PresencaReuniaoWhereInput
    orderBy?: PresencaReuniaoOrderByWithRelationInput | PresencaReuniaoOrderByWithRelationInput[]
    cursor?: PresencaReuniaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresencaReuniaoScalarFieldEnum | PresencaReuniaoScalarFieldEnum[]
  }

  /**
   * Associado.mensalidades
   */
  export type Associado$mensalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensalidade
     */
    select?: MensalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensalidadeInclude<ExtArgs> | null
    where?: MensalidadeWhereInput
    orderBy?: MensalidadeOrderByWithRelationInput | MensalidadeOrderByWithRelationInput[]
    cursor?: MensalidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensalidadeScalarFieldEnum | MensalidadeScalarFieldEnum[]
  }

  /**
   * Associado.historicoStatus
   */
  export type Associado$historicoStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoStatusAssociado
     */
    select?: HistoricoStatusAssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoStatusAssociadoInclude<ExtArgs> | null
    where?: HistoricoStatusAssociadoWhereInput
    orderBy?: HistoricoStatusAssociadoOrderByWithRelationInput | HistoricoStatusAssociadoOrderByWithRelationInput[]
    cursor?: HistoricoStatusAssociadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoStatusAssociadoScalarFieldEnum | HistoricoStatusAssociadoScalarFieldEnum[]
  }

  /**
   * Associado without action
   */
  export type AssociadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Associado
     */
    select?: AssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociadoInclude<ExtArgs> | null
  }


  /**
   * Model HistoricoStatusAssociado
   */

  export type AggregateHistoricoStatusAssociado = {
    _count: HistoricoStatusAssociadoCountAggregateOutputType | null
    _min: HistoricoStatusAssociadoMinAggregateOutputType | null
    _max: HistoricoStatusAssociadoMaxAggregateOutputType | null
  }

  export type HistoricoStatusAssociadoMinAggregateOutputType = {
    id: string | null
    associadoId: string | null
    statusAnterior: string | null
    statusNovo: string | null
    motivo: string | null
    alteradoEm: Date | null
    alteradoPor: string | null
  }

  export type HistoricoStatusAssociadoMaxAggregateOutputType = {
    id: string | null
    associadoId: string | null
    statusAnterior: string | null
    statusNovo: string | null
    motivo: string | null
    alteradoEm: Date | null
    alteradoPor: string | null
  }

  export type HistoricoStatusAssociadoCountAggregateOutputType = {
    id: number
    associadoId: number
    statusAnterior: number
    statusNovo: number
    motivo: number
    alteradoEm: number
    alteradoPor: number
    _all: number
  }


  export type HistoricoStatusAssociadoMinAggregateInputType = {
    id?: true
    associadoId?: true
    statusAnterior?: true
    statusNovo?: true
    motivo?: true
    alteradoEm?: true
    alteradoPor?: true
  }

  export type HistoricoStatusAssociadoMaxAggregateInputType = {
    id?: true
    associadoId?: true
    statusAnterior?: true
    statusNovo?: true
    motivo?: true
    alteradoEm?: true
    alteradoPor?: true
  }

  export type HistoricoStatusAssociadoCountAggregateInputType = {
    id?: true
    associadoId?: true
    statusAnterior?: true
    statusNovo?: true
    motivo?: true
    alteradoEm?: true
    alteradoPor?: true
    _all?: true
  }

  export type HistoricoStatusAssociadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoStatusAssociado to aggregate.
     */
    where?: HistoricoStatusAssociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoStatusAssociados to fetch.
     */
    orderBy?: HistoricoStatusAssociadoOrderByWithRelationInput | HistoricoStatusAssociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoStatusAssociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoStatusAssociados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoStatusAssociados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoricoStatusAssociados
    **/
    _count?: true | HistoricoStatusAssociadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoStatusAssociadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoStatusAssociadoMaxAggregateInputType
  }

  export type GetHistoricoStatusAssociadoAggregateType<T extends HistoricoStatusAssociadoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricoStatusAssociado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricoStatusAssociado[P]>
      : GetScalarType<T[P], AggregateHistoricoStatusAssociado[P]>
  }




  export type HistoricoStatusAssociadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoStatusAssociadoWhereInput
    orderBy?: HistoricoStatusAssociadoOrderByWithAggregationInput | HistoricoStatusAssociadoOrderByWithAggregationInput[]
    by: HistoricoStatusAssociadoScalarFieldEnum[] | HistoricoStatusAssociadoScalarFieldEnum
    having?: HistoricoStatusAssociadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoStatusAssociadoCountAggregateInputType | true
    _min?: HistoricoStatusAssociadoMinAggregateInputType
    _max?: HistoricoStatusAssociadoMaxAggregateInputType
  }

  export type HistoricoStatusAssociadoGroupByOutputType = {
    id: string
    associadoId: string
    statusAnterior: string
    statusNovo: string
    motivo: string | null
    alteradoEm: Date
    alteradoPor: string | null
    _count: HistoricoStatusAssociadoCountAggregateOutputType | null
    _min: HistoricoStatusAssociadoMinAggregateOutputType | null
    _max: HistoricoStatusAssociadoMaxAggregateOutputType | null
  }

  type GetHistoricoStatusAssociadoGroupByPayload<T extends HistoricoStatusAssociadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoStatusAssociadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoStatusAssociadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoStatusAssociadoGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoStatusAssociadoGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoStatusAssociadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    associadoId?: boolean
    statusAnterior?: boolean
    statusNovo?: boolean
    motivo?: boolean
    alteradoEm?: boolean
    alteradoPor?: boolean
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoStatusAssociado"]>

  export type HistoricoStatusAssociadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    associadoId?: boolean
    statusAnterior?: boolean
    statusNovo?: boolean
    motivo?: boolean
    alteradoEm?: boolean
    alteradoPor?: boolean
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoStatusAssociado"]>

  export type HistoricoStatusAssociadoSelectScalar = {
    id?: boolean
    associadoId?: boolean
    statusAnterior?: boolean
    statusNovo?: boolean
    motivo?: boolean
    alteradoEm?: boolean
    alteradoPor?: boolean
  }

  export type HistoricoStatusAssociadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }
  export type HistoricoStatusAssociadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }

  export type $HistoricoStatusAssociadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoricoStatusAssociado"
    objects: {
      associado: Prisma.$AssociadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      associadoId: string
      statusAnterior: string
      statusNovo: string
      motivo: string | null
      alteradoEm: Date
      alteradoPor: string | null
    }, ExtArgs["result"]["historicoStatusAssociado"]>
    composites: {}
  }

  type HistoricoStatusAssociadoGetPayload<S extends boolean | null | undefined | HistoricoStatusAssociadoDefaultArgs> = $Result.GetResult<Prisma.$HistoricoStatusAssociadoPayload, S>

  type HistoricoStatusAssociadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HistoricoStatusAssociadoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HistoricoStatusAssociadoCountAggregateInputType | true
    }

  export interface HistoricoStatusAssociadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoricoStatusAssociado'], meta: { name: 'HistoricoStatusAssociado' } }
    /**
     * Find zero or one HistoricoStatusAssociado that matches the filter.
     * @param {HistoricoStatusAssociadoFindUniqueArgs} args - Arguments to find a HistoricoStatusAssociado
     * @example
     * // Get one HistoricoStatusAssociado
     * const historicoStatusAssociado = await prisma.historicoStatusAssociado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoStatusAssociadoFindUniqueArgs>(args: SelectSubset<T, HistoricoStatusAssociadoFindUniqueArgs<ExtArgs>>): Prisma__HistoricoStatusAssociadoClient<$Result.GetResult<Prisma.$HistoricoStatusAssociadoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HistoricoStatusAssociado that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HistoricoStatusAssociadoFindUniqueOrThrowArgs} args - Arguments to find a HistoricoStatusAssociado
     * @example
     * // Get one HistoricoStatusAssociado
     * const historicoStatusAssociado = await prisma.historicoStatusAssociado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoStatusAssociadoFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoStatusAssociadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoStatusAssociadoClient<$Result.GetResult<Prisma.$HistoricoStatusAssociadoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HistoricoStatusAssociado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoStatusAssociadoFindFirstArgs} args - Arguments to find a HistoricoStatusAssociado
     * @example
     * // Get one HistoricoStatusAssociado
     * const historicoStatusAssociado = await prisma.historicoStatusAssociado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoStatusAssociadoFindFirstArgs>(args?: SelectSubset<T, HistoricoStatusAssociadoFindFirstArgs<ExtArgs>>): Prisma__HistoricoStatusAssociadoClient<$Result.GetResult<Prisma.$HistoricoStatusAssociadoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HistoricoStatusAssociado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoStatusAssociadoFindFirstOrThrowArgs} args - Arguments to find a HistoricoStatusAssociado
     * @example
     * // Get one HistoricoStatusAssociado
     * const historicoStatusAssociado = await prisma.historicoStatusAssociado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoStatusAssociadoFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoStatusAssociadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoStatusAssociadoClient<$Result.GetResult<Prisma.$HistoricoStatusAssociadoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HistoricoStatusAssociados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoStatusAssociadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoricoStatusAssociados
     * const historicoStatusAssociados = await prisma.historicoStatusAssociado.findMany()
     * 
     * // Get first 10 HistoricoStatusAssociados
     * const historicoStatusAssociados = await prisma.historicoStatusAssociado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoStatusAssociadoWithIdOnly = await prisma.historicoStatusAssociado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoStatusAssociadoFindManyArgs>(args?: SelectSubset<T, HistoricoStatusAssociadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoStatusAssociadoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HistoricoStatusAssociado.
     * @param {HistoricoStatusAssociadoCreateArgs} args - Arguments to create a HistoricoStatusAssociado.
     * @example
     * // Create one HistoricoStatusAssociado
     * const HistoricoStatusAssociado = await prisma.historicoStatusAssociado.create({
     *   data: {
     *     // ... data to create a HistoricoStatusAssociado
     *   }
     * })
     * 
     */
    create<T extends HistoricoStatusAssociadoCreateArgs>(args: SelectSubset<T, HistoricoStatusAssociadoCreateArgs<ExtArgs>>): Prisma__HistoricoStatusAssociadoClient<$Result.GetResult<Prisma.$HistoricoStatusAssociadoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HistoricoStatusAssociados.
     * @param {HistoricoStatusAssociadoCreateManyArgs} args - Arguments to create many HistoricoStatusAssociados.
     * @example
     * // Create many HistoricoStatusAssociados
     * const historicoStatusAssociado = await prisma.historicoStatusAssociado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoStatusAssociadoCreateManyArgs>(args?: SelectSubset<T, HistoricoStatusAssociadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoricoStatusAssociados and returns the data saved in the database.
     * @param {HistoricoStatusAssociadoCreateManyAndReturnArgs} args - Arguments to create many HistoricoStatusAssociados.
     * @example
     * // Create many HistoricoStatusAssociados
     * const historicoStatusAssociado = await prisma.historicoStatusAssociado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoricoStatusAssociados and only return the `id`
     * const historicoStatusAssociadoWithIdOnly = await prisma.historicoStatusAssociado.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoricoStatusAssociadoCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoricoStatusAssociadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoStatusAssociadoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a HistoricoStatusAssociado.
     * @param {HistoricoStatusAssociadoDeleteArgs} args - Arguments to delete one HistoricoStatusAssociado.
     * @example
     * // Delete one HistoricoStatusAssociado
     * const HistoricoStatusAssociado = await prisma.historicoStatusAssociado.delete({
     *   where: {
     *     // ... filter to delete one HistoricoStatusAssociado
     *   }
     * })
     * 
     */
    delete<T extends HistoricoStatusAssociadoDeleteArgs>(args: SelectSubset<T, HistoricoStatusAssociadoDeleteArgs<ExtArgs>>): Prisma__HistoricoStatusAssociadoClient<$Result.GetResult<Prisma.$HistoricoStatusAssociadoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HistoricoStatusAssociado.
     * @param {HistoricoStatusAssociadoUpdateArgs} args - Arguments to update one HistoricoStatusAssociado.
     * @example
     * // Update one HistoricoStatusAssociado
     * const historicoStatusAssociado = await prisma.historicoStatusAssociado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoStatusAssociadoUpdateArgs>(args: SelectSubset<T, HistoricoStatusAssociadoUpdateArgs<ExtArgs>>): Prisma__HistoricoStatusAssociadoClient<$Result.GetResult<Prisma.$HistoricoStatusAssociadoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HistoricoStatusAssociados.
     * @param {HistoricoStatusAssociadoDeleteManyArgs} args - Arguments to filter HistoricoStatusAssociados to delete.
     * @example
     * // Delete a few HistoricoStatusAssociados
     * const { count } = await prisma.historicoStatusAssociado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoStatusAssociadoDeleteManyArgs>(args?: SelectSubset<T, HistoricoStatusAssociadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoStatusAssociados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoStatusAssociadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoricoStatusAssociados
     * const historicoStatusAssociado = await prisma.historicoStatusAssociado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoStatusAssociadoUpdateManyArgs>(args: SelectSubset<T, HistoricoStatusAssociadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HistoricoStatusAssociado.
     * @param {HistoricoStatusAssociadoUpsertArgs} args - Arguments to update or create a HistoricoStatusAssociado.
     * @example
     * // Update or create a HistoricoStatusAssociado
     * const historicoStatusAssociado = await prisma.historicoStatusAssociado.upsert({
     *   create: {
     *     // ... data to create a HistoricoStatusAssociado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoricoStatusAssociado we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoStatusAssociadoUpsertArgs>(args: SelectSubset<T, HistoricoStatusAssociadoUpsertArgs<ExtArgs>>): Prisma__HistoricoStatusAssociadoClient<$Result.GetResult<Prisma.$HistoricoStatusAssociadoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of HistoricoStatusAssociados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoStatusAssociadoCountArgs} args - Arguments to filter HistoricoStatusAssociados to count.
     * @example
     * // Count the number of HistoricoStatusAssociados
     * const count = await prisma.historicoStatusAssociado.count({
     *   where: {
     *     // ... the filter for the HistoricoStatusAssociados we want to count
     *   }
     * })
    **/
    count<T extends HistoricoStatusAssociadoCountArgs>(
      args?: Subset<T, HistoricoStatusAssociadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoStatusAssociadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoricoStatusAssociado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoStatusAssociadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoricoStatusAssociadoAggregateArgs>(args: Subset<T, HistoricoStatusAssociadoAggregateArgs>): Prisma.PrismaPromise<GetHistoricoStatusAssociadoAggregateType<T>>

    /**
     * Group by HistoricoStatusAssociado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoStatusAssociadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoricoStatusAssociadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoStatusAssociadoGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoStatusAssociadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoricoStatusAssociadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoStatusAssociadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoricoStatusAssociado model
   */
  readonly fields: HistoricoStatusAssociadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoricoStatusAssociado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoStatusAssociadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    associado<T extends AssociadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociadoDefaultArgs<ExtArgs>>): Prisma__AssociadoClient<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistoricoStatusAssociado model
   */ 
  interface HistoricoStatusAssociadoFieldRefs {
    readonly id: FieldRef<"HistoricoStatusAssociado", 'String'>
    readonly associadoId: FieldRef<"HistoricoStatusAssociado", 'String'>
    readonly statusAnterior: FieldRef<"HistoricoStatusAssociado", 'String'>
    readonly statusNovo: FieldRef<"HistoricoStatusAssociado", 'String'>
    readonly motivo: FieldRef<"HistoricoStatusAssociado", 'String'>
    readonly alteradoEm: FieldRef<"HistoricoStatusAssociado", 'DateTime'>
    readonly alteradoPor: FieldRef<"HistoricoStatusAssociado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistoricoStatusAssociado findUnique
   */
  export type HistoricoStatusAssociadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoStatusAssociado
     */
    select?: HistoricoStatusAssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoStatusAssociadoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoStatusAssociado to fetch.
     */
    where: HistoricoStatusAssociadoWhereUniqueInput
  }

  /**
   * HistoricoStatusAssociado findUniqueOrThrow
   */
  export type HistoricoStatusAssociadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoStatusAssociado
     */
    select?: HistoricoStatusAssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoStatusAssociadoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoStatusAssociado to fetch.
     */
    where: HistoricoStatusAssociadoWhereUniqueInput
  }

  /**
   * HistoricoStatusAssociado findFirst
   */
  export type HistoricoStatusAssociadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoStatusAssociado
     */
    select?: HistoricoStatusAssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoStatusAssociadoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoStatusAssociado to fetch.
     */
    where?: HistoricoStatusAssociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoStatusAssociados to fetch.
     */
    orderBy?: HistoricoStatusAssociadoOrderByWithRelationInput | HistoricoStatusAssociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoStatusAssociados.
     */
    cursor?: HistoricoStatusAssociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoStatusAssociados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoStatusAssociados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoStatusAssociados.
     */
    distinct?: HistoricoStatusAssociadoScalarFieldEnum | HistoricoStatusAssociadoScalarFieldEnum[]
  }

  /**
   * HistoricoStatusAssociado findFirstOrThrow
   */
  export type HistoricoStatusAssociadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoStatusAssociado
     */
    select?: HistoricoStatusAssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoStatusAssociadoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoStatusAssociado to fetch.
     */
    where?: HistoricoStatusAssociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoStatusAssociados to fetch.
     */
    orderBy?: HistoricoStatusAssociadoOrderByWithRelationInput | HistoricoStatusAssociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoStatusAssociados.
     */
    cursor?: HistoricoStatusAssociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoStatusAssociados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoStatusAssociados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoStatusAssociados.
     */
    distinct?: HistoricoStatusAssociadoScalarFieldEnum | HistoricoStatusAssociadoScalarFieldEnum[]
  }

  /**
   * HistoricoStatusAssociado findMany
   */
  export type HistoricoStatusAssociadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoStatusAssociado
     */
    select?: HistoricoStatusAssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoStatusAssociadoInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoStatusAssociados to fetch.
     */
    where?: HistoricoStatusAssociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoStatusAssociados to fetch.
     */
    orderBy?: HistoricoStatusAssociadoOrderByWithRelationInput | HistoricoStatusAssociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoricoStatusAssociados.
     */
    cursor?: HistoricoStatusAssociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoStatusAssociados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoStatusAssociados.
     */
    skip?: number
    distinct?: HistoricoStatusAssociadoScalarFieldEnum | HistoricoStatusAssociadoScalarFieldEnum[]
  }

  /**
   * HistoricoStatusAssociado create
   */
  export type HistoricoStatusAssociadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoStatusAssociado
     */
    select?: HistoricoStatusAssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoStatusAssociadoInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoricoStatusAssociado.
     */
    data: XOR<HistoricoStatusAssociadoCreateInput, HistoricoStatusAssociadoUncheckedCreateInput>
  }

  /**
   * HistoricoStatusAssociado createMany
   */
  export type HistoricoStatusAssociadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoricoStatusAssociados.
     */
    data: HistoricoStatusAssociadoCreateManyInput | HistoricoStatusAssociadoCreateManyInput[]
  }

  /**
   * HistoricoStatusAssociado createManyAndReturn
   */
  export type HistoricoStatusAssociadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoStatusAssociado
     */
    select?: HistoricoStatusAssociadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many HistoricoStatusAssociados.
     */
    data: HistoricoStatusAssociadoCreateManyInput | HistoricoStatusAssociadoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoStatusAssociadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoStatusAssociado update
   */
  export type HistoricoStatusAssociadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoStatusAssociado
     */
    select?: HistoricoStatusAssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoStatusAssociadoInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoricoStatusAssociado.
     */
    data: XOR<HistoricoStatusAssociadoUpdateInput, HistoricoStatusAssociadoUncheckedUpdateInput>
    /**
     * Choose, which HistoricoStatusAssociado to update.
     */
    where: HistoricoStatusAssociadoWhereUniqueInput
  }

  /**
   * HistoricoStatusAssociado updateMany
   */
  export type HistoricoStatusAssociadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoricoStatusAssociados.
     */
    data: XOR<HistoricoStatusAssociadoUpdateManyMutationInput, HistoricoStatusAssociadoUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoStatusAssociados to update
     */
    where?: HistoricoStatusAssociadoWhereInput
  }

  /**
   * HistoricoStatusAssociado upsert
   */
  export type HistoricoStatusAssociadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoStatusAssociado
     */
    select?: HistoricoStatusAssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoStatusAssociadoInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoricoStatusAssociado to update in case it exists.
     */
    where: HistoricoStatusAssociadoWhereUniqueInput
    /**
     * In case the HistoricoStatusAssociado found by the `where` argument doesn't exist, create a new HistoricoStatusAssociado with this data.
     */
    create: XOR<HistoricoStatusAssociadoCreateInput, HistoricoStatusAssociadoUncheckedCreateInput>
    /**
     * In case the HistoricoStatusAssociado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoStatusAssociadoUpdateInput, HistoricoStatusAssociadoUncheckedUpdateInput>
  }

  /**
   * HistoricoStatusAssociado delete
   */
  export type HistoricoStatusAssociadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoStatusAssociado
     */
    select?: HistoricoStatusAssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoStatusAssociadoInclude<ExtArgs> | null
    /**
     * Filter which HistoricoStatusAssociado to delete.
     */
    where: HistoricoStatusAssociadoWhereUniqueInput
  }

  /**
   * HistoricoStatusAssociado deleteMany
   */
  export type HistoricoStatusAssociadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoStatusAssociados to delete
     */
    where?: HistoricoStatusAssociadoWhereInput
  }

  /**
   * HistoricoStatusAssociado without action
   */
  export type HistoricoStatusAssociadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoStatusAssociado
     */
    select?: HistoricoStatusAssociadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoStatusAssociadoInclude<ExtArgs> | null
  }


  /**
   * Model Loja
   */

  export type AggregateLoja = {
    _count: LojaCountAggregateOutputType | null
    _avg: LojaAvgAggregateOutputType | null
    _sum: LojaSumAggregateOutputType | null
    _min: LojaMinAggregateOutputType | null
    _max: LojaMaxAggregateOutputType | null
  }

  export type LojaAvgAggregateOutputType = {
    produtos: number | null
  }

  export type LojaSumAggregateOutputType = {
    produtos: number | null
  }

  export type LojaMinAggregateOutputType = {
    id: string | null
    associadoId: string | null
    nomeLoja: string | null
    descricao: string | null
    status: string | null
    dataSolicitacao: Date | null
    dataAprovacao: Date | null
    motivoRejeicao: string | null
    produtos: number | null
    atualizadoEm: Date | null
  }

  export type LojaMaxAggregateOutputType = {
    id: string | null
    associadoId: string | null
    nomeLoja: string | null
    descricao: string | null
    status: string | null
    dataSolicitacao: Date | null
    dataAprovacao: Date | null
    motivoRejeicao: string | null
    produtos: number | null
    atualizadoEm: Date | null
  }

  export type LojaCountAggregateOutputType = {
    id: number
    associadoId: number
    nomeLoja: number
    descricao: number
    status: number
    dataSolicitacao: number
    dataAprovacao: number
    motivoRejeicao: number
    produtos: number
    atualizadoEm: number
    _all: number
  }


  export type LojaAvgAggregateInputType = {
    produtos?: true
  }

  export type LojaSumAggregateInputType = {
    produtos?: true
  }

  export type LojaMinAggregateInputType = {
    id?: true
    associadoId?: true
    nomeLoja?: true
    descricao?: true
    status?: true
    dataSolicitacao?: true
    dataAprovacao?: true
    motivoRejeicao?: true
    produtos?: true
    atualizadoEm?: true
  }

  export type LojaMaxAggregateInputType = {
    id?: true
    associadoId?: true
    nomeLoja?: true
    descricao?: true
    status?: true
    dataSolicitacao?: true
    dataAprovacao?: true
    motivoRejeicao?: true
    produtos?: true
    atualizadoEm?: true
  }

  export type LojaCountAggregateInputType = {
    id?: true
    associadoId?: true
    nomeLoja?: true
    descricao?: true
    status?: true
    dataSolicitacao?: true
    dataAprovacao?: true
    motivoRejeicao?: true
    produtos?: true
    atualizadoEm?: true
    _all?: true
  }

  export type LojaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loja to aggregate.
     */
    where?: LojaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lojas to fetch.
     */
    orderBy?: LojaOrderByWithRelationInput | LojaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LojaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lojas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lojas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lojas
    **/
    _count?: true | LojaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LojaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LojaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LojaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LojaMaxAggregateInputType
  }

  export type GetLojaAggregateType<T extends LojaAggregateArgs> = {
        [P in keyof T & keyof AggregateLoja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoja[P]>
      : GetScalarType<T[P], AggregateLoja[P]>
  }




  export type LojaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LojaWhereInput
    orderBy?: LojaOrderByWithAggregationInput | LojaOrderByWithAggregationInput[]
    by: LojaScalarFieldEnum[] | LojaScalarFieldEnum
    having?: LojaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LojaCountAggregateInputType | true
    _avg?: LojaAvgAggregateInputType
    _sum?: LojaSumAggregateInputType
    _min?: LojaMinAggregateInputType
    _max?: LojaMaxAggregateInputType
  }

  export type LojaGroupByOutputType = {
    id: string
    associadoId: string
    nomeLoja: string
    descricao: string
    status: string
    dataSolicitacao: Date
    dataAprovacao: Date | null
    motivoRejeicao: string | null
    produtos: number
    atualizadoEm: Date
    _count: LojaCountAggregateOutputType | null
    _avg: LojaAvgAggregateOutputType | null
    _sum: LojaSumAggregateOutputType | null
    _min: LojaMinAggregateOutputType | null
    _max: LojaMaxAggregateOutputType | null
  }

  type GetLojaGroupByPayload<T extends LojaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LojaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LojaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LojaGroupByOutputType[P]>
            : GetScalarType<T[P], LojaGroupByOutputType[P]>
        }
      >
    >


  export type LojaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    associadoId?: boolean
    nomeLoja?: boolean
    descricao?: boolean
    status?: boolean
    dataSolicitacao?: boolean
    dataAprovacao?: boolean
    motivoRejeicao?: boolean
    produtos?: boolean
    atualizadoEm?: boolean
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loja"]>

  export type LojaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    associadoId?: boolean
    nomeLoja?: boolean
    descricao?: boolean
    status?: boolean
    dataSolicitacao?: boolean
    dataAprovacao?: boolean
    motivoRejeicao?: boolean
    produtos?: boolean
    atualizadoEm?: boolean
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loja"]>

  export type LojaSelectScalar = {
    id?: boolean
    associadoId?: boolean
    nomeLoja?: boolean
    descricao?: boolean
    status?: boolean
    dataSolicitacao?: boolean
    dataAprovacao?: boolean
    motivoRejeicao?: boolean
    produtos?: boolean
    atualizadoEm?: boolean
  }

  export type LojaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }
  export type LojaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }

  export type $LojaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Loja"
    objects: {
      associado: Prisma.$AssociadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      associadoId: string
      nomeLoja: string
      descricao: string
      status: string
      dataSolicitacao: Date
      dataAprovacao: Date | null
      motivoRejeicao: string | null
      produtos: number
      atualizadoEm: Date
    }, ExtArgs["result"]["loja"]>
    composites: {}
  }

  type LojaGetPayload<S extends boolean | null | undefined | LojaDefaultArgs> = $Result.GetResult<Prisma.$LojaPayload, S>

  type LojaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LojaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LojaCountAggregateInputType | true
    }

  export interface LojaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Loja'], meta: { name: 'Loja' } }
    /**
     * Find zero or one Loja that matches the filter.
     * @param {LojaFindUniqueArgs} args - Arguments to find a Loja
     * @example
     * // Get one Loja
     * const loja = await prisma.loja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LojaFindUniqueArgs>(args: SelectSubset<T, LojaFindUniqueArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Loja that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LojaFindUniqueOrThrowArgs} args - Arguments to find a Loja
     * @example
     * // Get one Loja
     * const loja = await prisma.loja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LojaFindUniqueOrThrowArgs>(args: SelectSubset<T, LojaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Loja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaFindFirstArgs} args - Arguments to find a Loja
     * @example
     * // Get one Loja
     * const loja = await prisma.loja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LojaFindFirstArgs>(args?: SelectSubset<T, LojaFindFirstArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Loja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaFindFirstOrThrowArgs} args - Arguments to find a Loja
     * @example
     * // Get one Loja
     * const loja = await prisma.loja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LojaFindFirstOrThrowArgs>(args?: SelectSubset<T, LojaFindFirstOrThrowArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Lojas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lojas
     * const lojas = await prisma.loja.findMany()
     * 
     * // Get first 10 Lojas
     * const lojas = await prisma.loja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lojaWithIdOnly = await prisma.loja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LojaFindManyArgs>(args?: SelectSubset<T, LojaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Loja.
     * @param {LojaCreateArgs} args - Arguments to create a Loja.
     * @example
     * // Create one Loja
     * const Loja = await prisma.loja.create({
     *   data: {
     *     // ... data to create a Loja
     *   }
     * })
     * 
     */
    create<T extends LojaCreateArgs>(args: SelectSubset<T, LojaCreateArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Lojas.
     * @param {LojaCreateManyArgs} args - Arguments to create many Lojas.
     * @example
     * // Create many Lojas
     * const loja = await prisma.loja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LojaCreateManyArgs>(args?: SelectSubset<T, LojaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lojas and returns the data saved in the database.
     * @param {LojaCreateManyAndReturnArgs} args - Arguments to create many Lojas.
     * @example
     * // Create many Lojas
     * const loja = await prisma.loja.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lojas and only return the `id`
     * const lojaWithIdOnly = await prisma.loja.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LojaCreateManyAndReturnArgs>(args?: SelectSubset<T, LojaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Loja.
     * @param {LojaDeleteArgs} args - Arguments to delete one Loja.
     * @example
     * // Delete one Loja
     * const Loja = await prisma.loja.delete({
     *   where: {
     *     // ... filter to delete one Loja
     *   }
     * })
     * 
     */
    delete<T extends LojaDeleteArgs>(args: SelectSubset<T, LojaDeleteArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Loja.
     * @param {LojaUpdateArgs} args - Arguments to update one Loja.
     * @example
     * // Update one Loja
     * const loja = await prisma.loja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LojaUpdateArgs>(args: SelectSubset<T, LojaUpdateArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Lojas.
     * @param {LojaDeleteManyArgs} args - Arguments to filter Lojas to delete.
     * @example
     * // Delete a few Lojas
     * const { count } = await prisma.loja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LojaDeleteManyArgs>(args?: SelectSubset<T, LojaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lojas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lojas
     * const loja = await prisma.loja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LojaUpdateManyArgs>(args: SelectSubset<T, LojaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Loja.
     * @param {LojaUpsertArgs} args - Arguments to update or create a Loja.
     * @example
     * // Update or create a Loja
     * const loja = await prisma.loja.upsert({
     *   create: {
     *     // ... data to create a Loja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loja we want to update
     *   }
     * })
     */
    upsert<T extends LojaUpsertArgs>(args: SelectSubset<T, LojaUpsertArgs<ExtArgs>>): Prisma__LojaClient<$Result.GetResult<Prisma.$LojaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Lojas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaCountArgs} args - Arguments to filter Lojas to count.
     * @example
     * // Count the number of Lojas
     * const count = await prisma.loja.count({
     *   where: {
     *     // ... the filter for the Lojas we want to count
     *   }
     * })
    **/
    count<T extends LojaCountArgs>(
      args?: Subset<T, LojaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LojaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LojaAggregateArgs>(args: Subset<T, LojaAggregateArgs>): Prisma.PrismaPromise<GetLojaAggregateType<T>>

    /**
     * Group by Loja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LojaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LojaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LojaGroupByArgs['orderBy'] }
        : { orderBy?: LojaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LojaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLojaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Loja model
   */
  readonly fields: LojaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Loja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LojaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    associado<T extends AssociadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociadoDefaultArgs<ExtArgs>>): Prisma__AssociadoClient<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Loja model
   */ 
  interface LojaFieldRefs {
    readonly id: FieldRef<"Loja", 'String'>
    readonly associadoId: FieldRef<"Loja", 'String'>
    readonly nomeLoja: FieldRef<"Loja", 'String'>
    readonly descricao: FieldRef<"Loja", 'String'>
    readonly status: FieldRef<"Loja", 'String'>
    readonly dataSolicitacao: FieldRef<"Loja", 'DateTime'>
    readonly dataAprovacao: FieldRef<"Loja", 'DateTime'>
    readonly motivoRejeicao: FieldRef<"Loja", 'String'>
    readonly produtos: FieldRef<"Loja", 'Int'>
    readonly atualizadoEm: FieldRef<"Loja", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Loja findUnique
   */
  export type LojaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * Filter, which Loja to fetch.
     */
    where: LojaWhereUniqueInput
  }

  /**
   * Loja findUniqueOrThrow
   */
  export type LojaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * Filter, which Loja to fetch.
     */
    where: LojaWhereUniqueInput
  }

  /**
   * Loja findFirst
   */
  export type LojaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * Filter, which Loja to fetch.
     */
    where?: LojaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lojas to fetch.
     */
    orderBy?: LojaOrderByWithRelationInput | LojaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lojas.
     */
    cursor?: LojaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lojas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lojas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lojas.
     */
    distinct?: LojaScalarFieldEnum | LojaScalarFieldEnum[]
  }

  /**
   * Loja findFirstOrThrow
   */
  export type LojaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * Filter, which Loja to fetch.
     */
    where?: LojaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lojas to fetch.
     */
    orderBy?: LojaOrderByWithRelationInput | LojaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lojas.
     */
    cursor?: LojaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lojas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lojas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lojas.
     */
    distinct?: LojaScalarFieldEnum | LojaScalarFieldEnum[]
  }

  /**
   * Loja findMany
   */
  export type LojaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * Filter, which Lojas to fetch.
     */
    where?: LojaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lojas to fetch.
     */
    orderBy?: LojaOrderByWithRelationInput | LojaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lojas.
     */
    cursor?: LojaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lojas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lojas.
     */
    skip?: number
    distinct?: LojaScalarFieldEnum | LojaScalarFieldEnum[]
  }

  /**
   * Loja create
   */
  export type LojaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * The data needed to create a Loja.
     */
    data: XOR<LojaCreateInput, LojaUncheckedCreateInput>
  }

  /**
   * Loja createMany
   */
  export type LojaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lojas.
     */
    data: LojaCreateManyInput | LojaCreateManyInput[]
  }

  /**
   * Loja createManyAndReturn
   */
  export type LojaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Lojas.
     */
    data: LojaCreateManyInput | LojaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Loja update
   */
  export type LojaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * The data needed to update a Loja.
     */
    data: XOR<LojaUpdateInput, LojaUncheckedUpdateInput>
    /**
     * Choose, which Loja to update.
     */
    where: LojaWhereUniqueInput
  }

  /**
   * Loja updateMany
   */
  export type LojaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lojas.
     */
    data: XOR<LojaUpdateManyMutationInput, LojaUncheckedUpdateManyInput>
    /**
     * Filter which Lojas to update
     */
    where?: LojaWhereInput
  }

  /**
   * Loja upsert
   */
  export type LojaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * The filter to search for the Loja to update in case it exists.
     */
    where: LojaWhereUniqueInput
    /**
     * In case the Loja found by the `where` argument doesn't exist, create a new Loja with this data.
     */
    create: XOR<LojaCreateInput, LojaUncheckedCreateInput>
    /**
     * In case the Loja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LojaUpdateInput, LojaUncheckedUpdateInput>
  }

  /**
   * Loja delete
   */
  export type LojaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
    /**
     * Filter which Loja to delete.
     */
    where: LojaWhereUniqueInput
  }

  /**
   * Loja deleteMany
   */
  export type LojaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lojas to delete
     */
    where?: LojaWhereInput
  }

  /**
   * Loja without action
   */
  export type LojaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loja
     */
    select?: LojaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LojaInclude<ExtArgs> | null
  }


  /**
   * Model Permissao
   */

  export type AggregatePermissao = {
    _count: PermissaoCountAggregateOutputType | null
    _avg: PermissaoAvgAggregateOutputType | null
    _sum: PermissaoSumAggregateOutputType | null
    _min: PermissaoMinAggregateOutputType | null
    _max: PermissaoMaxAggregateOutputType | null
  }

  export type PermissaoAvgAggregateOutputType = {
    quota: number | null
  }

  export type PermissaoSumAggregateOutputType = {
    quota: number | null
  }

  export type PermissaoMinAggregateOutputType = {
    id: string | null
    associadoId: string | null
    tipoPermissao: string | null
    ativa: boolean | null
    dataInicio: Date | null
    dataFim: Date | null
    quota: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PermissaoMaxAggregateOutputType = {
    id: string | null
    associadoId: string | null
    tipoPermissao: string | null
    ativa: boolean | null
    dataInicio: Date | null
    dataFim: Date | null
    quota: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PermissaoCountAggregateOutputType = {
    id: number
    associadoId: number
    tipoPermissao: number
    ativa: number
    dataInicio: number
    dataFim: number
    quota: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type PermissaoAvgAggregateInputType = {
    quota?: true
  }

  export type PermissaoSumAggregateInputType = {
    quota?: true
  }

  export type PermissaoMinAggregateInputType = {
    id?: true
    associadoId?: true
    tipoPermissao?: true
    ativa?: true
    dataInicio?: true
    dataFim?: true
    quota?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PermissaoMaxAggregateInputType = {
    id?: true
    associadoId?: true
    tipoPermissao?: true
    ativa?: true
    dataInicio?: true
    dataFim?: true
    quota?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PermissaoCountAggregateInputType = {
    id?: true
    associadoId?: true
    tipoPermissao?: true
    ativa?: true
    dataInicio?: true
    dataFim?: true
    quota?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type PermissaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissao to aggregate.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissaos
    **/
    _count?: true | PermissaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissaoMaxAggregateInputType
  }

  export type GetPermissaoAggregateType<T extends PermissaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissao[P]>
      : GetScalarType<T[P], AggregatePermissao[P]>
  }




  export type PermissaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissaoWhereInput
    orderBy?: PermissaoOrderByWithAggregationInput | PermissaoOrderByWithAggregationInput[]
    by: PermissaoScalarFieldEnum[] | PermissaoScalarFieldEnum
    having?: PermissaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissaoCountAggregateInputType | true
    _avg?: PermissaoAvgAggregateInputType
    _sum?: PermissaoSumAggregateInputType
    _min?: PermissaoMinAggregateInputType
    _max?: PermissaoMaxAggregateInputType
  }

  export type PermissaoGroupByOutputType = {
    id: string
    associadoId: string
    tipoPermissao: string
    ativa: boolean
    dataInicio: Date
    dataFim: Date | null
    quota: number | null
    criadoEm: Date
    atualizadoEm: Date
    _count: PermissaoCountAggregateOutputType | null
    _avg: PermissaoAvgAggregateOutputType | null
    _sum: PermissaoSumAggregateOutputType | null
    _min: PermissaoMinAggregateOutputType | null
    _max: PermissaoMaxAggregateOutputType | null
  }

  type GetPermissaoGroupByPayload<T extends PermissaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissaoGroupByOutputType[P]>
            : GetScalarType<T[P], PermissaoGroupByOutputType[P]>
        }
      >
    >


  export type PermissaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    associadoId?: boolean
    tipoPermissao?: boolean
    ativa?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    quota?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissao"]>

  export type PermissaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    associadoId?: boolean
    tipoPermissao?: boolean
    ativa?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    quota?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissao"]>

  export type PermissaoSelectScalar = {
    id?: boolean
    associadoId?: boolean
    tipoPermissao?: boolean
    ativa?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    quota?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type PermissaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }
  export type PermissaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }

  export type $PermissaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permissao"
    objects: {
      associado: Prisma.$AssociadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      associadoId: string
      tipoPermissao: string
      ativa: boolean
      dataInicio: Date
      dataFim: Date | null
      quota: number | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["permissao"]>
    composites: {}
  }

  type PermissaoGetPayload<S extends boolean | null | undefined | PermissaoDefaultArgs> = $Result.GetResult<Prisma.$PermissaoPayload, S>

  type PermissaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PermissaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PermissaoCountAggregateInputType | true
    }

  export interface PermissaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permissao'], meta: { name: 'Permissao' } }
    /**
     * Find zero or one Permissao that matches the filter.
     * @param {PermissaoFindUniqueArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissaoFindUniqueArgs>(args: SelectSubset<T, PermissaoFindUniqueArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Permissao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PermissaoFindUniqueOrThrowArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Permissao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoFindFirstArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissaoFindFirstArgs>(args?: SelectSubset<T, PermissaoFindFirstArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Permissao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoFindFirstOrThrowArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Permissaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissaos
     * const permissaos = await prisma.permissao.findMany()
     * 
     * // Get first 10 Permissaos
     * const permissaos = await prisma.permissao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissaoWithIdOnly = await prisma.permissao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissaoFindManyArgs>(args?: SelectSubset<T, PermissaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Permissao.
     * @param {PermissaoCreateArgs} args - Arguments to create a Permissao.
     * @example
     * // Create one Permissao
     * const Permissao = await prisma.permissao.create({
     *   data: {
     *     // ... data to create a Permissao
     *   }
     * })
     * 
     */
    create<T extends PermissaoCreateArgs>(args: SelectSubset<T, PermissaoCreateArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Permissaos.
     * @param {PermissaoCreateManyArgs} args - Arguments to create many Permissaos.
     * @example
     * // Create many Permissaos
     * const permissao = await prisma.permissao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissaoCreateManyArgs>(args?: SelectSubset<T, PermissaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissaos and returns the data saved in the database.
     * @param {PermissaoCreateManyAndReturnArgs} args - Arguments to create many Permissaos.
     * @example
     * // Create many Permissaos
     * const permissao = await prisma.permissao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissaos and only return the `id`
     * const permissaoWithIdOnly = await prisma.permissao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Permissao.
     * @param {PermissaoDeleteArgs} args - Arguments to delete one Permissao.
     * @example
     * // Delete one Permissao
     * const Permissao = await prisma.permissao.delete({
     *   where: {
     *     // ... filter to delete one Permissao
     *   }
     * })
     * 
     */
    delete<T extends PermissaoDeleteArgs>(args: SelectSubset<T, PermissaoDeleteArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Permissao.
     * @param {PermissaoUpdateArgs} args - Arguments to update one Permissao.
     * @example
     * // Update one Permissao
     * const permissao = await prisma.permissao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissaoUpdateArgs>(args: SelectSubset<T, PermissaoUpdateArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Permissaos.
     * @param {PermissaoDeleteManyArgs} args - Arguments to filter Permissaos to delete.
     * @example
     * // Delete a few Permissaos
     * const { count } = await prisma.permissao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissaoDeleteManyArgs>(args?: SelectSubset<T, PermissaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissaos
     * const permissao = await prisma.permissao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissaoUpdateManyArgs>(args: SelectSubset<T, PermissaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permissao.
     * @param {PermissaoUpsertArgs} args - Arguments to update or create a Permissao.
     * @example
     * // Update or create a Permissao
     * const permissao = await prisma.permissao.upsert({
     *   create: {
     *     // ... data to create a Permissao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permissao we want to update
     *   }
     * })
     */
    upsert<T extends PermissaoUpsertArgs>(args: SelectSubset<T, PermissaoUpsertArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Permissaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoCountArgs} args - Arguments to filter Permissaos to count.
     * @example
     * // Count the number of Permissaos
     * const count = await prisma.permissao.count({
     *   where: {
     *     // ... the filter for the Permissaos we want to count
     *   }
     * })
    **/
    count<T extends PermissaoCountArgs>(
      args?: Subset<T, PermissaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permissao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissaoAggregateArgs>(args: Subset<T, PermissaoAggregateArgs>): Prisma.PrismaPromise<GetPermissaoAggregateType<T>>

    /**
     * Group by Permissao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissaoGroupByArgs['orderBy'] }
        : { orderBy?: PermissaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permissao model
   */
  readonly fields: PermissaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permissao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    associado<T extends AssociadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociadoDefaultArgs<ExtArgs>>): Prisma__AssociadoClient<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permissao model
   */ 
  interface PermissaoFieldRefs {
    readonly id: FieldRef<"Permissao", 'String'>
    readonly associadoId: FieldRef<"Permissao", 'String'>
    readonly tipoPermissao: FieldRef<"Permissao", 'String'>
    readonly ativa: FieldRef<"Permissao", 'Boolean'>
    readonly dataInicio: FieldRef<"Permissao", 'DateTime'>
    readonly dataFim: FieldRef<"Permissao", 'DateTime'>
    readonly quota: FieldRef<"Permissao", 'Int'>
    readonly criadoEm: FieldRef<"Permissao", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Permissao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permissao findUnique
   */
  export type PermissaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao findUniqueOrThrow
   */
  export type PermissaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao findFirst
   */
  export type PermissaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissaos.
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissaos.
     */
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Permissao findFirstOrThrow
   */
  export type PermissaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissaos.
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissaos.
     */
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Permissao findMany
   */
  export type PermissaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissaos to fetch.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissaos.
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Permissao create
   */
  export type PermissaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Permissao.
     */
    data: XOR<PermissaoCreateInput, PermissaoUncheckedCreateInput>
  }

  /**
   * Permissao createMany
   */
  export type PermissaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissaos.
     */
    data: PermissaoCreateManyInput | PermissaoCreateManyInput[]
  }

  /**
   * Permissao createManyAndReturn
   */
  export type PermissaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Permissaos.
     */
    data: PermissaoCreateManyInput | PermissaoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permissao update
   */
  export type PermissaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Permissao.
     */
    data: XOR<PermissaoUpdateInput, PermissaoUncheckedUpdateInput>
    /**
     * Choose, which Permissao to update.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao updateMany
   */
  export type PermissaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissaos.
     */
    data: XOR<PermissaoUpdateManyMutationInput, PermissaoUncheckedUpdateManyInput>
    /**
     * Filter which Permissaos to update
     */
    where?: PermissaoWhereInput
  }

  /**
   * Permissao upsert
   */
  export type PermissaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Permissao to update in case it exists.
     */
    where: PermissaoWhereUniqueInput
    /**
     * In case the Permissao found by the `where` argument doesn't exist, create a new Permissao with this data.
     */
    create: XOR<PermissaoCreateInput, PermissaoUncheckedCreateInput>
    /**
     * In case the Permissao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissaoUpdateInput, PermissaoUncheckedUpdateInput>
  }

  /**
   * Permissao delete
   */
  export type PermissaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter which Permissao to delete.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao deleteMany
   */
  export type PermissaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissaos to delete
     */
    where?: PermissaoWhereInput
  }

  /**
   * Permissao without action
   */
  export type PermissaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
  }


  /**
   * Model Reuniao
   */

  export type AggregateReuniao = {
    _count: ReuniaoCountAggregateOutputType | null
    _min: ReuniaoMinAggregateOutputType | null
    _max: ReuniaoMaxAggregateOutputType | null
  }

  export type ReuniaoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    data: Date | null
    horario: string | null
    local: string | null
    status: string | null
    pautaJson: string | null
    ata: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ReuniaoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    data: Date | null
    horario: string | null
    local: string | null
    status: string | null
    pautaJson: string | null
    ata: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ReuniaoCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    data: number
    horario: number
    local: number
    status: number
    pautaJson: number
    ata: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type ReuniaoMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    data?: true
    horario?: true
    local?: true
    status?: true
    pautaJson?: true
    ata?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ReuniaoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    data?: true
    horario?: true
    local?: true
    status?: true
    pautaJson?: true
    ata?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ReuniaoCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    data?: true
    horario?: true
    local?: true
    status?: true
    pautaJson?: true
    ata?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type ReuniaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reuniao to aggregate.
     */
    where?: ReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reuniaos to fetch.
     */
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reuniaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reuniaos
    **/
    _count?: true | ReuniaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReuniaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReuniaoMaxAggregateInputType
  }

  export type GetReuniaoAggregateType<T extends ReuniaoAggregateArgs> = {
        [P in keyof T & keyof AggregateReuniao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReuniao[P]>
      : GetScalarType<T[P], AggregateReuniao[P]>
  }




  export type ReuniaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReuniaoWhereInput
    orderBy?: ReuniaoOrderByWithAggregationInput | ReuniaoOrderByWithAggregationInput[]
    by: ReuniaoScalarFieldEnum[] | ReuniaoScalarFieldEnum
    having?: ReuniaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReuniaoCountAggregateInputType | true
    _min?: ReuniaoMinAggregateInputType
    _max?: ReuniaoMaxAggregateInputType
  }

  export type ReuniaoGroupByOutputType = {
    id: string
    titulo: string
    descricao: string
    data: Date
    horario: string
    local: string
    status: string
    pautaJson: string
    ata: string | null
    criadoEm: Date
    atualizadoEm: Date
    _count: ReuniaoCountAggregateOutputType | null
    _min: ReuniaoMinAggregateOutputType | null
    _max: ReuniaoMaxAggregateOutputType | null
  }

  type GetReuniaoGroupByPayload<T extends ReuniaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReuniaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReuniaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReuniaoGroupByOutputType[P]>
            : GetScalarType<T[P], ReuniaoGroupByOutputType[P]>
        }
      >
    >


  export type ReuniaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    data?: boolean
    horario?: boolean
    local?: boolean
    status?: boolean
    pautaJson?: boolean
    ata?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    presencas?: boolean | Reuniao$presencasArgs<ExtArgs>
    _count?: boolean | ReuniaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reuniao"]>

  export type ReuniaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    data?: boolean
    horario?: boolean
    local?: boolean
    status?: boolean
    pautaJson?: boolean
    ata?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["reuniao"]>

  export type ReuniaoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    data?: boolean
    horario?: boolean
    local?: boolean
    status?: boolean
    pautaJson?: boolean
    ata?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type ReuniaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presencas?: boolean | Reuniao$presencasArgs<ExtArgs>
    _count?: boolean | ReuniaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReuniaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReuniaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reuniao"
    objects: {
      presencas: Prisma.$PresencaReuniaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string
      data: Date
      horario: string
      local: string
      status: string
      pautaJson: string
      ata: string | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["reuniao"]>
    composites: {}
  }

  type ReuniaoGetPayload<S extends boolean | null | undefined | ReuniaoDefaultArgs> = $Result.GetResult<Prisma.$ReuniaoPayload, S>

  type ReuniaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReuniaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReuniaoCountAggregateInputType | true
    }

  export interface ReuniaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reuniao'], meta: { name: 'Reuniao' } }
    /**
     * Find zero or one Reuniao that matches the filter.
     * @param {ReuniaoFindUniqueArgs} args - Arguments to find a Reuniao
     * @example
     * // Get one Reuniao
     * const reuniao = await prisma.reuniao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReuniaoFindUniqueArgs>(args: SelectSubset<T, ReuniaoFindUniqueArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reuniao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReuniaoFindUniqueOrThrowArgs} args - Arguments to find a Reuniao
     * @example
     * // Get one Reuniao
     * const reuniao = await prisma.reuniao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReuniaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ReuniaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reuniao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoFindFirstArgs} args - Arguments to find a Reuniao
     * @example
     * // Get one Reuniao
     * const reuniao = await prisma.reuniao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReuniaoFindFirstArgs>(args?: SelectSubset<T, ReuniaoFindFirstArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reuniao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoFindFirstOrThrowArgs} args - Arguments to find a Reuniao
     * @example
     * // Get one Reuniao
     * const reuniao = await prisma.reuniao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReuniaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ReuniaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reuniaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reuniaos
     * const reuniaos = await prisma.reuniao.findMany()
     * 
     * // Get first 10 Reuniaos
     * const reuniaos = await prisma.reuniao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reuniaoWithIdOnly = await prisma.reuniao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReuniaoFindManyArgs>(args?: SelectSubset<T, ReuniaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reuniao.
     * @param {ReuniaoCreateArgs} args - Arguments to create a Reuniao.
     * @example
     * // Create one Reuniao
     * const Reuniao = await prisma.reuniao.create({
     *   data: {
     *     // ... data to create a Reuniao
     *   }
     * })
     * 
     */
    create<T extends ReuniaoCreateArgs>(args: SelectSubset<T, ReuniaoCreateArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reuniaos.
     * @param {ReuniaoCreateManyArgs} args - Arguments to create many Reuniaos.
     * @example
     * // Create many Reuniaos
     * const reuniao = await prisma.reuniao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReuniaoCreateManyArgs>(args?: SelectSubset<T, ReuniaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reuniaos and returns the data saved in the database.
     * @param {ReuniaoCreateManyAndReturnArgs} args - Arguments to create many Reuniaos.
     * @example
     * // Create many Reuniaos
     * const reuniao = await prisma.reuniao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reuniaos and only return the `id`
     * const reuniaoWithIdOnly = await prisma.reuniao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReuniaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ReuniaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reuniao.
     * @param {ReuniaoDeleteArgs} args - Arguments to delete one Reuniao.
     * @example
     * // Delete one Reuniao
     * const Reuniao = await prisma.reuniao.delete({
     *   where: {
     *     // ... filter to delete one Reuniao
     *   }
     * })
     * 
     */
    delete<T extends ReuniaoDeleteArgs>(args: SelectSubset<T, ReuniaoDeleteArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reuniao.
     * @param {ReuniaoUpdateArgs} args - Arguments to update one Reuniao.
     * @example
     * // Update one Reuniao
     * const reuniao = await prisma.reuniao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReuniaoUpdateArgs>(args: SelectSubset<T, ReuniaoUpdateArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reuniaos.
     * @param {ReuniaoDeleteManyArgs} args - Arguments to filter Reuniaos to delete.
     * @example
     * // Delete a few Reuniaos
     * const { count } = await prisma.reuniao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReuniaoDeleteManyArgs>(args?: SelectSubset<T, ReuniaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reuniaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reuniaos
     * const reuniao = await prisma.reuniao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReuniaoUpdateManyArgs>(args: SelectSubset<T, ReuniaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reuniao.
     * @param {ReuniaoUpsertArgs} args - Arguments to update or create a Reuniao.
     * @example
     * // Update or create a Reuniao
     * const reuniao = await prisma.reuniao.upsert({
     *   create: {
     *     // ... data to create a Reuniao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reuniao we want to update
     *   }
     * })
     */
    upsert<T extends ReuniaoUpsertArgs>(args: SelectSubset<T, ReuniaoUpsertArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reuniaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoCountArgs} args - Arguments to filter Reuniaos to count.
     * @example
     * // Count the number of Reuniaos
     * const count = await prisma.reuniao.count({
     *   where: {
     *     // ... the filter for the Reuniaos we want to count
     *   }
     * })
    **/
    count<T extends ReuniaoCountArgs>(
      args?: Subset<T, ReuniaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReuniaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reuniao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReuniaoAggregateArgs>(args: Subset<T, ReuniaoAggregateArgs>): Prisma.PrismaPromise<GetReuniaoAggregateType<T>>

    /**
     * Group by Reuniao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReuniaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReuniaoGroupByArgs['orderBy'] }
        : { orderBy?: ReuniaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReuniaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReuniaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reuniao model
   */
  readonly fields: ReuniaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reuniao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReuniaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    presencas<T extends Reuniao$presencasArgs<ExtArgs> = {}>(args?: Subset<T, Reuniao$presencasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencaReuniaoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reuniao model
   */ 
  interface ReuniaoFieldRefs {
    readonly id: FieldRef<"Reuniao", 'String'>
    readonly titulo: FieldRef<"Reuniao", 'String'>
    readonly descricao: FieldRef<"Reuniao", 'String'>
    readonly data: FieldRef<"Reuniao", 'DateTime'>
    readonly horario: FieldRef<"Reuniao", 'String'>
    readonly local: FieldRef<"Reuniao", 'String'>
    readonly status: FieldRef<"Reuniao", 'String'>
    readonly pautaJson: FieldRef<"Reuniao", 'String'>
    readonly ata: FieldRef<"Reuniao", 'String'>
    readonly criadoEm: FieldRef<"Reuniao", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Reuniao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reuniao findUnique
   */
  export type ReuniaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniao to fetch.
     */
    where: ReuniaoWhereUniqueInput
  }

  /**
   * Reuniao findUniqueOrThrow
   */
  export type ReuniaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniao to fetch.
     */
    where: ReuniaoWhereUniqueInput
  }

  /**
   * Reuniao findFirst
   */
  export type ReuniaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniao to fetch.
     */
    where?: ReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reuniaos to fetch.
     */
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reuniaos.
     */
    cursor?: ReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reuniaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reuniaos.
     */
    distinct?: ReuniaoScalarFieldEnum | ReuniaoScalarFieldEnum[]
  }

  /**
   * Reuniao findFirstOrThrow
   */
  export type ReuniaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniao to fetch.
     */
    where?: ReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reuniaos to fetch.
     */
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reuniaos.
     */
    cursor?: ReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reuniaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reuniaos.
     */
    distinct?: ReuniaoScalarFieldEnum | ReuniaoScalarFieldEnum[]
  }

  /**
   * Reuniao findMany
   */
  export type ReuniaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniaos to fetch.
     */
    where?: ReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reuniaos to fetch.
     */
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reuniaos.
     */
    cursor?: ReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reuniaos.
     */
    skip?: number
    distinct?: ReuniaoScalarFieldEnum | ReuniaoScalarFieldEnum[]
  }

  /**
   * Reuniao create
   */
  export type ReuniaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Reuniao.
     */
    data: XOR<ReuniaoCreateInput, ReuniaoUncheckedCreateInput>
  }

  /**
   * Reuniao createMany
   */
  export type ReuniaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reuniaos.
     */
    data: ReuniaoCreateManyInput | ReuniaoCreateManyInput[]
  }

  /**
   * Reuniao createManyAndReturn
   */
  export type ReuniaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reuniaos.
     */
    data: ReuniaoCreateManyInput | ReuniaoCreateManyInput[]
  }

  /**
   * Reuniao update
   */
  export type ReuniaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Reuniao.
     */
    data: XOR<ReuniaoUpdateInput, ReuniaoUncheckedUpdateInput>
    /**
     * Choose, which Reuniao to update.
     */
    where: ReuniaoWhereUniqueInput
  }

  /**
   * Reuniao updateMany
   */
  export type ReuniaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reuniaos.
     */
    data: XOR<ReuniaoUpdateManyMutationInput, ReuniaoUncheckedUpdateManyInput>
    /**
     * Filter which Reuniaos to update
     */
    where?: ReuniaoWhereInput
  }

  /**
   * Reuniao upsert
   */
  export type ReuniaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Reuniao to update in case it exists.
     */
    where: ReuniaoWhereUniqueInput
    /**
     * In case the Reuniao found by the `where` argument doesn't exist, create a new Reuniao with this data.
     */
    create: XOR<ReuniaoCreateInput, ReuniaoUncheckedCreateInput>
    /**
     * In case the Reuniao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReuniaoUpdateInput, ReuniaoUncheckedUpdateInput>
  }

  /**
   * Reuniao delete
   */
  export type ReuniaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter which Reuniao to delete.
     */
    where: ReuniaoWhereUniqueInput
  }

  /**
   * Reuniao deleteMany
   */
  export type ReuniaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reuniaos to delete
     */
    where?: ReuniaoWhereInput
  }

  /**
   * Reuniao.presencas
   */
  export type Reuniao$presencasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresencaReuniao
     */
    select?: PresencaReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaReuniaoInclude<ExtArgs> | null
    where?: PresencaReuniaoWhereInput
    orderBy?: PresencaReuniaoOrderByWithRelationInput | PresencaReuniaoOrderByWithRelationInput[]
    cursor?: PresencaReuniaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresencaReuniaoScalarFieldEnum | PresencaReuniaoScalarFieldEnum[]
  }

  /**
   * Reuniao without action
   */
  export type ReuniaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
  }


  /**
   * Model PresencaReuniao
   */

  export type AggregatePresencaReuniao = {
    _count: PresencaReuniaoCountAggregateOutputType | null
    _min: PresencaReuniaoMinAggregateOutputType | null
    _max: PresencaReuniaoMaxAggregateOutputType | null
  }

  export type PresencaReuniaoMinAggregateOutputType = {
    id: string | null
    reuniaoId: string | null
    associadoId: string | null
    presente: boolean | null
  }

  export type PresencaReuniaoMaxAggregateOutputType = {
    id: string | null
    reuniaoId: string | null
    associadoId: string | null
    presente: boolean | null
  }

  export type PresencaReuniaoCountAggregateOutputType = {
    id: number
    reuniaoId: number
    associadoId: number
    presente: number
    _all: number
  }


  export type PresencaReuniaoMinAggregateInputType = {
    id?: true
    reuniaoId?: true
    associadoId?: true
    presente?: true
  }

  export type PresencaReuniaoMaxAggregateInputType = {
    id?: true
    reuniaoId?: true
    associadoId?: true
    presente?: true
  }

  export type PresencaReuniaoCountAggregateInputType = {
    id?: true
    reuniaoId?: true
    associadoId?: true
    presente?: true
    _all?: true
  }

  export type PresencaReuniaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PresencaReuniao to aggregate.
     */
    where?: PresencaReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresencaReuniaos to fetch.
     */
    orderBy?: PresencaReuniaoOrderByWithRelationInput | PresencaReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresencaReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresencaReuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresencaReuniaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PresencaReuniaos
    **/
    _count?: true | PresencaReuniaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresencaReuniaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresencaReuniaoMaxAggregateInputType
  }

  export type GetPresencaReuniaoAggregateType<T extends PresencaReuniaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePresencaReuniao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresencaReuniao[P]>
      : GetScalarType<T[P], AggregatePresencaReuniao[P]>
  }




  export type PresencaReuniaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresencaReuniaoWhereInput
    orderBy?: PresencaReuniaoOrderByWithAggregationInput | PresencaReuniaoOrderByWithAggregationInput[]
    by: PresencaReuniaoScalarFieldEnum[] | PresencaReuniaoScalarFieldEnum
    having?: PresencaReuniaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresencaReuniaoCountAggregateInputType | true
    _min?: PresencaReuniaoMinAggregateInputType
    _max?: PresencaReuniaoMaxAggregateInputType
  }

  export type PresencaReuniaoGroupByOutputType = {
    id: string
    reuniaoId: string
    associadoId: string
    presente: boolean
    _count: PresencaReuniaoCountAggregateOutputType | null
    _min: PresencaReuniaoMinAggregateOutputType | null
    _max: PresencaReuniaoMaxAggregateOutputType | null
  }

  type GetPresencaReuniaoGroupByPayload<T extends PresencaReuniaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresencaReuniaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresencaReuniaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresencaReuniaoGroupByOutputType[P]>
            : GetScalarType<T[P], PresencaReuniaoGroupByOutputType[P]>
        }
      >
    >


  export type PresencaReuniaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reuniaoId?: boolean
    associadoId?: boolean
    presente?: boolean
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presencaReuniao"]>

  export type PresencaReuniaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reuniaoId?: boolean
    associadoId?: boolean
    presente?: boolean
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presencaReuniao"]>

  export type PresencaReuniaoSelectScalar = {
    id?: boolean
    reuniaoId?: boolean
    associadoId?: boolean
    presente?: boolean
  }

  export type PresencaReuniaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }
  export type PresencaReuniaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reuniao?: boolean | ReuniaoDefaultArgs<ExtArgs>
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }

  export type $PresencaReuniaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PresencaReuniao"
    objects: {
      reuniao: Prisma.$ReuniaoPayload<ExtArgs>
      associado: Prisma.$AssociadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reuniaoId: string
      associadoId: string
      presente: boolean
    }, ExtArgs["result"]["presencaReuniao"]>
    composites: {}
  }

  type PresencaReuniaoGetPayload<S extends boolean | null | undefined | PresencaReuniaoDefaultArgs> = $Result.GetResult<Prisma.$PresencaReuniaoPayload, S>

  type PresencaReuniaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PresencaReuniaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PresencaReuniaoCountAggregateInputType | true
    }

  export interface PresencaReuniaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PresencaReuniao'], meta: { name: 'PresencaReuniao' } }
    /**
     * Find zero or one PresencaReuniao that matches the filter.
     * @param {PresencaReuniaoFindUniqueArgs} args - Arguments to find a PresencaReuniao
     * @example
     * // Get one PresencaReuniao
     * const presencaReuniao = await prisma.presencaReuniao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresencaReuniaoFindUniqueArgs>(args: SelectSubset<T, PresencaReuniaoFindUniqueArgs<ExtArgs>>): Prisma__PresencaReuniaoClient<$Result.GetResult<Prisma.$PresencaReuniaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PresencaReuniao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PresencaReuniaoFindUniqueOrThrowArgs} args - Arguments to find a PresencaReuniao
     * @example
     * // Get one PresencaReuniao
     * const presencaReuniao = await prisma.presencaReuniao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresencaReuniaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PresencaReuniaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresencaReuniaoClient<$Result.GetResult<Prisma.$PresencaReuniaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PresencaReuniao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaReuniaoFindFirstArgs} args - Arguments to find a PresencaReuniao
     * @example
     * // Get one PresencaReuniao
     * const presencaReuniao = await prisma.presencaReuniao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresencaReuniaoFindFirstArgs>(args?: SelectSubset<T, PresencaReuniaoFindFirstArgs<ExtArgs>>): Prisma__PresencaReuniaoClient<$Result.GetResult<Prisma.$PresencaReuniaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PresencaReuniao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaReuniaoFindFirstOrThrowArgs} args - Arguments to find a PresencaReuniao
     * @example
     * // Get one PresencaReuniao
     * const presencaReuniao = await prisma.presencaReuniao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresencaReuniaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PresencaReuniaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresencaReuniaoClient<$Result.GetResult<Prisma.$PresencaReuniaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PresencaReuniaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaReuniaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PresencaReuniaos
     * const presencaReuniaos = await prisma.presencaReuniao.findMany()
     * 
     * // Get first 10 PresencaReuniaos
     * const presencaReuniaos = await prisma.presencaReuniao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presencaReuniaoWithIdOnly = await prisma.presencaReuniao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PresencaReuniaoFindManyArgs>(args?: SelectSubset<T, PresencaReuniaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencaReuniaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PresencaReuniao.
     * @param {PresencaReuniaoCreateArgs} args - Arguments to create a PresencaReuniao.
     * @example
     * // Create one PresencaReuniao
     * const PresencaReuniao = await prisma.presencaReuniao.create({
     *   data: {
     *     // ... data to create a PresencaReuniao
     *   }
     * })
     * 
     */
    create<T extends PresencaReuniaoCreateArgs>(args: SelectSubset<T, PresencaReuniaoCreateArgs<ExtArgs>>): Prisma__PresencaReuniaoClient<$Result.GetResult<Prisma.$PresencaReuniaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PresencaReuniaos.
     * @param {PresencaReuniaoCreateManyArgs} args - Arguments to create many PresencaReuniaos.
     * @example
     * // Create many PresencaReuniaos
     * const presencaReuniao = await prisma.presencaReuniao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresencaReuniaoCreateManyArgs>(args?: SelectSubset<T, PresencaReuniaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PresencaReuniaos and returns the data saved in the database.
     * @param {PresencaReuniaoCreateManyAndReturnArgs} args - Arguments to create many PresencaReuniaos.
     * @example
     * // Create many PresencaReuniaos
     * const presencaReuniao = await prisma.presencaReuniao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PresencaReuniaos and only return the `id`
     * const presencaReuniaoWithIdOnly = await prisma.presencaReuniao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PresencaReuniaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PresencaReuniaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencaReuniaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PresencaReuniao.
     * @param {PresencaReuniaoDeleteArgs} args - Arguments to delete one PresencaReuniao.
     * @example
     * // Delete one PresencaReuniao
     * const PresencaReuniao = await prisma.presencaReuniao.delete({
     *   where: {
     *     // ... filter to delete one PresencaReuniao
     *   }
     * })
     * 
     */
    delete<T extends PresencaReuniaoDeleteArgs>(args: SelectSubset<T, PresencaReuniaoDeleteArgs<ExtArgs>>): Prisma__PresencaReuniaoClient<$Result.GetResult<Prisma.$PresencaReuniaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PresencaReuniao.
     * @param {PresencaReuniaoUpdateArgs} args - Arguments to update one PresencaReuniao.
     * @example
     * // Update one PresencaReuniao
     * const presencaReuniao = await prisma.presencaReuniao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresencaReuniaoUpdateArgs>(args: SelectSubset<T, PresencaReuniaoUpdateArgs<ExtArgs>>): Prisma__PresencaReuniaoClient<$Result.GetResult<Prisma.$PresencaReuniaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PresencaReuniaos.
     * @param {PresencaReuniaoDeleteManyArgs} args - Arguments to filter PresencaReuniaos to delete.
     * @example
     * // Delete a few PresencaReuniaos
     * const { count } = await prisma.presencaReuniao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresencaReuniaoDeleteManyArgs>(args?: SelectSubset<T, PresencaReuniaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PresencaReuniaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaReuniaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PresencaReuniaos
     * const presencaReuniao = await prisma.presencaReuniao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresencaReuniaoUpdateManyArgs>(args: SelectSubset<T, PresencaReuniaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PresencaReuniao.
     * @param {PresencaReuniaoUpsertArgs} args - Arguments to update or create a PresencaReuniao.
     * @example
     * // Update or create a PresencaReuniao
     * const presencaReuniao = await prisma.presencaReuniao.upsert({
     *   create: {
     *     // ... data to create a PresencaReuniao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PresencaReuniao we want to update
     *   }
     * })
     */
    upsert<T extends PresencaReuniaoUpsertArgs>(args: SelectSubset<T, PresencaReuniaoUpsertArgs<ExtArgs>>): Prisma__PresencaReuniaoClient<$Result.GetResult<Prisma.$PresencaReuniaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PresencaReuniaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaReuniaoCountArgs} args - Arguments to filter PresencaReuniaos to count.
     * @example
     * // Count the number of PresencaReuniaos
     * const count = await prisma.presencaReuniao.count({
     *   where: {
     *     // ... the filter for the PresencaReuniaos we want to count
     *   }
     * })
    **/
    count<T extends PresencaReuniaoCountArgs>(
      args?: Subset<T, PresencaReuniaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresencaReuniaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PresencaReuniao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaReuniaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PresencaReuniaoAggregateArgs>(args: Subset<T, PresencaReuniaoAggregateArgs>): Prisma.PrismaPromise<GetPresencaReuniaoAggregateType<T>>

    /**
     * Group by PresencaReuniao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaReuniaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PresencaReuniaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresencaReuniaoGroupByArgs['orderBy'] }
        : { orderBy?: PresencaReuniaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PresencaReuniaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresencaReuniaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PresencaReuniao model
   */
  readonly fields: PresencaReuniaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PresencaReuniao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresencaReuniaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reuniao<T extends ReuniaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReuniaoDefaultArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    associado<T extends AssociadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociadoDefaultArgs<ExtArgs>>): Prisma__AssociadoClient<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PresencaReuniao model
   */ 
  interface PresencaReuniaoFieldRefs {
    readonly id: FieldRef<"PresencaReuniao", 'String'>
    readonly reuniaoId: FieldRef<"PresencaReuniao", 'String'>
    readonly associadoId: FieldRef<"PresencaReuniao", 'String'>
    readonly presente: FieldRef<"PresencaReuniao", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PresencaReuniao findUnique
   */
  export type PresencaReuniaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresencaReuniao
     */
    select?: PresencaReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which PresencaReuniao to fetch.
     */
    where: PresencaReuniaoWhereUniqueInput
  }

  /**
   * PresencaReuniao findUniqueOrThrow
   */
  export type PresencaReuniaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresencaReuniao
     */
    select?: PresencaReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which PresencaReuniao to fetch.
     */
    where: PresencaReuniaoWhereUniqueInput
  }

  /**
   * PresencaReuniao findFirst
   */
  export type PresencaReuniaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresencaReuniao
     */
    select?: PresencaReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which PresencaReuniao to fetch.
     */
    where?: PresencaReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresencaReuniaos to fetch.
     */
    orderBy?: PresencaReuniaoOrderByWithRelationInput | PresencaReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PresencaReuniaos.
     */
    cursor?: PresencaReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresencaReuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresencaReuniaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PresencaReuniaos.
     */
    distinct?: PresencaReuniaoScalarFieldEnum | PresencaReuniaoScalarFieldEnum[]
  }

  /**
   * PresencaReuniao findFirstOrThrow
   */
  export type PresencaReuniaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresencaReuniao
     */
    select?: PresencaReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which PresencaReuniao to fetch.
     */
    where?: PresencaReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresencaReuniaos to fetch.
     */
    orderBy?: PresencaReuniaoOrderByWithRelationInput | PresencaReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PresencaReuniaos.
     */
    cursor?: PresencaReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresencaReuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresencaReuniaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PresencaReuniaos.
     */
    distinct?: PresencaReuniaoScalarFieldEnum | PresencaReuniaoScalarFieldEnum[]
  }

  /**
   * PresencaReuniao findMany
   */
  export type PresencaReuniaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresencaReuniao
     */
    select?: PresencaReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which PresencaReuniaos to fetch.
     */
    where?: PresencaReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresencaReuniaos to fetch.
     */
    orderBy?: PresencaReuniaoOrderByWithRelationInput | PresencaReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PresencaReuniaos.
     */
    cursor?: PresencaReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresencaReuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresencaReuniaos.
     */
    skip?: number
    distinct?: PresencaReuniaoScalarFieldEnum | PresencaReuniaoScalarFieldEnum[]
  }

  /**
   * PresencaReuniao create
   */
  export type PresencaReuniaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresencaReuniao
     */
    select?: PresencaReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaReuniaoInclude<ExtArgs> | null
    /**
     * The data needed to create a PresencaReuniao.
     */
    data: XOR<PresencaReuniaoCreateInput, PresencaReuniaoUncheckedCreateInput>
  }

  /**
   * PresencaReuniao createMany
   */
  export type PresencaReuniaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PresencaReuniaos.
     */
    data: PresencaReuniaoCreateManyInput | PresencaReuniaoCreateManyInput[]
  }

  /**
   * PresencaReuniao createManyAndReturn
   */
  export type PresencaReuniaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresencaReuniao
     */
    select?: PresencaReuniaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PresencaReuniaos.
     */
    data: PresencaReuniaoCreateManyInput | PresencaReuniaoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaReuniaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PresencaReuniao update
   */
  export type PresencaReuniaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresencaReuniao
     */
    select?: PresencaReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaReuniaoInclude<ExtArgs> | null
    /**
     * The data needed to update a PresencaReuniao.
     */
    data: XOR<PresencaReuniaoUpdateInput, PresencaReuniaoUncheckedUpdateInput>
    /**
     * Choose, which PresencaReuniao to update.
     */
    where: PresencaReuniaoWhereUniqueInput
  }

  /**
   * PresencaReuniao updateMany
   */
  export type PresencaReuniaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PresencaReuniaos.
     */
    data: XOR<PresencaReuniaoUpdateManyMutationInput, PresencaReuniaoUncheckedUpdateManyInput>
    /**
     * Filter which PresencaReuniaos to update
     */
    where?: PresencaReuniaoWhereInput
  }

  /**
   * PresencaReuniao upsert
   */
  export type PresencaReuniaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresencaReuniao
     */
    select?: PresencaReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaReuniaoInclude<ExtArgs> | null
    /**
     * The filter to search for the PresencaReuniao to update in case it exists.
     */
    where: PresencaReuniaoWhereUniqueInput
    /**
     * In case the PresencaReuniao found by the `where` argument doesn't exist, create a new PresencaReuniao with this data.
     */
    create: XOR<PresencaReuniaoCreateInput, PresencaReuniaoUncheckedCreateInput>
    /**
     * In case the PresencaReuniao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresencaReuniaoUpdateInput, PresencaReuniaoUncheckedUpdateInput>
  }

  /**
   * PresencaReuniao delete
   */
  export type PresencaReuniaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresencaReuniao
     */
    select?: PresencaReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaReuniaoInclude<ExtArgs> | null
    /**
     * Filter which PresencaReuniao to delete.
     */
    where: PresencaReuniaoWhereUniqueInput
  }

  /**
   * PresencaReuniao deleteMany
   */
  export type PresencaReuniaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PresencaReuniaos to delete
     */
    where?: PresencaReuniaoWhereInput
  }

  /**
   * PresencaReuniao without action
   */
  export type PresencaReuniaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresencaReuniao
     */
    select?: PresencaReuniaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaReuniaoInclude<ExtArgs> | null
  }


  /**
   * Model Mensalidade
   */

  export type AggregateMensalidade = {
    _count: MensalidadeCountAggregateOutputType | null
    _avg: MensalidadeAvgAggregateOutputType | null
    _sum: MensalidadeSumAggregateOutputType | null
    _min: MensalidadeMinAggregateOutputType | null
    _max: MensalidadeMaxAggregateOutputType | null
  }

  export type MensalidadeAvgAggregateOutputType = {
    valor: number | null
  }

  export type MensalidadeSumAggregateOutputType = {
    valor: number | null
  }

  export type MensalidadeMinAggregateOutputType = {
    id: string | null
    associadoId: string | null
    competencia: string | null
    valor: number | null
    dataVencimento: Date | null
    dataPagamento: Date | null
    status: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type MensalidadeMaxAggregateOutputType = {
    id: string | null
    associadoId: string | null
    competencia: string | null
    valor: number | null
    dataVencimento: Date | null
    dataPagamento: Date | null
    status: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type MensalidadeCountAggregateOutputType = {
    id: number
    associadoId: number
    competencia: number
    valor: number
    dataVencimento: number
    dataPagamento: number
    status: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type MensalidadeAvgAggregateInputType = {
    valor?: true
  }

  export type MensalidadeSumAggregateInputType = {
    valor?: true
  }

  export type MensalidadeMinAggregateInputType = {
    id?: true
    associadoId?: true
    competencia?: true
    valor?: true
    dataVencimento?: true
    dataPagamento?: true
    status?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type MensalidadeMaxAggregateInputType = {
    id?: true
    associadoId?: true
    competencia?: true
    valor?: true
    dataVencimento?: true
    dataPagamento?: true
    status?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type MensalidadeCountAggregateInputType = {
    id?: true
    associadoId?: true
    competencia?: true
    valor?: true
    dataVencimento?: true
    dataPagamento?: true
    status?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type MensalidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensalidade to aggregate.
     */
    where?: MensalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensalidades to fetch.
     */
    orderBy?: MensalidadeOrderByWithRelationInput | MensalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensalidades
    **/
    _count?: true | MensalidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensalidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensalidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensalidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensalidadeMaxAggregateInputType
  }

  export type GetMensalidadeAggregateType<T extends MensalidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateMensalidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensalidade[P]>
      : GetScalarType<T[P], AggregateMensalidade[P]>
  }




  export type MensalidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensalidadeWhereInput
    orderBy?: MensalidadeOrderByWithAggregationInput | MensalidadeOrderByWithAggregationInput[]
    by: MensalidadeScalarFieldEnum[] | MensalidadeScalarFieldEnum
    having?: MensalidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensalidadeCountAggregateInputType | true
    _avg?: MensalidadeAvgAggregateInputType
    _sum?: MensalidadeSumAggregateInputType
    _min?: MensalidadeMinAggregateInputType
    _max?: MensalidadeMaxAggregateInputType
  }

  export type MensalidadeGroupByOutputType = {
    id: string
    associadoId: string
    competencia: string
    valor: number
    dataVencimento: Date
    dataPagamento: Date | null
    status: string
    criadoEm: Date
    atualizadoEm: Date
    _count: MensalidadeCountAggregateOutputType | null
    _avg: MensalidadeAvgAggregateOutputType | null
    _sum: MensalidadeSumAggregateOutputType | null
    _min: MensalidadeMinAggregateOutputType | null
    _max: MensalidadeMaxAggregateOutputType | null
  }

  type GetMensalidadeGroupByPayload<T extends MensalidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensalidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensalidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensalidadeGroupByOutputType[P]>
            : GetScalarType<T[P], MensalidadeGroupByOutputType[P]>
        }
      >
    >


  export type MensalidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    associadoId?: boolean
    competencia?: boolean
    valor?: boolean
    dataVencimento?: boolean
    dataPagamento?: boolean
    status?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensalidade"]>

  export type MensalidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    associadoId?: boolean
    competencia?: boolean
    valor?: boolean
    dataVencimento?: boolean
    dataPagamento?: boolean
    status?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensalidade"]>

  export type MensalidadeSelectScalar = {
    id?: boolean
    associadoId?: boolean
    competencia?: boolean
    valor?: boolean
    dataVencimento?: boolean
    dataPagamento?: boolean
    status?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type MensalidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }
  export type MensalidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    associado?: boolean | AssociadoDefaultArgs<ExtArgs>
  }

  export type $MensalidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensalidade"
    objects: {
      associado: Prisma.$AssociadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      associadoId: string
      competencia: string
      valor: number
      dataVencimento: Date
      dataPagamento: Date | null
      status: string
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["mensalidade"]>
    composites: {}
  }

  type MensalidadeGetPayload<S extends boolean | null | undefined | MensalidadeDefaultArgs> = $Result.GetResult<Prisma.$MensalidadePayload, S>

  type MensalidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MensalidadeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MensalidadeCountAggregateInputType | true
    }

  export interface MensalidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensalidade'], meta: { name: 'Mensalidade' } }
    /**
     * Find zero or one Mensalidade that matches the filter.
     * @param {MensalidadeFindUniqueArgs} args - Arguments to find a Mensalidade
     * @example
     * // Get one Mensalidade
     * const mensalidade = await prisma.mensalidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensalidadeFindUniqueArgs>(args: SelectSubset<T, MensalidadeFindUniqueArgs<ExtArgs>>): Prisma__MensalidadeClient<$Result.GetResult<Prisma.$MensalidadePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mensalidade that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MensalidadeFindUniqueOrThrowArgs} args - Arguments to find a Mensalidade
     * @example
     * // Get one Mensalidade
     * const mensalidade = await prisma.mensalidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensalidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, MensalidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensalidadeClient<$Result.GetResult<Prisma.$MensalidadePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mensalidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensalidadeFindFirstArgs} args - Arguments to find a Mensalidade
     * @example
     * // Get one Mensalidade
     * const mensalidade = await prisma.mensalidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensalidadeFindFirstArgs>(args?: SelectSubset<T, MensalidadeFindFirstArgs<ExtArgs>>): Prisma__MensalidadeClient<$Result.GetResult<Prisma.$MensalidadePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mensalidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensalidadeFindFirstOrThrowArgs} args - Arguments to find a Mensalidade
     * @example
     * // Get one Mensalidade
     * const mensalidade = await prisma.mensalidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensalidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, MensalidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensalidadeClient<$Result.GetResult<Prisma.$MensalidadePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mensalidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensalidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensalidades
     * const mensalidades = await prisma.mensalidade.findMany()
     * 
     * // Get first 10 Mensalidades
     * const mensalidades = await prisma.mensalidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensalidadeWithIdOnly = await prisma.mensalidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensalidadeFindManyArgs>(args?: SelectSubset<T, MensalidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensalidadePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mensalidade.
     * @param {MensalidadeCreateArgs} args - Arguments to create a Mensalidade.
     * @example
     * // Create one Mensalidade
     * const Mensalidade = await prisma.mensalidade.create({
     *   data: {
     *     // ... data to create a Mensalidade
     *   }
     * })
     * 
     */
    create<T extends MensalidadeCreateArgs>(args: SelectSubset<T, MensalidadeCreateArgs<ExtArgs>>): Prisma__MensalidadeClient<$Result.GetResult<Prisma.$MensalidadePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mensalidades.
     * @param {MensalidadeCreateManyArgs} args - Arguments to create many Mensalidades.
     * @example
     * // Create many Mensalidades
     * const mensalidade = await prisma.mensalidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensalidadeCreateManyArgs>(args?: SelectSubset<T, MensalidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensalidades and returns the data saved in the database.
     * @param {MensalidadeCreateManyAndReturnArgs} args - Arguments to create many Mensalidades.
     * @example
     * // Create many Mensalidades
     * const mensalidade = await prisma.mensalidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensalidades and only return the `id`
     * const mensalidadeWithIdOnly = await prisma.mensalidade.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensalidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, MensalidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensalidadePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Mensalidade.
     * @param {MensalidadeDeleteArgs} args - Arguments to delete one Mensalidade.
     * @example
     * // Delete one Mensalidade
     * const Mensalidade = await prisma.mensalidade.delete({
     *   where: {
     *     // ... filter to delete one Mensalidade
     *   }
     * })
     * 
     */
    delete<T extends MensalidadeDeleteArgs>(args: SelectSubset<T, MensalidadeDeleteArgs<ExtArgs>>): Prisma__MensalidadeClient<$Result.GetResult<Prisma.$MensalidadePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mensalidade.
     * @param {MensalidadeUpdateArgs} args - Arguments to update one Mensalidade.
     * @example
     * // Update one Mensalidade
     * const mensalidade = await prisma.mensalidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensalidadeUpdateArgs>(args: SelectSubset<T, MensalidadeUpdateArgs<ExtArgs>>): Prisma__MensalidadeClient<$Result.GetResult<Prisma.$MensalidadePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mensalidades.
     * @param {MensalidadeDeleteManyArgs} args - Arguments to filter Mensalidades to delete.
     * @example
     * // Delete a few Mensalidades
     * const { count } = await prisma.mensalidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensalidadeDeleteManyArgs>(args?: SelectSubset<T, MensalidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensalidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensalidades
     * const mensalidade = await prisma.mensalidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensalidadeUpdateManyArgs>(args: SelectSubset<T, MensalidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mensalidade.
     * @param {MensalidadeUpsertArgs} args - Arguments to update or create a Mensalidade.
     * @example
     * // Update or create a Mensalidade
     * const mensalidade = await prisma.mensalidade.upsert({
     *   create: {
     *     // ... data to create a Mensalidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensalidade we want to update
     *   }
     * })
     */
    upsert<T extends MensalidadeUpsertArgs>(args: SelectSubset<T, MensalidadeUpsertArgs<ExtArgs>>): Prisma__MensalidadeClient<$Result.GetResult<Prisma.$MensalidadePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mensalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensalidadeCountArgs} args - Arguments to filter Mensalidades to count.
     * @example
     * // Count the number of Mensalidades
     * const count = await prisma.mensalidade.count({
     *   where: {
     *     // ... the filter for the Mensalidades we want to count
     *   }
     * })
    **/
    count<T extends MensalidadeCountArgs>(
      args?: Subset<T, MensalidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensalidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensalidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensalidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensalidadeAggregateArgs>(args: Subset<T, MensalidadeAggregateArgs>): Prisma.PrismaPromise<GetMensalidadeAggregateType<T>>

    /**
     * Group by Mensalidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensalidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensalidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensalidadeGroupByArgs['orderBy'] }
        : { orderBy?: MensalidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensalidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensalidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensalidade model
   */
  readonly fields: MensalidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensalidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensalidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    associado<T extends AssociadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociadoDefaultArgs<ExtArgs>>): Prisma__AssociadoClient<$Result.GetResult<Prisma.$AssociadoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mensalidade model
   */ 
  interface MensalidadeFieldRefs {
    readonly id: FieldRef<"Mensalidade", 'String'>
    readonly associadoId: FieldRef<"Mensalidade", 'String'>
    readonly competencia: FieldRef<"Mensalidade", 'String'>
    readonly valor: FieldRef<"Mensalidade", 'Float'>
    readonly dataVencimento: FieldRef<"Mensalidade", 'DateTime'>
    readonly dataPagamento: FieldRef<"Mensalidade", 'DateTime'>
    readonly status: FieldRef<"Mensalidade", 'String'>
    readonly criadoEm: FieldRef<"Mensalidade", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Mensalidade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mensalidade findUnique
   */
  export type MensalidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensalidade
     */
    select?: MensalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensalidadeInclude<ExtArgs> | null
    /**
     * Filter, which Mensalidade to fetch.
     */
    where: MensalidadeWhereUniqueInput
  }

  /**
   * Mensalidade findUniqueOrThrow
   */
  export type MensalidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensalidade
     */
    select?: MensalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensalidadeInclude<ExtArgs> | null
    /**
     * Filter, which Mensalidade to fetch.
     */
    where: MensalidadeWhereUniqueInput
  }

  /**
   * Mensalidade findFirst
   */
  export type MensalidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensalidade
     */
    select?: MensalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensalidadeInclude<ExtArgs> | null
    /**
     * Filter, which Mensalidade to fetch.
     */
    where?: MensalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensalidades to fetch.
     */
    orderBy?: MensalidadeOrderByWithRelationInput | MensalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensalidades.
     */
    cursor?: MensalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensalidades.
     */
    distinct?: MensalidadeScalarFieldEnum | MensalidadeScalarFieldEnum[]
  }

  /**
   * Mensalidade findFirstOrThrow
   */
  export type MensalidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensalidade
     */
    select?: MensalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensalidadeInclude<ExtArgs> | null
    /**
     * Filter, which Mensalidade to fetch.
     */
    where?: MensalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensalidades to fetch.
     */
    orderBy?: MensalidadeOrderByWithRelationInput | MensalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensalidades.
     */
    cursor?: MensalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensalidades.
     */
    distinct?: MensalidadeScalarFieldEnum | MensalidadeScalarFieldEnum[]
  }

  /**
   * Mensalidade findMany
   */
  export type MensalidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensalidade
     */
    select?: MensalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensalidadeInclude<ExtArgs> | null
    /**
     * Filter, which Mensalidades to fetch.
     */
    where?: MensalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensalidades to fetch.
     */
    orderBy?: MensalidadeOrderByWithRelationInput | MensalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensalidades.
     */
    cursor?: MensalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensalidades.
     */
    skip?: number
    distinct?: MensalidadeScalarFieldEnum | MensalidadeScalarFieldEnum[]
  }

  /**
   * Mensalidade create
   */
  export type MensalidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensalidade
     */
    select?: MensalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensalidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensalidade.
     */
    data: XOR<MensalidadeCreateInput, MensalidadeUncheckedCreateInput>
  }

  /**
   * Mensalidade createMany
   */
  export type MensalidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensalidades.
     */
    data: MensalidadeCreateManyInput | MensalidadeCreateManyInput[]
  }

  /**
   * Mensalidade createManyAndReturn
   */
  export type MensalidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensalidade
     */
    select?: MensalidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Mensalidades.
     */
    data: MensalidadeCreateManyInput | MensalidadeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensalidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensalidade update
   */
  export type MensalidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensalidade
     */
    select?: MensalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensalidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensalidade.
     */
    data: XOR<MensalidadeUpdateInput, MensalidadeUncheckedUpdateInput>
    /**
     * Choose, which Mensalidade to update.
     */
    where: MensalidadeWhereUniqueInput
  }

  /**
   * Mensalidade updateMany
   */
  export type MensalidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensalidades.
     */
    data: XOR<MensalidadeUpdateManyMutationInput, MensalidadeUncheckedUpdateManyInput>
    /**
     * Filter which Mensalidades to update
     */
    where?: MensalidadeWhereInput
  }

  /**
   * Mensalidade upsert
   */
  export type MensalidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensalidade
     */
    select?: MensalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensalidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensalidade to update in case it exists.
     */
    where: MensalidadeWhereUniqueInput
    /**
     * In case the Mensalidade found by the `where` argument doesn't exist, create a new Mensalidade with this data.
     */
    create: XOR<MensalidadeCreateInput, MensalidadeUncheckedCreateInput>
    /**
     * In case the Mensalidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensalidadeUpdateInput, MensalidadeUncheckedUpdateInput>
  }

  /**
   * Mensalidade delete
   */
  export type MensalidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensalidade
     */
    select?: MensalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensalidadeInclude<ExtArgs> | null
    /**
     * Filter which Mensalidade to delete.
     */
    where: MensalidadeWhereUniqueInput
  }

  /**
   * Mensalidade deleteMany
   */
  export type MensalidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensalidades to delete
     */
    where?: MensalidadeWhereInput
  }

  /**
   * Mensalidade without action
   */
  export type MensalidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensalidade
     */
    select?: MensalidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensalidadeInclude<ExtArgs> | null
  }


  /**
   * Model LogAuditoria
   */

  export type AggregateLogAuditoria = {
    _count: LogAuditoriaCountAggregateOutputType | null
    _min: LogAuditoriaMinAggregateOutputType | null
    _max: LogAuditoriaMaxAggregateOutputType | null
  }

  export type LogAuditoriaMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    acao: string | null
    entidade: string | null
    entidadeId: string | null
    detalhes: string | null
    criadoEm: Date | null
  }

  export type LogAuditoriaMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    acao: string | null
    entidade: string | null
    entidadeId: string | null
    detalhes: string | null
    criadoEm: Date | null
  }

  export type LogAuditoriaCountAggregateOutputType = {
    id: number
    usuarioId: number
    acao: number
    entidade: number
    entidadeId: number
    detalhes: number
    criadoEm: number
    _all: number
  }


  export type LogAuditoriaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    acao?: true
    entidade?: true
    entidadeId?: true
    detalhes?: true
    criadoEm?: true
  }

  export type LogAuditoriaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    acao?: true
    entidade?: true
    entidadeId?: true
    detalhes?: true
    criadoEm?: true
  }

  export type LogAuditoriaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    acao?: true
    entidade?: true
    entidadeId?: true
    detalhes?: true
    criadoEm?: true
    _all?: true
  }

  export type LogAuditoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAuditoria to aggregate.
     */
    where?: LogAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAuditorias to fetch.
     */
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAuditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogAuditorias
    **/
    _count?: true | LogAuditoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogAuditoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogAuditoriaMaxAggregateInputType
  }

  export type GetLogAuditoriaAggregateType<T extends LogAuditoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateLogAuditoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogAuditoria[P]>
      : GetScalarType<T[P], AggregateLogAuditoria[P]>
  }




  export type LogAuditoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAuditoriaWhereInput
    orderBy?: LogAuditoriaOrderByWithAggregationInput | LogAuditoriaOrderByWithAggregationInput[]
    by: LogAuditoriaScalarFieldEnum[] | LogAuditoriaScalarFieldEnum
    having?: LogAuditoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogAuditoriaCountAggregateInputType | true
    _min?: LogAuditoriaMinAggregateInputType
    _max?: LogAuditoriaMaxAggregateInputType
  }

  export type LogAuditoriaGroupByOutputType = {
    id: string
    usuarioId: string | null
    acao: string
    entidade: string
    entidadeId: string | null
    detalhes: string | null
    criadoEm: Date
    _count: LogAuditoriaCountAggregateOutputType | null
    _min: LogAuditoriaMinAggregateOutputType | null
    _max: LogAuditoriaMaxAggregateOutputType | null
  }

  type GetLogAuditoriaGroupByPayload<T extends LogAuditoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogAuditoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogAuditoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogAuditoriaGroupByOutputType[P]>
            : GetScalarType<T[P], LogAuditoriaGroupByOutputType[P]>
        }
      >
    >


  export type LogAuditoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    acao?: boolean
    entidade?: boolean
    entidadeId?: boolean
    detalhes?: boolean
    criadoEm?: boolean
    usuario?: boolean | LogAuditoria$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["logAuditoria"]>

  export type LogAuditoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    acao?: boolean
    entidade?: boolean
    entidadeId?: boolean
    detalhes?: boolean
    criadoEm?: boolean
    usuario?: boolean | LogAuditoria$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["logAuditoria"]>

  export type LogAuditoriaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    acao?: boolean
    entidade?: boolean
    entidadeId?: boolean
    detalhes?: boolean
    criadoEm?: boolean
  }

  export type LogAuditoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | LogAuditoria$usuarioArgs<ExtArgs>
  }
  export type LogAuditoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | LogAuditoria$usuarioArgs<ExtArgs>
  }

  export type $LogAuditoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogAuditoria"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string | null
      acao: string
      entidade: string
      entidadeId: string | null
      detalhes: string | null
      criadoEm: Date
    }, ExtArgs["result"]["logAuditoria"]>
    composites: {}
  }

  type LogAuditoriaGetPayload<S extends boolean | null | undefined | LogAuditoriaDefaultArgs> = $Result.GetResult<Prisma.$LogAuditoriaPayload, S>

  type LogAuditoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LogAuditoriaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LogAuditoriaCountAggregateInputType | true
    }

  export interface LogAuditoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogAuditoria'], meta: { name: 'LogAuditoria' } }
    /**
     * Find zero or one LogAuditoria that matches the filter.
     * @param {LogAuditoriaFindUniqueArgs} args - Arguments to find a LogAuditoria
     * @example
     * // Get one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogAuditoriaFindUniqueArgs>(args: SelectSubset<T, LogAuditoriaFindUniqueArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LogAuditoria that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LogAuditoriaFindUniqueOrThrowArgs} args - Arguments to find a LogAuditoria
     * @example
     * // Get one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogAuditoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, LogAuditoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LogAuditoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaFindFirstArgs} args - Arguments to find a LogAuditoria
     * @example
     * // Get one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogAuditoriaFindFirstArgs>(args?: SelectSubset<T, LogAuditoriaFindFirstArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LogAuditoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaFindFirstOrThrowArgs} args - Arguments to find a LogAuditoria
     * @example
     * // Get one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogAuditoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, LogAuditoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LogAuditorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogAuditorias
     * const logAuditorias = await prisma.logAuditoria.findMany()
     * 
     * // Get first 10 LogAuditorias
     * const logAuditorias = await prisma.logAuditoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logAuditoriaWithIdOnly = await prisma.logAuditoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogAuditoriaFindManyArgs>(args?: SelectSubset<T, LogAuditoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LogAuditoria.
     * @param {LogAuditoriaCreateArgs} args - Arguments to create a LogAuditoria.
     * @example
     * // Create one LogAuditoria
     * const LogAuditoria = await prisma.logAuditoria.create({
     *   data: {
     *     // ... data to create a LogAuditoria
     *   }
     * })
     * 
     */
    create<T extends LogAuditoriaCreateArgs>(args: SelectSubset<T, LogAuditoriaCreateArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LogAuditorias.
     * @param {LogAuditoriaCreateManyArgs} args - Arguments to create many LogAuditorias.
     * @example
     * // Create many LogAuditorias
     * const logAuditoria = await prisma.logAuditoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogAuditoriaCreateManyArgs>(args?: SelectSubset<T, LogAuditoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogAuditorias and returns the data saved in the database.
     * @param {LogAuditoriaCreateManyAndReturnArgs} args - Arguments to create many LogAuditorias.
     * @example
     * // Create many LogAuditorias
     * const logAuditoria = await prisma.logAuditoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogAuditorias and only return the `id`
     * const logAuditoriaWithIdOnly = await prisma.logAuditoria.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogAuditoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, LogAuditoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LogAuditoria.
     * @param {LogAuditoriaDeleteArgs} args - Arguments to delete one LogAuditoria.
     * @example
     * // Delete one LogAuditoria
     * const LogAuditoria = await prisma.logAuditoria.delete({
     *   where: {
     *     // ... filter to delete one LogAuditoria
     *   }
     * })
     * 
     */
    delete<T extends LogAuditoriaDeleteArgs>(args: SelectSubset<T, LogAuditoriaDeleteArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LogAuditoria.
     * @param {LogAuditoriaUpdateArgs} args - Arguments to update one LogAuditoria.
     * @example
     * // Update one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogAuditoriaUpdateArgs>(args: SelectSubset<T, LogAuditoriaUpdateArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LogAuditorias.
     * @param {LogAuditoriaDeleteManyArgs} args - Arguments to filter LogAuditorias to delete.
     * @example
     * // Delete a few LogAuditorias
     * const { count } = await prisma.logAuditoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogAuditoriaDeleteManyArgs>(args?: SelectSubset<T, LogAuditoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAuditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogAuditorias
     * const logAuditoria = await prisma.logAuditoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogAuditoriaUpdateManyArgs>(args: SelectSubset<T, LogAuditoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LogAuditoria.
     * @param {LogAuditoriaUpsertArgs} args - Arguments to update or create a LogAuditoria.
     * @example
     * // Update or create a LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.upsert({
     *   create: {
     *     // ... data to create a LogAuditoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogAuditoria we want to update
     *   }
     * })
     */
    upsert<T extends LogAuditoriaUpsertArgs>(args: SelectSubset<T, LogAuditoriaUpsertArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LogAuditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaCountArgs} args - Arguments to filter LogAuditorias to count.
     * @example
     * // Count the number of LogAuditorias
     * const count = await prisma.logAuditoria.count({
     *   where: {
     *     // ... the filter for the LogAuditorias we want to count
     *   }
     * })
    **/
    count<T extends LogAuditoriaCountArgs>(
      args?: Subset<T, LogAuditoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogAuditoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogAuditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAuditoriaAggregateArgs>(args: Subset<T, LogAuditoriaAggregateArgs>): Prisma.PrismaPromise<GetLogAuditoriaAggregateType<T>>

    /**
     * Group by LogAuditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogAuditoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogAuditoriaGroupByArgs['orderBy'] }
        : { orderBy?: LogAuditoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogAuditoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogAuditoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogAuditoria model
   */
  readonly fields: LogAuditoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogAuditoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogAuditoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends LogAuditoria$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, LogAuditoria$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogAuditoria model
   */ 
  interface LogAuditoriaFieldRefs {
    readonly id: FieldRef<"LogAuditoria", 'String'>
    readonly usuarioId: FieldRef<"LogAuditoria", 'String'>
    readonly acao: FieldRef<"LogAuditoria", 'String'>
    readonly entidade: FieldRef<"LogAuditoria", 'String'>
    readonly entidadeId: FieldRef<"LogAuditoria", 'String'>
    readonly detalhes: FieldRef<"LogAuditoria", 'String'>
    readonly criadoEm: FieldRef<"LogAuditoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogAuditoria findUnique
   */
  export type LogAuditoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditoria to fetch.
     */
    where: LogAuditoriaWhereUniqueInput
  }

  /**
   * LogAuditoria findUniqueOrThrow
   */
  export type LogAuditoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditoria to fetch.
     */
    where: LogAuditoriaWhereUniqueInput
  }

  /**
   * LogAuditoria findFirst
   */
  export type LogAuditoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditoria to fetch.
     */
    where?: LogAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAuditorias to fetch.
     */
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAuditorias.
     */
    cursor?: LogAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAuditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAuditorias.
     */
    distinct?: LogAuditoriaScalarFieldEnum | LogAuditoriaScalarFieldEnum[]
  }

  /**
   * LogAuditoria findFirstOrThrow
   */
  export type LogAuditoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditoria to fetch.
     */
    where?: LogAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAuditorias to fetch.
     */
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAuditorias.
     */
    cursor?: LogAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAuditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAuditorias.
     */
    distinct?: LogAuditoriaScalarFieldEnum | LogAuditoriaScalarFieldEnum[]
  }

  /**
   * LogAuditoria findMany
   */
  export type LogAuditoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditorias to fetch.
     */
    where?: LogAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAuditorias to fetch.
     */
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogAuditorias.
     */
    cursor?: LogAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAuditorias.
     */
    skip?: number
    distinct?: LogAuditoriaScalarFieldEnum | LogAuditoriaScalarFieldEnum[]
  }

  /**
   * LogAuditoria create
   */
  export type LogAuditoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a LogAuditoria.
     */
    data: XOR<LogAuditoriaCreateInput, LogAuditoriaUncheckedCreateInput>
  }

  /**
   * LogAuditoria createMany
   */
  export type LogAuditoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogAuditorias.
     */
    data: LogAuditoriaCreateManyInput | LogAuditoriaCreateManyInput[]
  }

  /**
   * LogAuditoria createManyAndReturn
   */
  export type LogAuditoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LogAuditorias.
     */
    data: LogAuditoriaCreateManyInput | LogAuditoriaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogAuditoria update
   */
  export type LogAuditoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a LogAuditoria.
     */
    data: XOR<LogAuditoriaUpdateInput, LogAuditoriaUncheckedUpdateInput>
    /**
     * Choose, which LogAuditoria to update.
     */
    where: LogAuditoriaWhereUniqueInput
  }

  /**
   * LogAuditoria updateMany
   */
  export type LogAuditoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogAuditorias.
     */
    data: XOR<LogAuditoriaUpdateManyMutationInput, LogAuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which LogAuditorias to update
     */
    where?: LogAuditoriaWhereInput
  }

  /**
   * LogAuditoria upsert
   */
  export type LogAuditoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the LogAuditoria to update in case it exists.
     */
    where: LogAuditoriaWhereUniqueInput
    /**
     * In case the LogAuditoria found by the `where` argument doesn't exist, create a new LogAuditoria with this data.
     */
    create: XOR<LogAuditoriaCreateInput, LogAuditoriaUncheckedCreateInput>
    /**
     * In case the LogAuditoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogAuditoriaUpdateInput, LogAuditoriaUncheckedUpdateInput>
  }

  /**
   * LogAuditoria delete
   */
  export type LogAuditoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter which LogAuditoria to delete.
     */
    where: LogAuditoriaWhereUniqueInput
  }

  /**
   * LogAuditoria deleteMany
   */
  export type LogAuditoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAuditorias to delete
     */
    where?: LogAuditoriaWhereInput
  }

  /**
   * LogAuditoria.usuario
   */
  export type LogAuditoria$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * LogAuditoria without action
   */
  export type LogAuditoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senhaHash: 'senhaHash',
    papel: 'papel',
    criadoEm: 'criadoEm'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AssociadoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    email: 'email',
    telefone: 'telefone',
    embarcacao: 'embarcacao',
    numeroCarteira: 'numeroCarteira',
    status: 'status',
    dataCadastro: 'dataCadastro',
    observacoes: 'observacoes',
    atualizadoEm: 'atualizadoEm'
  };

  export type AssociadoScalarFieldEnum = (typeof AssociadoScalarFieldEnum)[keyof typeof AssociadoScalarFieldEnum]


  export const HistoricoStatusAssociadoScalarFieldEnum: {
    id: 'id',
    associadoId: 'associadoId',
    statusAnterior: 'statusAnterior',
    statusNovo: 'statusNovo',
    motivo: 'motivo',
    alteradoEm: 'alteradoEm',
    alteradoPor: 'alteradoPor'
  };

  export type HistoricoStatusAssociadoScalarFieldEnum = (typeof HistoricoStatusAssociadoScalarFieldEnum)[keyof typeof HistoricoStatusAssociadoScalarFieldEnum]


  export const LojaScalarFieldEnum: {
    id: 'id',
    associadoId: 'associadoId',
    nomeLoja: 'nomeLoja',
    descricao: 'descricao',
    status: 'status',
    dataSolicitacao: 'dataSolicitacao',
    dataAprovacao: 'dataAprovacao',
    motivoRejeicao: 'motivoRejeicao',
    produtos: 'produtos',
    atualizadoEm: 'atualizadoEm'
  };

  export type LojaScalarFieldEnum = (typeof LojaScalarFieldEnum)[keyof typeof LojaScalarFieldEnum]


  export const PermissaoScalarFieldEnum: {
    id: 'id',
    associadoId: 'associadoId',
    tipoPermissao: 'tipoPermissao',
    ativa: 'ativa',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    quota: 'quota',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type PermissaoScalarFieldEnum = (typeof PermissaoScalarFieldEnum)[keyof typeof PermissaoScalarFieldEnum]


  export const ReuniaoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    data: 'data',
    horario: 'horario',
    local: 'local',
    status: 'status',
    pautaJson: 'pautaJson',
    ata: 'ata',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type ReuniaoScalarFieldEnum = (typeof ReuniaoScalarFieldEnum)[keyof typeof ReuniaoScalarFieldEnum]


  export const PresencaReuniaoScalarFieldEnum: {
    id: 'id',
    reuniaoId: 'reuniaoId',
    associadoId: 'associadoId',
    presente: 'presente'
  };

  export type PresencaReuniaoScalarFieldEnum = (typeof PresencaReuniaoScalarFieldEnum)[keyof typeof PresencaReuniaoScalarFieldEnum]


  export const MensalidadeScalarFieldEnum: {
    id: 'id',
    associadoId: 'associadoId',
    competencia: 'competencia',
    valor: 'valor',
    dataVencimento: 'dataVencimento',
    dataPagamento: 'dataPagamento',
    status: 'status',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type MensalidadeScalarFieldEnum = (typeof MensalidadeScalarFieldEnum)[keyof typeof MensalidadeScalarFieldEnum]


  export const LogAuditoriaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    acao: 'acao',
    entidade: 'entidade',
    entidadeId: 'entidadeId',
    detalhes: 'detalhes',
    criadoEm: 'criadoEm'
  };

  export type LogAuditoriaScalarFieldEnum = (typeof LogAuditoriaScalarFieldEnum)[keyof typeof LogAuditoriaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    papel?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    logsAuditoria?: LogAuditoriaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    papel?: SortOrder
    criadoEm?: SortOrder
    logsAuditoria?: LogAuditoriaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    papel?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    logsAuditoria?: LogAuditoriaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    papel?: SortOrder
    criadoEm?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senhaHash?: StringWithAggregatesFilter<"Usuario"> | string
    papel?: StringWithAggregatesFilter<"Usuario"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type AssociadoWhereInput = {
    AND?: AssociadoWhereInput | AssociadoWhereInput[]
    OR?: AssociadoWhereInput[]
    NOT?: AssociadoWhereInput | AssociadoWhereInput[]
    id?: StringFilter<"Associado"> | string
    nome?: StringFilter<"Associado"> | string
    cpf?: StringFilter<"Associado"> | string
    email?: StringFilter<"Associado"> | string
    telefone?: StringFilter<"Associado"> | string
    embarcacao?: StringNullableFilter<"Associado"> | string | null
    numeroCarteira?: StringFilter<"Associado"> | string
    status?: StringFilter<"Associado"> | string
    dataCadastro?: DateTimeFilter<"Associado"> | Date | string
    observacoes?: StringNullableFilter<"Associado"> | string | null
    atualizadoEm?: DateTimeFilter<"Associado"> | Date | string
    lojas?: LojaListRelationFilter
    permissoes?: PermissaoListRelationFilter
    presencas?: PresencaReuniaoListRelationFilter
    mensalidades?: MensalidadeListRelationFilter
    historicoStatus?: HistoricoStatusAssociadoListRelationFilter
  }

  export type AssociadoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    embarcacao?: SortOrderInput | SortOrder
    numeroCarteira?: SortOrder
    status?: SortOrder
    dataCadastro?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    lojas?: LojaOrderByRelationAggregateInput
    permissoes?: PermissaoOrderByRelationAggregateInput
    presencas?: PresencaReuniaoOrderByRelationAggregateInput
    mensalidades?: MensalidadeOrderByRelationAggregateInput
    historicoStatus?: HistoricoStatusAssociadoOrderByRelationAggregateInput
  }

  export type AssociadoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    email?: string
    numeroCarteira?: string
    AND?: AssociadoWhereInput | AssociadoWhereInput[]
    OR?: AssociadoWhereInput[]
    NOT?: AssociadoWhereInput | AssociadoWhereInput[]
    nome?: StringFilter<"Associado"> | string
    telefone?: StringFilter<"Associado"> | string
    embarcacao?: StringNullableFilter<"Associado"> | string | null
    status?: StringFilter<"Associado"> | string
    dataCadastro?: DateTimeFilter<"Associado"> | Date | string
    observacoes?: StringNullableFilter<"Associado"> | string | null
    atualizadoEm?: DateTimeFilter<"Associado"> | Date | string
    lojas?: LojaListRelationFilter
    permissoes?: PermissaoListRelationFilter
    presencas?: PresencaReuniaoListRelationFilter
    mensalidades?: MensalidadeListRelationFilter
    historicoStatus?: HistoricoStatusAssociadoListRelationFilter
  }, "id" | "cpf" | "email" | "numeroCarteira">

  export type AssociadoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    embarcacao?: SortOrderInput | SortOrder
    numeroCarteira?: SortOrder
    status?: SortOrder
    dataCadastro?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    atualizadoEm?: SortOrder
    _count?: AssociadoCountOrderByAggregateInput
    _max?: AssociadoMaxOrderByAggregateInput
    _min?: AssociadoMinOrderByAggregateInput
  }

  export type AssociadoScalarWhereWithAggregatesInput = {
    AND?: AssociadoScalarWhereWithAggregatesInput | AssociadoScalarWhereWithAggregatesInput[]
    OR?: AssociadoScalarWhereWithAggregatesInput[]
    NOT?: AssociadoScalarWhereWithAggregatesInput | AssociadoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Associado"> | string
    nome?: StringWithAggregatesFilter<"Associado"> | string
    cpf?: StringWithAggregatesFilter<"Associado"> | string
    email?: StringWithAggregatesFilter<"Associado"> | string
    telefone?: StringWithAggregatesFilter<"Associado"> | string
    embarcacao?: StringNullableWithAggregatesFilter<"Associado"> | string | null
    numeroCarteira?: StringWithAggregatesFilter<"Associado"> | string
    status?: StringWithAggregatesFilter<"Associado"> | string
    dataCadastro?: DateTimeWithAggregatesFilter<"Associado"> | Date | string
    observacoes?: StringNullableWithAggregatesFilter<"Associado"> | string | null
    atualizadoEm?: DateTimeWithAggregatesFilter<"Associado"> | Date | string
  }

  export type HistoricoStatusAssociadoWhereInput = {
    AND?: HistoricoStatusAssociadoWhereInput | HistoricoStatusAssociadoWhereInput[]
    OR?: HistoricoStatusAssociadoWhereInput[]
    NOT?: HistoricoStatusAssociadoWhereInput | HistoricoStatusAssociadoWhereInput[]
    id?: StringFilter<"HistoricoStatusAssociado"> | string
    associadoId?: StringFilter<"HistoricoStatusAssociado"> | string
    statusAnterior?: StringFilter<"HistoricoStatusAssociado"> | string
    statusNovo?: StringFilter<"HistoricoStatusAssociado"> | string
    motivo?: StringNullableFilter<"HistoricoStatusAssociado"> | string | null
    alteradoEm?: DateTimeFilter<"HistoricoStatusAssociado"> | Date | string
    alteradoPor?: StringNullableFilter<"HistoricoStatusAssociado"> | string | null
    associado?: XOR<AssociadoRelationFilter, AssociadoWhereInput>
  }

  export type HistoricoStatusAssociadoOrderByWithRelationInput = {
    id?: SortOrder
    associadoId?: SortOrder
    statusAnterior?: SortOrder
    statusNovo?: SortOrder
    motivo?: SortOrderInput | SortOrder
    alteradoEm?: SortOrder
    alteradoPor?: SortOrderInput | SortOrder
    associado?: AssociadoOrderByWithRelationInput
  }

  export type HistoricoStatusAssociadoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoricoStatusAssociadoWhereInput | HistoricoStatusAssociadoWhereInput[]
    OR?: HistoricoStatusAssociadoWhereInput[]
    NOT?: HistoricoStatusAssociadoWhereInput | HistoricoStatusAssociadoWhereInput[]
    associadoId?: StringFilter<"HistoricoStatusAssociado"> | string
    statusAnterior?: StringFilter<"HistoricoStatusAssociado"> | string
    statusNovo?: StringFilter<"HistoricoStatusAssociado"> | string
    motivo?: StringNullableFilter<"HistoricoStatusAssociado"> | string | null
    alteradoEm?: DateTimeFilter<"HistoricoStatusAssociado"> | Date | string
    alteradoPor?: StringNullableFilter<"HistoricoStatusAssociado"> | string | null
    associado?: XOR<AssociadoRelationFilter, AssociadoWhereInput>
  }, "id">

  export type HistoricoStatusAssociadoOrderByWithAggregationInput = {
    id?: SortOrder
    associadoId?: SortOrder
    statusAnterior?: SortOrder
    statusNovo?: SortOrder
    motivo?: SortOrderInput | SortOrder
    alteradoEm?: SortOrder
    alteradoPor?: SortOrderInput | SortOrder
    _count?: HistoricoStatusAssociadoCountOrderByAggregateInput
    _max?: HistoricoStatusAssociadoMaxOrderByAggregateInput
    _min?: HistoricoStatusAssociadoMinOrderByAggregateInput
  }

  export type HistoricoStatusAssociadoScalarWhereWithAggregatesInput = {
    AND?: HistoricoStatusAssociadoScalarWhereWithAggregatesInput | HistoricoStatusAssociadoScalarWhereWithAggregatesInput[]
    OR?: HistoricoStatusAssociadoScalarWhereWithAggregatesInput[]
    NOT?: HistoricoStatusAssociadoScalarWhereWithAggregatesInput | HistoricoStatusAssociadoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoricoStatusAssociado"> | string
    associadoId?: StringWithAggregatesFilter<"HistoricoStatusAssociado"> | string
    statusAnterior?: StringWithAggregatesFilter<"HistoricoStatusAssociado"> | string
    statusNovo?: StringWithAggregatesFilter<"HistoricoStatusAssociado"> | string
    motivo?: StringNullableWithAggregatesFilter<"HistoricoStatusAssociado"> | string | null
    alteradoEm?: DateTimeWithAggregatesFilter<"HistoricoStatusAssociado"> | Date | string
    alteradoPor?: StringNullableWithAggregatesFilter<"HistoricoStatusAssociado"> | string | null
  }

  export type LojaWhereInput = {
    AND?: LojaWhereInput | LojaWhereInput[]
    OR?: LojaWhereInput[]
    NOT?: LojaWhereInput | LojaWhereInput[]
    id?: StringFilter<"Loja"> | string
    associadoId?: StringFilter<"Loja"> | string
    nomeLoja?: StringFilter<"Loja"> | string
    descricao?: StringFilter<"Loja"> | string
    status?: StringFilter<"Loja"> | string
    dataSolicitacao?: DateTimeFilter<"Loja"> | Date | string
    dataAprovacao?: DateTimeNullableFilter<"Loja"> | Date | string | null
    motivoRejeicao?: StringNullableFilter<"Loja"> | string | null
    produtos?: IntFilter<"Loja"> | number
    atualizadoEm?: DateTimeFilter<"Loja"> | Date | string
    associado?: XOR<AssociadoRelationFilter, AssociadoWhereInput>
  }

  export type LojaOrderByWithRelationInput = {
    id?: SortOrder
    associadoId?: SortOrder
    nomeLoja?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    dataSolicitacao?: SortOrder
    dataAprovacao?: SortOrderInput | SortOrder
    motivoRejeicao?: SortOrderInput | SortOrder
    produtos?: SortOrder
    atualizadoEm?: SortOrder
    associado?: AssociadoOrderByWithRelationInput
  }

  export type LojaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LojaWhereInput | LojaWhereInput[]
    OR?: LojaWhereInput[]
    NOT?: LojaWhereInput | LojaWhereInput[]
    associadoId?: StringFilter<"Loja"> | string
    nomeLoja?: StringFilter<"Loja"> | string
    descricao?: StringFilter<"Loja"> | string
    status?: StringFilter<"Loja"> | string
    dataSolicitacao?: DateTimeFilter<"Loja"> | Date | string
    dataAprovacao?: DateTimeNullableFilter<"Loja"> | Date | string | null
    motivoRejeicao?: StringNullableFilter<"Loja"> | string | null
    produtos?: IntFilter<"Loja"> | number
    atualizadoEm?: DateTimeFilter<"Loja"> | Date | string
    associado?: XOR<AssociadoRelationFilter, AssociadoWhereInput>
  }, "id">

  export type LojaOrderByWithAggregationInput = {
    id?: SortOrder
    associadoId?: SortOrder
    nomeLoja?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    dataSolicitacao?: SortOrder
    dataAprovacao?: SortOrderInput | SortOrder
    motivoRejeicao?: SortOrderInput | SortOrder
    produtos?: SortOrder
    atualizadoEm?: SortOrder
    _count?: LojaCountOrderByAggregateInput
    _avg?: LojaAvgOrderByAggregateInput
    _max?: LojaMaxOrderByAggregateInput
    _min?: LojaMinOrderByAggregateInput
    _sum?: LojaSumOrderByAggregateInput
  }

  export type LojaScalarWhereWithAggregatesInput = {
    AND?: LojaScalarWhereWithAggregatesInput | LojaScalarWhereWithAggregatesInput[]
    OR?: LojaScalarWhereWithAggregatesInput[]
    NOT?: LojaScalarWhereWithAggregatesInput | LojaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Loja"> | string
    associadoId?: StringWithAggregatesFilter<"Loja"> | string
    nomeLoja?: StringWithAggregatesFilter<"Loja"> | string
    descricao?: StringWithAggregatesFilter<"Loja"> | string
    status?: StringWithAggregatesFilter<"Loja"> | string
    dataSolicitacao?: DateTimeWithAggregatesFilter<"Loja"> | Date | string
    dataAprovacao?: DateTimeNullableWithAggregatesFilter<"Loja"> | Date | string | null
    motivoRejeicao?: StringNullableWithAggregatesFilter<"Loja"> | string | null
    produtos?: IntWithAggregatesFilter<"Loja"> | number
    atualizadoEm?: DateTimeWithAggregatesFilter<"Loja"> | Date | string
  }

  export type PermissaoWhereInput = {
    AND?: PermissaoWhereInput | PermissaoWhereInput[]
    OR?: PermissaoWhereInput[]
    NOT?: PermissaoWhereInput | PermissaoWhereInput[]
    id?: StringFilter<"Permissao"> | string
    associadoId?: StringFilter<"Permissao"> | string
    tipoPermissao?: StringFilter<"Permissao"> | string
    ativa?: BoolFilter<"Permissao"> | boolean
    dataInicio?: DateTimeFilter<"Permissao"> | Date | string
    dataFim?: DateTimeNullableFilter<"Permissao"> | Date | string | null
    quota?: IntNullableFilter<"Permissao"> | number | null
    criadoEm?: DateTimeFilter<"Permissao"> | Date | string
    atualizadoEm?: DateTimeFilter<"Permissao"> | Date | string
    associado?: XOR<AssociadoRelationFilter, AssociadoWhereInput>
  }

  export type PermissaoOrderByWithRelationInput = {
    id?: SortOrder
    associadoId?: SortOrder
    tipoPermissao?: SortOrder
    ativa?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    quota?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    associado?: AssociadoOrderByWithRelationInput
  }

  export type PermissaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PermissaoWhereInput | PermissaoWhereInput[]
    OR?: PermissaoWhereInput[]
    NOT?: PermissaoWhereInput | PermissaoWhereInput[]
    associadoId?: StringFilter<"Permissao"> | string
    tipoPermissao?: StringFilter<"Permissao"> | string
    ativa?: BoolFilter<"Permissao"> | boolean
    dataInicio?: DateTimeFilter<"Permissao"> | Date | string
    dataFim?: DateTimeNullableFilter<"Permissao"> | Date | string | null
    quota?: IntNullableFilter<"Permissao"> | number | null
    criadoEm?: DateTimeFilter<"Permissao"> | Date | string
    atualizadoEm?: DateTimeFilter<"Permissao"> | Date | string
    associado?: XOR<AssociadoRelationFilter, AssociadoWhereInput>
  }, "id">

  export type PermissaoOrderByWithAggregationInput = {
    id?: SortOrder
    associadoId?: SortOrder
    tipoPermissao?: SortOrder
    ativa?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    quota?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: PermissaoCountOrderByAggregateInput
    _avg?: PermissaoAvgOrderByAggregateInput
    _max?: PermissaoMaxOrderByAggregateInput
    _min?: PermissaoMinOrderByAggregateInput
    _sum?: PermissaoSumOrderByAggregateInput
  }

  export type PermissaoScalarWhereWithAggregatesInput = {
    AND?: PermissaoScalarWhereWithAggregatesInput | PermissaoScalarWhereWithAggregatesInput[]
    OR?: PermissaoScalarWhereWithAggregatesInput[]
    NOT?: PermissaoScalarWhereWithAggregatesInput | PermissaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permissao"> | string
    associadoId?: StringWithAggregatesFilter<"Permissao"> | string
    tipoPermissao?: StringWithAggregatesFilter<"Permissao"> | string
    ativa?: BoolWithAggregatesFilter<"Permissao"> | boolean
    dataInicio?: DateTimeWithAggregatesFilter<"Permissao"> | Date | string
    dataFim?: DateTimeNullableWithAggregatesFilter<"Permissao"> | Date | string | null
    quota?: IntNullableWithAggregatesFilter<"Permissao"> | number | null
    criadoEm?: DateTimeWithAggregatesFilter<"Permissao"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Permissao"> | Date | string
  }

  export type ReuniaoWhereInput = {
    AND?: ReuniaoWhereInput | ReuniaoWhereInput[]
    OR?: ReuniaoWhereInput[]
    NOT?: ReuniaoWhereInput | ReuniaoWhereInput[]
    id?: StringFilter<"Reuniao"> | string
    titulo?: StringFilter<"Reuniao"> | string
    descricao?: StringFilter<"Reuniao"> | string
    data?: DateTimeFilter<"Reuniao"> | Date | string
    horario?: StringFilter<"Reuniao"> | string
    local?: StringFilter<"Reuniao"> | string
    status?: StringFilter<"Reuniao"> | string
    pautaJson?: StringFilter<"Reuniao"> | string
    ata?: StringNullableFilter<"Reuniao"> | string | null
    criadoEm?: DateTimeFilter<"Reuniao"> | Date | string
    atualizadoEm?: DateTimeFilter<"Reuniao"> | Date | string
    presencas?: PresencaReuniaoListRelationFilter
  }

  export type ReuniaoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    local?: SortOrder
    status?: SortOrder
    pautaJson?: SortOrder
    ata?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    presencas?: PresencaReuniaoOrderByRelationAggregateInput
  }

  export type ReuniaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReuniaoWhereInput | ReuniaoWhereInput[]
    OR?: ReuniaoWhereInput[]
    NOT?: ReuniaoWhereInput | ReuniaoWhereInput[]
    titulo?: StringFilter<"Reuniao"> | string
    descricao?: StringFilter<"Reuniao"> | string
    data?: DateTimeFilter<"Reuniao"> | Date | string
    horario?: StringFilter<"Reuniao"> | string
    local?: StringFilter<"Reuniao"> | string
    status?: StringFilter<"Reuniao"> | string
    pautaJson?: StringFilter<"Reuniao"> | string
    ata?: StringNullableFilter<"Reuniao"> | string | null
    criadoEm?: DateTimeFilter<"Reuniao"> | Date | string
    atualizadoEm?: DateTimeFilter<"Reuniao"> | Date | string
    presencas?: PresencaReuniaoListRelationFilter
  }, "id">

  export type ReuniaoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    local?: SortOrder
    status?: SortOrder
    pautaJson?: SortOrder
    ata?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: ReuniaoCountOrderByAggregateInput
    _max?: ReuniaoMaxOrderByAggregateInput
    _min?: ReuniaoMinOrderByAggregateInput
  }

  export type ReuniaoScalarWhereWithAggregatesInput = {
    AND?: ReuniaoScalarWhereWithAggregatesInput | ReuniaoScalarWhereWithAggregatesInput[]
    OR?: ReuniaoScalarWhereWithAggregatesInput[]
    NOT?: ReuniaoScalarWhereWithAggregatesInput | ReuniaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reuniao"> | string
    titulo?: StringWithAggregatesFilter<"Reuniao"> | string
    descricao?: StringWithAggregatesFilter<"Reuniao"> | string
    data?: DateTimeWithAggregatesFilter<"Reuniao"> | Date | string
    horario?: StringWithAggregatesFilter<"Reuniao"> | string
    local?: StringWithAggregatesFilter<"Reuniao"> | string
    status?: StringWithAggregatesFilter<"Reuniao"> | string
    pautaJson?: StringWithAggregatesFilter<"Reuniao"> | string
    ata?: StringNullableWithAggregatesFilter<"Reuniao"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Reuniao"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Reuniao"> | Date | string
  }

  export type PresencaReuniaoWhereInput = {
    AND?: PresencaReuniaoWhereInput | PresencaReuniaoWhereInput[]
    OR?: PresencaReuniaoWhereInput[]
    NOT?: PresencaReuniaoWhereInput | PresencaReuniaoWhereInput[]
    id?: StringFilter<"PresencaReuniao"> | string
    reuniaoId?: StringFilter<"PresencaReuniao"> | string
    associadoId?: StringFilter<"PresencaReuniao"> | string
    presente?: BoolFilter<"PresencaReuniao"> | boolean
    reuniao?: XOR<ReuniaoRelationFilter, ReuniaoWhereInput>
    associado?: XOR<AssociadoRelationFilter, AssociadoWhereInput>
  }

  export type PresencaReuniaoOrderByWithRelationInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    associadoId?: SortOrder
    presente?: SortOrder
    reuniao?: ReuniaoOrderByWithRelationInput
    associado?: AssociadoOrderByWithRelationInput
  }

  export type PresencaReuniaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reuniaoId_associadoId?: PresencaReuniaoReuniaoIdAssociadoIdCompoundUniqueInput
    AND?: PresencaReuniaoWhereInput | PresencaReuniaoWhereInput[]
    OR?: PresencaReuniaoWhereInput[]
    NOT?: PresencaReuniaoWhereInput | PresencaReuniaoWhereInput[]
    reuniaoId?: StringFilter<"PresencaReuniao"> | string
    associadoId?: StringFilter<"PresencaReuniao"> | string
    presente?: BoolFilter<"PresencaReuniao"> | boolean
    reuniao?: XOR<ReuniaoRelationFilter, ReuniaoWhereInput>
    associado?: XOR<AssociadoRelationFilter, AssociadoWhereInput>
  }, "id" | "reuniaoId_associadoId">

  export type PresencaReuniaoOrderByWithAggregationInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    associadoId?: SortOrder
    presente?: SortOrder
    _count?: PresencaReuniaoCountOrderByAggregateInput
    _max?: PresencaReuniaoMaxOrderByAggregateInput
    _min?: PresencaReuniaoMinOrderByAggregateInput
  }

  export type PresencaReuniaoScalarWhereWithAggregatesInput = {
    AND?: PresencaReuniaoScalarWhereWithAggregatesInput | PresencaReuniaoScalarWhereWithAggregatesInput[]
    OR?: PresencaReuniaoScalarWhereWithAggregatesInput[]
    NOT?: PresencaReuniaoScalarWhereWithAggregatesInput | PresencaReuniaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PresencaReuniao"> | string
    reuniaoId?: StringWithAggregatesFilter<"PresencaReuniao"> | string
    associadoId?: StringWithAggregatesFilter<"PresencaReuniao"> | string
    presente?: BoolWithAggregatesFilter<"PresencaReuniao"> | boolean
  }

  export type MensalidadeWhereInput = {
    AND?: MensalidadeWhereInput | MensalidadeWhereInput[]
    OR?: MensalidadeWhereInput[]
    NOT?: MensalidadeWhereInput | MensalidadeWhereInput[]
    id?: StringFilter<"Mensalidade"> | string
    associadoId?: StringFilter<"Mensalidade"> | string
    competencia?: StringFilter<"Mensalidade"> | string
    valor?: FloatFilter<"Mensalidade"> | number
    dataVencimento?: DateTimeFilter<"Mensalidade"> | Date | string
    dataPagamento?: DateTimeNullableFilter<"Mensalidade"> | Date | string | null
    status?: StringFilter<"Mensalidade"> | string
    criadoEm?: DateTimeFilter<"Mensalidade"> | Date | string
    atualizadoEm?: DateTimeFilter<"Mensalidade"> | Date | string
    associado?: XOR<AssociadoRelationFilter, AssociadoWhereInput>
  }

  export type MensalidadeOrderByWithRelationInput = {
    id?: SortOrder
    associadoId?: SortOrder
    competencia?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrderInput | SortOrder
    status?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    associado?: AssociadoOrderByWithRelationInput
  }

  export type MensalidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    associadoId_competencia?: MensalidadeAssociadoIdCompetenciaCompoundUniqueInput
    AND?: MensalidadeWhereInput | MensalidadeWhereInput[]
    OR?: MensalidadeWhereInput[]
    NOT?: MensalidadeWhereInput | MensalidadeWhereInput[]
    associadoId?: StringFilter<"Mensalidade"> | string
    competencia?: StringFilter<"Mensalidade"> | string
    valor?: FloatFilter<"Mensalidade"> | number
    dataVencimento?: DateTimeFilter<"Mensalidade"> | Date | string
    dataPagamento?: DateTimeNullableFilter<"Mensalidade"> | Date | string | null
    status?: StringFilter<"Mensalidade"> | string
    criadoEm?: DateTimeFilter<"Mensalidade"> | Date | string
    atualizadoEm?: DateTimeFilter<"Mensalidade"> | Date | string
    associado?: XOR<AssociadoRelationFilter, AssociadoWhereInput>
  }, "id" | "associadoId_competencia">

  export type MensalidadeOrderByWithAggregationInput = {
    id?: SortOrder
    associadoId?: SortOrder
    competencia?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrderInput | SortOrder
    status?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: MensalidadeCountOrderByAggregateInput
    _avg?: MensalidadeAvgOrderByAggregateInput
    _max?: MensalidadeMaxOrderByAggregateInput
    _min?: MensalidadeMinOrderByAggregateInput
    _sum?: MensalidadeSumOrderByAggregateInput
  }

  export type MensalidadeScalarWhereWithAggregatesInput = {
    AND?: MensalidadeScalarWhereWithAggregatesInput | MensalidadeScalarWhereWithAggregatesInput[]
    OR?: MensalidadeScalarWhereWithAggregatesInput[]
    NOT?: MensalidadeScalarWhereWithAggregatesInput | MensalidadeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mensalidade"> | string
    associadoId?: StringWithAggregatesFilter<"Mensalidade"> | string
    competencia?: StringWithAggregatesFilter<"Mensalidade"> | string
    valor?: FloatWithAggregatesFilter<"Mensalidade"> | number
    dataVencimento?: DateTimeWithAggregatesFilter<"Mensalidade"> | Date | string
    dataPagamento?: DateTimeNullableWithAggregatesFilter<"Mensalidade"> | Date | string | null
    status?: StringWithAggregatesFilter<"Mensalidade"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Mensalidade"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Mensalidade"> | Date | string
  }

  export type LogAuditoriaWhereInput = {
    AND?: LogAuditoriaWhereInput | LogAuditoriaWhereInput[]
    OR?: LogAuditoriaWhereInput[]
    NOT?: LogAuditoriaWhereInput | LogAuditoriaWhereInput[]
    id?: StringFilter<"LogAuditoria"> | string
    usuarioId?: StringNullableFilter<"LogAuditoria"> | string | null
    acao?: StringFilter<"LogAuditoria"> | string
    entidade?: StringFilter<"LogAuditoria"> | string
    entidadeId?: StringNullableFilter<"LogAuditoria"> | string | null
    detalhes?: StringNullableFilter<"LogAuditoria"> | string | null
    criadoEm?: DateTimeFilter<"LogAuditoria"> | Date | string
    usuario?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
  }

  export type LogAuditoriaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrderInput | SortOrder
    detalhes?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type LogAuditoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogAuditoriaWhereInput | LogAuditoriaWhereInput[]
    OR?: LogAuditoriaWhereInput[]
    NOT?: LogAuditoriaWhereInput | LogAuditoriaWhereInput[]
    usuarioId?: StringNullableFilter<"LogAuditoria"> | string | null
    acao?: StringFilter<"LogAuditoria"> | string
    entidade?: StringFilter<"LogAuditoria"> | string
    entidadeId?: StringNullableFilter<"LogAuditoria"> | string | null
    detalhes?: StringNullableFilter<"LogAuditoria"> | string | null
    criadoEm?: DateTimeFilter<"LogAuditoria"> | Date | string
    usuario?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
  }, "id">

  export type LogAuditoriaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrderInput | SortOrder
    detalhes?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: LogAuditoriaCountOrderByAggregateInput
    _max?: LogAuditoriaMaxOrderByAggregateInput
    _min?: LogAuditoriaMinOrderByAggregateInput
  }

  export type LogAuditoriaScalarWhereWithAggregatesInput = {
    AND?: LogAuditoriaScalarWhereWithAggregatesInput | LogAuditoriaScalarWhereWithAggregatesInput[]
    OR?: LogAuditoriaScalarWhereWithAggregatesInput[]
    NOT?: LogAuditoriaScalarWhereWithAggregatesInput | LogAuditoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogAuditoria"> | string
    usuarioId?: StringNullableWithAggregatesFilter<"LogAuditoria"> | string | null
    acao?: StringWithAggregatesFilter<"LogAuditoria"> | string
    entidade?: StringWithAggregatesFilter<"LogAuditoria"> | string
    entidadeId?: StringNullableWithAggregatesFilter<"LogAuditoria"> | string | null
    detalhes?: StringNullableWithAggregatesFilter<"LogAuditoria"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"LogAuditoria"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    papel?: string
    criadoEm?: Date | string
    logsAuditoria?: LogAuditoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    papel?: string
    criadoEm?: Date | string
    logsAuditoria?: LogAuditoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    logsAuditoria?: LogAuditoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    logsAuditoria?: LogAuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    papel?: string
    criadoEm?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssociadoCreateInput = {
    id?: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao?: string | null
    numeroCarteira: string
    status?: string
    dataCadastro?: Date | string
    observacoes?: string | null
    atualizadoEm?: Date | string
    lojas?: LojaCreateNestedManyWithoutAssociadoInput
    permissoes?: PermissaoCreateNestedManyWithoutAssociadoInput
    presencas?: PresencaReuniaoCreateNestedManyWithoutAssociadoInput
    mensalidades?: MensalidadeCreateNestedManyWithoutAssociadoInput
    historicoStatus?: HistoricoStatusAssociadoCreateNestedManyWithoutAssociadoInput
  }

  export type AssociadoUncheckedCreateInput = {
    id?: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao?: string | null
    numeroCarteira: string
    status?: string
    dataCadastro?: Date | string
    observacoes?: string | null
    atualizadoEm?: Date | string
    lojas?: LojaUncheckedCreateNestedManyWithoutAssociadoInput
    permissoes?: PermissaoUncheckedCreateNestedManyWithoutAssociadoInput
    presencas?: PresencaReuniaoUncheckedCreateNestedManyWithoutAssociadoInput
    mensalidades?: MensalidadeUncheckedCreateNestedManyWithoutAssociadoInput
    historicoStatus?: HistoricoStatusAssociadoUncheckedCreateNestedManyWithoutAssociadoInput
  }

  export type AssociadoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lojas?: LojaUpdateManyWithoutAssociadoNestedInput
    permissoes?: PermissaoUpdateManyWithoutAssociadoNestedInput
    presencas?: PresencaReuniaoUpdateManyWithoutAssociadoNestedInput
    mensalidades?: MensalidadeUpdateManyWithoutAssociadoNestedInput
    historicoStatus?: HistoricoStatusAssociadoUpdateManyWithoutAssociadoNestedInput
  }

  export type AssociadoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lojas?: LojaUncheckedUpdateManyWithoutAssociadoNestedInput
    permissoes?: PermissaoUncheckedUpdateManyWithoutAssociadoNestedInput
    presencas?: PresencaReuniaoUncheckedUpdateManyWithoutAssociadoNestedInput
    mensalidades?: MensalidadeUncheckedUpdateManyWithoutAssociadoNestedInput
    historicoStatus?: HistoricoStatusAssociadoUncheckedUpdateManyWithoutAssociadoNestedInput
  }

  export type AssociadoCreateManyInput = {
    id?: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao?: string | null
    numeroCarteira: string
    status?: string
    dataCadastro?: Date | string
    observacoes?: string | null
    atualizadoEm?: Date | string
  }

  export type AssociadoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssociadoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoStatusAssociadoCreateInput = {
    id?: string
    statusAnterior: string
    statusNovo: string
    motivo?: string | null
    alteradoEm?: Date | string
    alteradoPor?: string | null
    associado: AssociadoCreateNestedOneWithoutHistoricoStatusInput
  }

  export type HistoricoStatusAssociadoUncheckedCreateInput = {
    id?: string
    associadoId: string
    statusAnterior: string
    statusNovo: string
    motivo?: string | null
    alteradoEm?: Date | string
    alteradoPor?: string | null
  }

  export type HistoricoStatusAssociadoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusAnterior?: StringFieldUpdateOperationsInput | string
    statusNovo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    alteradoPor?: NullableStringFieldUpdateOperationsInput | string | null
    associado?: AssociadoUpdateOneRequiredWithoutHistoricoStatusNestedInput
  }

  export type HistoricoStatusAssociadoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    associadoId?: StringFieldUpdateOperationsInput | string
    statusAnterior?: StringFieldUpdateOperationsInput | string
    statusNovo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    alteradoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoStatusAssociadoCreateManyInput = {
    id?: string
    associadoId: string
    statusAnterior: string
    statusNovo: string
    motivo?: string | null
    alteradoEm?: Date | string
    alteradoPor?: string | null
  }

  export type HistoricoStatusAssociadoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusAnterior?: StringFieldUpdateOperationsInput | string
    statusNovo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    alteradoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoStatusAssociadoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    associadoId?: StringFieldUpdateOperationsInput | string
    statusAnterior?: StringFieldUpdateOperationsInput | string
    statusNovo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    alteradoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LojaCreateInput = {
    id?: string
    nomeLoja: string
    descricao: string
    status?: string
    dataSolicitacao?: Date | string
    dataAprovacao?: Date | string | null
    motivoRejeicao?: string | null
    produtos?: number
    atualizadoEm?: Date | string
    associado: AssociadoCreateNestedOneWithoutLojasInput
  }

  export type LojaUncheckedCreateInput = {
    id?: string
    associadoId: string
    nomeLoja: string
    descricao: string
    status?: string
    dataSolicitacao?: Date | string
    dataAprovacao?: Date | string | null
    motivoRejeicao?: string | null
    produtos?: number
    atualizadoEm?: Date | string
  }

  export type LojaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeLoja?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataSolicitacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRejeicao?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: IntFieldUpdateOperationsInput | number
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    associado?: AssociadoUpdateOneRequiredWithoutLojasNestedInput
  }

  export type LojaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    associadoId?: StringFieldUpdateOperationsInput | string
    nomeLoja?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataSolicitacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRejeicao?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: IntFieldUpdateOperationsInput | number
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LojaCreateManyInput = {
    id?: string
    associadoId: string
    nomeLoja: string
    descricao: string
    status?: string
    dataSolicitacao?: Date | string
    dataAprovacao?: Date | string | null
    motivoRejeicao?: string | null
    produtos?: number
    atualizadoEm?: Date | string
  }

  export type LojaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeLoja?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataSolicitacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRejeicao?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: IntFieldUpdateOperationsInput | number
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LojaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    associadoId?: StringFieldUpdateOperationsInput | string
    nomeLoja?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataSolicitacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRejeicao?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: IntFieldUpdateOperationsInput | number
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissaoCreateInput = {
    id?: string
    tipoPermissao: string
    ativa?: boolean
    dataInicio: Date | string
    dataFim?: Date | string | null
    quota?: number | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    associado: AssociadoCreateNestedOneWithoutPermissoesInput
  }

  export type PermissaoUncheckedCreateInput = {
    id?: string
    associadoId: string
    tipoPermissao: string
    ativa?: boolean
    dataInicio: Date | string
    dataFim?: Date | string | null
    quota?: number | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PermissaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoPermissao?: StringFieldUpdateOperationsInput | string
    ativa?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quota?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    associado?: AssociadoUpdateOneRequiredWithoutPermissoesNestedInput
  }

  export type PermissaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    associadoId?: StringFieldUpdateOperationsInput | string
    tipoPermissao?: StringFieldUpdateOperationsInput | string
    ativa?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quota?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissaoCreateManyInput = {
    id?: string
    associadoId: string
    tipoPermissao: string
    ativa?: boolean
    dataInicio: Date | string
    dataFim?: Date | string | null
    quota?: number | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PermissaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoPermissao?: StringFieldUpdateOperationsInput | string
    ativa?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quota?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    associadoId?: StringFieldUpdateOperationsInput | string
    tipoPermissao?: StringFieldUpdateOperationsInput | string
    ativa?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quota?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReuniaoCreateInput = {
    id?: string
    titulo: string
    descricao: string
    data: Date | string
    horario: string
    local: string
    status?: string
    pautaJson?: string
    ata?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    presencas?: PresencaReuniaoCreateNestedManyWithoutReuniaoInput
  }

  export type ReuniaoUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao: string
    data: Date | string
    horario: string
    local: string
    status?: string
    pautaJson?: string
    ata?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    presencas?: PresencaReuniaoUncheckedCreateNestedManyWithoutReuniaoInput
  }

  export type ReuniaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pautaJson?: StringFieldUpdateOperationsInput | string
    ata?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    presencas?: PresencaReuniaoUpdateManyWithoutReuniaoNestedInput
  }

  export type ReuniaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pautaJson?: StringFieldUpdateOperationsInput | string
    ata?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    presencas?: PresencaReuniaoUncheckedUpdateManyWithoutReuniaoNestedInput
  }

  export type ReuniaoCreateManyInput = {
    id?: string
    titulo: string
    descricao: string
    data: Date | string
    horario: string
    local: string
    status?: string
    pautaJson?: string
    ata?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ReuniaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pautaJson?: StringFieldUpdateOperationsInput | string
    ata?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReuniaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pautaJson?: StringFieldUpdateOperationsInput | string
    ata?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresencaReuniaoCreateInput = {
    id?: string
    presente?: boolean
    reuniao: ReuniaoCreateNestedOneWithoutPresencasInput
    associado: AssociadoCreateNestedOneWithoutPresencasInput
  }

  export type PresencaReuniaoUncheckedCreateInput = {
    id?: string
    reuniaoId: string
    associadoId: string
    presente?: boolean
  }

  export type PresencaReuniaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    reuniao?: ReuniaoUpdateOneRequiredWithoutPresencasNestedInput
    associado?: AssociadoUpdateOneRequiredWithoutPresencasNestedInput
  }

  export type PresencaReuniaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reuniaoId?: StringFieldUpdateOperationsInput | string
    associadoId?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PresencaReuniaoCreateManyInput = {
    id?: string
    reuniaoId: string
    associadoId: string
    presente?: boolean
  }

  export type PresencaReuniaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PresencaReuniaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reuniaoId?: StringFieldUpdateOperationsInput | string
    associadoId?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensalidadeCreateInput = {
    id?: string
    competencia: string
    valor: number
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    associado: AssociadoCreateNestedOneWithoutMensalidadesInput
  }

  export type MensalidadeUncheckedCreateInput = {
    id?: string
    associadoId: string
    competencia: string
    valor: number
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type MensalidadeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    competencia?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    associado?: AssociadoUpdateOneRequiredWithoutMensalidadesNestedInput
  }

  export type MensalidadeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    associadoId?: StringFieldUpdateOperationsInput | string
    competencia?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensalidadeCreateManyInput = {
    id?: string
    associadoId: string
    competencia: string
    valor: number
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type MensalidadeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    competencia?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensalidadeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    associadoId?: StringFieldUpdateOperationsInput | string
    competencia?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAuditoriaCreateInput = {
    id?: string
    acao: string
    entidade: string
    entidadeId?: string | null
    detalhes?: string | null
    criadoEm?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutLogsAuditoriaInput
  }

  export type LogAuditoriaUncheckedCreateInput = {
    id?: string
    usuarioId?: string | null
    acao: string
    entidade: string
    entidadeId?: string | null
    detalhes?: string | null
    criadoEm?: Date | string
  }

  export type LogAuditoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: NullableStringFieldUpdateOperationsInput | string | null
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutLogsAuditoriaNestedInput
  }

  export type LogAuditoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: NullableStringFieldUpdateOperationsInput | string | null
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAuditoriaCreateManyInput = {
    id?: string
    usuarioId?: string | null
    acao: string
    entidade: string
    entidadeId?: string | null
    detalhes?: string | null
    criadoEm?: Date | string
  }

  export type LogAuditoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: NullableStringFieldUpdateOperationsInput | string | null
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAuditoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: NullableStringFieldUpdateOperationsInput | string | null
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LogAuditoriaListRelationFilter = {
    every?: LogAuditoriaWhereInput
    some?: LogAuditoriaWhereInput
    none?: LogAuditoriaWhereInput
  }

  export type LogAuditoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    papel?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    papel?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    papel?: SortOrder
    criadoEm?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LojaListRelationFilter = {
    every?: LojaWhereInput
    some?: LojaWhereInput
    none?: LojaWhereInput
  }

  export type PermissaoListRelationFilter = {
    every?: PermissaoWhereInput
    some?: PermissaoWhereInput
    none?: PermissaoWhereInput
  }

  export type PresencaReuniaoListRelationFilter = {
    every?: PresencaReuniaoWhereInput
    some?: PresencaReuniaoWhereInput
    none?: PresencaReuniaoWhereInput
  }

  export type MensalidadeListRelationFilter = {
    every?: MensalidadeWhereInput
    some?: MensalidadeWhereInput
    none?: MensalidadeWhereInput
  }

  export type HistoricoStatusAssociadoListRelationFilter = {
    every?: HistoricoStatusAssociadoWhereInput
    some?: HistoricoStatusAssociadoWhereInput
    none?: HistoricoStatusAssociadoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LojaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PresencaReuniaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MensalidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricoStatusAssociadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssociadoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    embarcacao?: SortOrder
    numeroCarteira?: SortOrder
    status?: SortOrder
    dataCadastro?: SortOrder
    observacoes?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type AssociadoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    embarcacao?: SortOrder
    numeroCarteira?: SortOrder
    status?: SortOrder
    dataCadastro?: SortOrder
    observacoes?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type AssociadoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    embarcacao?: SortOrder
    numeroCarteira?: SortOrder
    status?: SortOrder
    dataCadastro?: SortOrder
    observacoes?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AssociadoRelationFilter = {
    is?: AssociadoWhereInput
    isNot?: AssociadoWhereInput
  }

  export type HistoricoStatusAssociadoCountOrderByAggregateInput = {
    id?: SortOrder
    associadoId?: SortOrder
    statusAnterior?: SortOrder
    statusNovo?: SortOrder
    motivo?: SortOrder
    alteradoEm?: SortOrder
    alteradoPor?: SortOrder
  }

  export type HistoricoStatusAssociadoMaxOrderByAggregateInput = {
    id?: SortOrder
    associadoId?: SortOrder
    statusAnterior?: SortOrder
    statusNovo?: SortOrder
    motivo?: SortOrder
    alteradoEm?: SortOrder
    alteradoPor?: SortOrder
  }

  export type HistoricoStatusAssociadoMinOrderByAggregateInput = {
    id?: SortOrder
    associadoId?: SortOrder
    statusAnterior?: SortOrder
    statusNovo?: SortOrder
    motivo?: SortOrder
    alteradoEm?: SortOrder
    alteradoPor?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LojaCountOrderByAggregateInput = {
    id?: SortOrder
    associadoId?: SortOrder
    nomeLoja?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    dataSolicitacao?: SortOrder
    dataAprovacao?: SortOrder
    motivoRejeicao?: SortOrder
    produtos?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type LojaAvgOrderByAggregateInput = {
    produtos?: SortOrder
  }

  export type LojaMaxOrderByAggregateInput = {
    id?: SortOrder
    associadoId?: SortOrder
    nomeLoja?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    dataSolicitacao?: SortOrder
    dataAprovacao?: SortOrder
    motivoRejeicao?: SortOrder
    produtos?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type LojaMinOrderByAggregateInput = {
    id?: SortOrder
    associadoId?: SortOrder
    nomeLoja?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    dataSolicitacao?: SortOrder
    dataAprovacao?: SortOrder
    motivoRejeicao?: SortOrder
    produtos?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type LojaSumOrderByAggregateInput = {
    produtos?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PermissaoCountOrderByAggregateInput = {
    id?: SortOrder
    associadoId?: SortOrder
    tipoPermissao?: SortOrder
    ativa?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    quota?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PermissaoAvgOrderByAggregateInput = {
    quota?: SortOrder
  }

  export type PermissaoMaxOrderByAggregateInput = {
    id?: SortOrder
    associadoId?: SortOrder
    tipoPermissao?: SortOrder
    ativa?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    quota?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PermissaoMinOrderByAggregateInput = {
    id?: SortOrder
    associadoId?: SortOrder
    tipoPermissao?: SortOrder
    ativa?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    quota?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PermissaoSumOrderByAggregateInput = {
    quota?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ReuniaoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    local?: SortOrder
    status?: SortOrder
    pautaJson?: SortOrder
    ata?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ReuniaoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    local?: SortOrder
    status?: SortOrder
    pautaJson?: SortOrder
    ata?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ReuniaoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    local?: SortOrder
    status?: SortOrder
    pautaJson?: SortOrder
    ata?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ReuniaoRelationFilter = {
    is?: ReuniaoWhereInput
    isNot?: ReuniaoWhereInput
  }

  export type PresencaReuniaoReuniaoIdAssociadoIdCompoundUniqueInput = {
    reuniaoId: string
    associadoId: string
  }

  export type PresencaReuniaoCountOrderByAggregateInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    associadoId?: SortOrder
    presente?: SortOrder
  }

  export type PresencaReuniaoMaxOrderByAggregateInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    associadoId?: SortOrder
    presente?: SortOrder
  }

  export type PresencaReuniaoMinOrderByAggregateInput = {
    id?: SortOrder
    reuniaoId?: SortOrder
    associadoId?: SortOrder
    presente?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MensalidadeAssociadoIdCompetenciaCompoundUniqueInput = {
    associadoId: string
    competencia: string
  }

  export type MensalidadeCountOrderByAggregateInput = {
    id?: SortOrder
    associadoId?: SortOrder
    competencia?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrder
    status?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type MensalidadeAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type MensalidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    associadoId?: SortOrder
    competencia?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrder
    status?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type MensalidadeMinOrderByAggregateInput = {
    id?: SortOrder
    associadoId?: SortOrder
    competencia?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrder
    status?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type MensalidadeSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UsuarioNullableRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type LogAuditoriaCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrder
    detalhes?: SortOrder
    criadoEm?: SortOrder
  }

  export type LogAuditoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrder
    detalhes?: SortOrder
    criadoEm?: SortOrder
  }

  export type LogAuditoriaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    acao?: SortOrder
    entidade?: SortOrder
    entidadeId?: SortOrder
    detalhes?: SortOrder
    criadoEm?: SortOrder
  }

  export type LogAuditoriaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LogAuditoriaCreateWithoutUsuarioInput, LogAuditoriaUncheckedCreateWithoutUsuarioInput> | LogAuditoriaCreateWithoutUsuarioInput[] | LogAuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutUsuarioInput | LogAuditoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: LogAuditoriaCreateManyUsuarioInputEnvelope
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
  }

  export type LogAuditoriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LogAuditoriaCreateWithoutUsuarioInput, LogAuditoriaUncheckedCreateWithoutUsuarioInput> | LogAuditoriaCreateWithoutUsuarioInput[] | LogAuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutUsuarioInput | LogAuditoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: LogAuditoriaCreateManyUsuarioInputEnvelope
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LogAuditoriaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LogAuditoriaCreateWithoutUsuarioInput, LogAuditoriaUncheckedCreateWithoutUsuarioInput> | LogAuditoriaCreateWithoutUsuarioInput[] | LogAuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutUsuarioInput | LogAuditoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: LogAuditoriaUpsertWithWhereUniqueWithoutUsuarioInput | LogAuditoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LogAuditoriaCreateManyUsuarioInputEnvelope
    set?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    disconnect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    delete?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    update?: LogAuditoriaUpdateWithWhereUniqueWithoutUsuarioInput | LogAuditoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LogAuditoriaUpdateManyWithWhereWithoutUsuarioInput | LogAuditoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
  }

  export type LogAuditoriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LogAuditoriaCreateWithoutUsuarioInput, LogAuditoriaUncheckedCreateWithoutUsuarioInput> | LogAuditoriaCreateWithoutUsuarioInput[] | LogAuditoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutUsuarioInput | LogAuditoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: LogAuditoriaUpsertWithWhereUniqueWithoutUsuarioInput | LogAuditoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LogAuditoriaCreateManyUsuarioInputEnvelope
    set?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    disconnect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    delete?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    update?: LogAuditoriaUpdateWithWhereUniqueWithoutUsuarioInput | LogAuditoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LogAuditoriaUpdateManyWithWhereWithoutUsuarioInput | LogAuditoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
  }

  export type LojaCreateNestedManyWithoutAssociadoInput = {
    create?: XOR<LojaCreateWithoutAssociadoInput, LojaUncheckedCreateWithoutAssociadoInput> | LojaCreateWithoutAssociadoInput[] | LojaUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: LojaCreateOrConnectWithoutAssociadoInput | LojaCreateOrConnectWithoutAssociadoInput[]
    createMany?: LojaCreateManyAssociadoInputEnvelope
    connect?: LojaWhereUniqueInput | LojaWhereUniqueInput[]
  }

  export type PermissaoCreateNestedManyWithoutAssociadoInput = {
    create?: XOR<PermissaoCreateWithoutAssociadoInput, PermissaoUncheckedCreateWithoutAssociadoInput> | PermissaoCreateWithoutAssociadoInput[] | PermissaoUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: PermissaoCreateOrConnectWithoutAssociadoInput | PermissaoCreateOrConnectWithoutAssociadoInput[]
    createMany?: PermissaoCreateManyAssociadoInputEnvelope
    connect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
  }

  export type PresencaReuniaoCreateNestedManyWithoutAssociadoInput = {
    create?: XOR<PresencaReuniaoCreateWithoutAssociadoInput, PresencaReuniaoUncheckedCreateWithoutAssociadoInput> | PresencaReuniaoCreateWithoutAssociadoInput[] | PresencaReuniaoUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: PresencaReuniaoCreateOrConnectWithoutAssociadoInput | PresencaReuniaoCreateOrConnectWithoutAssociadoInput[]
    createMany?: PresencaReuniaoCreateManyAssociadoInputEnvelope
    connect?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
  }

  export type MensalidadeCreateNestedManyWithoutAssociadoInput = {
    create?: XOR<MensalidadeCreateWithoutAssociadoInput, MensalidadeUncheckedCreateWithoutAssociadoInput> | MensalidadeCreateWithoutAssociadoInput[] | MensalidadeUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: MensalidadeCreateOrConnectWithoutAssociadoInput | MensalidadeCreateOrConnectWithoutAssociadoInput[]
    createMany?: MensalidadeCreateManyAssociadoInputEnvelope
    connect?: MensalidadeWhereUniqueInput | MensalidadeWhereUniqueInput[]
  }

  export type HistoricoStatusAssociadoCreateNestedManyWithoutAssociadoInput = {
    create?: XOR<HistoricoStatusAssociadoCreateWithoutAssociadoInput, HistoricoStatusAssociadoUncheckedCreateWithoutAssociadoInput> | HistoricoStatusAssociadoCreateWithoutAssociadoInput[] | HistoricoStatusAssociadoUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: HistoricoStatusAssociadoCreateOrConnectWithoutAssociadoInput | HistoricoStatusAssociadoCreateOrConnectWithoutAssociadoInput[]
    createMany?: HistoricoStatusAssociadoCreateManyAssociadoInputEnvelope
    connect?: HistoricoStatusAssociadoWhereUniqueInput | HistoricoStatusAssociadoWhereUniqueInput[]
  }

  export type LojaUncheckedCreateNestedManyWithoutAssociadoInput = {
    create?: XOR<LojaCreateWithoutAssociadoInput, LojaUncheckedCreateWithoutAssociadoInput> | LojaCreateWithoutAssociadoInput[] | LojaUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: LojaCreateOrConnectWithoutAssociadoInput | LojaCreateOrConnectWithoutAssociadoInput[]
    createMany?: LojaCreateManyAssociadoInputEnvelope
    connect?: LojaWhereUniqueInput | LojaWhereUniqueInput[]
  }

  export type PermissaoUncheckedCreateNestedManyWithoutAssociadoInput = {
    create?: XOR<PermissaoCreateWithoutAssociadoInput, PermissaoUncheckedCreateWithoutAssociadoInput> | PermissaoCreateWithoutAssociadoInput[] | PermissaoUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: PermissaoCreateOrConnectWithoutAssociadoInput | PermissaoCreateOrConnectWithoutAssociadoInput[]
    createMany?: PermissaoCreateManyAssociadoInputEnvelope
    connect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
  }

  export type PresencaReuniaoUncheckedCreateNestedManyWithoutAssociadoInput = {
    create?: XOR<PresencaReuniaoCreateWithoutAssociadoInput, PresencaReuniaoUncheckedCreateWithoutAssociadoInput> | PresencaReuniaoCreateWithoutAssociadoInput[] | PresencaReuniaoUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: PresencaReuniaoCreateOrConnectWithoutAssociadoInput | PresencaReuniaoCreateOrConnectWithoutAssociadoInput[]
    createMany?: PresencaReuniaoCreateManyAssociadoInputEnvelope
    connect?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
  }

  export type MensalidadeUncheckedCreateNestedManyWithoutAssociadoInput = {
    create?: XOR<MensalidadeCreateWithoutAssociadoInput, MensalidadeUncheckedCreateWithoutAssociadoInput> | MensalidadeCreateWithoutAssociadoInput[] | MensalidadeUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: MensalidadeCreateOrConnectWithoutAssociadoInput | MensalidadeCreateOrConnectWithoutAssociadoInput[]
    createMany?: MensalidadeCreateManyAssociadoInputEnvelope
    connect?: MensalidadeWhereUniqueInput | MensalidadeWhereUniqueInput[]
  }

  export type HistoricoStatusAssociadoUncheckedCreateNestedManyWithoutAssociadoInput = {
    create?: XOR<HistoricoStatusAssociadoCreateWithoutAssociadoInput, HistoricoStatusAssociadoUncheckedCreateWithoutAssociadoInput> | HistoricoStatusAssociadoCreateWithoutAssociadoInput[] | HistoricoStatusAssociadoUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: HistoricoStatusAssociadoCreateOrConnectWithoutAssociadoInput | HistoricoStatusAssociadoCreateOrConnectWithoutAssociadoInput[]
    createMany?: HistoricoStatusAssociadoCreateManyAssociadoInputEnvelope
    connect?: HistoricoStatusAssociadoWhereUniqueInput | HistoricoStatusAssociadoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LojaUpdateManyWithoutAssociadoNestedInput = {
    create?: XOR<LojaCreateWithoutAssociadoInput, LojaUncheckedCreateWithoutAssociadoInput> | LojaCreateWithoutAssociadoInput[] | LojaUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: LojaCreateOrConnectWithoutAssociadoInput | LojaCreateOrConnectWithoutAssociadoInput[]
    upsert?: LojaUpsertWithWhereUniqueWithoutAssociadoInput | LojaUpsertWithWhereUniqueWithoutAssociadoInput[]
    createMany?: LojaCreateManyAssociadoInputEnvelope
    set?: LojaWhereUniqueInput | LojaWhereUniqueInput[]
    disconnect?: LojaWhereUniqueInput | LojaWhereUniqueInput[]
    delete?: LojaWhereUniqueInput | LojaWhereUniqueInput[]
    connect?: LojaWhereUniqueInput | LojaWhereUniqueInput[]
    update?: LojaUpdateWithWhereUniqueWithoutAssociadoInput | LojaUpdateWithWhereUniqueWithoutAssociadoInput[]
    updateMany?: LojaUpdateManyWithWhereWithoutAssociadoInput | LojaUpdateManyWithWhereWithoutAssociadoInput[]
    deleteMany?: LojaScalarWhereInput | LojaScalarWhereInput[]
  }

  export type PermissaoUpdateManyWithoutAssociadoNestedInput = {
    create?: XOR<PermissaoCreateWithoutAssociadoInput, PermissaoUncheckedCreateWithoutAssociadoInput> | PermissaoCreateWithoutAssociadoInput[] | PermissaoUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: PermissaoCreateOrConnectWithoutAssociadoInput | PermissaoCreateOrConnectWithoutAssociadoInput[]
    upsert?: PermissaoUpsertWithWhereUniqueWithoutAssociadoInput | PermissaoUpsertWithWhereUniqueWithoutAssociadoInput[]
    createMany?: PermissaoCreateManyAssociadoInputEnvelope
    set?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    disconnect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    delete?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    connect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    update?: PermissaoUpdateWithWhereUniqueWithoutAssociadoInput | PermissaoUpdateWithWhereUniqueWithoutAssociadoInput[]
    updateMany?: PermissaoUpdateManyWithWhereWithoutAssociadoInput | PermissaoUpdateManyWithWhereWithoutAssociadoInput[]
    deleteMany?: PermissaoScalarWhereInput | PermissaoScalarWhereInput[]
  }

  export type PresencaReuniaoUpdateManyWithoutAssociadoNestedInput = {
    create?: XOR<PresencaReuniaoCreateWithoutAssociadoInput, PresencaReuniaoUncheckedCreateWithoutAssociadoInput> | PresencaReuniaoCreateWithoutAssociadoInput[] | PresencaReuniaoUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: PresencaReuniaoCreateOrConnectWithoutAssociadoInput | PresencaReuniaoCreateOrConnectWithoutAssociadoInput[]
    upsert?: PresencaReuniaoUpsertWithWhereUniqueWithoutAssociadoInput | PresencaReuniaoUpsertWithWhereUniqueWithoutAssociadoInput[]
    createMany?: PresencaReuniaoCreateManyAssociadoInputEnvelope
    set?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    disconnect?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    delete?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    connect?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    update?: PresencaReuniaoUpdateWithWhereUniqueWithoutAssociadoInput | PresencaReuniaoUpdateWithWhereUniqueWithoutAssociadoInput[]
    updateMany?: PresencaReuniaoUpdateManyWithWhereWithoutAssociadoInput | PresencaReuniaoUpdateManyWithWhereWithoutAssociadoInput[]
    deleteMany?: PresencaReuniaoScalarWhereInput | PresencaReuniaoScalarWhereInput[]
  }

  export type MensalidadeUpdateManyWithoutAssociadoNestedInput = {
    create?: XOR<MensalidadeCreateWithoutAssociadoInput, MensalidadeUncheckedCreateWithoutAssociadoInput> | MensalidadeCreateWithoutAssociadoInput[] | MensalidadeUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: MensalidadeCreateOrConnectWithoutAssociadoInput | MensalidadeCreateOrConnectWithoutAssociadoInput[]
    upsert?: MensalidadeUpsertWithWhereUniqueWithoutAssociadoInput | MensalidadeUpsertWithWhereUniqueWithoutAssociadoInput[]
    createMany?: MensalidadeCreateManyAssociadoInputEnvelope
    set?: MensalidadeWhereUniqueInput | MensalidadeWhereUniqueInput[]
    disconnect?: MensalidadeWhereUniqueInput | MensalidadeWhereUniqueInput[]
    delete?: MensalidadeWhereUniqueInput | MensalidadeWhereUniqueInput[]
    connect?: MensalidadeWhereUniqueInput | MensalidadeWhereUniqueInput[]
    update?: MensalidadeUpdateWithWhereUniqueWithoutAssociadoInput | MensalidadeUpdateWithWhereUniqueWithoutAssociadoInput[]
    updateMany?: MensalidadeUpdateManyWithWhereWithoutAssociadoInput | MensalidadeUpdateManyWithWhereWithoutAssociadoInput[]
    deleteMany?: MensalidadeScalarWhereInput | MensalidadeScalarWhereInput[]
  }

  export type HistoricoStatusAssociadoUpdateManyWithoutAssociadoNestedInput = {
    create?: XOR<HistoricoStatusAssociadoCreateWithoutAssociadoInput, HistoricoStatusAssociadoUncheckedCreateWithoutAssociadoInput> | HistoricoStatusAssociadoCreateWithoutAssociadoInput[] | HistoricoStatusAssociadoUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: HistoricoStatusAssociadoCreateOrConnectWithoutAssociadoInput | HistoricoStatusAssociadoCreateOrConnectWithoutAssociadoInput[]
    upsert?: HistoricoStatusAssociadoUpsertWithWhereUniqueWithoutAssociadoInput | HistoricoStatusAssociadoUpsertWithWhereUniqueWithoutAssociadoInput[]
    createMany?: HistoricoStatusAssociadoCreateManyAssociadoInputEnvelope
    set?: HistoricoStatusAssociadoWhereUniqueInput | HistoricoStatusAssociadoWhereUniqueInput[]
    disconnect?: HistoricoStatusAssociadoWhereUniqueInput | HistoricoStatusAssociadoWhereUniqueInput[]
    delete?: HistoricoStatusAssociadoWhereUniqueInput | HistoricoStatusAssociadoWhereUniqueInput[]
    connect?: HistoricoStatusAssociadoWhereUniqueInput | HistoricoStatusAssociadoWhereUniqueInput[]
    update?: HistoricoStatusAssociadoUpdateWithWhereUniqueWithoutAssociadoInput | HistoricoStatusAssociadoUpdateWithWhereUniqueWithoutAssociadoInput[]
    updateMany?: HistoricoStatusAssociadoUpdateManyWithWhereWithoutAssociadoInput | HistoricoStatusAssociadoUpdateManyWithWhereWithoutAssociadoInput[]
    deleteMany?: HistoricoStatusAssociadoScalarWhereInput | HistoricoStatusAssociadoScalarWhereInput[]
  }

  export type LojaUncheckedUpdateManyWithoutAssociadoNestedInput = {
    create?: XOR<LojaCreateWithoutAssociadoInput, LojaUncheckedCreateWithoutAssociadoInput> | LojaCreateWithoutAssociadoInput[] | LojaUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: LojaCreateOrConnectWithoutAssociadoInput | LojaCreateOrConnectWithoutAssociadoInput[]
    upsert?: LojaUpsertWithWhereUniqueWithoutAssociadoInput | LojaUpsertWithWhereUniqueWithoutAssociadoInput[]
    createMany?: LojaCreateManyAssociadoInputEnvelope
    set?: LojaWhereUniqueInput | LojaWhereUniqueInput[]
    disconnect?: LojaWhereUniqueInput | LojaWhereUniqueInput[]
    delete?: LojaWhereUniqueInput | LojaWhereUniqueInput[]
    connect?: LojaWhereUniqueInput | LojaWhereUniqueInput[]
    update?: LojaUpdateWithWhereUniqueWithoutAssociadoInput | LojaUpdateWithWhereUniqueWithoutAssociadoInput[]
    updateMany?: LojaUpdateManyWithWhereWithoutAssociadoInput | LojaUpdateManyWithWhereWithoutAssociadoInput[]
    deleteMany?: LojaScalarWhereInput | LojaScalarWhereInput[]
  }

  export type PermissaoUncheckedUpdateManyWithoutAssociadoNestedInput = {
    create?: XOR<PermissaoCreateWithoutAssociadoInput, PermissaoUncheckedCreateWithoutAssociadoInput> | PermissaoCreateWithoutAssociadoInput[] | PermissaoUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: PermissaoCreateOrConnectWithoutAssociadoInput | PermissaoCreateOrConnectWithoutAssociadoInput[]
    upsert?: PermissaoUpsertWithWhereUniqueWithoutAssociadoInput | PermissaoUpsertWithWhereUniqueWithoutAssociadoInput[]
    createMany?: PermissaoCreateManyAssociadoInputEnvelope
    set?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    disconnect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    delete?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    connect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    update?: PermissaoUpdateWithWhereUniqueWithoutAssociadoInput | PermissaoUpdateWithWhereUniqueWithoutAssociadoInput[]
    updateMany?: PermissaoUpdateManyWithWhereWithoutAssociadoInput | PermissaoUpdateManyWithWhereWithoutAssociadoInput[]
    deleteMany?: PermissaoScalarWhereInput | PermissaoScalarWhereInput[]
  }

  export type PresencaReuniaoUncheckedUpdateManyWithoutAssociadoNestedInput = {
    create?: XOR<PresencaReuniaoCreateWithoutAssociadoInput, PresencaReuniaoUncheckedCreateWithoutAssociadoInput> | PresencaReuniaoCreateWithoutAssociadoInput[] | PresencaReuniaoUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: PresencaReuniaoCreateOrConnectWithoutAssociadoInput | PresencaReuniaoCreateOrConnectWithoutAssociadoInput[]
    upsert?: PresencaReuniaoUpsertWithWhereUniqueWithoutAssociadoInput | PresencaReuniaoUpsertWithWhereUniqueWithoutAssociadoInput[]
    createMany?: PresencaReuniaoCreateManyAssociadoInputEnvelope
    set?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    disconnect?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    delete?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    connect?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    update?: PresencaReuniaoUpdateWithWhereUniqueWithoutAssociadoInput | PresencaReuniaoUpdateWithWhereUniqueWithoutAssociadoInput[]
    updateMany?: PresencaReuniaoUpdateManyWithWhereWithoutAssociadoInput | PresencaReuniaoUpdateManyWithWhereWithoutAssociadoInput[]
    deleteMany?: PresencaReuniaoScalarWhereInput | PresencaReuniaoScalarWhereInput[]
  }

  export type MensalidadeUncheckedUpdateManyWithoutAssociadoNestedInput = {
    create?: XOR<MensalidadeCreateWithoutAssociadoInput, MensalidadeUncheckedCreateWithoutAssociadoInput> | MensalidadeCreateWithoutAssociadoInput[] | MensalidadeUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: MensalidadeCreateOrConnectWithoutAssociadoInput | MensalidadeCreateOrConnectWithoutAssociadoInput[]
    upsert?: MensalidadeUpsertWithWhereUniqueWithoutAssociadoInput | MensalidadeUpsertWithWhereUniqueWithoutAssociadoInput[]
    createMany?: MensalidadeCreateManyAssociadoInputEnvelope
    set?: MensalidadeWhereUniqueInput | MensalidadeWhereUniqueInput[]
    disconnect?: MensalidadeWhereUniqueInput | MensalidadeWhereUniqueInput[]
    delete?: MensalidadeWhereUniqueInput | MensalidadeWhereUniqueInput[]
    connect?: MensalidadeWhereUniqueInput | MensalidadeWhereUniqueInput[]
    update?: MensalidadeUpdateWithWhereUniqueWithoutAssociadoInput | MensalidadeUpdateWithWhereUniqueWithoutAssociadoInput[]
    updateMany?: MensalidadeUpdateManyWithWhereWithoutAssociadoInput | MensalidadeUpdateManyWithWhereWithoutAssociadoInput[]
    deleteMany?: MensalidadeScalarWhereInput | MensalidadeScalarWhereInput[]
  }

  export type HistoricoStatusAssociadoUncheckedUpdateManyWithoutAssociadoNestedInput = {
    create?: XOR<HistoricoStatusAssociadoCreateWithoutAssociadoInput, HistoricoStatusAssociadoUncheckedCreateWithoutAssociadoInput> | HistoricoStatusAssociadoCreateWithoutAssociadoInput[] | HistoricoStatusAssociadoUncheckedCreateWithoutAssociadoInput[]
    connectOrCreate?: HistoricoStatusAssociadoCreateOrConnectWithoutAssociadoInput | HistoricoStatusAssociadoCreateOrConnectWithoutAssociadoInput[]
    upsert?: HistoricoStatusAssociadoUpsertWithWhereUniqueWithoutAssociadoInput | HistoricoStatusAssociadoUpsertWithWhereUniqueWithoutAssociadoInput[]
    createMany?: HistoricoStatusAssociadoCreateManyAssociadoInputEnvelope
    set?: HistoricoStatusAssociadoWhereUniqueInput | HistoricoStatusAssociadoWhereUniqueInput[]
    disconnect?: HistoricoStatusAssociadoWhereUniqueInput | HistoricoStatusAssociadoWhereUniqueInput[]
    delete?: HistoricoStatusAssociadoWhereUniqueInput | HistoricoStatusAssociadoWhereUniqueInput[]
    connect?: HistoricoStatusAssociadoWhereUniqueInput | HistoricoStatusAssociadoWhereUniqueInput[]
    update?: HistoricoStatusAssociadoUpdateWithWhereUniqueWithoutAssociadoInput | HistoricoStatusAssociadoUpdateWithWhereUniqueWithoutAssociadoInput[]
    updateMany?: HistoricoStatusAssociadoUpdateManyWithWhereWithoutAssociadoInput | HistoricoStatusAssociadoUpdateManyWithWhereWithoutAssociadoInput[]
    deleteMany?: HistoricoStatusAssociadoScalarWhereInput | HistoricoStatusAssociadoScalarWhereInput[]
  }

  export type AssociadoCreateNestedOneWithoutHistoricoStatusInput = {
    create?: XOR<AssociadoCreateWithoutHistoricoStatusInput, AssociadoUncheckedCreateWithoutHistoricoStatusInput>
    connectOrCreate?: AssociadoCreateOrConnectWithoutHistoricoStatusInput
    connect?: AssociadoWhereUniqueInput
  }

  export type AssociadoUpdateOneRequiredWithoutHistoricoStatusNestedInput = {
    create?: XOR<AssociadoCreateWithoutHistoricoStatusInput, AssociadoUncheckedCreateWithoutHistoricoStatusInput>
    connectOrCreate?: AssociadoCreateOrConnectWithoutHistoricoStatusInput
    upsert?: AssociadoUpsertWithoutHistoricoStatusInput
    connect?: AssociadoWhereUniqueInput
    update?: XOR<XOR<AssociadoUpdateToOneWithWhereWithoutHistoricoStatusInput, AssociadoUpdateWithoutHistoricoStatusInput>, AssociadoUncheckedUpdateWithoutHistoricoStatusInput>
  }

  export type AssociadoCreateNestedOneWithoutLojasInput = {
    create?: XOR<AssociadoCreateWithoutLojasInput, AssociadoUncheckedCreateWithoutLojasInput>
    connectOrCreate?: AssociadoCreateOrConnectWithoutLojasInput
    connect?: AssociadoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssociadoUpdateOneRequiredWithoutLojasNestedInput = {
    create?: XOR<AssociadoCreateWithoutLojasInput, AssociadoUncheckedCreateWithoutLojasInput>
    connectOrCreate?: AssociadoCreateOrConnectWithoutLojasInput
    upsert?: AssociadoUpsertWithoutLojasInput
    connect?: AssociadoWhereUniqueInput
    update?: XOR<XOR<AssociadoUpdateToOneWithWhereWithoutLojasInput, AssociadoUpdateWithoutLojasInput>, AssociadoUncheckedUpdateWithoutLojasInput>
  }

  export type AssociadoCreateNestedOneWithoutPermissoesInput = {
    create?: XOR<AssociadoCreateWithoutPermissoesInput, AssociadoUncheckedCreateWithoutPermissoesInput>
    connectOrCreate?: AssociadoCreateOrConnectWithoutPermissoesInput
    connect?: AssociadoWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssociadoUpdateOneRequiredWithoutPermissoesNestedInput = {
    create?: XOR<AssociadoCreateWithoutPermissoesInput, AssociadoUncheckedCreateWithoutPermissoesInput>
    connectOrCreate?: AssociadoCreateOrConnectWithoutPermissoesInput
    upsert?: AssociadoUpsertWithoutPermissoesInput
    connect?: AssociadoWhereUniqueInput
    update?: XOR<XOR<AssociadoUpdateToOneWithWhereWithoutPermissoesInput, AssociadoUpdateWithoutPermissoesInput>, AssociadoUncheckedUpdateWithoutPermissoesInput>
  }

  export type PresencaReuniaoCreateNestedManyWithoutReuniaoInput = {
    create?: XOR<PresencaReuniaoCreateWithoutReuniaoInput, PresencaReuniaoUncheckedCreateWithoutReuniaoInput> | PresencaReuniaoCreateWithoutReuniaoInput[] | PresencaReuniaoUncheckedCreateWithoutReuniaoInput[]
    connectOrCreate?: PresencaReuniaoCreateOrConnectWithoutReuniaoInput | PresencaReuniaoCreateOrConnectWithoutReuniaoInput[]
    createMany?: PresencaReuniaoCreateManyReuniaoInputEnvelope
    connect?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
  }

  export type PresencaReuniaoUncheckedCreateNestedManyWithoutReuniaoInput = {
    create?: XOR<PresencaReuniaoCreateWithoutReuniaoInput, PresencaReuniaoUncheckedCreateWithoutReuniaoInput> | PresencaReuniaoCreateWithoutReuniaoInput[] | PresencaReuniaoUncheckedCreateWithoutReuniaoInput[]
    connectOrCreate?: PresencaReuniaoCreateOrConnectWithoutReuniaoInput | PresencaReuniaoCreateOrConnectWithoutReuniaoInput[]
    createMany?: PresencaReuniaoCreateManyReuniaoInputEnvelope
    connect?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
  }

  export type PresencaReuniaoUpdateManyWithoutReuniaoNestedInput = {
    create?: XOR<PresencaReuniaoCreateWithoutReuniaoInput, PresencaReuniaoUncheckedCreateWithoutReuniaoInput> | PresencaReuniaoCreateWithoutReuniaoInput[] | PresencaReuniaoUncheckedCreateWithoutReuniaoInput[]
    connectOrCreate?: PresencaReuniaoCreateOrConnectWithoutReuniaoInput | PresencaReuniaoCreateOrConnectWithoutReuniaoInput[]
    upsert?: PresencaReuniaoUpsertWithWhereUniqueWithoutReuniaoInput | PresencaReuniaoUpsertWithWhereUniqueWithoutReuniaoInput[]
    createMany?: PresencaReuniaoCreateManyReuniaoInputEnvelope
    set?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    disconnect?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    delete?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    connect?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    update?: PresencaReuniaoUpdateWithWhereUniqueWithoutReuniaoInput | PresencaReuniaoUpdateWithWhereUniqueWithoutReuniaoInput[]
    updateMany?: PresencaReuniaoUpdateManyWithWhereWithoutReuniaoInput | PresencaReuniaoUpdateManyWithWhereWithoutReuniaoInput[]
    deleteMany?: PresencaReuniaoScalarWhereInput | PresencaReuniaoScalarWhereInput[]
  }

  export type PresencaReuniaoUncheckedUpdateManyWithoutReuniaoNestedInput = {
    create?: XOR<PresencaReuniaoCreateWithoutReuniaoInput, PresencaReuniaoUncheckedCreateWithoutReuniaoInput> | PresencaReuniaoCreateWithoutReuniaoInput[] | PresencaReuniaoUncheckedCreateWithoutReuniaoInput[]
    connectOrCreate?: PresencaReuniaoCreateOrConnectWithoutReuniaoInput | PresencaReuniaoCreateOrConnectWithoutReuniaoInput[]
    upsert?: PresencaReuniaoUpsertWithWhereUniqueWithoutReuniaoInput | PresencaReuniaoUpsertWithWhereUniqueWithoutReuniaoInput[]
    createMany?: PresencaReuniaoCreateManyReuniaoInputEnvelope
    set?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    disconnect?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    delete?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    connect?: PresencaReuniaoWhereUniqueInput | PresencaReuniaoWhereUniqueInput[]
    update?: PresencaReuniaoUpdateWithWhereUniqueWithoutReuniaoInput | PresencaReuniaoUpdateWithWhereUniqueWithoutReuniaoInput[]
    updateMany?: PresencaReuniaoUpdateManyWithWhereWithoutReuniaoInput | PresencaReuniaoUpdateManyWithWhereWithoutReuniaoInput[]
    deleteMany?: PresencaReuniaoScalarWhereInput | PresencaReuniaoScalarWhereInput[]
  }

  export type ReuniaoCreateNestedOneWithoutPresencasInput = {
    create?: XOR<ReuniaoCreateWithoutPresencasInput, ReuniaoUncheckedCreateWithoutPresencasInput>
    connectOrCreate?: ReuniaoCreateOrConnectWithoutPresencasInput
    connect?: ReuniaoWhereUniqueInput
  }

  export type AssociadoCreateNestedOneWithoutPresencasInput = {
    create?: XOR<AssociadoCreateWithoutPresencasInput, AssociadoUncheckedCreateWithoutPresencasInput>
    connectOrCreate?: AssociadoCreateOrConnectWithoutPresencasInput
    connect?: AssociadoWhereUniqueInput
  }

  export type ReuniaoUpdateOneRequiredWithoutPresencasNestedInput = {
    create?: XOR<ReuniaoCreateWithoutPresencasInput, ReuniaoUncheckedCreateWithoutPresencasInput>
    connectOrCreate?: ReuniaoCreateOrConnectWithoutPresencasInput
    upsert?: ReuniaoUpsertWithoutPresencasInput
    connect?: ReuniaoWhereUniqueInput
    update?: XOR<XOR<ReuniaoUpdateToOneWithWhereWithoutPresencasInput, ReuniaoUpdateWithoutPresencasInput>, ReuniaoUncheckedUpdateWithoutPresencasInput>
  }

  export type AssociadoUpdateOneRequiredWithoutPresencasNestedInput = {
    create?: XOR<AssociadoCreateWithoutPresencasInput, AssociadoUncheckedCreateWithoutPresencasInput>
    connectOrCreate?: AssociadoCreateOrConnectWithoutPresencasInput
    upsert?: AssociadoUpsertWithoutPresencasInput
    connect?: AssociadoWhereUniqueInput
    update?: XOR<XOR<AssociadoUpdateToOneWithWhereWithoutPresencasInput, AssociadoUpdateWithoutPresencasInput>, AssociadoUncheckedUpdateWithoutPresencasInput>
  }

  export type AssociadoCreateNestedOneWithoutMensalidadesInput = {
    create?: XOR<AssociadoCreateWithoutMensalidadesInput, AssociadoUncheckedCreateWithoutMensalidadesInput>
    connectOrCreate?: AssociadoCreateOrConnectWithoutMensalidadesInput
    connect?: AssociadoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssociadoUpdateOneRequiredWithoutMensalidadesNestedInput = {
    create?: XOR<AssociadoCreateWithoutMensalidadesInput, AssociadoUncheckedCreateWithoutMensalidadesInput>
    connectOrCreate?: AssociadoCreateOrConnectWithoutMensalidadesInput
    upsert?: AssociadoUpsertWithoutMensalidadesInput
    connect?: AssociadoWhereUniqueInput
    update?: XOR<XOR<AssociadoUpdateToOneWithWhereWithoutMensalidadesInput, AssociadoUpdateWithoutMensalidadesInput>, AssociadoUncheckedUpdateWithoutMensalidadesInput>
  }

  export type UsuarioCreateNestedOneWithoutLogsAuditoriaInput = {
    create?: XOR<UsuarioCreateWithoutLogsAuditoriaInput, UsuarioUncheckedCreateWithoutLogsAuditoriaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogsAuditoriaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneWithoutLogsAuditoriaNestedInput = {
    create?: XOR<UsuarioCreateWithoutLogsAuditoriaInput, UsuarioUncheckedCreateWithoutLogsAuditoriaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogsAuditoriaInput
    upsert?: UsuarioUpsertWithoutLogsAuditoriaInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLogsAuditoriaInput, UsuarioUpdateWithoutLogsAuditoriaInput>, UsuarioUncheckedUpdateWithoutLogsAuditoriaInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type LogAuditoriaCreateWithoutUsuarioInput = {
    id?: string
    acao: string
    entidade: string
    entidadeId?: string | null
    detalhes?: string | null
    criadoEm?: Date | string
  }

  export type LogAuditoriaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    acao: string
    entidade: string
    entidadeId?: string | null
    detalhes?: string | null
    criadoEm?: Date | string
  }

  export type LogAuditoriaCreateOrConnectWithoutUsuarioInput = {
    where: LogAuditoriaWhereUniqueInput
    create: XOR<LogAuditoriaCreateWithoutUsuarioInput, LogAuditoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type LogAuditoriaCreateManyUsuarioInputEnvelope = {
    data: LogAuditoriaCreateManyUsuarioInput | LogAuditoriaCreateManyUsuarioInput[]
  }

  export type LogAuditoriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: LogAuditoriaWhereUniqueInput
    update: XOR<LogAuditoriaUpdateWithoutUsuarioInput, LogAuditoriaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<LogAuditoriaCreateWithoutUsuarioInput, LogAuditoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type LogAuditoriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: LogAuditoriaWhereUniqueInput
    data: XOR<LogAuditoriaUpdateWithoutUsuarioInput, LogAuditoriaUncheckedUpdateWithoutUsuarioInput>
  }

  export type LogAuditoriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: LogAuditoriaScalarWhereInput
    data: XOR<LogAuditoriaUpdateManyMutationInput, LogAuditoriaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type LogAuditoriaScalarWhereInput = {
    AND?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
    OR?: LogAuditoriaScalarWhereInput[]
    NOT?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
    id?: StringFilter<"LogAuditoria"> | string
    usuarioId?: StringNullableFilter<"LogAuditoria"> | string | null
    acao?: StringFilter<"LogAuditoria"> | string
    entidade?: StringFilter<"LogAuditoria"> | string
    entidadeId?: StringNullableFilter<"LogAuditoria"> | string | null
    detalhes?: StringNullableFilter<"LogAuditoria"> | string | null
    criadoEm?: DateTimeFilter<"LogAuditoria"> | Date | string
  }

  export type LojaCreateWithoutAssociadoInput = {
    id?: string
    nomeLoja: string
    descricao: string
    status?: string
    dataSolicitacao?: Date | string
    dataAprovacao?: Date | string | null
    motivoRejeicao?: string | null
    produtos?: number
    atualizadoEm?: Date | string
  }

  export type LojaUncheckedCreateWithoutAssociadoInput = {
    id?: string
    nomeLoja: string
    descricao: string
    status?: string
    dataSolicitacao?: Date | string
    dataAprovacao?: Date | string | null
    motivoRejeicao?: string | null
    produtos?: number
    atualizadoEm?: Date | string
  }

  export type LojaCreateOrConnectWithoutAssociadoInput = {
    where: LojaWhereUniqueInput
    create: XOR<LojaCreateWithoutAssociadoInput, LojaUncheckedCreateWithoutAssociadoInput>
  }

  export type LojaCreateManyAssociadoInputEnvelope = {
    data: LojaCreateManyAssociadoInput | LojaCreateManyAssociadoInput[]
  }

  export type PermissaoCreateWithoutAssociadoInput = {
    id?: string
    tipoPermissao: string
    ativa?: boolean
    dataInicio: Date | string
    dataFim?: Date | string | null
    quota?: number | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PermissaoUncheckedCreateWithoutAssociadoInput = {
    id?: string
    tipoPermissao: string
    ativa?: boolean
    dataInicio: Date | string
    dataFim?: Date | string | null
    quota?: number | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PermissaoCreateOrConnectWithoutAssociadoInput = {
    where: PermissaoWhereUniqueInput
    create: XOR<PermissaoCreateWithoutAssociadoInput, PermissaoUncheckedCreateWithoutAssociadoInput>
  }

  export type PermissaoCreateManyAssociadoInputEnvelope = {
    data: PermissaoCreateManyAssociadoInput | PermissaoCreateManyAssociadoInput[]
  }

  export type PresencaReuniaoCreateWithoutAssociadoInput = {
    id?: string
    presente?: boolean
    reuniao: ReuniaoCreateNestedOneWithoutPresencasInput
  }

  export type PresencaReuniaoUncheckedCreateWithoutAssociadoInput = {
    id?: string
    reuniaoId: string
    presente?: boolean
  }

  export type PresencaReuniaoCreateOrConnectWithoutAssociadoInput = {
    where: PresencaReuniaoWhereUniqueInput
    create: XOR<PresencaReuniaoCreateWithoutAssociadoInput, PresencaReuniaoUncheckedCreateWithoutAssociadoInput>
  }

  export type PresencaReuniaoCreateManyAssociadoInputEnvelope = {
    data: PresencaReuniaoCreateManyAssociadoInput | PresencaReuniaoCreateManyAssociadoInput[]
  }

  export type MensalidadeCreateWithoutAssociadoInput = {
    id?: string
    competencia: string
    valor: number
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type MensalidadeUncheckedCreateWithoutAssociadoInput = {
    id?: string
    competencia: string
    valor: number
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type MensalidadeCreateOrConnectWithoutAssociadoInput = {
    where: MensalidadeWhereUniqueInput
    create: XOR<MensalidadeCreateWithoutAssociadoInput, MensalidadeUncheckedCreateWithoutAssociadoInput>
  }

  export type MensalidadeCreateManyAssociadoInputEnvelope = {
    data: MensalidadeCreateManyAssociadoInput | MensalidadeCreateManyAssociadoInput[]
  }

  export type HistoricoStatusAssociadoCreateWithoutAssociadoInput = {
    id?: string
    statusAnterior: string
    statusNovo: string
    motivo?: string | null
    alteradoEm?: Date | string
    alteradoPor?: string | null
  }

  export type HistoricoStatusAssociadoUncheckedCreateWithoutAssociadoInput = {
    id?: string
    statusAnterior: string
    statusNovo: string
    motivo?: string | null
    alteradoEm?: Date | string
    alteradoPor?: string | null
  }

  export type HistoricoStatusAssociadoCreateOrConnectWithoutAssociadoInput = {
    where: HistoricoStatusAssociadoWhereUniqueInput
    create: XOR<HistoricoStatusAssociadoCreateWithoutAssociadoInput, HistoricoStatusAssociadoUncheckedCreateWithoutAssociadoInput>
  }

  export type HistoricoStatusAssociadoCreateManyAssociadoInputEnvelope = {
    data: HistoricoStatusAssociadoCreateManyAssociadoInput | HistoricoStatusAssociadoCreateManyAssociadoInput[]
  }

  export type LojaUpsertWithWhereUniqueWithoutAssociadoInput = {
    where: LojaWhereUniqueInput
    update: XOR<LojaUpdateWithoutAssociadoInput, LojaUncheckedUpdateWithoutAssociadoInput>
    create: XOR<LojaCreateWithoutAssociadoInput, LojaUncheckedCreateWithoutAssociadoInput>
  }

  export type LojaUpdateWithWhereUniqueWithoutAssociadoInput = {
    where: LojaWhereUniqueInput
    data: XOR<LojaUpdateWithoutAssociadoInput, LojaUncheckedUpdateWithoutAssociadoInput>
  }

  export type LojaUpdateManyWithWhereWithoutAssociadoInput = {
    where: LojaScalarWhereInput
    data: XOR<LojaUpdateManyMutationInput, LojaUncheckedUpdateManyWithoutAssociadoInput>
  }

  export type LojaScalarWhereInput = {
    AND?: LojaScalarWhereInput | LojaScalarWhereInput[]
    OR?: LojaScalarWhereInput[]
    NOT?: LojaScalarWhereInput | LojaScalarWhereInput[]
    id?: StringFilter<"Loja"> | string
    associadoId?: StringFilter<"Loja"> | string
    nomeLoja?: StringFilter<"Loja"> | string
    descricao?: StringFilter<"Loja"> | string
    status?: StringFilter<"Loja"> | string
    dataSolicitacao?: DateTimeFilter<"Loja"> | Date | string
    dataAprovacao?: DateTimeNullableFilter<"Loja"> | Date | string | null
    motivoRejeicao?: StringNullableFilter<"Loja"> | string | null
    produtos?: IntFilter<"Loja"> | number
    atualizadoEm?: DateTimeFilter<"Loja"> | Date | string
  }

  export type PermissaoUpsertWithWhereUniqueWithoutAssociadoInput = {
    where: PermissaoWhereUniqueInput
    update: XOR<PermissaoUpdateWithoutAssociadoInput, PermissaoUncheckedUpdateWithoutAssociadoInput>
    create: XOR<PermissaoCreateWithoutAssociadoInput, PermissaoUncheckedCreateWithoutAssociadoInput>
  }

  export type PermissaoUpdateWithWhereUniqueWithoutAssociadoInput = {
    where: PermissaoWhereUniqueInput
    data: XOR<PermissaoUpdateWithoutAssociadoInput, PermissaoUncheckedUpdateWithoutAssociadoInput>
  }

  export type PermissaoUpdateManyWithWhereWithoutAssociadoInput = {
    where: PermissaoScalarWhereInput
    data: XOR<PermissaoUpdateManyMutationInput, PermissaoUncheckedUpdateManyWithoutAssociadoInput>
  }

  export type PermissaoScalarWhereInput = {
    AND?: PermissaoScalarWhereInput | PermissaoScalarWhereInput[]
    OR?: PermissaoScalarWhereInput[]
    NOT?: PermissaoScalarWhereInput | PermissaoScalarWhereInput[]
    id?: StringFilter<"Permissao"> | string
    associadoId?: StringFilter<"Permissao"> | string
    tipoPermissao?: StringFilter<"Permissao"> | string
    ativa?: BoolFilter<"Permissao"> | boolean
    dataInicio?: DateTimeFilter<"Permissao"> | Date | string
    dataFim?: DateTimeNullableFilter<"Permissao"> | Date | string | null
    quota?: IntNullableFilter<"Permissao"> | number | null
    criadoEm?: DateTimeFilter<"Permissao"> | Date | string
    atualizadoEm?: DateTimeFilter<"Permissao"> | Date | string
  }

  export type PresencaReuniaoUpsertWithWhereUniqueWithoutAssociadoInput = {
    where: PresencaReuniaoWhereUniqueInput
    update: XOR<PresencaReuniaoUpdateWithoutAssociadoInput, PresencaReuniaoUncheckedUpdateWithoutAssociadoInput>
    create: XOR<PresencaReuniaoCreateWithoutAssociadoInput, PresencaReuniaoUncheckedCreateWithoutAssociadoInput>
  }

  export type PresencaReuniaoUpdateWithWhereUniqueWithoutAssociadoInput = {
    where: PresencaReuniaoWhereUniqueInput
    data: XOR<PresencaReuniaoUpdateWithoutAssociadoInput, PresencaReuniaoUncheckedUpdateWithoutAssociadoInput>
  }

  export type PresencaReuniaoUpdateManyWithWhereWithoutAssociadoInput = {
    where: PresencaReuniaoScalarWhereInput
    data: XOR<PresencaReuniaoUpdateManyMutationInput, PresencaReuniaoUncheckedUpdateManyWithoutAssociadoInput>
  }

  export type PresencaReuniaoScalarWhereInput = {
    AND?: PresencaReuniaoScalarWhereInput | PresencaReuniaoScalarWhereInput[]
    OR?: PresencaReuniaoScalarWhereInput[]
    NOT?: PresencaReuniaoScalarWhereInput | PresencaReuniaoScalarWhereInput[]
    id?: StringFilter<"PresencaReuniao"> | string
    reuniaoId?: StringFilter<"PresencaReuniao"> | string
    associadoId?: StringFilter<"PresencaReuniao"> | string
    presente?: BoolFilter<"PresencaReuniao"> | boolean
  }

  export type MensalidadeUpsertWithWhereUniqueWithoutAssociadoInput = {
    where: MensalidadeWhereUniqueInput
    update: XOR<MensalidadeUpdateWithoutAssociadoInput, MensalidadeUncheckedUpdateWithoutAssociadoInput>
    create: XOR<MensalidadeCreateWithoutAssociadoInput, MensalidadeUncheckedCreateWithoutAssociadoInput>
  }

  export type MensalidadeUpdateWithWhereUniqueWithoutAssociadoInput = {
    where: MensalidadeWhereUniqueInput
    data: XOR<MensalidadeUpdateWithoutAssociadoInput, MensalidadeUncheckedUpdateWithoutAssociadoInput>
  }

  export type MensalidadeUpdateManyWithWhereWithoutAssociadoInput = {
    where: MensalidadeScalarWhereInput
    data: XOR<MensalidadeUpdateManyMutationInput, MensalidadeUncheckedUpdateManyWithoutAssociadoInput>
  }

  export type MensalidadeScalarWhereInput = {
    AND?: MensalidadeScalarWhereInput | MensalidadeScalarWhereInput[]
    OR?: MensalidadeScalarWhereInput[]
    NOT?: MensalidadeScalarWhereInput | MensalidadeScalarWhereInput[]
    id?: StringFilter<"Mensalidade"> | string
    associadoId?: StringFilter<"Mensalidade"> | string
    competencia?: StringFilter<"Mensalidade"> | string
    valor?: FloatFilter<"Mensalidade"> | number
    dataVencimento?: DateTimeFilter<"Mensalidade"> | Date | string
    dataPagamento?: DateTimeNullableFilter<"Mensalidade"> | Date | string | null
    status?: StringFilter<"Mensalidade"> | string
    criadoEm?: DateTimeFilter<"Mensalidade"> | Date | string
    atualizadoEm?: DateTimeFilter<"Mensalidade"> | Date | string
  }

  export type HistoricoStatusAssociadoUpsertWithWhereUniqueWithoutAssociadoInput = {
    where: HistoricoStatusAssociadoWhereUniqueInput
    update: XOR<HistoricoStatusAssociadoUpdateWithoutAssociadoInput, HistoricoStatusAssociadoUncheckedUpdateWithoutAssociadoInput>
    create: XOR<HistoricoStatusAssociadoCreateWithoutAssociadoInput, HistoricoStatusAssociadoUncheckedCreateWithoutAssociadoInput>
  }

  export type HistoricoStatusAssociadoUpdateWithWhereUniqueWithoutAssociadoInput = {
    where: HistoricoStatusAssociadoWhereUniqueInput
    data: XOR<HistoricoStatusAssociadoUpdateWithoutAssociadoInput, HistoricoStatusAssociadoUncheckedUpdateWithoutAssociadoInput>
  }

  export type HistoricoStatusAssociadoUpdateManyWithWhereWithoutAssociadoInput = {
    where: HistoricoStatusAssociadoScalarWhereInput
    data: XOR<HistoricoStatusAssociadoUpdateManyMutationInput, HistoricoStatusAssociadoUncheckedUpdateManyWithoutAssociadoInput>
  }

  export type HistoricoStatusAssociadoScalarWhereInput = {
    AND?: HistoricoStatusAssociadoScalarWhereInput | HistoricoStatusAssociadoScalarWhereInput[]
    OR?: HistoricoStatusAssociadoScalarWhereInput[]
    NOT?: HistoricoStatusAssociadoScalarWhereInput | HistoricoStatusAssociadoScalarWhereInput[]
    id?: StringFilter<"HistoricoStatusAssociado"> | string
    associadoId?: StringFilter<"HistoricoStatusAssociado"> | string
    statusAnterior?: StringFilter<"HistoricoStatusAssociado"> | string
    statusNovo?: StringFilter<"HistoricoStatusAssociado"> | string
    motivo?: StringNullableFilter<"HistoricoStatusAssociado"> | string | null
    alteradoEm?: DateTimeFilter<"HistoricoStatusAssociado"> | Date | string
    alteradoPor?: StringNullableFilter<"HistoricoStatusAssociado"> | string | null
  }

  export type AssociadoCreateWithoutHistoricoStatusInput = {
    id?: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao?: string | null
    numeroCarteira: string
    status?: string
    dataCadastro?: Date | string
    observacoes?: string | null
    atualizadoEm?: Date | string
    lojas?: LojaCreateNestedManyWithoutAssociadoInput
    permissoes?: PermissaoCreateNestedManyWithoutAssociadoInput
    presencas?: PresencaReuniaoCreateNestedManyWithoutAssociadoInput
    mensalidades?: MensalidadeCreateNestedManyWithoutAssociadoInput
  }

  export type AssociadoUncheckedCreateWithoutHistoricoStatusInput = {
    id?: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao?: string | null
    numeroCarteira: string
    status?: string
    dataCadastro?: Date | string
    observacoes?: string | null
    atualizadoEm?: Date | string
    lojas?: LojaUncheckedCreateNestedManyWithoutAssociadoInput
    permissoes?: PermissaoUncheckedCreateNestedManyWithoutAssociadoInput
    presencas?: PresencaReuniaoUncheckedCreateNestedManyWithoutAssociadoInput
    mensalidades?: MensalidadeUncheckedCreateNestedManyWithoutAssociadoInput
  }

  export type AssociadoCreateOrConnectWithoutHistoricoStatusInput = {
    where: AssociadoWhereUniqueInput
    create: XOR<AssociadoCreateWithoutHistoricoStatusInput, AssociadoUncheckedCreateWithoutHistoricoStatusInput>
  }

  export type AssociadoUpsertWithoutHistoricoStatusInput = {
    update: XOR<AssociadoUpdateWithoutHistoricoStatusInput, AssociadoUncheckedUpdateWithoutHistoricoStatusInput>
    create: XOR<AssociadoCreateWithoutHistoricoStatusInput, AssociadoUncheckedCreateWithoutHistoricoStatusInput>
    where?: AssociadoWhereInput
  }

  export type AssociadoUpdateToOneWithWhereWithoutHistoricoStatusInput = {
    where?: AssociadoWhereInput
    data: XOR<AssociadoUpdateWithoutHistoricoStatusInput, AssociadoUncheckedUpdateWithoutHistoricoStatusInput>
  }

  export type AssociadoUpdateWithoutHistoricoStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lojas?: LojaUpdateManyWithoutAssociadoNestedInput
    permissoes?: PermissaoUpdateManyWithoutAssociadoNestedInput
    presencas?: PresencaReuniaoUpdateManyWithoutAssociadoNestedInput
    mensalidades?: MensalidadeUpdateManyWithoutAssociadoNestedInput
  }

  export type AssociadoUncheckedUpdateWithoutHistoricoStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lojas?: LojaUncheckedUpdateManyWithoutAssociadoNestedInput
    permissoes?: PermissaoUncheckedUpdateManyWithoutAssociadoNestedInput
    presencas?: PresencaReuniaoUncheckedUpdateManyWithoutAssociadoNestedInput
    mensalidades?: MensalidadeUncheckedUpdateManyWithoutAssociadoNestedInput
  }

  export type AssociadoCreateWithoutLojasInput = {
    id?: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao?: string | null
    numeroCarteira: string
    status?: string
    dataCadastro?: Date | string
    observacoes?: string | null
    atualizadoEm?: Date | string
    permissoes?: PermissaoCreateNestedManyWithoutAssociadoInput
    presencas?: PresencaReuniaoCreateNestedManyWithoutAssociadoInput
    mensalidades?: MensalidadeCreateNestedManyWithoutAssociadoInput
    historicoStatus?: HistoricoStatusAssociadoCreateNestedManyWithoutAssociadoInput
  }

  export type AssociadoUncheckedCreateWithoutLojasInput = {
    id?: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao?: string | null
    numeroCarteira: string
    status?: string
    dataCadastro?: Date | string
    observacoes?: string | null
    atualizadoEm?: Date | string
    permissoes?: PermissaoUncheckedCreateNestedManyWithoutAssociadoInput
    presencas?: PresencaReuniaoUncheckedCreateNestedManyWithoutAssociadoInput
    mensalidades?: MensalidadeUncheckedCreateNestedManyWithoutAssociadoInput
    historicoStatus?: HistoricoStatusAssociadoUncheckedCreateNestedManyWithoutAssociadoInput
  }

  export type AssociadoCreateOrConnectWithoutLojasInput = {
    where: AssociadoWhereUniqueInput
    create: XOR<AssociadoCreateWithoutLojasInput, AssociadoUncheckedCreateWithoutLojasInput>
  }

  export type AssociadoUpsertWithoutLojasInput = {
    update: XOR<AssociadoUpdateWithoutLojasInput, AssociadoUncheckedUpdateWithoutLojasInput>
    create: XOR<AssociadoCreateWithoutLojasInput, AssociadoUncheckedCreateWithoutLojasInput>
    where?: AssociadoWhereInput
  }

  export type AssociadoUpdateToOneWithWhereWithoutLojasInput = {
    where?: AssociadoWhereInput
    data: XOR<AssociadoUpdateWithoutLojasInput, AssociadoUncheckedUpdateWithoutLojasInput>
  }

  export type AssociadoUpdateWithoutLojasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: PermissaoUpdateManyWithoutAssociadoNestedInput
    presencas?: PresencaReuniaoUpdateManyWithoutAssociadoNestedInput
    mensalidades?: MensalidadeUpdateManyWithoutAssociadoNestedInput
    historicoStatus?: HistoricoStatusAssociadoUpdateManyWithoutAssociadoNestedInput
  }

  export type AssociadoUncheckedUpdateWithoutLojasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: PermissaoUncheckedUpdateManyWithoutAssociadoNestedInput
    presencas?: PresencaReuniaoUncheckedUpdateManyWithoutAssociadoNestedInput
    mensalidades?: MensalidadeUncheckedUpdateManyWithoutAssociadoNestedInput
    historicoStatus?: HistoricoStatusAssociadoUncheckedUpdateManyWithoutAssociadoNestedInput
  }

  export type AssociadoCreateWithoutPermissoesInput = {
    id?: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao?: string | null
    numeroCarteira: string
    status?: string
    dataCadastro?: Date | string
    observacoes?: string | null
    atualizadoEm?: Date | string
    lojas?: LojaCreateNestedManyWithoutAssociadoInput
    presencas?: PresencaReuniaoCreateNestedManyWithoutAssociadoInput
    mensalidades?: MensalidadeCreateNestedManyWithoutAssociadoInput
    historicoStatus?: HistoricoStatusAssociadoCreateNestedManyWithoutAssociadoInput
  }

  export type AssociadoUncheckedCreateWithoutPermissoesInput = {
    id?: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao?: string | null
    numeroCarteira: string
    status?: string
    dataCadastro?: Date | string
    observacoes?: string | null
    atualizadoEm?: Date | string
    lojas?: LojaUncheckedCreateNestedManyWithoutAssociadoInput
    presencas?: PresencaReuniaoUncheckedCreateNestedManyWithoutAssociadoInput
    mensalidades?: MensalidadeUncheckedCreateNestedManyWithoutAssociadoInput
    historicoStatus?: HistoricoStatusAssociadoUncheckedCreateNestedManyWithoutAssociadoInput
  }

  export type AssociadoCreateOrConnectWithoutPermissoesInput = {
    where: AssociadoWhereUniqueInput
    create: XOR<AssociadoCreateWithoutPermissoesInput, AssociadoUncheckedCreateWithoutPermissoesInput>
  }

  export type AssociadoUpsertWithoutPermissoesInput = {
    update: XOR<AssociadoUpdateWithoutPermissoesInput, AssociadoUncheckedUpdateWithoutPermissoesInput>
    create: XOR<AssociadoCreateWithoutPermissoesInput, AssociadoUncheckedCreateWithoutPermissoesInput>
    where?: AssociadoWhereInput
  }

  export type AssociadoUpdateToOneWithWhereWithoutPermissoesInput = {
    where?: AssociadoWhereInput
    data: XOR<AssociadoUpdateWithoutPermissoesInput, AssociadoUncheckedUpdateWithoutPermissoesInput>
  }

  export type AssociadoUpdateWithoutPermissoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lojas?: LojaUpdateManyWithoutAssociadoNestedInput
    presencas?: PresencaReuniaoUpdateManyWithoutAssociadoNestedInput
    mensalidades?: MensalidadeUpdateManyWithoutAssociadoNestedInput
    historicoStatus?: HistoricoStatusAssociadoUpdateManyWithoutAssociadoNestedInput
  }

  export type AssociadoUncheckedUpdateWithoutPermissoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lojas?: LojaUncheckedUpdateManyWithoutAssociadoNestedInput
    presencas?: PresencaReuniaoUncheckedUpdateManyWithoutAssociadoNestedInput
    mensalidades?: MensalidadeUncheckedUpdateManyWithoutAssociadoNestedInput
    historicoStatus?: HistoricoStatusAssociadoUncheckedUpdateManyWithoutAssociadoNestedInput
  }

  export type PresencaReuniaoCreateWithoutReuniaoInput = {
    id?: string
    presente?: boolean
    associado: AssociadoCreateNestedOneWithoutPresencasInput
  }

  export type PresencaReuniaoUncheckedCreateWithoutReuniaoInput = {
    id?: string
    associadoId: string
    presente?: boolean
  }

  export type PresencaReuniaoCreateOrConnectWithoutReuniaoInput = {
    where: PresencaReuniaoWhereUniqueInput
    create: XOR<PresencaReuniaoCreateWithoutReuniaoInput, PresencaReuniaoUncheckedCreateWithoutReuniaoInput>
  }

  export type PresencaReuniaoCreateManyReuniaoInputEnvelope = {
    data: PresencaReuniaoCreateManyReuniaoInput | PresencaReuniaoCreateManyReuniaoInput[]
  }

  export type PresencaReuniaoUpsertWithWhereUniqueWithoutReuniaoInput = {
    where: PresencaReuniaoWhereUniqueInput
    update: XOR<PresencaReuniaoUpdateWithoutReuniaoInput, PresencaReuniaoUncheckedUpdateWithoutReuniaoInput>
    create: XOR<PresencaReuniaoCreateWithoutReuniaoInput, PresencaReuniaoUncheckedCreateWithoutReuniaoInput>
  }

  export type PresencaReuniaoUpdateWithWhereUniqueWithoutReuniaoInput = {
    where: PresencaReuniaoWhereUniqueInput
    data: XOR<PresencaReuniaoUpdateWithoutReuniaoInput, PresencaReuniaoUncheckedUpdateWithoutReuniaoInput>
  }

  export type PresencaReuniaoUpdateManyWithWhereWithoutReuniaoInput = {
    where: PresencaReuniaoScalarWhereInput
    data: XOR<PresencaReuniaoUpdateManyMutationInput, PresencaReuniaoUncheckedUpdateManyWithoutReuniaoInput>
  }

  export type ReuniaoCreateWithoutPresencasInput = {
    id?: string
    titulo: string
    descricao: string
    data: Date | string
    horario: string
    local: string
    status?: string
    pautaJson?: string
    ata?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ReuniaoUncheckedCreateWithoutPresencasInput = {
    id?: string
    titulo: string
    descricao: string
    data: Date | string
    horario: string
    local: string
    status?: string
    pautaJson?: string
    ata?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ReuniaoCreateOrConnectWithoutPresencasInput = {
    where: ReuniaoWhereUniqueInput
    create: XOR<ReuniaoCreateWithoutPresencasInput, ReuniaoUncheckedCreateWithoutPresencasInput>
  }

  export type AssociadoCreateWithoutPresencasInput = {
    id?: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao?: string | null
    numeroCarteira: string
    status?: string
    dataCadastro?: Date | string
    observacoes?: string | null
    atualizadoEm?: Date | string
    lojas?: LojaCreateNestedManyWithoutAssociadoInput
    permissoes?: PermissaoCreateNestedManyWithoutAssociadoInput
    mensalidades?: MensalidadeCreateNestedManyWithoutAssociadoInput
    historicoStatus?: HistoricoStatusAssociadoCreateNestedManyWithoutAssociadoInput
  }

  export type AssociadoUncheckedCreateWithoutPresencasInput = {
    id?: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao?: string | null
    numeroCarteira: string
    status?: string
    dataCadastro?: Date | string
    observacoes?: string | null
    atualizadoEm?: Date | string
    lojas?: LojaUncheckedCreateNestedManyWithoutAssociadoInput
    permissoes?: PermissaoUncheckedCreateNestedManyWithoutAssociadoInput
    mensalidades?: MensalidadeUncheckedCreateNestedManyWithoutAssociadoInput
    historicoStatus?: HistoricoStatusAssociadoUncheckedCreateNestedManyWithoutAssociadoInput
  }

  export type AssociadoCreateOrConnectWithoutPresencasInput = {
    where: AssociadoWhereUniqueInput
    create: XOR<AssociadoCreateWithoutPresencasInput, AssociadoUncheckedCreateWithoutPresencasInput>
  }

  export type ReuniaoUpsertWithoutPresencasInput = {
    update: XOR<ReuniaoUpdateWithoutPresencasInput, ReuniaoUncheckedUpdateWithoutPresencasInput>
    create: XOR<ReuniaoCreateWithoutPresencasInput, ReuniaoUncheckedCreateWithoutPresencasInput>
    where?: ReuniaoWhereInput
  }

  export type ReuniaoUpdateToOneWithWhereWithoutPresencasInput = {
    where?: ReuniaoWhereInput
    data: XOR<ReuniaoUpdateWithoutPresencasInput, ReuniaoUncheckedUpdateWithoutPresencasInput>
  }

  export type ReuniaoUpdateWithoutPresencasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pautaJson?: StringFieldUpdateOperationsInput | string
    ata?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReuniaoUncheckedUpdateWithoutPresencasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pautaJson?: StringFieldUpdateOperationsInput | string
    ata?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssociadoUpsertWithoutPresencasInput = {
    update: XOR<AssociadoUpdateWithoutPresencasInput, AssociadoUncheckedUpdateWithoutPresencasInput>
    create: XOR<AssociadoCreateWithoutPresencasInput, AssociadoUncheckedCreateWithoutPresencasInput>
    where?: AssociadoWhereInput
  }

  export type AssociadoUpdateToOneWithWhereWithoutPresencasInput = {
    where?: AssociadoWhereInput
    data: XOR<AssociadoUpdateWithoutPresencasInput, AssociadoUncheckedUpdateWithoutPresencasInput>
  }

  export type AssociadoUpdateWithoutPresencasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lojas?: LojaUpdateManyWithoutAssociadoNestedInput
    permissoes?: PermissaoUpdateManyWithoutAssociadoNestedInput
    mensalidades?: MensalidadeUpdateManyWithoutAssociadoNestedInput
    historicoStatus?: HistoricoStatusAssociadoUpdateManyWithoutAssociadoNestedInput
  }

  export type AssociadoUncheckedUpdateWithoutPresencasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lojas?: LojaUncheckedUpdateManyWithoutAssociadoNestedInput
    permissoes?: PermissaoUncheckedUpdateManyWithoutAssociadoNestedInput
    mensalidades?: MensalidadeUncheckedUpdateManyWithoutAssociadoNestedInput
    historicoStatus?: HistoricoStatusAssociadoUncheckedUpdateManyWithoutAssociadoNestedInput
  }

  export type AssociadoCreateWithoutMensalidadesInput = {
    id?: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao?: string | null
    numeroCarteira: string
    status?: string
    dataCadastro?: Date | string
    observacoes?: string | null
    atualizadoEm?: Date | string
    lojas?: LojaCreateNestedManyWithoutAssociadoInput
    permissoes?: PermissaoCreateNestedManyWithoutAssociadoInput
    presencas?: PresencaReuniaoCreateNestedManyWithoutAssociadoInput
    historicoStatus?: HistoricoStatusAssociadoCreateNestedManyWithoutAssociadoInput
  }

  export type AssociadoUncheckedCreateWithoutMensalidadesInput = {
    id?: string
    nome: string
    cpf: string
    email: string
    telefone: string
    embarcacao?: string | null
    numeroCarteira: string
    status?: string
    dataCadastro?: Date | string
    observacoes?: string | null
    atualizadoEm?: Date | string
    lojas?: LojaUncheckedCreateNestedManyWithoutAssociadoInput
    permissoes?: PermissaoUncheckedCreateNestedManyWithoutAssociadoInput
    presencas?: PresencaReuniaoUncheckedCreateNestedManyWithoutAssociadoInput
    historicoStatus?: HistoricoStatusAssociadoUncheckedCreateNestedManyWithoutAssociadoInput
  }

  export type AssociadoCreateOrConnectWithoutMensalidadesInput = {
    where: AssociadoWhereUniqueInput
    create: XOR<AssociadoCreateWithoutMensalidadesInput, AssociadoUncheckedCreateWithoutMensalidadesInput>
  }

  export type AssociadoUpsertWithoutMensalidadesInput = {
    update: XOR<AssociadoUpdateWithoutMensalidadesInput, AssociadoUncheckedUpdateWithoutMensalidadesInput>
    create: XOR<AssociadoCreateWithoutMensalidadesInput, AssociadoUncheckedCreateWithoutMensalidadesInput>
    where?: AssociadoWhereInput
  }

  export type AssociadoUpdateToOneWithWhereWithoutMensalidadesInput = {
    where?: AssociadoWhereInput
    data: XOR<AssociadoUpdateWithoutMensalidadesInput, AssociadoUncheckedUpdateWithoutMensalidadesInput>
  }

  export type AssociadoUpdateWithoutMensalidadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lojas?: LojaUpdateManyWithoutAssociadoNestedInput
    permissoes?: PermissaoUpdateManyWithoutAssociadoNestedInput
    presencas?: PresencaReuniaoUpdateManyWithoutAssociadoNestedInput
    historicoStatus?: HistoricoStatusAssociadoUpdateManyWithoutAssociadoNestedInput
  }

  export type AssociadoUncheckedUpdateWithoutMensalidadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    embarcacao?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCarteira?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    lojas?: LojaUncheckedUpdateManyWithoutAssociadoNestedInput
    permissoes?: PermissaoUncheckedUpdateManyWithoutAssociadoNestedInput
    presencas?: PresencaReuniaoUncheckedUpdateManyWithoutAssociadoNestedInput
    historicoStatus?: HistoricoStatusAssociadoUncheckedUpdateManyWithoutAssociadoNestedInput
  }

  export type UsuarioCreateWithoutLogsAuditoriaInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    papel?: string
    criadoEm?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutLogsAuditoriaInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    papel?: string
    criadoEm?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutLogsAuditoriaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLogsAuditoriaInput, UsuarioUncheckedCreateWithoutLogsAuditoriaInput>
  }

  export type UsuarioUpsertWithoutLogsAuditoriaInput = {
    update: XOR<UsuarioUpdateWithoutLogsAuditoriaInput, UsuarioUncheckedUpdateWithoutLogsAuditoriaInput>
    create: XOR<UsuarioCreateWithoutLogsAuditoriaInput, UsuarioUncheckedCreateWithoutLogsAuditoriaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLogsAuditoriaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLogsAuditoriaInput, UsuarioUncheckedUpdateWithoutLogsAuditoriaInput>
  }

  export type UsuarioUpdateWithoutLogsAuditoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutLogsAuditoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAuditoriaCreateManyUsuarioInput = {
    id?: string
    acao: string
    entidade: string
    entidadeId?: string | null
    detalhes?: string | null
    criadoEm?: Date | string
  }

  export type LogAuditoriaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: NullableStringFieldUpdateOperationsInput | string | null
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAuditoriaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: NullableStringFieldUpdateOperationsInput | string | null
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAuditoriaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    entidade?: StringFieldUpdateOperationsInput | string
    entidadeId?: NullableStringFieldUpdateOperationsInput | string | null
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LojaCreateManyAssociadoInput = {
    id?: string
    nomeLoja: string
    descricao: string
    status?: string
    dataSolicitacao?: Date | string
    dataAprovacao?: Date | string | null
    motivoRejeicao?: string | null
    produtos?: number
    atualizadoEm?: Date | string
  }

  export type PermissaoCreateManyAssociadoInput = {
    id?: string
    tipoPermissao: string
    ativa?: boolean
    dataInicio: Date | string
    dataFim?: Date | string | null
    quota?: number | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PresencaReuniaoCreateManyAssociadoInput = {
    id?: string
    reuniaoId: string
    presente?: boolean
  }

  export type MensalidadeCreateManyAssociadoInput = {
    id?: string
    competencia: string
    valor: number
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type HistoricoStatusAssociadoCreateManyAssociadoInput = {
    id?: string
    statusAnterior: string
    statusNovo: string
    motivo?: string | null
    alteradoEm?: Date | string
    alteradoPor?: string | null
  }

  export type LojaUpdateWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeLoja?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataSolicitacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRejeicao?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: IntFieldUpdateOperationsInput | number
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LojaUncheckedUpdateWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeLoja?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataSolicitacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRejeicao?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: IntFieldUpdateOperationsInput | number
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LojaUncheckedUpdateManyWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeLoja?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataSolicitacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAprovacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivoRejeicao?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: IntFieldUpdateOperationsInput | number
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissaoUpdateWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoPermissao?: StringFieldUpdateOperationsInput | string
    ativa?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quota?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissaoUncheckedUpdateWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoPermissao?: StringFieldUpdateOperationsInput | string
    ativa?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quota?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissaoUncheckedUpdateManyWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoPermissao?: StringFieldUpdateOperationsInput | string
    ativa?: BoolFieldUpdateOperationsInput | boolean
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quota?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresencaReuniaoUpdateWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    reuniao?: ReuniaoUpdateOneRequiredWithoutPresencasNestedInput
  }

  export type PresencaReuniaoUncheckedUpdateWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    reuniaoId?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PresencaReuniaoUncheckedUpdateManyWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    reuniaoId?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensalidadeUpdateWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    competencia?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensalidadeUncheckedUpdateWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    competencia?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensalidadeUncheckedUpdateManyWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    competencia?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoStatusAssociadoUpdateWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusAnterior?: StringFieldUpdateOperationsInput | string
    statusNovo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    alteradoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoStatusAssociadoUncheckedUpdateWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusAnterior?: StringFieldUpdateOperationsInput | string
    statusNovo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    alteradoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoricoStatusAssociadoUncheckedUpdateManyWithoutAssociadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusAnterior?: StringFieldUpdateOperationsInput | string
    statusNovo?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    alteradoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    alteradoPor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PresencaReuniaoCreateManyReuniaoInput = {
    id?: string
    associadoId: string
    presente?: boolean
  }

  export type PresencaReuniaoUpdateWithoutReuniaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    associado?: AssociadoUpdateOneRequiredWithoutPresencasNestedInput
  }

  export type PresencaReuniaoUncheckedUpdateWithoutReuniaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    associadoId?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PresencaReuniaoUncheckedUpdateManyWithoutReuniaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    associadoId?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssociadoCountOutputTypeDefaultArgs instead
     */
    export type AssociadoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssociadoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReuniaoCountOutputTypeDefaultArgs instead
     */
    export type ReuniaoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReuniaoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssociadoDefaultArgs instead
     */
    export type AssociadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssociadoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HistoricoStatusAssociadoDefaultArgs instead
     */
    export type HistoricoStatusAssociadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HistoricoStatusAssociadoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LojaDefaultArgs instead
     */
    export type LojaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LojaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissaoDefaultArgs instead
     */
    export type PermissaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReuniaoDefaultArgs instead
     */
    export type ReuniaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReuniaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PresencaReuniaoDefaultArgs instead
     */
    export type PresencaReuniaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PresencaReuniaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MensalidadeDefaultArgs instead
     */
    export type MensalidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MensalidadeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogAuditoriaDefaultArgs instead
     */
    export type LogAuditoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogAuditoriaDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}