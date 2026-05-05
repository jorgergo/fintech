
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
 * Model PortfolioPosition
 * 
 */
export type PortfolioPosition = $Result.DefaultSelection<Prisma.$PortfolioPositionPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model CreditCard
 * 
 */
export type CreditCard = $Result.DefaultSelection<Prisma.$CreditCardPayload>
/**
 * Model TaxContribution
 * 
 */
export type TaxContribution = $Result.DefaultSelection<Prisma.$TaxContributionPayload>
/**
 * Model TaxConfig
 * 
 */
export type TaxConfig = $Result.DefaultSelection<Prisma.$TaxConfigPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PortfolioPositions
 * const portfolioPositions = await prisma.portfolioPosition.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more PortfolioPositions
   * const portfolioPositions = await prisma.portfolioPosition.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.portfolioPosition`: Exposes CRUD operations for the **PortfolioPosition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioPositions
    * const portfolioPositions = await prisma.portfolioPosition.findMany()
    * ```
    */
  get portfolioPosition(): Prisma.PortfolioPositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditCard`: Exposes CRUD operations for the **CreditCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditCards
    * const creditCards = await prisma.creditCard.findMany()
    * ```
    */
  get creditCard(): Prisma.CreditCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taxContribution`: Exposes CRUD operations for the **TaxContribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaxContributions
    * const taxContributions = await prisma.taxContribution.findMany()
    * ```
    */
  get taxContribution(): Prisma.TaxContributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taxConfig`: Exposes CRUD operations for the **TaxConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaxConfigs
    * const taxConfigs = await prisma.taxConfig.findMany()
    * ```
    */
  get taxConfig(): Prisma.TaxConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    PortfolioPosition: 'PortfolioPosition',
    Transaction: 'Transaction',
    CreditCard: 'CreditCard',
    TaxContribution: 'TaxContribution',
    TaxConfig: 'TaxConfig',
    UserProfile: 'UserProfile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "portfolioPosition" | "transaction" | "creditCard" | "taxContribution" | "taxConfig" | "userProfile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PortfolioPosition: {
        payload: Prisma.$PortfolioPositionPayload<ExtArgs>
        fields: Prisma.PortfolioPositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioPositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioPositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>
          }
          findFirst: {
            args: Prisma.PortfolioPositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioPositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>
          }
          findMany: {
            args: Prisma.PortfolioPositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>[]
          }
          create: {
            args: Prisma.PortfolioPositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>
          }
          createMany: {
            args: Prisma.PortfolioPositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioPositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>[]
          }
          delete: {
            args: Prisma.PortfolioPositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>
          }
          update: {
            args: Prisma.PortfolioPositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioPositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioPositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioPositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioPositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPositionPayload>
          }
          aggregate: {
            args: Prisma.PortfolioPositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioPosition>
          }
          groupBy: {
            args: Prisma.PortfolioPositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioPositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioPositionCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioPositionCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      CreditCard: {
        payload: Prisma.$CreditCardPayload<ExtArgs>
        fields: Prisma.CreditCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          findFirst: {
            args: Prisma.CreditCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          findMany: {
            args: Prisma.CreditCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          create: {
            args: Prisma.CreditCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          createMany: {
            args: Prisma.CreditCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          delete: {
            args: Prisma.CreditCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          update: {
            args: Prisma.CreditCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          deleteMany: {
            args: Prisma.CreditCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          upsert: {
            args: Prisma.CreditCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          aggregate: {
            args: Prisma.CreditCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditCard>
          }
          groupBy: {
            args: Prisma.CreditCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditCardCountArgs<ExtArgs>
            result: $Utils.Optional<CreditCardCountAggregateOutputType> | number
          }
        }
      }
      TaxContribution: {
        payload: Prisma.$TaxContributionPayload<ExtArgs>
        fields: Prisma.TaxContributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxContributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxContributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxContributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxContributionPayload>
          }
          findFirst: {
            args: Prisma.TaxContributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxContributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxContributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxContributionPayload>
          }
          findMany: {
            args: Prisma.TaxContributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxContributionPayload>[]
          }
          create: {
            args: Prisma.TaxContributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxContributionPayload>
          }
          createMany: {
            args: Prisma.TaxContributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxContributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxContributionPayload>[]
          }
          delete: {
            args: Prisma.TaxContributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxContributionPayload>
          }
          update: {
            args: Prisma.TaxContributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxContributionPayload>
          }
          deleteMany: {
            args: Prisma.TaxContributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxContributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxContributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxContributionPayload>[]
          }
          upsert: {
            args: Prisma.TaxContributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxContributionPayload>
          }
          aggregate: {
            args: Prisma.TaxContributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxContribution>
          }
          groupBy: {
            args: Prisma.TaxContributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxContributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxContributionCountArgs<ExtArgs>
            result: $Utils.Optional<TaxContributionCountAggregateOutputType> | number
          }
        }
      }
      TaxConfig: {
        payload: Prisma.$TaxConfigPayload<ExtArgs>
        fields: Prisma.TaxConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>
          }
          findFirst: {
            args: Prisma.TaxConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>
          }
          findMany: {
            args: Prisma.TaxConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>[]
          }
          create: {
            args: Prisma.TaxConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>
          }
          createMany: {
            args: Prisma.TaxConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>[]
          }
          delete: {
            args: Prisma.TaxConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>
          }
          update: {
            args: Prisma.TaxConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>
          }
          deleteMany: {
            args: Prisma.TaxConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>[]
          }
          upsert: {
            args: Prisma.TaxConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxConfigPayload>
          }
          aggregate: {
            args: Prisma.TaxConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxConfig>
          }
          groupBy: {
            args: Prisma.TaxConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxConfigCountArgs<ExtArgs>
            result: $Utils.Optional<TaxConfigCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    portfolioPosition?: PortfolioPositionOmit
    transaction?: TransactionOmit
    creditCard?: CreditCardOmit
    taxContribution?: TaxContributionOmit
    taxConfig?: TaxConfigOmit
    userProfile?: UserProfileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type PortfolioPositionCountOutputType
   */

  export type PortfolioPositionCountOutputType = {
    transactions: number
  }

  export type PortfolioPositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | PortfolioPositionCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * PortfolioPositionCountOutputType without action
   */
  export type PortfolioPositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPositionCountOutputType
     */
    select?: PortfolioPositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PortfolioPositionCountOutputType without action
   */
  export type PortfolioPositionCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PortfolioPosition
   */

  export type AggregatePortfolioPosition = {
    _count: PortfolioPositionCountAggregateOutputType | null
    _avg: PortfolioPositionAvgAggregateOutputType | null
    _sum: PortfolioPositionSumAggregateOutputType | null
    _min: PortfolioPositionMinAggregateOutputType | null
    _max: PortfolioPositionMaxAggregateOutputType | null
  }

  export type PortfolioPositionAvgAggregateOutputType = {
    id: number | null
    titles: number | null
    avgPriceMXN: number | null
    currentPriceMXN: number | null
    targetPct: number | null
  }

  export type PortfolioPositionSumAggregateOutputType = {
    id: number | null
    titles: number | null
    avgPriceMXN: number | null
    currentPriceMXN: number | null
    targetPct: number | null
  }

  export type PortfolioPositionMinAggregateOutputType = {
    id: number | null
    ticker: string | null
    titles: number | null
    avgPriceMXN: number | null
    currentPriceMXN: number | null
    isLegacy: boolean | null
    targetPct: number | null
    currency: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type PortfolioPositionMaxAggregateOutputType = {
    id: number | null
    ticker: string | null
    titles: number | null
    avgPriceMXN: number | null
    currentPriceMXN: number | null
    isLegacy: boolean | null
    targetPct: number | null
    currency: string | null
    description: string | null
    updatedAt: Date | null
  }

  export type PortfolioPositionCountAggregateOutputType = {
    id: number
    ticker: number
    titles: number
    avgPriceMXN: number
    currentPriceMXN: number
    isLegacy: number
    targetPct: number
    currency: number
    description: number
    updatedAt: number
    _all: number
  }


  export type PortfolioPositionAvgAggregateInputType = {
    id?: true
    titles?: true
    avgPriceMXN?: true
    currentPriceMXN?: true
    targetPct?: true
  }

  export type PortfolioPositionSumAggregateInputType = {
    id?: true
    titles?: true
    avgPriceMXN?: true
    currentPriceMXN?: true
    targetPct?: true
  }

  export type PortfolioPositionMinAggregateInputType = {
    id?: true
    ticker?: true
    titles?: true
    avgPriceMXN?: true
    currentPriceMXN?: true
    isLegacy?: true
    targetPct?: true
    currency?: true
    description?: true
    updatedAt?: true
  }

  export type PortfolioPositionMaxAggregateInputType = {
    id?: true
    ticker?: true
    titles?: true
    avgPriceMXN?: true
    currentPriceMXN?: true
    isLegacy?: true
    targetPct?: true
    currency?: true
    description?: true
    updatedAt?: true
  }

  export type PortfolioPositionCountAggregateInputType = {
    id?: true
    ticker?: true
    titles?: true
    avgPriceMXN?: true
    currentPriceMXN?: true
    isLegacy?: true
    targetPct?: true
    currency?: true
    description?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioPositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioPosition to aggregate.
     */
    where?: PortfolioPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioPositions to fetch.
     */
    orderBy?: PortfolioPositionOrderByWithRelationInput | PortfolioPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioPositions
    **/
    _count?: true | PortfolioPositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioPositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioPositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioPositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioPositionMaxAggregateInputType
  }

  export type GetPortfolioPositionAggregateType<T extends PortfolioPositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioPosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioPosition[P]>
      : GetScalarType<T[P], AggregatePortfolioPosition[P]>
  }




  export type PortfolioPositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioPositionWhereInput
    orderBy?: PortfolioPositionOrderByWithAggregationInput | PortfolioPositionOrderByWithAggregationInput[]
    by: PortfolioPositionScalarFieldEnum[] | PortfolioPositionScalarFieldEnum
    having?: PortfolioPositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioPositionCountAggregateInputType | true
    _avg?: PortfolioPositionAvgAggregateInputType
    _sum?: PortfolioPositionSumAggregateInputType
    _min?: PortfolioPositionMinAggregateInputType
    _max?: PortfolioPositionMaxAggregateInputType
  }

  export type PortfolioPositionGroupByOutputType = {
    id: number
    ticker: string
    titles: number
    avgPriceMXN: number
    currentPriceMXN: number
    isLegacy: boolean
    targetPct: number
    currency: string
    description: string | null
    updatedAt: Date
    _count: PortfolioPositionCountAggregateOutputType | null
    _avg: PortfolioPositionAvgAggregateOutputType | null
    _sum: PortfolioPositionSumAggregateOutputType | null
    _min: PortfolioPositionMinAggregateOutputType | null
    _max: PortfolioPositionMaxAggregateOutputType | null
  }

  type GetPortfolioPositionGroupByPayload<T extends PortfolioPositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioPositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioPositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioPositionGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioPositionGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioPositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    titles?: boolean
    avgPriceMXN?: boolean
    currentPriceMXN?: boolean
    isLegacy?: boolean
    targetPct?: boolean
    currency?: boolean
    description?: boolean
    updatedAt?: boolean
    transactions?: boolean | PortfolioPosition$transactionsArgs<ExtArgs>
    _count?: boolean | PortfolioPositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioPosition"]>

  export type PortfolioPositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    titles?: boolean
    avgPriceMXN?: boolean
    currentPriceMXN?: boolean
    isLegacy?: boolean
    targetPct?: boolean
    currency?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["portfolioPosition"]>

  export type PortfolioPositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    titles?: boolean
    avgPriceMXN?: boolean
    currentPriceMXN?: boolean
    isLegacy?: boolean
    targetPct?: boolean
    currency?: boolean
    description?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["portfolioPosition"]>

  export type PortfolioPositionSelectScalar = {
    id?: boolean
    ticker?: boolean
    titles?: boolean
    avgPriceMXN?: boolean
    currentPriceMXN?: boolean
    isLegacy?: boolean
    targetPct?: boolean
    currency?: boolean
    description?: boolean
    updatedAt?: boolean
  }

  export type PortfolioPositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticker" | "titles" | "avgPriceMXN" | "currentPriceMXN" | "isLegacy" | "targetPct" | "currency" | "description" | "updatedAt", ExtArgs["result"]["portfolioPosition"]>
  export type PortfolioPositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | PortfolioPosition$transactionsArgs<ExtArgs>
    _count?: boolean | PortfolioPositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PortfolioPositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PortfolioPositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PortfolioPositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioPosition"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticker: string
      titles: number
      avgPriceMXN: number
      currentPriceMXN: number
      isLegacy: boolean
      targetPct: number
      currency: string
      description: string | null
      updatedAt: Date
    }, ExtArgs["result"]["portfolioPosition"]>
    composites: {}
  }

  type PortfolioPositionGetPayload<S extends boolean | null | undefined | PortfolioPositionDefaultArgs> = $Result.GetResult<Prisma.$PortfolioPositionPayload, S>

  type PortfolioPositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioPositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioPositionCountAggregateInputType | true
    }

  export interface PortfolioPositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioPosition'], meta: { name: 'PortfolioPosition' } }
    /**
     * Find zero or one PortfolioPosition that matches the filter.
     * @param {PortfolioPositionFindUniqueArgs} args - Arguments to find a PortfolioPosition
     * @example
     * // Get one PortfolioPosition
     * const portfolioPosition = await prisma.portfolioPosition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioPositionFindUniqueArgs>(args: SelectSubset<T, PortfolioPositionFindUniqueArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PortfolioPosition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioPositionFindUniqueOrThrowArgs} args - Arguments to find a PortfolioPosition
     * @example
     * // Get one PortfolioPosition
     * const portfolioPosition = await prisma.portfolioPosition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioPositionFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioPositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortfolioPosition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionFindFirstArgs} args - Arguments to find a PortfolioPosition
     * @example
     * // Get one PortfolioPosition
     * const portfolioPosition = await prisma.portfolioPosition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioPositionFindFirstArgs>(args?: SelectSubset<T, PortfolioPositionFindFirstArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortfolioPosition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionFindFirstOrThrowArgs} args - Arguments to find a PortfolioPosition
     * @example
     * // Get one PortfolioPosition
     * const portfolioPosition = await prisma.portfolioPosition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioPositionFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioPositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortfolioPositions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioPositions
     * const portfolioPositions = await prisma.portfolioPosition.findMany()
     * 
     * // Get first 10 PortfolioPositions
     * const portfolioPositions = await prisma.portfolioPosition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioPositionWithIdOnly = await prisma.portfolioPosition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioPositionFindManyArgs>(args?: SelectSubset<T, PortfolioPositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PortfolioPosition.
     * @param {PortfolioPositionCreateArgs} args - Arguments to create a PortfolioPosition.
     * @example
     * // Create one PortfolioPosition
     * const PortfolioPosition = await prisma.portfolioPosition.create({
     *   data: {
     *     // ... data to create a PortfolioPosition
     *   }
     * })
     * 
     */
    create<T extends PortfolioPositionCreateArgs>(args: SelectSubset<T, PortfolioPositionCreateArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PortfolioPositions.
     * @param {PortfolioPositionCreateManyArgs} args - Arguments to create many PortfolioPositions.
     * @example
     * // Create many PortfolioPositions
     * const portfolioPosition = await prisma.portfolioPosition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioPositionCreateManyArgs>(args?: SelectSubset<T, PortfolioPositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioPositions and returns the data saved in the database.
     * @param {PortfolioPositionCreateManyAndReturnArgs} args - Arguments to create many PortfolioPositions.
     * @example
     * // Create many PortfolioPositions
     * const portfolioPosition = await prisma.portfolioPosition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioPositions and only return the `id`
     * const portfolioPositionWithIdOnly = await prisma.portfolioPosition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioPositionCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioPositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PortfolioPosition.
     * @param {PortfolioPositionDeleteArgs} args - Arguments to delete one PortfolioPosition.
     * @example
     * // Delete one PortfolioPosition
     * const PortfolioPosition = await prisma.portfolioPosition.delete({
     *   where: {
     *     // ... filter to delete one PortfolioPosition
     *   }
     * })
     * 
     */
    delete<T extends PortfolioPositionDeleteArgs>(args: SelectSubset<T, PortfolioPositionDeleteArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PortfolioPosition.
     * @param {PortfolioPositionUpdateArgs} args - Arguments to update one PortfolioPosition.
     * @example
     * // Update one PortfolioPosition
     * const portfolioPosition = await prisma.portfolioPosition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioPositionUpdateArgs>(args: SelectSubset<T, PortfolioPositionUpdateArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PortfolioPositions.
     * @param {PortfolioPositionDeleteManyArgs} args - Arguments to filter PortfolioPositions to delete.
     * @example
     * // Delete a few PortfolioPositions
     * const { count } = await prisma.portfolioPosition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioPositionDeleteManyArgs>(args?: SelectSubset<T, PortfolioPositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioPositions
     * const portfolioPosition = await prisma.portfolioPosition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioPositionUpdateManyArgs>(args: SelectSubset<T, PortfolioPositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioPositions and returns the data updated in the database.
     * @param {PortfolioPositionUpdateManyAndReturnArgs} args - Arguments to update many PortfolioPositions.
     * @example
     * // Update many PortfolioPositions
     * const portfolioPosition = await prisma.portfolioPosition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortfolioPositions and only return the `id`
     * const portfolioPositionWithIdOnly = await prisma.portfolioPosition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioPositionUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioPositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PortfolioPosition.
     * @param {PortfolioPositionUpsertArgs} args - Arguments to update or create a PortfolioPosition.
     * @example
     * // Update or create a PortfolioPosition
     * const portfolioPosition = await prisma.portfolioPosition.upsert({
     *   create: {
     *     // ... data to create a PortfolioPosition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioPosition we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioPositionUpsertArgs>(args: SelectSubset<T, PortfolioPositionUpsertArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PortfolioPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionCountArgs} args - Arguments to filter PortfolioPositions to count.
     * @example
     * // Count the number of PortfolioPositions
     * const count = await prisma.portfolioPosition.count({
     *   where: {
     *     // ... the filter for the PortfolioPositions we want to count
     *   }
     * })
    **/
    count<T extends PortfolioPositionCountArgs>(
      args?: Subset<T, PortfolioPositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioPositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PortfolioPositionAggregateArgs>(args: Subset<T, PortfolioPositionAggregateArgs>): Prisma.PrismaPromise<GetPortfolioPositionAggregateType<T>>

    /**
     * Group by PortfolioPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioPositionGroupByArgs} args - Group by arguments.
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
      T extends PortfolioPositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioPositionGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioPositionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PortfolioPositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioPosition model
   */
  readonly fields: PortfolioPositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioPosition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioPositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends PortfolioPosition$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioPosition$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PortfolioPosition model
   */
  interface PortfolioPositionFieldRefs {
    readonly id: FieldRef<"PortfolioPosition", 'Int'>
    readonly ticker: FieldRef<"PortfolioPosition", 'String'>
    readonly titles: FieldRef<"PortfolioPosition", 'Int'>
    readonly avgPriceMXN: FieldRef<"PortfolioPosition", 'Float'>
    readonly currentPriceMXN: FieldRef<"PortfolioPosition", 'Float'>
    readonly isLegacy: FieldRef<"PortfolioPosition", 'Boolean'>
    readonly targetPct: FieldRef<"PortfolioPosition", 'Float'>
    readonly currency: FieldRef<"PortfolioPosition", 'String'>
    readonly description: FieldRef<"PortfolioPosition", 'String'>
    readonly updatedAt: FieldRef<"PortfolioPosition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioPosition findUnique
   */
  export type PortfolioPositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioPosition
     */
    omit?: PortfolioPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioPositionInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioPosition to fetch.
     */
    where: PortfolioPositionWhereUniqueInput
  }

  /**
   * PortfolioPosition findUniqueOrThrow
   */
  export type PortfolioPositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioPosition
     */
    omit?: PortfolioPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioPositionInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioPosition to fetch.
     */
    where: PortfolioPositionWhereUniqueInput
  }

  /**
   * PortfolioPosition findFirst
   */
  export type PortfolioPositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioPosition
     */
    omit?: PortfolioPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioPositionInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioPosition to fetch.
     */
    where?: PortfolioPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioPositions to fetch.
     */
    orderBy?: PortfolioPositionOrderByWithRelationInput | PortfolioPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioPositions.
     */
    cursor?: PortfolioPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioPositions.
     */
    distinct?: PortfolioPositionScalarFieldEnum | PortfolioPositionScalarFieldEnum[]
  }

  /**
   * PortfolioPosition findFirstOrThrow
   */
  export type PortfolioPositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioPosition
     */
    omit?: PortfolioPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioPositionInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioPosition to fetch.
     */
    where?: PortfolioPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioPositions to fetch.
     */
    orderBy?: PortfolioPositionOrderByWithRelationInput | PortfolioPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioPositions.
     */
    cursor?: PortfolioPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioPositions.
     */
    distinct?: PortfolioPositionScalarFieldEnum | PortfolioPositionScalarFieldEnum[]
  }

  /**
   * PortfolioPosition findMany
   */
  export type PortfolioPositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioPosition
     */
    omit?: PortfolioPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioPositionInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioPositions to fetch.
     */
    where?: PortfolioPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioPositions to fetch.
     */
    orderBy?: PortfolioPositionOrderByWithRelationInput | PortfolioPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioPositions.
     */
    cursor?: PortfolioPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioPositions.
     */
    skip?: number
    distinct?: PortfolioPositionScalarFieldEnum | PortfolioPositionScalarFieldEnum[]
  }

  /**
   * PortfolioPosition create
   */
  export type PortfolioPositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioPosition
     */
    omit?: PortfolioPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioPositionInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioPosition.
     */
    data: XOR<PortfolioPositionCreateInput, PortfolioPositionUncheckedCreateInput>
  }

  /**
   * PortfolioPosition createMany
   */
  export type PortfolioPositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioPositions.
     */
    data: PortfolioPositionCreateManyInput | PortfolioPositionCreateManyInput[]
  }

  /**
   * PortfolioPosition createManyAndReturn
   */
  export type PortfolioPositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioPosition
     */
    omit?: PortfolioPositionOmit<ExtArgs> | null
    /**
     * The data used to create many PortfolioPositions.
     */
    data: PortfolioPositionCreateManyInput | PortfolioPositionCreateManyInput[]
  }

  /**
   * PortfolioPosition update
   */
  export type PortfolioPositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioPosition
     */
    omit?: PortfolioPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioPositionInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioPosition.
     */
    data: XOR<PortfolioPositionUpdateInput, PortfolioPositionUncheckedUpdateInput>
    /**
     * Choose, which PortfolioPosition to update.
     */
    where: PortfolioPositionWhereUniqueInput
  }

  /**
   * PortfolioPosition updateMany
   */
  export type PortfolioPositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioPositions.
     */
    data: XOR<PortfolioPositionUpdateManyMutationInput, PortfolioPositionUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioPositions to update
     */
    where?: PortfolioPositionWhereInput
    /**
     * Limit how many PortfolioPositions to update.
     */
    limit?: number
  }

  /**
   * PortfolioPosition updateManyAndReturn
   */
  export type PortfolioPositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioPosition
     */
    omit?: PortfolioPositionOmit<ExtArgs> | null
    /**
     * The data used to update PortfolioPositions.
     */
    data: XOR<PortfolioPositionUpdateManyMutationInput, PortfolioPositionUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioPositions to update
     */
    where?: PortfolioPositionWhereInput
    /**
     * Limit how many PortfolioPositions to update.
     */
    limit?: number
  }

  /**
   * PortfolioPosition upsert
   */
  export type PortfolioPositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioPosition
     */
    omit?: PortfolioPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioPositionInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioPosition to update in case it exists.
     */
    where: PortfolioPositionWhereUniqueInput
    /**
     * In case the PortfolioPosition found by the `where` argument doesn't exist, create a new PortfolioPosition with this data.
     */
    create: XOR<PortfolioPositionCreateInput, PortfolioPositionUncheckedCreateInput>
    /**
     * In case the PortfolioPosition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioPositionUpdateInput, PortfolioPositionUncheckedUpdateInput>
  }

  /**
   * PortfolioPosition delete
   */
  export type PortfolioPositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioPosition
     */
    omit?: PortfolioPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioPositionInclude<ExtArgs> | null
    /**
     * Filter which PortfolioPosition to delete.
     */
    where: PortfolioPositionWhereUniqueInput
  }

  /**
   * PortfolioPosition deleteMany
   */
  export type PortfolioPositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioPositions to delete
     */
    where?: PortfolioPositionWhereInput
    /**
     * Limit how many PortfolioPositions to delete.
     */
    limit?: number
  }

  /**
   * PortfolioPosition.transactions
   */
  export type PortfolioPosition$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * PortfolioPosition without action
   */
  export type PortfolioPositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioPosition
     */
    select?: PortfolioPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioPosition
     */
    omit?: PortfolioPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioPositionInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    positionId: number | null
    titles: number | null
    pricePerTitle: number | null
    commissionMXN: number | null
    totalCostMXN: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    positionId: number | null
    titles: number | null
    pricePerTitle: number | null
    commissionMXN: number | null
    totalCostMXN: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    positionId: number | null
    type: string | null
    titles: number | null
    pricePerTitle: number | null
    commissionMXN: number | null
    totalCostMXN: number | null
    isDeductible: boolean | null
    executedAt: Date | null
    notes: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    positionId: number | null
    type: string | null
    titles: number | null
    pricePerTitle: number | null
    commissionMXN: number | null
    totalCostMXN: number | null
    isDeductible: boolean | null
    executedAt: Date | null
    notes: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    positionId: number
    type: number
    titles: number
    pricePerTitle: number
    commissionMXN: number
    totalCostMXN: number
    isDeductible: number
    executedAt: number
    notes: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    positionId?: true
    titles?: true
    pricePerTitle?: true
    commissionMXN?: true
    totalCostMXN?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    positionId?: true
    titles?: true
    pricePerTitle?: true
    commissionMXN?: true
    totalCostMXN?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    positionId?: true
    type?: true
    titles?: true
    pricePerTitle?: true
    commissionMXN?: true
    totalCostMXN?: true
    isDeductible?: true
    executedAt?: true
    notes?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    positionId?: true
    type?: true
    titles?: true
    pricePerTitle?: true
    commissionMXN?: true
    totalCostMXN?: true
    isDeductible?: true
    executedAt?: true
    notes?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    positionId?: true
    type?: true
    titles?: true
    pricePerTitle?: true
    commissionMXN?: true
    totalCostMXN?: true
    isDeductible?: true
    executedAt?: true
    notes?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    positionId: number
    type: string
    titles: number
    pricePerTitle: number
    commissionMXN: number
    totalCostMXN: number
    isDeductible: boolean
    executedAt: Date
    notes: string | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    positionId?: boolean
    type?: boolean
    titles?: boolean
    pricePerTitle?: boolean
    commissionMXN?: boolean
    totalCostMXN?: boolean
    isDeductible?: boolean
    executedAt?: boolean
    notes?: boolean
    position?: boolean | PortfolioPositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    positionId?: boolean
    type?: boolean
    titles?: boolean
    pricePerTitle?: boolean
    commissionMXN?: boolean
    totalCostMXN?: boolean
    isDeductible?: boolean
    executedAt?: boolean
    notes?: boolean
    position?: boolean | PortfolioPositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    positionId?: boolean
    type?: boolean
    titles?: boolean
    pricePerTitle?: boolean
    commissionMXN?: boolean
    totalCostMXN?: boolean
    isDeductible?: boolean
    executedAt?: boolean
    notes?: boolean
    position?: boolean | PortfolioPositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    positionId?: boolean
    type?: boolean
    titles?: boolean
    pricePerTitle?: boolean
    commissionMXN?: boolean
    totalCostMXN?: boolean
    isDeductible?: boolean
    executedAt?: boolean
    notes?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "positionId" | "type" | "titles" | "pricePerTitle" | "commissionMXN" | "totalCostMXN" | "isDeductible" | "executedAt" | "notes", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | PortfolioPositionDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | PortfolioPositionDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | PortfolioPositionDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      position: Prisma.$PortfolioPositionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      positionId: number
      type: string
      titles: number
      pricePerTitle: number
      commissionMXN: number
      totalCostMXN: number
      isDeductible: boolean
      executedAt: Date
      notes: string | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    position<T extends PortfolioPositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioPositionDefaultArgs<ExtArgs>>): Prisma__PortfolioPositionClient<$Result.GetResult<Prisma.$PortfolioPositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly positionId: FieldRef<"Transaction", 'Int'>
    readonly type: FieldRef<"Transaction", 'String'>
    readonly titles: FieldRef<"Transaction", 'Int'>
    readonly pricePerTitle: FieldRef<"Transaction", 'Float'>
    readonly commissionMXN: FieldRef<"Transaction", 'Float'>
    readonly totalCostMXN: FieldRef<"Transaction", 'Float'>
    readonly isDeductible: FieldRef<"Transaction", 'Boolean'>
    readonly executedAt: FieldRef<"Transaction", 'DateTime'>
    readonly notes: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model CreditCard
   */

  export type AggregateCreditCard = {
    _count: CreditCardCountAggregateOutputType | null
    _avg: CreditCardAvgAggregateOutputType | null
    _sum: CreditCardSumAggregateOutputType | null
    _min: CreditCardMinAggregateOutputType | null
    _max: CreditCardMaxAggregateOutputType | null
  }

  export type CreditCardAvgAggregateOutputType = {
    id: number | null
    creditLimit: number | null
    currentBalance: number | null
    cutDay: number | null
    paymentDay: number | null
    annualRate: number | null
  }

  export type CreditCardSumAggregateOutputType = {
    id: number | null
    creditLimit: number | null
    currentBalance: number | null
    cutDay: number | null
    paymentDay: number | null
    annualRate: number | null
  }

  export type CreditCardMinAggregateOutputType = {
    id: number | null
    name: string | null
    creditLimit: number | null
    currentBalance: number | null
    cutDay: number | null
    paymentDay: number | null
    isSecured: boolean | null
    annualRate: number | null
    notes: string | null
    updatedAt: Date | null
  }

  export type CreditCardMaxAggregateOutputType = {
    id: number | null
    name: string | null
    creditLimit: number | null
    currentBalance: number | null
    cutDay: number | null
    paymentDay: number | null
    isSecured: boolean | null
    annualRate: number | null
    notes: string | null
    updatedAt: Date | null
  }

  export type CreditCardCountAggregateOutputType = {
    id: number
    name: number
    creditLimit: number
    currentBalance: number
    cutDay: number
    paymentDay: number
    isSecured: number
    annualRate: number
    notes: number
    updatedAt: number
    _all: number
  }


  export type CreditCardAvgAggregateInputType = {
    id?: true
    creditLimit?: true
    currentBalance?: true
    cutDay?: true
    paymentDay?: true
    annualRate?: true
  }

  export type CreditCardSumAggregateInputType = {
    id?: true
    creditLimit?: true
    currentBalance?: true
    cutDay?: true
    paymentDay?: true
    annualRate?: true
  }

  export type CreditCardMinAggregateInputType = {
    id?: true
    name?: true
    creditLimit?: true
    currentBalance?: true
    cutDay?: true
    paymentDay?: true
    isSecured?: true
    annualRate?: true
    notes?: true
    updatedAt?: true
  }

  export type CreditCardMaxAggregateInputType = {
    id?: true
    name?: true
    creditLimit?: true
    currentBalance?: true
    cutDay?: true
    paymentDay?: true
    isSecured?: true
    annualRate?: true
    notes?: true
    updatedAt?: true
  }

  export type CreditCardCountAggregateInputType = {
    id?: true
    name?: true
    creditLimit?: true
    currentBalance?: true
    cutDay?: true
    paymentDay?: true
    isSecured?: true
    annualRate?: true
    notes?: true
    updatedAt?: true
    _all?: true
  }

  export type CreditCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCard to aggregate.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditCards
    **/
    _count?: true | CreditCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditCardMaxAggregateInputType
  }

  export type GetCreditCardAggregateType<T extends CreditCardAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditCard[P]>
      : GetScalarType<T[P], AggregateCreditCard[P]>
  }




  export type CreditCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditCardWhereInput
    orderBy?: CreditCardOrderByWithAggregationInput | CreditCardOrderByWithAggregationInput[]
    by: CreditCardScalarFieldEnum[] | CreditCardScalarFieldEnum
    having?: CreditCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditCardCountAggregateInputType | true
    _avg?: CreditCardAvgAggregateInputType
    _sum?: CreditCardSumAggregateInputType
    _min?: CreditCardMinAggregateInputType
    _max?: CreditCardMaxAggregateInputType
  }

  export type CreditCardGroupByOutputType = {
    id: number
    name: string
    creditLimit: number
    currentBalance: number
    cutDay: number
    paymentDay: number
    isSecured: boolean
    annualRate: number
    notes: string | null
    updatedAt: Date
    _count: CreditCardCountAggregateOutputType | null
    _avg: CreditCardAvgAggregateOutputType | null
    _sum: CreditCardSumAggregateOutputType | null
    _min: CreditCardMinAggregateOutputType | null
    _max: CreditCardMaxAggregateOutputType | null
  }

  type GetCreditCardGroupByPayload<T extends CreditCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditCardGroupByOutputType[P]>
            : GetScalarType<T[P], CreditCardGroupByOutputType[P]>
        }
      >
    >


  export type CreditCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creditLimit?: boolean
    currentBalance?: boolean
    cutDay?: boolean
    paymentDay?: boolean
    isSecured?: boolean
    annualRate?: boolean
    notes?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creditLimit?: boolean
    currentBalance?: boolean
    cutDay?: boolean
    paymentDay?: boolean
    isSecured?: boolean
    annualRate?: boolean
    notes?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creditLimit?: boolean
    currentBalance?: boolean
    cutDay?: boolean
    paymentDay?: boolean
    isSecured?: boolean
    annualRate?: boolean
    notes?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectScalar = {
    id?: boolean
    name?: boolean
    creditLimit?: boolean
    currentBalance?: boolean
    cutDay?: boolean
    paymentDay?: boolean
    isSecured?: boolean
    annualRate?: boolean
    notes?: boolean
    updatedAt?: boolean
  }

  export type CreditCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "creditLimit" | "currentBalance" | "cutDay" | "paymentDay" | "isSecured" | "annualRate" | "notes" | "updatedAt", ExtArgs["result"]["creditCard"]>

  export type $CreditCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditCard"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      creditLimit: number
      currentBalance: number
      cutDay: number
      paymentDay: number
      isSecured: boolean
      annualRate: number
      notes: string | null
      updatedAt: Date
    }, ExtArgs["result"]["creditCard"]>
    composites: {}
  }

  type CreditCardGetPayload<S extends boolean | null | undefined | CreditCardDefaultArgs> = $Result.GetResult<Prisma.$CreditCardPayload, S>

  type CreditCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditCardCountAggregateInputType | true
    }

  export interface CreditCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditCard'], meta: { name: 'CreditCard' } }
    /**
     * Find zero or one CreditCard that matches the filter.
     * @param {CreditCardFindUniqueArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditCardFindUniqueArgs>(args: SelectSubset<T, CreditCardFindUniqueArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditCardFindUniqueOrThrowArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditCardFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindFirstArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditCardFindFirstArgs>(args?: SelectSubset<T, CreditCardFindFirstArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindFirstOrThrowArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditCardFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditCards
     * const creditCards = await prisma.creditCard.findMany()
     * 
     * // Get first 10 CreditCards
     * const creditCards = await prisma.creditCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditCardFindManyArgs>(args?: SelectSubset<T, CreditCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditCard.
     * @param {CreditCardCreateArgs} args - Arguments to create a CreditCard.
     * @example
     * // Create one CreditCard
     * const CreditCard = await prisma.creditCard.create({
     *   data: {
     *     // ... data to create a CreditCard
     *   }
     * })
     * 
     */
    create<T extends CreditCardCreateArgs>(args: SelectSubset<T, CreditCardCreateArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditCards.
     * @param {CreditCardCreateManyArgs} args - Arguments to create many CreditCards.
     * @example
     * // Create many CreditCards
     * const creditCard = await prisma.creditCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditCardCreateManyArgs>(args?: SelectSubset<T, CreditCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditCards and returns the data saved in the database.
     * @param {CreditCardCreateManyAndReturnArgs} args - Arguments to create many CreditCards.
     * @example
     * // Create many CreditCards
     * const creditCard = await prisma.creditCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditCards and only return the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditCardCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditCard.
     * @param {CreditCardDeleteArgs} args - Arguments to delete one CreditCard.
     * @example
     * // Delete one CreditCard
     * const CreditCard = await prisma.creditCard.delete({
     *   where: {
     *     // ... filter to delete one CreditCard
     *   }
     * })
     * 
     */
    delete<T extends CreditCardDeleteArgs>(args: SelectSubset<T, CreditCardDeleteArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditCard.
     * @param {CreditCardUpdateArgs} args - Arguments to update one CreditCard.
     * @example
     * // Update one CreditCard
     * const creditCard = await prisma.creditCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditCardUpdateArgs>(args: SelectSubset<T, CreditCardUpdateArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditCards.
     * @param {CreditCardDeleteManyArgs} args - Arguments to filter CreditCards to delete.
     * @example
     * // Delete a few CreditCards
     * const { count } = await prisma.creditCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditCardDeleteManyArgs>(args?: SelectSubset<T, CreditCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditCards
     * const creditCard = await prisma.creditCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditCardUpdateManyArgs>(args: SelectSubset<T, CreditCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditCards and returns the data updated in the database.
     * @param {CreditCardUpdateManyAndReturnArgs} args - Arguments to update many CreditCards.
     * @example
     * // Update many CreditCards
     * const creditCard = await prisma.creditCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditCards and only return the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreditCardUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditCard.
     * @param {CreditCardUpsertArgs} args - Arguments to update or create a CreditCard.
     * @example
     * // Update or create a CreditCard
     * const creditCard = await prisma.creditCard.upsert({
     *   create: {
     *     // ... data to create a CreditCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditCard we want to update
     *   }
     * })
     */
    upsert<T extends CreditCardUpsertArgs>(args: SelectSubset<T, CreditCardUpsertArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardCountArgs} args - Arguments to filter CreditCards to count.
     * @example
     * // Count the number of CreditCards
     * const count = await prisma.creditCard.count({
     *   where: {
     *     // ... the filter for the CreditCards we want to count
     *   }
     * })
    **/
    count<T extends CreditCardCountArgs>(
      args?: Subset<T, CreditCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditCardAggregateArgs>(args: Subset<T, CreditCardAggregateArgs>): Prisma.PrismaPromise<GetCreditCardAggregateType<T>>

    /**
     * Group by CreditCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardGroupByArgs} args - Group by arguments.
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
      T extends CreditCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditCardGroupByArgs['orderBy'] }
        : { orderBy?: CreditCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditCard model
   */
  readonly fields: CreditCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CreditCard model
   */
  interface CreditCardFieldRefs {
    readonly id: FieldRef<"CreditCard", 'Int'>
    readonly name: FieldRef<"CreditCard", 'String'>
    readonly creditLimit: FieldRef<"CreditCard", 'Float'>
    readonly currentBalance: FieldRef<"CreditCard", 'Float'>
    readonly cutDay: FieldRef<"CreditCard", 'Int'>
    readonly paymentDay: FieldRef<"CreditCard", 'Int'>
    readonly isSecured: FieldRef<"CreditCard", 'Boolean'>
    readonly annualRate: FieldRef<"CreditCard", 'Float'>
    readonly notes: FieldRef<"CreditCard", 'String'>
    readonly updatedAt: FieldRef<"CreditCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditCard findUnique
   */
  export type CreditCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard findUniqueOrThrow
   */
  export type CreditCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard findFirst
   */
  export type CreditCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCards.
     */
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard findFirstOrThrow
   */
  export type CreditCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCards.
     */
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard findMany
   */
  export type CreditCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Filter, which CreditCards to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard create
   */
  export type CreditCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * The data needed to create a CreditCard.
     */
    data: XOR<CreditCardCreateInput, CreditCardUncheckedCreateInput>
  }

  /**
   * CreditCard createMany
   */
  export type CreditCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditCards.
     */
    data: CreditCardCreateManyInput | CreditCardCreateManyInput[]
  }

  /**
   * CreditCard createManyAndReturn
   */
  export type CreditCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * The data used to create many CreditCards.
     */
    data: CreditCardCreateManyInput | CreditCardCreateManyInput[]
  }

  /**
   * CreditCard update
   */
  export type CreditCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * The data needed to update a CreditCard.
     */
    data: XOR<CreditCardUpdateInput, CreditCardUncheckedUpdateInput>
    /**
     * Choose, which CreditCard to update.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard updateMany
   */
  export type CreditCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditCards.
     */
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyInput>
    /**
     * Filter which CreditCards to update
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to update.
     */
    limit?: number
  }

  /**
   * CreditCard updateManyAndReturn
   */
  export type CreditCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * The data used to update CreditCards.
     */
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyInput>
    /**
     * Filter which CreditCards to update
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to update.
     */
    limit?: number
  }

  /**
   * CreditCard upsert
   */
  export type CreditCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * The filter to search for the CreditCard to update in case it exists.
     */
    where: CreditCardWhereUniqueInput
    /**
     * In case the CreditCard found by the `where` argument doesn't exist, create a new CreditCard with this data.
     */
    create: XOR<CreditCardCreateInput, CreditCardUncheckedCreateInput>
    /**
     * In case the CreditCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditCardUpdateInput, CreditCardUncheckedUpdateInput>
  }

  /**
   * CreditCard delete
   */
  export type CreditCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Filter which CreditCard to delete.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard deleteMany
   */
  export type CreditCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCards to delete
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to delete.
     */
    limit?: number
  }

  /**
   * CreditCard without action
   */
  export type CreditCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
  }


  /**
   * Model TaxContribution
   */

  export type AggregateTaxContribution = {
    _count: TaxContributionCountAggregateOutputType | null
    _avg: TaxContributionAvgAggregateOutputType | null
    _sum: TaxContributionSumAggregateOutputType | null
    _min: TaxContributionMinAggregateOutputType | null
    _max: TaxContributionMaxAggregateOutputType | null
  }

  export type TaxContributionAvgAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
    amountMXN: number | null
    deductibleAmount: number | null
    excessAmount: number | null
  }

  export type TaxContributionSumAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
    amountMXN: number | null
    deductibleAmount: number | null
    excessAmount: number | null
  }

  export type TaxContributionMinAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
    amountMXN: number | null
    deductibleAmount: number | null
    excessAmount: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type TaxContributionMaxAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
    amountMXN: number | null
    deductibleAmount: number | null
    excessAmount: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type TaxContributionCountAggregateOutputType = {
    id: number
    year: number
    month: number
    amountMXN: number
    deductibleAmount: number
    excessAmount: number
    notes: number
    createdAt: number
    _all: number
  }


  export type TaxContributionAvgAggregateInputType = {
    id?: true
    year?: true
    month?: true
    amountMXN?: true
    deductibleAmount?: true
    excessAmount?: true
  }

  export type TaxContributionSumAggregateInputType = {
    id?: true
    year?: true
    month?: true
    amountMXN?: true
    deductibleAmount?: true
    excessAmount?: true
  }

  export type TaxContributionMinAggregateInputType = {
    id?: true
    year?: true
    month?: true
    amountMXN?: true
    deductibleAmount?: true
    excessAmount?: true
    notes?: true
    createdAt?: true
  }

  export type TaxContributionMaxAggregateInputType = {
    id?: true
    year?: true
    month?: true
    amountMXN?: true
    deductibleAmount?: true
    excessAmount?: true
    notes?: true
    createdAt?: true
  }

  export type TaxContributionCountAggregateInputType = {
    id?: true
    year?: true
    month?: true
    amountMXN?: true
    deductibleAmount?: true
    excessAmount?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type TaxContributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxContribution to aggregate.
     */
    where?: TaxContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxContributions to fetch.
     */
    orderBy?: TaxContributionOrderByWithRelationInput | TaxContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxContributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxContributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaxContributions
    **/
    _count?: true | TaxContributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxContributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxContributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxContributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxContributionMaxAggregateInputType
  }

  export type GetTaxContributionAggregateType<T extends TaxContributionAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxContribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxContribution[P]>
      : GetScalarType<T[P], AggregateTaxContribution[P]>
  }




  export type TaxContributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxContributionWhereInput
    orderBy?: TaxContributionOrderByWithAggregationInput | TaxContributionOrderByWithAggregationInput[]
    by: TaxContributionScalarFieldEnum[] | TaxContributionScalarFieldEnum
    having?: TaxContributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxContributionCountAggregateInputType | true
    _avg?: TaxContributionAvgAggregateInputType
    _sum?: TaxContributionSumAggregateInputType
    _min?: TaxContributionMinAggregateInputType
    _max?: TaxContributionMaxAggregateInputType
  }

  export type TaxContributionGroupByOutputType = {
    id: number
    year: number
    month: number
    amountMXN: number
    deductibleAmount: number
    excessAmount: number
    notes: string | null
    createdAt: Date
    _count: TaxContributionCountAggregateOutputType | null
    _avg: TaxContributionAvgAggregateOutputType | null
    _sum: TaxContributionSumAggregateOutputType | null
    _min: TaxContributionMinAggregateOutputType | null
    _max: TaxContributionMaxAggregateOutputType | null
  }

  type GetTaxContributionGroupByPayload<T extends TaxContributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxContributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxContributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxContributionGroupByOutputType[P]>
            : GetScalarType<T[P], TaxContributionGroupByOutputType[P]>
        }
      >
    >


  export type TaxContributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    month?: boolean
    amountMXN?: boolean
    deductibleAmount?: boolean
    excessAmount?: boolean
    notes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["taxContribution"]>

  export type TaxContributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    month?: boolean
    amountMXN?: boolean
    deductibleAmount?: boolean
    excessAmount?: boolean
    notes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["taxContribution"]>

  export type TaxContributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    month?: boolean
    amountMXN?: boolean
    deductibleAmount?: boolean
    excessAmount?: boolean
    notes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["taxContribution"]>

  export type TaxContributionSelectScalar = {
    id?: boolean
    year?: boolean
    month?: boolean
    amountMXN?: boolean
    deductibleAmount?: boolean
    excessAmount?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type TaxContributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "month" | "amountMXN" | "deductibleAmount" | "excessAmount" | "notes" | "createdAt", ExtArgs["result"]["taxContribution"]>

  export type $TaxContributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaxContribution"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: number
      month: number
      amountMXN: number
      deductibleAmount: number
      excessAmount: number
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["taxContribution"]>
    composites: {}
  }

  type TaxContributionGetPayload<S extends boolean | null | undefined | TaxContributionDefaultArgs> = $Result.GetResult<Prisma.$TaxContributionPayload, S>

  type TaxContributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxContributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxContributionCountAggregateInputType | true
    }

  export interface TaxContributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaxContribution'], meta: { name: 'TaxContribution' } }
    /**
     * Find zero or one TaxContribution that matches the filter.
     * @param {TaxContributionFindUniqueArgs} args - Arguments to find a TaxContribution
     * @example
     * // Get one TaxContribution
     * const taxContribution = await prisma.taxContribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxContributionFindUniqueArgs>(args: SelectSubset<T, TaxContributionFindUniqueArgs<ExtArgs>>): Prisma__TaxContributionClient<$Result.GetResult<Prisma.$TaxContributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaxContribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxContributionFindUniqueOrThrowArgs} args - Arguments to find a TaxContribution
     * @example
     * // Get one TaxContribution
     * const taxContribution = await prisma.taxContribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxContributionFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxContributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxContributionClient<$Result.GetResult<Prisma.$TaxContributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxContribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxContributionFindFirstArgs} args - Arguments to find a TaxContribution
     * @example
     * // Get one TaxContribution
     * const taxContribution = await prisma.taxContribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxContributionFindFirstArgs>(args?: SelectSubset<T, TaxContributionFindFirstArgs<ExtArgs>>): Prisma__TaxContributionClient<$Result.GetResult<Prisma.$TaxContributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxContribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxContributionFindFirstOrThrowArgs} args - Arguments to find a TaxContribution
     * @example
     * // Get one TaxContribution
     * const taxContribution = await prisma.taxContribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxContributionFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxContributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxContributionClient<$Result.GetResult<Prisma.$TaxContributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaxContributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxContributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxContributions
     * const taxContributions = await prisma.taxContribution.findMany()
     * 
     * // Get first 10 TaxContributions
     * const taxContributions = await prisma.taxContribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxContributionWithIdOnly = await prisma.taxContribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaxContributionFindManyArgs>(args?: SelectSubset<T, TaxContributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxContributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaxContribution.
     * @param {TaxContributionCreateArgs} args - Arguments to create a TaxContribution.
     * @example
     * // Create one TaxContribution
     * const TaxContribution = await prisma.taxContribution.create({
     *   data: {
     *     // ... data to create a TaxContribution
     *   }
     * })
     * 
     */
    create<T extends TaxContributionCreateArgs>(args: SelectSubset<T, TaxContributionCreateArgs<ExtArgs>>): Prisma__TaxContributionClient<$Result.GetResult<Prisma.$TaxContributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaxContributions.
     * @param {TaxContributionCreateManyArgs} args - Arguments to create many TaxContributions.
     * @example
     * // Create many TaxContributions
     * const taxContribution = await prisma.taxContribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxContributionCreateManyArgs>(args?: SelectSubset<T, TaxContributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaxContributions and returns the data saved in the database.
     * @param {TaxContributionCreateManyAndReturnArgs} args - Arguments to create many TaxContributions.
     * @example
     * // Create many TaxContributions
     * const taxContribution = await prisma.taxContribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaxContributions and only return the `id`
     * const taxContributionWithIdOnly = await prisma.taxContribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxContributionCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxContributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxContributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaxContribution.
     * @param {TaxContributionDeleteArgs} args - Arguments to delete one TaxContribution.
     * @example
     * // Delete one TaxContribution
     * const TaxContribution = await prisma.taxContribution.delete({
     *   where: {
     *     // ... filter to delete one TaxContribution
     *   }
     * })
     * 
     */
    delete<T extends TaxContributionDeleteArgs>(args: SelectSubset<T, TaxContributionDeleteArgs<ExtArgs>>): Prisma__TaxContributionClient<$Result.GetResult<Prisma.$TaxContributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaxContribution.
     * @param {TaxContributionUpdateArgs} args - Arguments to update one TaxContribution.
     * @example
     * // Update one TaxContribution
     * const taxContribution = await prisma.taxContribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxContributionUpdateArgs>(args: SelectSubset<T, TaxContributionUpdateArgs<ExtArgs>>): Prisma__TaxContributionClient<$Result.GetResult<Prisma.$TaxContributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaxContributions.
     * @param {TaxContributionDeleteManyArgs} args - Arguments to filter TaxContributions to delete.
     * @example
     * // Delete a few TaxContributions
     * const { count } = await prisma.taxContribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxContributionDeleteManyArgs>(args?: SelectSubset<T, TaxContributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxContributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxContributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxContributions
     * const taxContribution = await prisma.taxContribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxContributionUpdateManyArgs>(args: SelectSubset<T, TaxContributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxContributions and returns the data updated in the database.
     * @param {TaxContributionUpdateManyAndReturnArgs} args - Arguments to update many TaxContributions.
     * @example
     * // Update many TaxContributions
     * const taxContribution = await prisma.taxContribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaxContributions and only return the `id`
     * const taxContributionWithIdOnly = await prisma.taxContribution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaxContributionUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxContributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxContributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaxContribution.
     * @param {TaxContributionUpsertArgs} args - Arguments to update or create a TaxContribution.
     * @example
     * // Update or create a TaxContribution
     * const taxContribution = await prisma.taxContribution.upsert({
     *   create: {
     *     // ... data to create a TaxContribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxContribution we want to update
     *   }
     * })
     */
    upsert<T extends TaxContributionUpsertArgs>(args: SelectSubset<T, TaxContributionUpsertArgs<ExtArgs>>): Prisma__TaxContributionClient<$Result.GetResult<Prisma.$TaxContributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaxContributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxContributionCountArgs} args - Arguments to filter TaxContributions to count.
     * @example
     * // Count the number of TaxContributions
     * const count = await prisma.taxContribution.count({
     *   where: {
     *     // ... the filter for the TaxContributions we want to count
     *   }
     * })
    **/
    count<T extends TaxContributionCountArgs>(
      args?: Subset<T, TaxContributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxContributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaxContribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxContributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaxContributionAggregateArgs>(args: Subset<T, TaxContributionAggregateArgs>): Prisma.PrismaPromise<GetTaxContributionAggregateType<T>>

    /**
     * Group by TaxContribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxContributionGroupByArgs} args - Group by arguments.
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
      T extends TaxContributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxContributionGroupByArgs['orderBy'] }
        : { orderBy?: TaxContributionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaxContributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxContributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaxContribution model
   */
  readonly fields: TaxContributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaxContribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxContributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TaxContribution model
   */
  interface TaxContributionFieldRefs {
    readonly id: FieldRef<"TaxContribution", 'Int'>
    readonly year: FieldRef<"TaxContribution", 'Int'>
    readonly month: FieldRef<"TaxContribution", 'Int'>
    readonly amountMXN: FieldRef<"TaxContribution", 'Float'>
    readonly deductibleAmount: FieldRef<"TaxContribution", 'Float'>
    readonly excessAmount: FieldRef<"TaxContribution", 'Float'>
    readonly notes: FieldRef<"TaxContribution", 'String'>
    readonly createdAt: FieldRef<"TaxContribution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaxContribution findUnique
   */
  export type TaxContributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxContribution
     */
    select?: TaxContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxContribution
     */
    omit?: TaxContributionOmit<ExtArgs> | null
    /**
     * Filter, which TaxContribution to fetch.
     */
    where: TaxContributionWhereUniqueInput
  }

  /**
   * TaxContribution findUniqueOrThrow
   */
  export type TaxContributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxContribution
     */
    select?: TaxContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxContribution
     */
    omit?: TaxContributionOmit<ExtArgs> | null
    /**
     * Filter, which TaxContribution to fetch.
     */
    where: TaxContributionWhereUniqueInput
  }

  /**
   * TaxContribution findFirst
   */
  export type TaxContributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxContribution
     */
    select?: TaxContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxContribution
     */
    omit?: TaxContributionOmit<ExtArgs> | null
    /**
     * Filter, which TaxContribution to fetch.
     */
    where?: TaxContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxContributions to fetch.
     */
    orderBy?: TaxContributionOrderByWithRelationInput | TaxContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxContributions.
     */
    cursor?: TaxContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxContributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxContributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxContributions.
     */
    distinct?: TaxContributionScalarFieldEnum | TaxContributionScalarFieldEnum[]
  }

  /**
   * TaxContribution findFirstOrThrow
   */
  export type TaxContributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxContribution
     */
    select?: TaxContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxContribution
     */
    omit?: TaxContributionOmit<ExtArgs> | null
    /**
     * Filter, which TaxContribution to fetch.
     */
    where?: TaxContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxContributions to fetch.
     */
    orderBy?: TaxContributionOrderByWithRelationInput | TaxContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxContributions.
     */
    cursor?: TaxContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxContributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxContributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxContributions.
     */
    distinct?: TaxContributionScalarFieldEnum | TaxContributionScalarFieldEnum[]
  }

  /**
   * TaxContribution findMany
   */
  export type TaxContributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxContribution
     */
    select?: TaxContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxContribution
     */
    omit?: TaxContributionOmit<ExtArgs> | null
    /**
     * Filter, which TaxContributions to fetch.
     */
    where?: TaxContributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxContributions to fetch.
     */
    orderBy?: TaxContributionOrderByWithRelationInput | TaxContributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaxContributions.
     */
    cursor?: TaxContributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxContributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxContributions.
     */
    skip?: number
    distinct?: TaxContributionScalarFieldEnum | TaxContributionScalarFieldEnum[]
  }

  /**
   * TaxContribution create
   */
  export type TaxContributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxContribution
     */
    select?: TaxContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxContribution
     */
    omit?: TaxContributionOmit<ExtArgs> | null
    /**
     * The data needed to create a TaxContribution.
     */
    data: XOR<TaxContributionCreateInput, TaxContributionUncheckedCreateInput>
  }

  /**
   * TaxContribution createMany
   */
  export type TaxContributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxContributions.
     */
    data: TaxContributionCreateManyInput | TaxContributionCreateManyInput[]
  }

  /**
   * TaxContribution createManyAndReturn
   */
  export type TaxContributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxContribution
     */
    select?: TaxContributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxContribution
     */
    omit?: TaxContributionOmit<ExtArgs> | null
    /**
     * The data used to create many TaxContributions.
     */
    data: TaxContributionCreateManyInput | TaxContributionCreateManyInput[]
  }

  /**
   * TaxContribution update
   */
  export type TaxContributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxContribution
     */
    select?: TaxContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxContribution
     */
    omit?: TaxContributionOmit<ExtArgs> | null
    /**
     * The data needed to update a TaxContribution.
     */
    data: XOR<TaxContributionUpdateInput, TaxContributionUncheckedUpdateInput>
    /**
     * Choose, which TaxContribution to update.
     */
    where: TaxContributionWhereUniqueInput
  }

  /**
   * TaxContribution updateMany
   */
  export type TaxContributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxContributions.
     */
    data: XOR<TaxContributionUpdateManyMutationInput, TaxContributionUncheckedUpdateManyInput>
    /**
     * Filter which TaxContributions to update
     */
    where?: TaxContributionWhereInput
    /**
     * Limit how many TaxContributions to update.
     */
    limit?: number
  }

  /**
   * TaxContribution updateManyAndReturn
   */
  export type TaxContributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxContribution
     */
    select?: TaxContributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxContribution
     */
    omit?: TaxContributionOmit<ExtArgs> | null
    /**
     * The data used to update TaxContributions.
     */
    data: XOR<TaxContributionUpdateManyMutationInput, TaxContributionUncheckedUpdateManyInput>
    /**
     * Filter which TaxContributions to update
     */
    where?: TaxContributionWhereInput
    /**
     * Limit how many TaxContributions to update.
     */
    limit?: number
  }

  /**
   * TaxContribution upsert
   */
  export type TaxContributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxContribution
     */
    select?: TaxContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxContribution
     */
    omit?: TaxContributionOmit<ExtArgs> | null
    /**
     * The filter to search for the TaxContribution to update in case it exists.
     */
    where: TaxContributionWhereUniqueInput
    /**
     * In case the TaxContribution found by the `where` argument doesn't exist, create a new TaxContribution with this data.
     */
    create: XOR<TaxContributionCreateInput, TaxContributionUncheckedCreateInput>
    /**
     * In case the TaxContribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxContributionUpdateInput, TaxContributionUncheckedUpdateInput>
  }

  /**
   * TaxContribution delete
   */
  export type TaxContributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxContribution
     */
    select?: TaxContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxContribution
     */
    omit?: TaxContributionOmit<ExtArgs> | null
    /**
     * Filter which TaxContribution to delete.
     */
    where: TaxContributionWhereUniqueInput
  }

  /**
   * TaxContribution deleteMany
   */
  export type TaxContributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxContributions to delete
     */
    where?: TaxContributionWhereInput
    /**
     * Limit how many TaxContributions to delete.
     */
    limit?: number
  }

  /**
   * TaxContribution without action
   */
  export type TaxContributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxContribution
     */
    select?: TaxContributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxContribution
     */
    omit?: TaxContributionOmit<ExtArgs> | null
  }


  /**
   * Model TaxConfig
   */

  export type AggregateTaxConfig = {
    _count: TaxConfigCountAggregateOutputType | null
    _avg: TaxConfigAvgAggregateOutputType | null
    _sum: TaxConfigSumAggregateOutputType | null
    _min: TaxConfigMinAggregateOutputType | null
    _max: TaxConfigMaxAggregateOutputType | null
  }

  export type TaxConfigAvgAggregateOutputType = {
    id: number | null
    year: number | null
    annualGrossIncome: number | null
    annualTaxableIncome: number | null
    marginalTaxRate: number | null
    umaAnnualValue: number | null
    maxDeduction: number | null
  }

  export type TaxConfigSumAggregateOutputType = {
    id: number | null
    year: number | null
    annualGrossIncome: number | null
    annualTaxableIncome: number | null
    marginalTaxRate: number | null
    umaAnnualValue: number | null
    maxDeduction: number | null
  }

  export type TaxConfigMinAggregateOutputType = {
    id: number | null
    year: number | null
    annualGrossIncome: number | null
    annualTaxableIncome: number | null
    marginalTaxRate: number | null
    umaAnnualValue: number | null
    maxDeduction: number | null
  }

  export type TaxConfigMaxAggregateOutputType = {
    id: number | null
    year: number | null
    annualGrossIncome: number | null
    annualTaxableIncome: number | null
    marginalTaxRate: number | null
    umaAnnualValue: number | null
    maxDeduction: number | null
  }

  export type TaxConfigCountAggregateOutputType = {
    id: number
    year: number
    annualGrossIncome: number
    annualTaxableIncome: number
    marginalTaxRate: number
    umaAnnualValue: number
    maxDeduction: number
    _all: number
  }


  export type TaxConfigAvgAggregateInputType = {
    id?: true
    year?: true
    annualGrossIncome?: true
    annualTaxableIncome?: true
    marginalTaxRate?: true
    umaAnnualValue?: true
    maxDeduction?: true
  }

  export type TaxConfigSumAggregateInputType = {
    id?: true
    year?: true
    annualGrossIncome?: true
    annualTaxableIncome?: true
    marginalTaxRate?: true
    umaAnnualValue?: true
    maxDeduction?: true
  }

  export type TaxConfigMinAggregateInputType = {
    id?: true
    year?: true
    annualGrossIncome?: true
    annualTaxableIncome?: true
    marginalTaxRate?: true
    umaAnnualValue?: true
    maxDeduction?: true
  }

  export type TaxConfigMaxAggregateInputType = {
    id?: true
    year?: true
    annualGrossIncome?: true
    annualTaxableIncome?: true
    marginalTaxRate?: true
    umaAnnualValue?: true
    maxDeduction?: true
  }

  export type TaxConfigCountAggregateInputType = {
    id?: true
    year?: true
    annualGrossIncome?: true
    annualTaxableIncome?: true
    marginalTaxRate?: true
    umaAnnualValue?: true
    maxDeduction?: true
    _all?: true
  }

  export type TaxConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxConfig to aggregate.
     */
    where?: TaxConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxConfigs to fetch.
     */
    orderBy?: TaxConfigOrderByWithRelationInput | TaxConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaxConfigs
    **/
    _count?: true | TaxConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxConfigMaxAggregateInputType
  }

  export type GetTaxConfigAggregateType<T extends TaxConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxConfig[P]>
      : GetScalarType<T[P], AggregateTaxConfig[P]>
  }




  export type TaxConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxConfigWhereInput
    orderBy?: TaxConfigOrderByWithAggregationInput | TaxConfigOrderByWithAggregationInput[]
    by: TaxConfigScalarFieldEnum[] | TaxConfigScalarFieldEnum
    having?: TaxConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxConfigCountAggregateInputType | true
    _avg?: TaxConfigAvgAggregateInputType
    _sum?: TaxConfigSumAggregateInputType
    _min?: TaxConfigMinAggregateInputType
    _max?: TaxConfigMaxAggregateInputType
  }

  export type TaxConfigGroupByOutputType = {
    id: number
    year: number
    annualGrossIncome: number
    annualTaxableIncome: number
    marginalTaxRate: number
    umaAnnualValue: number
    maxDeduction: number
    _count: TaxConfigCountAggregateOutputType | null
    _avg: TaxConfigAvgAggregateOutputType | null
    _sum: TaxConfigSumAggregateOutputType | null
    _min: TaxConfigMinAggregateOutputType | null
    _max: TaxConfigMaxAggregateOutputType | null
  }

  type GetTaxConfigGroupByPayload<T extends TaxConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxConfigGroupByOutputType[P]>
            : GetScalarType<T[P], TaxConfigGroupByOutputType[P]>
        }
      >
    >


  export type TaxConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    annualGrossIncome?: boolean
    annualTaxableIncome?: boolean
    marginalTaxRate?: boolean
    umaAnnualValue?: boolean
    maxDeduction?: boolean
  }, ExtArgs["result"]["taxConfig"]>

  export type TaxConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    annualGrossIncome?: boolean
    annualTaxableIncome?: boolean
    marginalTaxRate?: boolean
    umaAnnualValue?: boolean
    maxDeduction?: boolean
  }, ExtArgs["result"]["taxConfig"]>

  export type TaxConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    annualGrossIncome?: boolean
    annualTaxableIncome?: boolean
    marginalTaxRate?: boolean
    umaAnnualValue?: boolean
    maxDeduction?: boolean
  }, ExtArgs["result"]["taxConfig"]>

  export type TaxConfigSelectScalar = {
    id?: boolean
    year?: boolean
    annualGrossIncome?: boolean
    annualTaxableIncome?: boolean
    marginalTaxRate?: boolean
    umaAnnualValue?: boolean
    maxDeduction?: boolean
  }

  export type TaxConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "annualGrossIncome" | "annualTaxableIncome" | "marginalTaxRate" | "umaAnnualValue" | "maxDeduction", ExtArgs["result"]["taxConfig"]>

  export type $TaxConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaxConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: number
      annualGrossIncome: number
      annualTaxableIncome: number
      marginalTaxRate: number
      umaAnnualValue: number
      maxDeduction: number
    }, ExtArgs["result"]["taxConfig"]>
    composites: {}
  }

  type TaxConfigGetPayload<S extends boolean | null | undefined | TaxConfigDefaultArgs> = $Result.GetResult<Prisma.$TaxConfigPayload, S>

  type TaxConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxConfigCountAggregateInputType | true
    }

  export interface TaxConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaxConfig'], meta: { name: 'TaxConfig' } }
    /**
     * Find zero or one TaxConfig that matches the filter.
     * @param {TaxConfigFindUniqueArgs} args - Arguments to find a TaxConfig
     * @example
     * // Get one TaxConfig
     * const taxConfig = await prisma.taxConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxConfigFindUniqueArgs>(args: SelectSubset<T, TaxConfigFindUniqueArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaxConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxConfigFindUniqueOrThrowArgs} args - Arguments to find a TaxConfig
     * @example
     * // Get one TaxConfig
     * const taxConfig = await prisma.taxConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigFindFirstArgs} args - Arguments to find a TaxConfig
     * @example
     * // Get one TaxConfig
     * const taxConfig = await prisma.taxConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxConfigFindFirstArgs>(args?: SelectSubset<T, TaxConfigFindFirstArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaxConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigFindFirstOrThrowArgs} args - Arguments to find a TaxConfig
     * @example
     * // Get one TaxConfig
     * const taxConfig = await prisma.taxConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaxConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaxConfigs
     * const taxConfigs = await prisma.taxConfig.findMany()
     * 
     * // Get first 10 TaxConfigs
     * const taxConfigs = await prisma.taxConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxConfigWithIdOnly = await prisma.taxConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaxConfigFindManyArgs>(args?: SelectSubset<T, TaxConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaxConfig.
     * @param {TaxConfigCreateArgs} args - Arguments to create a TaxConfig.
     * @example
     * // Create one TaxConfig
     * const TaxConfig = await prisma.taxConfig.create({
     *   data: {
     *     // ... data to create a TaxConfig
     *   }
     * })
     * 
     */
    create<T extends TaxConfigCreateArgs>(args: SelectSubset<T, TaxConfigCreateArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaxConfigs.
     * @param {TaxConfigCreateManyArgs} args - Arguments to create many TaxConfigs.
     * @example
     * // Create many TaxConfigs
     * const taxConfig = await prisma.taxConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxConfigCreateManyArgs>(args?: SelectSubset<T, TaxConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaxConfigs and returns the data saved in the database.
     * @param {TaxConfigCreateManyAndReturnArgs} args - Arguments to create many TaxConfigs.
     * @example
     * // Create many TaxConfigs
     * const taxConfig = await prisma.taxConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaxConfigs and only return the `id`
     * const taxConfigWithIdOnly = await prisma.taxConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaxConfig.
     * @param {TaxConfigDeleteArgs} args - Arguments to delete one TaxConfig.
     * @example
     * // Delete one TaxConfig
     * const TaxConfig = await prisma.taxConfig.delete({
     *   where: {
     *     // ... filter to delete one TaxConfig
     *   }
     * })
     * 
     */
    delete<T extends TaxConfigDeleteArgs>(args: SelectSubset<T, TaxConfigDeleteArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaxConfig.
     * @param {TaxConfigUpdateArgs} args - Arguments to update one TaxConfig.
     * @example
     * // Update one TaxConfig
     * const taxConfig = await prisma.taxConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxConfigUpdateArgs>(args: SelectSubset<T, TaxConfigUpdateArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaxConfigs.
     * @param {TaxConfigDeleteManyArgs} args - Arguments to filter TaxConfigs to delete.
     * @example
     * // Delete a few TaxConfigs
     * const { count } = await prisma.taxConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxConfigDeleteManyArgs>(args?: SelectSubset<T, TaxConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaxConfigs
     * const taxConfig = await prisma.taxConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxConfigUpdateManyArgs>(args: SelectSubset<T, TaxConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaxConfigs and returns the data updated in the database.
     * @param {TaxConfigUpdateManyAndReturnArgs} args - Arguments to update many TaxConfigs.
     * @example
     * // Update many TaxConfigs
     * const taxConfig = await prisma.taxConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaxConfigs and only return the `id`
     * const taxConfigWithIdOnly = await prisma.taxConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaxConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaxConfig.
     * @param {TaxConfigUpsertArgs} args - Arguments to update or create a TaxConfig.
     * @example
     * // Update or create a TaxConfig
     * const taxConfig = await prisma.taxConfig.upsert({
     *   create: {
     *     // ... data to create a TaxConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaxConfig we want to update
     *   }
     * })
     */
    upsert<T extends TaxConfigUpsertArgs>(args: SelectSubset<T, TaxConfigUpsertArgs<ExtArgs>>): Prisma__TaxConfigClient<$Result.GetResult<Prisma.$TaxConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaxConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigCountArgs} args - Arguments to filter TaxConfigs to count.
     * @example
     * // Count the number of TaxConfigs
     * const count = await prisma.taxConfig.count({
     *   where: {
     *     // ... the filter for the TaxConfigs we want to count
     *   }
     * })
    **/
    count<T extends TaxConfigCountArgs>(
      args?: Subset<T, TaxConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaxConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaxConfigAggregateArgs>(args: Subset<T, TaxConfigAggregateArgs>): Prisma.PrismaPromise<GetTaxConfigAggregateType<T>>

    /**
     * Group by TaxConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxConfigGroupByArgs} args - Group by arguments.
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
      T extends TaxConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxConfigGroupByArgs['orderBy'] }
        : { orderBy?: TaxConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaxConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaxConfig model
   */
  readonly fields: TaxConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaxConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TaxConfig model
   */
  interface TaxConfigFieldRefs {
    readonly id: FieldRef<"TaxConfig", 'Int'>
    readonly year: FieldRef<"TaxConfig", 'Int'>
    readonly annualGrossIncome: FieldRef<"TaxConfig", 'Float'>
    readonly annualTaxableIncome: FieldRef<"TaxConfig", 'Float'>
    readonly marginalTaxRate: FieldRef<"TaxConfig", 'Float'>
    readonly umaAnnualValue: FieldRef<"TaxConfig", 'Float'>
    readonly maxDeduction: FieldRef<"TaxConfig", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TaxConfig findUnique
   */
  export type TaxConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxConfig
     */
    omit?: TaxConfigOmit<ExtArgs> | null
    /**
     * Filter, which TaxConfig to fetch.
     */
    where: TaxConfigWhereUniqueInput
  }

  /**
   * TaxConfig findUniqueOrThrow
   */
  export type TaxConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxConfig
     */
    omit?: TaxConfigOmit<ExtArgs> | null
    /**
     * Filter, which TaxConfig to fetch.
     */
    where: TaxConfigWhereUniqueInput
  }

  /**
   * TaxConfig findFirst
   */
  export type TaxConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxConfig
     */
    omit?: TaxConfigOmit<ExtArgs> | null
    /**
     * Filter, which TaxConfig to fetch.
     */
    where?: TaxConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxConfigs to fetch.
     */
    orderBy?: TaxConfigOrderByWithRelationInput | TaxConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxConfigs.
     */
    cursor?: TaxConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxConfigs.
     */
    distinct?: TaxConfigScalarFieldEnum | TaxConfigScalarFieldEnum[]
  }

  /**
   * TaxConfig findFirstOrThrow
   */
  export type TaxConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxConfig
     */
    omit?: TaxConfigOmit<ExtArgs> | null
    /**
     * Filter, which TaxConfig to fetch.
     */
    where?: TaxConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxConfigs to fetch.
     */
    orderBy?: TaxConfigOrderByWithRelationInput | TaxConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaxConfigs.
     */
    cursor?: TaxConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaxConfigs.
     */
    distinct?: TaxConfigScalarFieldEnum | TaxConfigScalarFieldEnum[]
  }

  /**
   * TaxConfig findMany
   */
  export type TaxConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxConfig
     */
    omit?: TaxConfigOmit<ExtArgs> | null
    /**
     * Filter, which TaxConfigs to fetch.
     */
    where?: TaxConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaxConfigs to fetch.
     */
    orderBy?: TaxConfigOrderByWithRelationInput | TaxConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaxConfigs.
     */
    cursor?: TaxConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaxConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaxConfigs.
     */
    skip?: number
    distinct?: TaxConfigScalarFieldEnum | TaxConfigScalarFieldEnum[]
  }

  /**
   * TaxConfig create
   */
  export type TaxConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxConfig
     */
    omit?: TaxConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a TaxConfig.
     */
    data: XOR<TaxConfigCreateInput, TaxConfigUncheckedCreateInput>
  }

  /**
   * TaxConfig createMany
   */
  export type TaxConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaxConfigs.
     */
    data: TaxConfigCreateManyInput | TaxConfigCreateManyInput[]
  }

  /**
   * TaxConfig createManyAndReturn
   */
  export type TaxConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxConfig
     */
    omit?: TaxConfigOmit<ExtArgs> | null
    /**
     * The data used to create many TaxConfigs.
     */
    data: TaxConfigCreateManyInput | TaxConfigCreateManyInput[]
  }

  /**
   * TaxConfig update
   */
  export type TaxConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxConfig
     */
    omit?: TaxConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a TaxConfig.
     */
    data: XOR<TaxConfigUpdateInput, TaxConfigUncheckedUpdateInput>
    /**
     * Choose, which TaxConfig to update.
     */
    where: TaxConfigWhereUniqueInput
  }

  /**
   * TaxConfig updateMany
   */
  export type TaxConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaxConfigs.
     */
    data: XOR<TaxConfigUpdateManyMutationInput, TaxConfigUncheckedUpdateManyInput>
    /**
     * Filter which TaxConfigs to update
     */
    where?: TaxConfigWhereInput
    /**
     * Limit how many TaxConfigs to update.
     */
    limit?: number
  }

  /**
   * TaxConfig updateManyAndReturn
   */
  export type TaxConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaxConfig
     */
    omit?: TaxConfigOmit<ExtArgs> | null
    /**
     * The data used to update TaxConfigs.
     */
    data: XOR<TaxConfigUpdateManyMutationInput, TaxConfigUncheckedUpdateManyInput>
    /**
     * Filter which TaxConfigs to update
     */
    where?: TaxConfigWhereInput
    /**
     * Limit how many TaxConfigs to update.
     */
    limit?: number
  }

  /**
   * TaxConfig upsert
   */
  export type TaxConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxConfig
     */
    omit?: TaxConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the TaxConfig to update in case it exists.
     */
    where: TaxConfigWhereUniqueInput
    /**
     * In case the TaxConfig found by the `where` argument doesn't exist, create a new TaxConfig with this data.
     */
    create: XOR<TaxConfigCreateInput, TaxConfigUncheckedCreateInput>
    /**
     * In case the TaxConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxConfigUpdateInput, TaxConfigUncheckedUpdateInput>
  }

  /**
   * TaxConfig delete
   */
  export type TaxConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxConfig
     */
    omit?: TaxConfigOmit<ExtArgs> | null
    /**
     * Filter which TaxConfig to delete.
     */
    where: TaxConfigWhereUniqueInput
  }

  /**
   * TaxConfig deleteMany
   */
  export type TaxConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaxConfigs to delete
     */
    where?: TaxConfigWhereInput
    /**
     * Limit how many TaxConfigs to delete.
     */
    limit?: number
  }

  /**
   * TaxConfig without action
   */
  export type TaxConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxConfig
     */
    select?: TaxConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaxConfig
     */
    omit?: TaxConfigOmit<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    id: number | null
    birthYear: number | null
    retirementAge: number | null
    monthlyContribution: number | null
    commissionRate: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    id: number | null
    birthYear: number | null
    retirementAge: number | null
    monthlyContribution: number | null
    commissionRate: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: number | null
    birthYear: number | null
    retirementAge: number | null
    monthlyContribution: number | null
    taxRegime: string | null
    hasW8Ben: boolean | null
    commissionRate: number | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: number | null
    birthYear: number | null
    retirementAge: number | null
    monthlyContribution: number | null
    taxRegime: string | null
    hasW8Ben: boolean | null
    commissionRate: number | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    birthYear: number
    retirementAge: number
    monthlyContribution: number
    taxRegime: number
    hasW8Ben: number
    commissionRate: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    id?: true
    birthYear?: true
    retirementAge?: true
    monthlyContribution?: true
    commissionRate?: true
  }

  export type UserProfileSumAggregateInputType = {
    id?: true
    birthYear?: true
    retirementAge?: true
    monthlyContribution?: true
    commissionRate?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    birthYear?: true
    retirementAge?: true
    monthlyContribution?: true
    taxRegime?: true
    hasW8Ben?: true
    commissionRate?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    birthYear?: true
    retirementAge?: true
    monthlyContribution?: true
    taxRegime?: true
    hasW8Ben?: true
    commissionRate?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    birthYear?: true
    retirementAge?: true
    monthlyContribution?: true
    taxRegime?: true
    hasW8Ben?: true
    commissionRate?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: number
    birthYear: number
    retirementAge: number
    monthlyContribution: number
    taxRegime: string
    hasW8Ben: boolean | null
    commissionRate: number
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    birthYear?: boolean
    retirementAge?: boolean
    monthlyContribution?: boolean
    taxRegime?: boolean
    hasW8Ben?: boolean
    commissionRate?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    birthYear?: boolean
    retirementAge?: boolean
    monthlyContribution?: boolean
    taxRegime?: boolean
    hasW8Ben?: boolean
    commissionRate?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    birthYear?: boolean
    retirementAge?: boolean
    monthlyContribution?: boolean
    taxRegime?: boolean
    hasW8Ben?: boolean
    commissionRate?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    birthYear?: boolean
    retirementAge?: boolean
    monthlyContribution?: boolean
    taxRegime?: boolean
    hasW8Ben?: boolean
    commissionRate?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "birthYear" | "retirementAge" | "monthlyContribution" | "taxRegime" | "hasW8Ben" | "commissionRate", ExtArgs["result"]["userProfile"]>

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      birthYear: number
      retirementAge: number
      monthlyContribution: number
      taxRegime: string
      hasW8Ben: boolean | null
      commissionRate: number
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'Int'>
    readonly birthYear: FieldRef<"UserProfile", 'Int'>
    readonly retirementAge: FieldRef<"UserProfile", 'Int'>
    readonly monthlyContribution: FieldRef<"UserProfile", 'Float'>
    readonly taxRegime: FieldRef<"UserProfile", 'String'>
    readonly hasW8Ben: FieldRef<"UserProfile", 'Boolean'>
    readonly commissionRate: FieldRef<"UserProfile", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data?: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PortfolioPositionScalarFieldEnum: {
    id: 'id',
    ticker: 'ticker',
    titles: 'titles',
    avgPriceMXN: 'avgPriceMXN',
    currentPriceMXN: 'currentPriceMXN',
    isLegacy: 'isLegacy',
    targetPct: 'targetPct',
    currency: 'currency',
    description: 'description',
    updatedAt: 'updatedAt'
  };

  export type PortfolioPositionScalarFieldEnum = (typeof PortfolioPositionScalarFieldEnum)[keyof typeof PortfolioPositionScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    positionId: 'positionId',
    type: 'type',
    titles: 'titles',
    pricePerTitle: 'pricePerTitle',
    commissionMXN: 'commissionMXN',
    totalCostMXN: 'totalCostMXN',
    isDeductible: 'isDeductible',
    executedAt: 'executedAt',
    notes: 'notes'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const CreditCardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    creditLimit: 'creditLimit',
    currentBalance: 'currentBalance',
    cutDay: 'cutDay',
    paymentDay: 'paymentDay',
    isSecured: 'isSecured',
    annualRate: 'annualRate',
    notes: 'notes',
    updatedAt: 'updatedAt'
  };

  export type CreditCardScalarFieldEnum = (typeof CreditCardScalarFieldEnum)[keyof typeof CreditCardScalarFieldEnum]


  export const TaxContributionScalarFieldEnum: {
    id: 'id',
    year: 'year',
    month: 'month',
    amountMXN: 'amountMXN',
    deductibleAmount: 'deductibleAmount',
    excessAmount: 'excessAmount',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type TaxContributionScalarFieldEnum = (typeof TaxContributionScalarFieldEnum)[keyof typeof TaxContributionScalarFieldEnum]


  export const TaxConfigScalarFieldEnum: {
    id: 'id',
    year: 'year',
    annualGrossIncome: 'annualGrossIncome',
    annualTaxableIncome: 'annualTaxableIncome',
    marginalTaxRate: 'marginalTaxRate',
    umaAnnualValue: 'umaAnnualValue',
    maxDeduction: 'maxDeduction'
  };

  export type TaxConfigScalarFieldEnum = (typeof TaxConfigScalarFieldEnum)[keyof typeof TaxConfigScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    birthYear: 'birthYear',
    retirementAge: 'retirementAge',
    monthlyContribution: 'monthlyContribution',
    taxRegime: 'taxRegime',
    hasW8Ben: 'hasW8Ben',
    commissionRate: 'commissionRate'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type PortfolioPositionWhereInput = {
    AND?: PortfolioPositionWhereInput | PortfolioPositionWhereInput[]
    OR?: PortfolioPositionWhereInput[]
    NOT?: PortfolioPositionWhereInput | PortfolioPositionWhereInput[]
    id?: IntFilter<"PortfolioPosition"> | number
    ticker?: StringFilter<"PortfolioPosition"> | string
    titles?: IntFilter<"PortfolioPosition"> | number
    avgPriceMXN?: FloatFilter<"PortfolioPosition"> | number
    currentPriceMXN?: FloatFilter<"PortfolioPosition"> | number
    isLegacy?: BoolFilter<"PortfolioPosition"> | boolean
    targetPct?: FloatFilter<"PortfolioPosition"> | number
    currency?: StringFilter<"PortfolioPosition"> | string
    description?: StringNullableFilter<"PortfolioPosition"> | string | null
    updatedAt?: DateTimeFilter<"PortfolioPosition"> | Date | string
    transactions?: TransactionListRelationFilter
  }

  export type PortfolioPositionOrderByWithRelationInput = {
    id?: SortOrder
    ticker?: SortOrder
    titles?: SortOrder
    avgPriceMXN?: SortOrder
    currentPriceMXN?: SortOrder
    isLegacy?: SortOrder
    targetPct?: SortOrder
    currency?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type PortfolioPositionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ticker?: string
    AND?: PortfolioPositionWhereInput | PortfolioPositionWhereInput[]
    OR?: PortfolioPositionWhereInput[]
    NOT?: PortfolioPositionWhereInput | PortfolioPositionWhereInput[]
    titles?: IntFilter<"PortfolioPosition"> | number
    avgPriceMXN?: FloatFilter<"PortfolioPosition"> | number
    currentPriceMXN?: FloatFilter<"PortfolioPosition"> | number
    isLegacy?: BoolFilter<"PortfolioPosition"> | boolean
    targetPct?: FloatFilter<"PortfolioPosition"> | number
    currency?: StringFilter<"PortfolioPosition"> | string
    description?: StringNullableFilter<"PortfolioPosition"> | string | null
    updatedAt?: DateTimeFilter<"PortfolioPosition"> | Date | string
    transactions?: TransactionListRelationFilter
  }, "id" | "ticker">

  export type PortfolioPositionOrderByWithAggregationInput = {
    id?: SortOrder
    ticker?: SortOrder
    titles?: SortOrder
    avgPriceMXN?: SortOrder
    currentPriceMXN?: SortOrder
    isLegacy?: SortOrder
    targetPct?: SortOrder
    currency?: SortOrder
    description?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioPositionCountOrderByAggregateInput
    _avg?: PortfolioPositionAvgOrderByAggregateInput
    _max?: PortfolioPositionMaxOrderByAggregateInput
    _min?: PortfolioPositionMinOrderByAggregateInput
    _sum?: PortfolioPositionSumOrderByAggregateInput
  }

  export type PortfolioPositionScalarWhereWithAggregatesInput = {
    AND?: PortfolioPositionScalarWhereWithAggregatesInput | PortfolioPositionScalarWhereWithAggregatesInput[]
    OR?: PortfolioPositionScalarWhereWithAggregatesInput[]
    NOT?: PortfolioPositionScalarWhereWithAggregatesInput | PortfolioPositionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PortfolioPosition"> | number
    ticker?: StringWithAggregatesFilter<"PortfolioPosition"> | string
    titles?: IntWithAggregatesFilter<"PortfolioPosition"> | number
    avgPriceMXN?: FloatWithAggregatesFilter<"PortfolioPosition"> | number
    currentPriceMXN?: FloatWithAggregatesFilter<"PortfolioPosition"> | number
    isLegacy?: BoolWithAggregatesFilter<"PortfolioPosition"> | boolean
    targetPct?: FloatWithAggregatesFilter<"PortfolioPosition"> | number
    currency?: StringWithAggregatesFilter<"PortfolioPosition"> | string
    description?: StringNullableWithAggregatesFilter<"PortfolioPosition"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"PortfolioPosition"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    positionId?: IntFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    titles?: IntFilter<"Transaction"> | number
    pricePerTitle?: FloatFilter<"Transaction"> | number
    commissionMXN?: FloatFilter<"Transaction"> | number
    totalCostMXN?: FloatFilter<"Transaction"> | number
    isDeductible?: BoolFilter<"Transaction"> | boolean
    executedAt?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    position?: XOR<PortfolioPositionScalarRelationFilter, PortfolioPositionWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    positionId?: SortOrder
    type?: SortOrder
    titles?: SortOrder
    pricePerTitle?: SortOrder
    commissionMXN?: SortOrder
    totalCostMXN?: SortOrder
    isDeductible?: SortOrder
    executedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    position?: PortfolioPositionOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    positionId?: IntFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    titles?: IntFilter<"Transaction"> | number
    pricePerTitle?: FloatFilter<"Transaction"> | number
    commissionMXN?: FloatFilter<"Transaction"> | number
    totalCostMXN?: FloatFilter<"Transaction"> | number
    isDeductible?: BoolFilter<"Transaction"> | boolean
    executedAt?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
    position?: XOR<PortfolioPositionScalarRelationFilter, PortfolioPositionWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    positionId?: SortOrder
    type?: SortOrder
    titles?: SortOrder
    pricePerTitle?: SortOrder
    commissionMXN?: SortOrder
    totalCostMXN?: SortOrder
    isDeductible?: SortOrder
    executedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    positionId?: IntWithAggregatesFilter<"Transaction"> | number
    type?: StringWithAggregatesFilter<"Transaction"> | string
    titles?: IntWithAggregatesFilter<"Transaction"> | number
    pricePerTitle?: FloatWithAggregatesFilter<"Transaction"> | number
    commissionMXN?: FloatWithAggregatesFilter<"Transaction"> | number
    totalCostMXN?: FloatWithAggregatesFilter<"Transaction"> | number
    isDeductible?: BoolWithAggregatesFilter<"Transaction"> | boolean
    executedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
  }

  export type CreditCardWhereInput = {
    AND?: CreditCardWhereInput | CreditCardWhereInput[]
    OR?: CreditCardWhereInput[]
    NOT?: CreditCardWhereInput | CreditCardWhereInput[]
    id?: IntFilter<"CreditCard"> | number
    name?: StringFilter<"CreditCard"> | string
    creditLimit?: FloatFilter<"CreditCard"> | number
    currentBalance?: FloatFilter<"CreditCard"> | number
    cutDay?: IntFilter<"CreditCard"> | number
    paymentDay?: IntFilter<"CreditCard"> | number
    isSecured?: BoolFilter<"CreditCard"> | boolean
    annualRate?: FloatFilter<"CreditCard"> | number
    notes?: StringNullableFilter<"CreditCard"> | string | null
    updatedAt?: DateTimeFilter<"CreditCard"> | Date | string
  }

  export type CreditCardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    creditLimit?: SortOrder
    currentBalance?: SortOrder
    cutDay?: SortOrder
    paymentDay?: SortOrder
    isSecured?: SortOrder
    annualRate?: SortOrder
    notes?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CreditCardWhereInput | CreditCardWhereInput[]
    OR?: CreditCardWhereInput[]
    NOT?: CreditCardWhereInput | CreditCardWhereInput[]
    creditLimit?: FloatFilter<"CreditCard"> | number
    currentBalance?: FloatFilter<"CreditCard"> | number
    cutDay?: IntFilter<"CreditCard"> | number
    paymentDay?: IntFilter<"CreditCard"> | number
    isSecured?: BoolFilter<"CreditCard"> | boolean
    annualRate?: FloatFilter<"CreditCard"> | number
    notes?: StringNullableFilter<"CreditCard"> | string | null
    updatedAt?: DateTimeFilter<"CreditCard"> | Date | string
  }, "id" | "name">

  export type CreditCardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    creditLimit?: SortOrder
    currentBalance?: SortOrder
    cutDay?: SortOrder
    paymentDay?: SortOrder
    isSecured?: SortOrder
    annualRate?: SortOrder
    notes?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: CreditCardCountOrderByAggregateInput
    _avg?: CreditCardAvgOrderByAggregateInput
    _max?: CreditCardMaxOrderByAggregateInput
    _min?: CreditCardMinOrderByAggregateInput
    _sum?: CreditCardSumOrderByAggregateInput
  }

  export type CreditCardScalarWhereWithAggregatesInput = {
    AND?: CreditCardScalarWhereWithAggregatesInput | CreditCardScalarWhereWithAggregatesInput[]
    OR?: CreditCardScalarWhereWithAggregatesInput[]
    NOT?: CreditCardScalarWhereWithAggregatesInput | CreditCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CreditCard"> | number
    name?: StringWithAggregatesFilter<"CreditCard"> | string
    creditLimit?: FloatWithAggregatesFilter<"CreditCard"> | number
    currentBalance?: FloatWithAggregatesFilter<"CreditCard"> | number
    cutDay?: IntWithAggregatesFilter<"CreditCard"> | number
    paymentDay?: IntWithAggregatesFilter<"CreditCard"> | number
    isSecured?: BoolWithAggregatesFilter<"CreditCard"> | boolean
    annualRate?: FloatWithAggregatesFilter<"CreditCard"> | number
    notes?: StringNullableWithAggregatesFilter<"CreditCard"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"CreditCard"> | Date | string
  }

  export type TaxContributionWhereInput = {
    AND?: TaxContributionWhereInput | TaxContributionWhereInput[]
    OR?: TaxContributionWhereInput[]
    NOT?: TaxContributionWhereInput | TaxContributionWhereInput[]
    id?: IntFilter<"TaxContribution"> | number
    year?: IntFilter<"TaxContribution"> | number
    month?: IntFilter<"TaxContribution"> | number
    amountMXN?: FloatFilter<"TaxContribution"> | number
    deductibleAmount?: FloatFilter<"TaxContribution"> | number
    excessAmount?: FloatFilter<"TaxContribution"> | number
    notes?: StringNullableFilter<"TaxContribution"> | string | null
    createdAt?: DateTimeFilter<"TaxContribution"> | Date | string
  }

  export type TaxContributionOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    amountMXN?: SortOrder
    deductibleAmount?: SortOrder
    excessAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type TaxContributionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    year_month?: TaxContributionYearMonthCompoundUniqueInput
    AND?: TaxContributionWhereInput | TaxContributionWhereInput[]
    OR?: TaxContributionWhereInput[]
    NOT?: TaxContributionWhereInput | TaxContributionWhereInput[]
    year?: IntFilter<"TaxContribution"> | number
    month?: IntFilter<"TaxContribution"> | number
    amountMXN?: FloatFilter<"TaxContribution"> | number
    deductibleAmount?: FloatFilter<"TaxContribution"> | number
    excessAmount?: FloatFilter<"TaxContribution"> | number
    notes?: StringNullableFilter<"TaxContribution"> | string | null
    createdAt?: DateTimeFilter<"TaxContribution"> | Date | string
  }, "id" | "year_month">

  export type TaxContributionOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    amountMXN?: SortOrder
    deductibleAmount?: SortOrder
    excessAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TaxContributionCountOrderByAggregateInput
    _avg?: TaxContributionAvgOrderByAggregateInput
    _max?: TaxContributionMaxOrderByAggregateInput
    _min?: TaxContributionMinOrderByAggregateInput
    _sum?: TaxContributionSumOrderByAggregateInput
  }

  export type TaxContributionScalarWhereWithAggregatesInput = {
    AND?: TaxContributionScalarWhereWithAggregatesInput | TaxContributionScalarWhereWithAggregatesInput[]
    OR?: TaxContributionScalarWhereWithAggregatesInput[]
    NOT?: TaxContributionScalarWhereWithAggregatesInput | TaxContributionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaxContribution"> | number
    year?: IntWithAggregatesFilter<"TaxContribution"> | number
    month?: IntWithAggregatesFilter<"TaxContribution"> | number
    amountMXN?: FloatWithAggregatesFilter<"TaxContribution"> | number
    deductibleAmount?: FloatWithAggregatesFilter<"TaxContribution"> | number
    excessAmount?: FloatWithAggregatesFilter<"TaxContribution"> | number
    notes?: StringNullableWithAggregatesFilter<"TaxContribution"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TaxContribution"> | Date | string
  }

  export type TaxConfigWhereInput = {
    AND?: TaxConfigWhereInput | TaxConfigWhereInput[]
    OR?: TaxConfigWhereInput[]
    NOT?: TaxConfigWhereInput | TaxConfigWhereInput[]
    id?: IntFilter<"TaxConfig"> | number
    year?: IntFilter<"TaxConfig"> | number
    annualGrossIncome?: FloatFilter<"TaxConfig"> | number
    annualTaxableIncome?: FloatFilter<"TaxConfig"> | number
    marginalTaxRate?: FloatFilter<"TaxConfig"> | number
    umaAnnualValue?: FloatFilter<"TaxConfig"> | number
    maxDeduction?: FloatFilter<"TaxConfig"> | number
  }

  export type TaxConfigOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    annualGrossIncome?: SortOrder
    annualTaxableIncome?: SortOrder
    marginalTaxRate?: SortOrder
    umaAnnualValue?: SortOrder
    maxDeduction?: SortOrder
  }

  export type TaxConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    year?: number
    AND?: TaxConfigWhereInput | TaxConfigWhereInput[]
    OR?: TaxConfigWhereInput[]
    NOT?: TaxConfigWhereInput | TaxConfigWhereInput[]
    annualGrossIncome?: FloatFilter<"TaxConfig"> | number
    annualTaxableIncome?: FloatFilter<"TaxConfig"> | number
    marginalTaxRate?: FloatFilter<"TaxConfig"> | number
    umaAnnualValue?: FloatFilter<"TaxConfig"> | number
    maxDeduction?: FloatFilter<"TaxConfig"> | number
  }, "id" | "year">

  export type TaxConfigOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    annualGrossIncome?: SortOrder
    annualTaxableIncome?: SortOrder
    marginalTaxRate?: SortOrder
    umaAnnualValue?: SortOrder
    maxDeduction?: SortOrder
    _count?: TaxConfigCountOrderByAggregateInput
    _avg?: TaxConfigAvgOrderByAggregateInput
    _max?: TaxConfigMaxOrderByAggregateInput
    _min?: TaxConfigMinOrderByAggregateInput
    _sum?: TaxConfigSumOrderByAggregateInput
  }

  export type TaxConfigScalarWhereWithAggregatesInput = {
    AND?: TaxConfigScalarWhereWithAggregatesInput | TaxConfigScalarWhereWithAggregatesInput[]
    OR?: TaxConfigScalarWhereWithAggregatesInput[]
    NOT?: TaxConfigScalarWhereWithAggregatesInput | TaxConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaxConfig"> | number
    year?: IntWithAggregatesFilter<"TaxConfig"> | number
    annualGrossIncome?: FloatWithAggregatesFilter<"TaxConfig"> | number
    annualTaxableIncome?: FloatWithAggregatesFilter<"TaxConfig"> | number
    marginalTaxRate?: FloatWithAggregatesFilter<"TaxConfig"> | number
    umaAnnualValue?: FloatWithAggregatesFilter<"TaxConfig"> | number
    maxDeduction?: FloatWithAggregatesFilter<"TaxConfig"> | number
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: IntFilter<"UserProfile"> | number
    birthYear?: IntFilter<"UserProfile"> | number
    retirementAge?: IntFilter<"UserProfile"> | number
    monthlyContribution?: FloatFilter<"UserProfile"> | number
    taxRegime?: StringFilter<"UserProfile"> | string
    hasW8Ben?: BoolNullableFilter<"UserProfile"> | boolean | null
    commissionRate?: FloatFilter<"UserProfile"> | number
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    birthYear?: SortOrder
    retirementAge?: SortOrder
    monthlyContribution?: SortOrder
    taxRegime?: SortOrder
    hasW8Ben?: SortOrderInput | SortOrder
    commissionRate?: SortOrder
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    birthYear?: IntFilter<"UserProfile"> | number
    retirementAge?: IntFilter<"UserProfile"> | number
    monthlyContribution?: FloatFilter<"UserProfile"> | number
    taxRegime?: StringFilter<"UserProfile"> | string
    hasW8Ben?: BoolNullableFilter<"UserProfile"> | boolean | null
    commissionRate?: FloatFilter<"UserProfile"> | number
  }, "id">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    birthYear?: SortOrder
    retirementAge?: SortOrder
    monthlyContribution?: SortOrder
    taxRegime?: SortOrder
    hasW8Ben?: SortOrderInput | SortOrder
    commissionRate?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProfile"> | number
    birthYear?: IntWithAggregatesFilter<"UserProfile"> | number
    retirementAge?: IntWithAggregatesFilter<"UserProfile"> | number
    monthlyContribution?: FloatWithAggregatesFilter<"UserProfile"> | number
    taxRegime?: StringWithAggregatesFilter<"UserProfile"> | string
    hasW8Ben?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    commissionRate?: FloatWithAggregatesFilter<"UserProfile"> | number
  }

  export type PortfolioPositionCreateInput = {
    ticker: string
    titles: number
    avgPriceMXN: number
    currentPriceMXN: number
    isLegacy?: boolean
    targetPct?: number
    currency?: string
    description?: string | null
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutPositionInput
  }

  export type PortfolioPositionUncheckedCreateInput = {
    id?: number
    ticker: string
    titles: number
    avgPriceMXN: number
    currentPriceMXN: number
    isLegacy?: boolean
    targetPct?: number
    currency?: string
    description?: string | null
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PortfolioPositionUpdateInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    titles?: IntFieldUpdateOperationsInput | number
    avgPriceMXN?: FloatFieldUpdateOperationsInput | number
    currentPriceMXN?: FloatFieldUpdateOperationsInput | number
    isLegacy?: BoolFieldUpdateOperationsInput | boolean
    targetPct?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutPositionNestedInput
  }

  export type PortfolioPositionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    titles?: IntFieldUpdateOperationsInput | number
    avgPriceMXN?: FloatFieldUpdateOperationsInput | number
    currentPriceMXN?: FloatFieldUpdateOperationsInput | number
    isLegacy?: BoolFieldUpdateOperationsInput | boolean
    targetPct?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PortfolioPositionCreateManyInput = {
    id?: number
    ticker: string
    titles: number
    avgPriceMXN: number
    currentPriceMXN: number
    isLegacy?: boolean
    targetPct?: number
    currency?: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type PortfolioPositionUpdateManyMutationInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    titles?: IntFieldUpdateOperationsInput | number
    avgPriceMXN?: FloatFieldUpdateOperationsInput | number
    currentPriceMXN?: FloatFieldUpdateOperationsInput | number
    isLegacy?: BoolFieldUpdateOperationsInput | boolean
    targetPct?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioPositionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    titles?: IntFieldUpdateOperationsInput | number
    avgPriceMXN?: FloatFieldUpdateOperationsInput | number
    currentPriceMXN?: FloatFieldUpdateOperationsInput | number
    isLegacy?: BoolFieldUpdateOperationsInput | boolean
    targetPct?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    type: string
    titles: number
    pricePerTitle: number
    commissionMXN: number
    totalCostMXN: number
    isDeductible?: boolean
    executedAt?: Date | string
    notes?: string | null
    position: PortfolioPositionCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    positionId: number
    type: string
    titles: number
    pricePerTitle: number
    commissionMXN: number
    totalCostMXN: number
    isDeductible?: boolean
    executedAt?: Date | string
    notes?: string | null
  }

  export type TransactionUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    titles?: IntFieldUpdateOperationsInput | number
    pricePerTitle?: FloatFieldUpdateOperationsInput | number
    commissionMXN?: FloatFieldUpdateOperationsInput | number
    totalCostMXN?: FloatFieldUpdateOperationsInput | number
    isDeductible?: BoolFieldUpdateOperationsInput | boolean
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    position?: PortfolioPositionUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    positionId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    titles?: IntFieldUpdateOperationsInput | number
    pricePerTitle?: FloatFieldUpdateOperationsInput | number
    commissionMXN?: FloatFieldUpdateOperationsInput | number
    totalCostMXN?: FloatFieldUpdateOperationsInput | number
    isDeductible?: BoolFieldUpdateOperationsInput | boolean
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionCreateManyInput = {
    id?: number
    positionId: number
    type: string
    titles: number
    pricePerTitle: number
    commissionMXN: number
    totalCostMXN: number
    isDeductible?: boolean
    executedAt?: Date | string
    notes?: string | null
  }

  export type TransactionUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    titles?: IntFieldUpdateOperationsInput | number
    pricePerTitle?: FloatFieldUpdateOperationsInput | number
    commissionMXN?: FloatFieldUpdateOperationsInput | number
    totalCostMXN?: FloatFieldUpdateOperationsInput | number
    isDeductible?: BoolFieldUpdateOperationsInput | boolean
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    positionId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    titles?: IntFieldUpdateOperationsInput | number
    pricePerTitle?: FloatFieldUpdateOperationsInput | number
    commissionMXN?: FloatFieldUpdateOperationsInput | number
    totalCostMXN?: FloatFieldUpdateOperationsInput | number
    isDeductible?: BoolFieldUpdateOperationsInput | boolean
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditCardCreateInput = {
    name: string
    creditLimit: number
    currentBalance?: number
    cutDay?: number
    paymentDay?: number
    isSecured?: boolean
    annualRate?: number
    notes?: string | null
    updatedAt?: Date | string
  }

  export type CreditCardUncheckedCreateInput = {
    id?: number
    name: string
    creditLimit: number
    currentBalance?: number
    cutDay?: number
    paymentDay?: number
    isSecured?: boolean
    annualRate?: number
    notes?: string | null
    updatedAt?: Date | string
  }

  export type CreditCardUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    creditLimit?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
    cutDay?: IntFieldUpdateOperationsInput | number
    paymentDay?: IntFieldUpdateOperationsInput | number
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    annualRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creditLimit?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
    cutDay?: IntFieldUpdateOperationsInput | number
    paymentDay?: IntFieldUpdateOperationsInput | number
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    annualRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardCreateManyInput = {
    id?: number
    name: string
    creditLimit: number
    currentBalance?: number
    cutDay?: number
    paymentDay?: number
    isSecured?: boolean
    annualRate?: number
    notes?: string | null
    updatedAt?: Date | string
  }

  export type CreditCardUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    creditLimit?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
    cutDay?: IntFieldUpdateOperationsInput | number
    paymentDay?: IntFieldUpdateOperationsInput | number
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    annualRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creditLimit?: FloatFieldUpdateOperationsInput | number
    currentBalance?: FloatFieldUpdateOperationsInput | number
    cutDay?: IntFieldUpdateOperationsInput | number
    paymentDay?: IntFieldUpdateOperationsInput | number
    isSecured?: BoolFieldUpdateOperationsInput | boolean
    annualRate?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxContributionCreateInput = {
    year: number
    month: number
    amountMXN: number
    deductibleAmount: number
    excessAmount: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type TaxContributionUncheckedCreateInput = {
    id?: number
    year: number
    month: number
    amountMXN: number
    deductibleAmount: number
    excessAmount: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type TaxContributionUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    amountMXN?: FloatFieldUpdateOperationsInput | number
    deductibleAmount?: FloatFieldUpdateOperationsInput | number
    excessAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxContributionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    amountMXN?: FloatFieldUpdateOperationsInput | number
    deductibleAmount?: FloatFieldUpdateOperationsInput | number
    excessAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxContributionCreateManyInput = {
    id?: number
    year: number
    month: number
    amountMXN: number
    deductibleAmount: number
    excessAmount: number
    notes?: string | null
    createdAt?: Date | string
  }

  export type TaxContributionUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    amountMXN?: FloatFieldUpdateOperationsInput | number
    deductibleAmount?: FloatFieldUpdateOperationsInput | number
    excessAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxContributionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    amountMXN?: FloatFieldUpdateOperationsInput | number
    deductibleAmount?: FloatFieldUpdateOperationsInput | number
    excessAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxConfigCreateInput = {
    year: number
    annualGrossIncome: number
    annualTaxableIncome: number
    marginalTaxRate: number
    umaAnnualValue: number
    maxDeduction: number
  }

  export type TaxConfigUncheckedCreateInput = {
    id?: number
    year: number
    annualGrossIncome: number
    annualTaxableIncome: number
    marginalTaxRate: number
    umaAnnualValue: number
    maxDeduction: number
  }

  export type TaxConfigUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    annualGrossIncome?: FloatFieldUpdateOperationsInput | number
    annualTaxableIncome?: FloatFieldUpdateOperationsInput | number
    marginalTaxRate?: FloatFieldUpdateOperationsInput | number
    umaAnnualValue?: FloatFieldUpdateOperationsInput | number
    maxDeduction?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    annualGrossIncome?: FloatFieldUpdateOperationsInput | number
    annualTaxableIncome?: FloatFieldUpdateOperationsInput | number
    marginalTaxRate?: FloatFieldUpdateOperationsInput | number
    umaAnnualValue?: FloatFieldUpdateOperationsInput | number
    maxDeduction?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxConfigCreateManyInput = {
    id?: number
    year: number
    annualGrossIncome: number
    annualTaxableIncome: number
    marginalTaxRate: number
    umaAnnualValue: number
    maxDeduction: number
  }

  export type TaxConfigUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    annualGrossIncome?: FloatFieldUpdateOperationsInput | number
    annualTaxableIncome?: FloatFieldUpdateOperationsInput | number
    marginalTaxRate?: FloatFieldUpdateOperationsInput | number
    umaAnnualValue?: FloatFieldUpdateOperationsInput | number
    maxDeduction?: FloatFieldUpdateOperationsInput | number
  }

  export type TaxConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    annualGrossIncome?: FloatFieldUpdateOperationsInput | number
    annualTaxableIncome?: FloatFieldUpdateOperationsInput | number
    marginalTaxRate?: FloatFieldUpdateOperationsInput | number
    umaAnnualValue?: FloatFieldUpdateOperationsInput | number
    maxDeduction?: FloatFieldUpdateOperationsInput | number
  }

  export type UserProfileCreateInput = {
    birthYear?: number
    retirementAge?: number
    monthlyContribution?: number
    taxRegime?: string
    hasW8Ben?: boolean | null
    commissionRate?: number
  }

  export type UserProfileUncheckedCreateInput = {
    id?: number
    birthYear?: number
    retirementAge?: number
    monthlyContribution?: number
    taxRegime?: string
    hasW8Ben?: boolean | null
    commissionRate?: number
  }

  export type UserProfileUpdateInput = {
    birthYear?: IntFieldUpdateOperationsInput | number
    retirementAge?: IntFieldUpdateOperationsInput | number
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    taxRegime?: StringFieldUpdateOperationsInput | string
    hasW8Ben?: NullableBoolFieldUpdateOperationsInput | boolean | null
    commissionRate?: FloatFieldUpdateOperationsInput | number
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    retirementAge?: IntFieldUpdateOperationsInput | number
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    taxRegime?: StringFieldUpdateOperationsInput | string
    hasW8Ben?: NullableBoolFieldUpdateOperationsInput | boolean | null
    commissionRate?: FloatFieldUpdateOperationsInput | number
  }

  export type UserProfileCreateManyInput = {
    id?: number
    birthYear?: number
    retirementAge?: number
    monthlyContribution?: number
    taxRegime?: string
    hasW8Ben?: boolean | null
    commissionRate?: number
  }

  export type UserProfileUpdateManyMutationInput = {
    birthYear?: IntFieldUpdateOperationsInput | number
    retirementAge?: IntFieldUpdateOperationsInput | number
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    taxRegime?: StringFieldUpdateOperationsInput | string
    hasW8Ben?: NullableBoolFieldUpdateOperationsInput | boolean | null
    commissionRate?: FloatFieldUpdateOperationsInput | number
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    birthYear?: IntFieldUpdateOperationsInput | number
    retirementAge?: IntFieldUpdateOperationsInput | number
    monthlyContribution?: FloatFieldUpdateOperationsInput | number
    taxRegime?: StringFieldUpdateOperationsInput | string
    hasW8Ben?: NullableBoolFieldUpdateOperationsInput | boolean | null
    commissionRate?: FloatFieldUpdateOperationsInput | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioPositionCountOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    titles?: SortOrder
    avgPriceMXN?: SortOrder
    currentPriceMXN?: SortOrder
    isLegacy?: SortOrder
    targetPct?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioPositionAvgOrderByAggregateInput = {
    id?: SortOrder
    titles?: SortOrder
    avgPriceMXN?: SortOrder
    currentPriceMXN?: SortOrder
    targetPct?: SortOrder
  }

  export type PortfolioPositionMaxOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    titles?: SortOrder
    avgPriceMXN?: SortOrder
    currentPriceMXN?: SortOrder
    isLegacy?: SortOrder
    targetPct?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioPositionMinOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    titles?: SortOrder
    avgPriceMXN?: SortOrder
    currentPriceMXN?: SortOrder
    isLegacy?: SortOrder
    targetPct?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioPositionSumOrderByAggregateInput = {
    id?: SortOrder
    titles?: SortOrder
    avgPriceMXN?: SortOrder
    currentPriceMXN?: SortOrder
    targetPct?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PortfolioPositionScalarRelationFilter = {
    is?: PortfolioPositionWhereInput
    isNot?: PortfolioPositionWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    positionId?: SortOrder
    type?: SortOrder
    titles?: SortOrder
    pricePerTitle?: SortOrder
    commissionMXN?: SortOrder
    totalCostMXN?: SortOrder
    isDeductible?: SortOrder
    executedAt?: SortOrder
    notes?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    positionId?: SortOrder
    titles?: SortOrder
    pricePerTitle?: SortOrder
    commissionMXN?: SortOrder
    totalCostMXN?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    positionId?: SortOrder
    type?: SortOrder
    titles?: SortOrder
    pricePerTitle?: SortOrder
    commissionMXN?: SortOrder
    totalCostMXN?: SortOrder
    isDeductible?: SortOrder
    executedAt?: SortOrder
    notes?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    positionId?: SortOrder
    type?: SortOrder
    titles?: SortOrder
    pricePerTitle?: SortOrder
    commissionMXN?: SortOrder
    totalCostMXN?: SortOrder
    isDeductible?: SortOrder
    executedAt?: SortOrder
    notes?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    positionId?: SortOrder
    titles?: SortOrder
    pricePerTitle?: SortOrder
    commissionMXN?: SortOrder
    totalCostMXN?: SortOrder
  }

  export type CreditCardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creditLimit?: SortOrder
    currentBalance?: SortOrder
    cutDay?: SortOrder
    paymentDay?: SortOrder
    isSecured?: SortOrder
    annualRate?: SortOrder
    notes?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardAvgOrderByAggregateInput = {
    id?: SortOrder
    creditLimit?: SortOrder
    currentBalance?: SortOrder
    cutDay?: SortOrder
    paymentDay?: SortOrder
    annualRate?: SortOrder
  }

  export type CreditCardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creditLimit?: SortOrder
    currentBalance?: SortOrder
    cutDay?: SortOrder
    paymentDay?: SortOrder
    isSecured?: SortOrder
    annualRate?: SortOrder
    notes?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creditLimit?: SortOrder
    currentBalance?: SortOrder
    cutDay?: SortOrder
    paymentDay?: SortOrder
    isSecured?: SortOrder
    annualRate?: SortOrder
    notes?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardSumOrderByAggregateInput = {
    id?: SortOrder
    creditLimit?: SortOrder
    currentBalance?: SortOrder
    cutDay?: SortOrder
    paymentDay?: SortOrder
    annualRate?: SortOrder
  }

  export type TaxContributionYearMonthCompoundUniqueInput = {
    year: number
    month: number
  }

  export type TaxContributionCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    amountMXN?: SortOrder
    deductibleAmount?: SortOrder
    excessAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type TaxContributionAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    amountMXN?: SortOrder
    deductibleAmount?: SortOrder
    excessAmount?: SortOrder
  }

  export type TaxContributionMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    amountMXN?: SortOrder
    deductibleAmount?: SortOrder
    excessAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type TaxContributionMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    amountMXN?: SortOrder
    deductibleAmount?: SortOrder
    excessAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type TaxContributionSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    amountMXN?: SortOrder
    deductibleAmount?: SortOrder
    excessAmount?: SortOrder
  }

  export type TaxConfigCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    annualGrossIncome?: SortOrder
    annualTaxableIncome?: SortOrder
    marginalTaxRate?: SortOrder
    umaAnnualValue?: SortOrder
    maxDeduction?: SortOrder
  }

  export type TaxConfigAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    annualGrossIncome?: SortOrder
    annualTaxableIncome?: SortOrder
    marginalTaxRate?: SortOrder
    umaAnnualValue?: SortOrder
    maxDeduction?: SortOrder
  }

  export type TaxConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    annualGrossIncome?: SortOrder
    annualTaxableIncome?: SortOrder
    marginalTaxRate?: SortOrder
    umaAnnualValue?: SortOrder
    maxDeduction?: SortOrder
  }

  export type TaxConfigMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    annualGrossIncome?: SortOrder
    annualTaxableIncome?: SortOrder
    marginalTaxRate?: SortOrder
    umaAnnualValue?: SortOrder
    maxDeduction?: SortOrder
  }

  export type TaxConfigSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    annualGrossIncome?: SortOrder
    annualTaxableIncome?: SortOrder
    marginalTaxRate?: SortOrder
    umaAnnualValue?: SortOrder
    maxDeduction?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    birthYear?: SortOrder
    retirementAge?: SortOrder
    monthlyContribution?: SortOrder
    taxRegime?: SortOrder
    hasW8Ben?: SortOrder
    commissionRate?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    birthYear?: SortOrder
    retirementAge?: SortOrder
    monthlyContribution?: SortOrder
    commissionRate?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    birthYear?: SortOrder
    retirementAge?: SortOrder
    monthlyContribution?: SortOrder
    taxRegime?: SortOrder
    hasW8Ben?: SortOrder
    commissionRate?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    birthYear?: SortOrder
    retirementAge?: SortOrder
    monthlyContribution?: SortOrder
    taxRegime?: SortOrder
    hasW8Ben?: SortOrder
    commissionRate?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    id?: SortOrder
    birthYear?: SortOrder
    retirementAge?: SortOrder
    monthlyContribution?: SortOrder
    commissionRate?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type TransactionCreateNestedManyWithoutPositionInput = {
    create?: XOR<TransactionCreateWithoutPositionInput, TransactionUncheckedCreateWithoutPositionInput> | TransactionCreateWithoutPositionInput[] | TransactionUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPositionInput | TransactionCreateOrConnectWithoutPositionInput[]
    createMany?: TransactionCreateManyPositionInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<TransactionCreateWithoutPositionInput, TransactionUncheckedCreateWithoutPositionInput> | TransactionCreateWithoutPositionInput[] | TransactionUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPositionInput | TransactionCreateOrConnectWithoutPositionInput[]
    createMany?: TransactionCreateManyPositionInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransactionUpdateManyWithoutPositionNestedInput = {
    create?: XOR<TransactionCreateWithoutPositionInput, TransactionUncheckedCreateWithoutPositionInput> | TransactionCreateWithoutPositionInput[] | TransactionUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPositionInput | TransactionCreateOrConnectWithoutPositionInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPositionInput | TransactionUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: TransactionCreateManyPositionInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPositionInput | TransactionUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPositionInput | TransactionUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<TransactionCreateWithoutPositionInput, TransactionUncheckedCreateWithoutPositionInput> | TransactionCreateWithoutPositionInput[] | TransactionUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPositionInput | TransactionCreateOrConnectWithoutPositionInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPositionInput | TransactionUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: TransactionCreateManyPositionInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPositionInput | TransactionUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPositionInput | TransactionUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PortfolioPositionCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<PortfolioPositionCreateWithoutTransactionsInput, PortfolioPositionUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PortfolioPositionCreateOrConnectWithoutTransactionsInput
    connect?: PortfolioPositionWhereUniqueInput
  }

  export type PortfolioPositionUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<PortfolioPositionCreateWithoutTransactionsInput, PortfolioPositionUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PortfolioPositionCreateOrConnectWithoutTransactionsInput
    upsert?: PortfolioPositionUpsertWithoutTransactionsInput
    connect?: PortfolioPositionWhereUniqueInput
    update?: XOR<XOR<PortfolioPositionUpdateToOneWithWhereWithoutTransactionsInput, PortfolioPositionUpdateWithoutTransactionsInput>, PortfolioPositionUncheckedUpdateWithoutTransactionsInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type TransactionCreateWithoutPositionInput = {
    type: string
    titles: number
    pricePerTitle: number
    commissionMXN: number
    totalCostMXN: number
    isDeductible?: boolean
    executedAt?: Date | string
    notes?: string | null
  }

  export type TransactionUncheckedCreateWithoutPositionInput = {
    id?: number
    type: string
    titles: number
    pricePerTitle: number
    commissionMXN: number
    totalCostMXN: number
    isDeductible?: boolean
    executedAt?: Date | string
    notes?: string | null
  }

  export type TransactionCreateOrConnectWithoutPositionInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPositionInput, TransactionUncheckedCreateWithoutPositionInput>
  }

  export type TransactionCreateManyPositionInputEnvelope = {
    data: TransactionCreateManyPositionInput | TransactionCreateManyPositionInput[]
  }

  export type TransactionUpsertWithWhereUniqueWithoutPositionInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPositionInput, TransactionUncheckedUpdateWithoutPositionInput>
    create: XOR<TransactionCreateWithoutPositionInput, TransactionUncheckedCreateWithoutPositionInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPositionInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPositionInput, TransactionUncheckedUpdateWithoutPositionInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPositionInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutPositionInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    positionId?: IntFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    titles?: IntFilter<"Transaction"> | number
    pricePerTitle?: FloatFilter<"Transaction"> | number
    commissionMXN?: FloatFilter<"Transaction"> | number
    totalCostMXN?: FloatFilter<"Transaction"> | number
    isDeductible?: BoolFilter<"Transaction"> | boolean
    executedAt?: DateTimeFilter<"Transaction"> | Date | string
    notes?: StringNullableFilter<"Transaction"> | string | null
  }

  export type PortfolioPositionCreateWithoutTransactionsInput = {
    ticker: string
    titles: number
    avgPriceMXN: number
    currentPriceMXN: number
    isLegacy?: boolean
    targetPct?: number
    currency?: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type PortfolioPositionUncheckedCreateWithoutTransactionsInput = {
    id?: number
    ticker: string
    titles: number
    avgPriceMXN: number
    currentPriceMXN: number
    isLegacy?: boolean
    targetPct?: number
    currency?: string
    description?: string | null
    updatedAt?: Date | string
  }

  export type PortfolioPositionCreateOrConnectWithoutTransactionsInput = {
    where: PortfolioPositionWhereUniqueInput
    create: XOR<PortfolioPositionCreateWithoutTransactionsInput, PortfolioPositionUncheckedCreateWithoutTransactionsInput>
  }

  export type PortfolioPositionUpsertWithoutTransactionsInput = {
    update: XOR<PortfolioPositionUpdateWithoutTransactionsInput, PortfolioPositionUncheckedUpdateWithoutTransactionsInput>
    create: XOR<PortfolioPositionCreateWithoutTransactionsInput, PortfolioPositionUncheckedCreateWithoutTransactionsInput>
    where?: PortfolioPositionWhereInput
  }

  export type PortfolioPositionUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: PortfolioPositionWhereInput
    data: XOR<PortfolioPositionUpdateWithoutTransactionsInput, PortfolioPositionUncheckedUpdateWithoutTransactionsInput>
  }

  export type PortfolioPositionUpdateWithoutTransactionsInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    titles?: IntFieldUpdateOperationsInput | number
    avgPriceMXN?: FloatFieldUpdateOperationsInput | number
    currentPriceMXN?: FloatFieldUpdateOperationsInput | number
    isLegacy?: BoolFieldUpdateOperationsInput | boolean
    targetPct?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioPositionUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticker?: StringFieldUpdateOperationsInput | string
    titles?: IntFieldUpdateOperationsInput | number
    avgPriceMXN?: FloatFieldUpdateOperationsInput | number
    currentPriceMXN?: FloatFieldUpdateOperationsInput | number
    isLegacy?: BoolFieldUpdateOperationsInput | boolean
    targetPct?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyPositionInput = {
    id?: number
    type: string
    titles: number
    pricePerTitle: number
    commissionMXN: number
    totalCostMXN: number
    isDeductible?: boolean
    executedAt?: Date | string
    notes?: string | null
  }

  export type TransactionUpdateWithoutPositionInput = {
    type?: StringFieldUpdateOperationsInput | string
    titles?: IntFieldUpdateOperationsInput | number
    pricePerTitle?: FloatFieldUpdateOperationsInput | number
    commissionMXN?: FloatFieldUpdateOperationsInput | number
    totalCostMXN?: FloatFieldUpdateOperationsInput | number
    isDeductible?: BoolFieldUpdateOperationsInput | boolean
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateWithoutPositionInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    titles?: IntFieldUpdateOperationsInput | number
    pricePerTitle?: FloatFieldUpdateOperationsInput | number
    commissionMXN?: FloatFieldUpdateOperationsInput | number
    totalCostMXN?: FloatFieldUpdateOperationsInput | number
    isDeductible?: BoolFieldUpdateOperationsInput | boolean
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutPositionInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    titles?: IntFieldUpdateOperationsInput | number
    pricePerTitle?: FloatFieldUpdateOperationsInput | number
    commissionMXN?: FloatFieldUpdateOperationsInput | number
    totalCostMXN?: FloatFieldUpdateOperationsInput | number
    isDeductible?: BoolFieldUpdateOperationsInput | boolean
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }



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