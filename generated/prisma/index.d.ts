
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
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model Step
 * 
 */
export type Step = $Result.DefaultSelection<Prisma.$StepPayload>
/**
 * Model Aliment
 * 
 */
export type Aliment = $Result.DefaultSelection<Prisma.$AlimentPayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model Ustensil
 * 
 */
export type Ustensil = $Result.DefaultSelection<Prisma.$UstensilPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MediaType: {
  image: 'image',
  video: 'video'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]


export const Unit: {
  g: 'g',
  kg: 'kg',
  l: 'l',
  cl: 'cl',
  ml: 'ml',
  tsp: 'tsp',
  tbsp: 'tbsp',
  cup: 'cup',
  pinch: 'pinch',
  slice: 'slice',
  piece: 'piece',
  bunch: 'bunch',
  sprig: 'sprig',
  leaf: 'leaf'
};

export type Unit = (typeof Unit)[keyof typeof Unit]

}

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

export type Unit = $Enums.Unit

export const Unit: typeof $Enums.Unit

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Recipes
 * const recipes = await prisma.recipe.findMany()
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
   * // Fetch zero or more Recipes
   * const recipes = await prisma.recipe.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.step`: Exposes CRUD operations for the **Step** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.step.findMany()
    * ```
    */
  get step(): Prisma.StepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aliment`: Exposes CRUD operations for the **Aliment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aliments
    * const aliments = await prisma.aliment.findMany()
    * ```
    */
  get aliment(): Prisma.AlimentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ustensil`: Exposes CRUD operations for the **Ustensil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ustensils
    * const ustensils = await prisma.ustensil.findMany()
    * ```
    */
  get ustensil(): Prisma.UstensilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Recipe: 'Recipe',
    Step: 'Step',
    Aliment: 'Aliment',
    Ingredient: 'Ingredient',
    Ustensil: 'Ustensil',
    Media: 'Media'
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
      modelProps: "recipe" | "step" | "aliment" | "ingredient" | "ustensil" | "media"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      Step: {
        payload: Prisma.$StepPayload<ExtArgs>
        fields: Prisma.StepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findFirst: {
            args: Prisma.StepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findMany: {
            args: Prisma.StepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          create: {
            args: Prisma.StepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          createMany: {
            args: Prisma.StepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          delete: {
            args: Prisma.StepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          update: {
            args: Prisma.StepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          deleteMany: {
            args: Prisma.StepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          upsert: {
            args: Prisma.StepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          aggregate: {
            args: Prisma.StepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStep>
          }
          groupBy: {
            args: Prisma.StepGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepCountArgs<ExtArgs>
            result: $Utils.Optional<StepCountAggregateOutputType> | number
          }
        }
      }
      Aliment: {
        payload: Prisma.$AlimentPayload<ExtArgs>
        fields: Prisma.AlimentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlimentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlimentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentPayload>
          }
          findFirst: {
            args: Prisma.AlimentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlimentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentPayload>
          }
          findMany: {
            args: Prisma.AlimentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentPayload>[]
          }
          create: {
            args: Prisma.AlimentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentPayload>
          }
          createMany: {
            args: Prisma.AlimentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlimentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentPayload>[]
          }
          delete: {
            args: Prisma.AlimentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentPayload>
          }
          update: {
            args: Prisma.AlimentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentPayload>
          }
          deleteMany: {
            args: Prisma.AlimentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlimentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlimentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentPayload>[]
          }
          upsert: {
            args: Prisma.AlimentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentPayload>
          }
          aggregate: {
            args: Prisma.AlimentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAliment>
          }
          groupBy: {
            args: Prisma.AlimentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlimentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlimentCountArgs<ExtArgs>
            result: $Utils.Optional<AlimentCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      Ustensil: {
        payload: Prisma.$UstensilPayload<ExtArgs>
        fields: Prisma.UstensilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UstensilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UstensilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>
          }
          findFirst: {
            args: Prisma.UstensilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UstensilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>
          }
          findMany: {
            args: Prisma.UstensilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>[]
          }
          create: {
            args: Prisma.UstensilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>
          }
          createMany: {
            args: Prisma.UstensilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UstensilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>[]
          }
          delete: {
            args: Prisma.UstensilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>
          }
          update: {
            args: Prisma.UstensilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>
          }
          deleteMany: {
            args: Prisma.UstensilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UstensilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UstensilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>[]
          }
          upsert: {
            args: Prisma.UstensilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>
          }
          aggregate: {
            args: Prisma.UstensilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUstensil>
          }
          groupBy: {
            args: Prisma.UstensilGroupByArgs<ExtArgs>
            result: $Utils.Optional<UstensilGroupByOutputType>[]
          }
          count: {
            args: Prisma.UstensilCountArgs<ExtArgs>
            result: $Utils.Optional<UstensilCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
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
    recipe?: RecipeOmit
    step?: StepOmit
    aliment?: AlimentOmit
    ingredient?: IngredientOmit
    ustensil?: UstensilOmit
    media?: MediaOmit
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
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    medias: number
    steps: number
    ingredients: number
    ustensils: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medias?: boolean | RecipeCountOutputTypeCountMediasArgs
    steps?: boolean | RecipeCountOutputTypeCountStepsArgs
    ingredients?: boolean | RecipeCountOutputTypeCountIngredientsArgs
    ustensils?: boolean | RecipeCountOutputTypeCountUstensilsArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountMediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountUstensilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UstensilWhereInput
  }


  /**
   * Count Type StepCountOutputType
   */

  export type StepCountOutputType = {
    medias: number
    aliments: number
    ustensils: number
  }

  export type StepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medias?: boolean | StepCountOutputTypeCountMediasArgs
    aliments?: boolean | StepCountOutputTypeCountAlimentsArgs
    ustensils?: boolean | StepCountOutputTypeCountUstensilsArgs
  }

  // Custom InputTypes
  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepCountOutputType
     */
    select?: StepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountMediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountAlimentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlimentWhereInput
  }

  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountUstensilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UstensilWhereInput
  }


  /**
   * Count Type AlimentCountOutputType
   */

  export type AlimentCountOutputType = {
    steps: number
    ingredients: number
  }

  export type AlimentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | AlimentCountOutputTypeCountStepsArgs
    ingredients?: boolean | AlimentCountOutputTypeCountIngredientsArgs
  }

  // Custom InputTypes
  /**
   * AlimentCountOutputType without action
   */
  export type AlimentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlimentCountOutputType
     */
    select?: AlimentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlimentCountOutputType without action
   */
  export type AlimentCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }

  /**
   * AlimentCountOutputType without action
   */
  export type AlimentCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
  }


  /**
   * Count Type UstensilCountOutputType
   */

  export type UstensilCountOutputType = {
    recipes: number
    steps: number
  }

  export type UstensilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | UstensilCountOutputTypeCountRecipesArgs
    steps?: boolean | UstensilCountOutputTypeCountStepsArgs
  }

  // Custom InputTypes
  /**
   * UstensilCountOutputType without action
   */
  export type UstensilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UstensilCountOutputType
     */
    select?: UstensilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UstensilCountOutputType without action
   */
  export type UstensilCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
  }

  /**
   * UstensilCountOutputType without action
   */
  export type UstensilCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RecipeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: string
    name: string
    description: string
    created_at: Date
    updated_at: Date
    _count: RecipeCountAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    medias?: boolean | Recipe$mediasArgs<ExtArgs>
    steps?: boolean | Recipe$stepsArgs<ExtArgs>
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    ustensils?: boolean | Recipe$ustensilsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medias?: boolean | Recipe$mediasArgs<ExtArgs>
    steps?: boolean | Recipe$stepsArgs<ExtArgs>
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    ustensils?: boolean | Recipe$ustensilsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      medias: Prisma.$MediaPayload<ExtArgs>[]
      steps: Prisma.$StepPayload<ExtArgs>[]
      ingredients: Prisma.$IngredientPayload<ExtArgs>[]
      ustensils: Prisma.$UstensilPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
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
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medias<T extends Recipe$mediasArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$mediasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    steps<T extends Recipe$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingredients<T extends Recipe$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ustensils<T extends Recipe$ustensilsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$ustensilsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'String'>
    readonly name: FieldRef<"Recipe", 'String'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly created_at: FieldRef<"Recipe", 'DateTime'>
    readonly updated_at: FieldRef<"Recipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.medias
   */
  export type Recipe$mediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Recipe.steps
   */
  export type Recipe$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Recipe.ingredients
   */
  export type Recipe$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    cursor?: IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Recipe.ustensils
   */
  export type Recipe$ustensilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    where?: UstensilWhereInput
    orderBy?: UstensilOrderByWithRelationInput | UstensilOrderByWithRelationInput[]
    cursor?: UstensilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UstensilScalarFieldEnum | UstensilScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model Step
   */

  export type AggregateStep = {
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  export type StepAvgAggregateOutputType = {
    order: number | null
  }

  export type StepSumAggregateOutputType = {
    order: number | null
  }

  export type StepMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    order: number | null
    recipe_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StepMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    order: number | null
    recipe_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StepCountAggregateOutputType = {
    id: number
    name: number
    description: number
    order: number
    recipe_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StepAvgAggregateInputType = {
    order?: true
  }

  export type StepSumAggregateInputType = {
    order?: true
  }

  export type StepMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    recipe_id?: true
    created_at?: true
    updated_at?: true
  }

  export type StepMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    recipe_id?: true
    created_at?: true
    updated_at?: true
  }

  export type StepCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    recipe_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Step to aggregate.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Steps
    **/
    _count?: true | StepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepMaxAggregateInputType
  }

  export type GetStepAggregateType<T extends StepAggregateArgs> = {
        [P in keyof T & keyof AggregateStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStep[P]>
      : GetScalarType<T[P], AggregateStep[P]>
  }




  export type StepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
    orderBy?: StepOrderByWithAggregationInput | StepOrderByWithAggregationInput[]
    by: StepScalarFieldEnum[] | StepScalarFieldEnum
    having?: StepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepCountAggregateInputType | true
    _avg?: StepAvgAggregateInputType
    _sum?: StepSumAggregateInputType
    _min?: StepMinAggregateInputType
    _max?: StepMaxAggregateInputType
  }

  export type StepGroupByOutputType = {
    id: string
    name: string
    description: string
    order: number
    recipe_id: string
    created_at: Date
    updated_at: Date
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  type GetStepGroupByPayload<T extends StepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepGroupByOutputType[P]>
            : GetScalarType<T[P], StepGroupByOutputType[P]>
        }
      >
    >


  export type StepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    recipe_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    medias?: boolean | Step$mediasArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    aliments?: boolean | Step$alimentsArgs<ExtArgs>
    ustensils?: boolean | Step$ustensilsArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    recipe_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    recipe_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    recipe_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type StepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "order" | "recipe_id" | "created_at" | "updated_at", ExtArgs["result"]["step"]>
  export type StepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medias?: boolean | Step$mediasArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    aliments?: boolean | Step$alimentsArgs<ExtArgs>
    ustensils?: boolean | Step$ustensilsArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type StepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $StepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Step"
    objects: {
      medias: Prisma.$MediaPayload<ExtArgs>[]
      recipe: Prisma.$RecipePayload<ExtArgs>
      aliments: Prisma.$AlimentPayload<ExtArgs>[]
      ustensils: Prisma.$UstensilPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      order: number
      recipe_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["step"]>
    composites: {}
  }

  type StepGetPayload<S extends boolean | null | undefined | StepDefaultArgs> = $Result.GetResult<Prisma.$StepPayload, S>

  type StepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepCountAggregateInputType | true
    }

  export interface StepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Step'], meta: { name: 'Step' } }
    /**
     * Find zero or one Step that matches the filter.
     * @param {StepFindUniqueArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepFindUniqueArgs>(args: SelectSubset<T, StepFindUniqueArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Step that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepFindUniqueOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepFindUniqueOrThrowArgs>(args: SelectSubset<T, StepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepFindFirstArgs>(args?: SelectSubset<T, StepFindFirstArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepFindFirstOrThrowArgs>(args?: SelectSubset<T, StepFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.step.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.step.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepWithIdOnly = await prisma.step.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StepFindManyArgs>(args?: SelectSubset<T, StepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Step.
     * @param {StepCreateArgs} args - Arguments to create a Step.
     * @example
     * // Create one Step
     * const Step = await prisma.step.create({
     *   data: {
     *     // ... data to create a Step
     *   }
     * })
     * 
     */
    create<T extends StepCreateArgs>(args: SelectSubset<T, StepCreateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Steps.
     * @param {StepCreateManyArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepCreateManyArgs>(args?: SelectSubset<T, StepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Steps and returns the data saved in the database.
     * @param {StepCreateManyAndReturnArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepCreateManyAndReturnArgs>(args?: SelectSubset<T, StepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Step.
     * @param {StepDeleteArgs} args - Arguments to delete one Step.
     * @example
     * // Delete one Step
     * const Step = await prisma.step.delete({
     *   where: {
     *     // ... filter to delete one Step
     *   }
     * })
     * 
     */
    delete<T extends StepDeleteArgs>(args: SelectSubset<T, StepDeleteArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Step.
     * @param {StepUpdateArgs} args - Arguments to update one Step.
     * @example
     * // Update one Step
     * const step = await prisma.step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepUpdateArgs>(args: SelectSubset<T, StepUpdateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Steps.
     * @param {StepDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepDeleteManyArgs>(args?: SelectSubset<T, StepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepUpdateManyArgs>(args: SelectSubset<T, StepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps and returns the data updated in the database.
     * @param {StepUpdateManyAndReturnArgs} args - Arguments to update many Steps.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.updateManyAndReturn({
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
    updateManyAndReturn<T extends StepUpdateManyAndReturnArgs>(args: SelectSubset<T, StepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Step.
     * @param {StepUpsertArgs} args - Arguments to update or create a Step.
     * @example
     * // Update or create a Step
     * const step = await prisma.step.upsert({
     *   create: {
     *     // ... data to create a Step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Step we want to update
     *   }
     * })
     */
    upsert<T extends StepUpsertArgs>(args: SelectSubset<T, StepUpsertArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.step.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends StepCountArgs>(
      args?: Subset<T, StepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StepAggregateArgs>(args: Subset<T, StepAggregateArgs>): Prisma.PrismaPromise<GetStepAggregateType<T>>

    /**
     * Group by Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepGroupByArgs} args - Group by arguments.
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
      T extends StepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepGroupByArgs['orderBy'] }
        : { orderBy?: StepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Step model
   */
  readonly fields: StepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Step.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medias<T extends Step$mediasArgs<ExtArgs> = {}>(args?: Subset<T, Step$mediasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aliments<T extends Step$alimentsArgs<ExtArgs> = {}>(args?: Subset<T, Step$alimentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlimentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ustensils<T extends Step$ustensilsArgs<ExtArgs> = {}>(args?: Subset<T, Step$ustensilsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Step model
   */
  interface StepFieldRefs {
    readonly id: FieldRef<"Step", 'String'>
    readonly name: FieldRef<"Step", 'String'>
    readonly description: FieldRef<"Step", 'String'>
    readonly order: FieldRef<"Step", 'Int'>
    readonly recipe_id: FieldRef<"Step", 'String'>
    readonly created_at: FieldRef<"Step", 'DateTime'>
    readonly updated_at: FieldRef<"Step", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Step findUnique
   */
  export type StepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findUniqueOrThrow
   */
  export type StepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findFirst
   */
  export type StepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findFirstOrThrow
   */
  export type StepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findMany
   */
  export type StepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step create
   */
  export type StepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to create a Step.
     */
    data: XOR<StepCreateInput, StepUncheckedCreateInput>
  }

  /**
   * Step createMany
   */
  export type StepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Step createManyAndReturn
   */
  export type StepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step update
   */
  export type StepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to update a Step.
     */
    data: XOR<StepUpdateInput, StepUncheckedUpdateInput>
    /**
     * Choose, which Step to update.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step updateMany
   */
  export type StepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
  }

  /**
   * Step updateManyAndReturn
   */
  export type StepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step upsert
   */
  export type StepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The filter to search for the Step to update in case it exists.
     */
    where: StepWhereUniqueInput
    /**
     * In case the Step found by the `where` argument doesn't exist, create a new Step with this data.
     */
    create: XOR<StepCreateInput, StepUncheckedCreateInput>
    /**
     * In case the Step was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepUpdateInput, StepUncheckedUpdateInput>
  }

  /**
   * Step delete
   */
  export type StepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter which Step to delete.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step deleteMany
   */
  export type StepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to delete
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to delete.
     */
    limit?: number
  }

  /**
   * Step.medias
   */
  export type Step$mediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Step.aliments
   */
  export type Step$alimentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aliment
     */
    select?: AlimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aliment
     */
    omit?: AlimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentInclude<ExtArgs> | null
    where?: AlimentWhereInput
    orderBy?: AlimentOrderByWithRelationInput | AlimentOrderByWithRelationInput[]
    cursor?: AlimentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlimentScalarFieldEnum | AlimentScalarFieldEnum[]
  }

  /**
   * Step.ustensils
   */
  export type Step$ustensilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    where?: UstensilWhereInput
    orderBy?: UstensilOrderByWithRelationInput | UstensilOrderByWithRelationInput[]
    cursor?: UstensilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UstensilScalarFieldEnum | UstensilScalarFieldEnum[]
  }

  /**
   * Step without action
   */
  export type StepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
  }


  /**
   * Model Aliment
   */

  export type AggregateAliment = {
    _count: AlimentCountAggregateOutputType | null
    _min: AlimentMinAggregateOutputType | null
    _max: AlimentMaxAggregateOutputType | null
  }

  export type AlimentMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AlimentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AlimentCountAggregateOutputType = {
    id: number
    name: number
    image: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AlimentMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    created_at?: true
    updated_at?: true
  }

  export type AlimentMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    created_at?: true
    updated_at?: true
  }

  export type AlimentCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AlimentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aliment to aggregate.
     */
    where?: AlimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aliments to fetch.
     */
    orderBy?: AlimentOrderByWithRelationInput | AlimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aliments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aliments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aliments
    **/
    _count?: true | AlimentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlimentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlimentMaxAggregateInputType
  }

  export type GetAlimentAggregateType<T extends AlimentAggregateArgs> = {
        [P in keyof T & keyof AggregateAliment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAliment[P]>
      : GetScalarType<T[P], AggregateAliment[P]>
  }




  export type AlimentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlimentWhereInput
    orderBy?: AlimentOrderByWithAggregationInput | AlimentOrderByWithAggregationInput[]
    by: AlimentScalarFieldEnum[] | AlimentScalarFieldEnum
    having?: AlimentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlimentCountAggregateInputType | true
    _min?: AlimentMinAggregateInputType
    _max?: AlimentMaxAggregateInputType
  }

  export type AlimentGroupByOutputType = {
    id: string
    name: string
    image: string
    created_at: Date
    updated_at: Date
    _count: AlimentCountAggregateOutputType | null
    _min: AlimentMinAggregateOutputType | null
    _max: AlimentMaxAggregateOutputType | null
  }

  type GetAlimentGroupByPayload<T extends AlimentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlimentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlimentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlimentGroupByOutputType[P]>
            : GetScalarType<T[P], AlimentGroupByOutputType[P]>
        }
      >
    >


  export type AlimentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
    steps?: boolean | Aliment$stepsArgs<ExtArgs>
    ingredients?: boolean | Aliment$ingredientsArgs<ExtArgs>
    _count?: boolean | AlimentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aliment"]>

  export type AlimentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["aliment"]>

  export type AlimentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["aliment"]>

  export type AlimentSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AlimentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "created_at" | "updated_at", ExtArgs["result"]["aliment"]>
  export type AlimentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | Aliment$stepsArgs<ExtArgs>
    ingredients?: boolean | Aliment$ingredientsArgs<ExtArgs>
    _count?: boolean | AlimentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlimentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlimentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlimentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aliment"
    objects: {
      steps: Prisma.$StepPayload<ExtArgs>[]
      ingredients: Prisma.$IngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["aliment"]>
    composites: {}
  }

  type AlimentGetPayload<S extends boolean | null | undefined | AlimentDefaultArgs> = $Result.GetResult<Prisma.$AlimentPayload, S>

  type AlimentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlimentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlimentCountAggregateInputType | true
    }

  export interface AlimentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aliment'], meta: { name: 'Aliment' } }
    /**
     * Find zero or one Aliment that matches the filter.
     * @param {AlimentFindUniqueArgs} args - Arguments to find a Aliment
     * @example
     * // Get one Aliment
     * const aliment = await prisma.aliment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlimentFindUniqueArgs>(args: SelectSubset<T, AlimentFindUniqueArgs<ExtArgs>>): Prisma__AlimentClient<$Result.GetResult<Prisma.$AlimentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aliment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlimentFindUniqueOrThrowArgs} args - Arguments to find a Aliment
     * @example
     * // Get one Aliment
     * const aliment = await prisma.aliment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlimentFindUniqueOrThrowArgs>(args: SelectSubset<T, AlimentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlimentClient<$Result.GetResult<Prisma.$AlimentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aliment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentFindFirstArgs} args - Arguments to find a Aliment
     * @example
     * // Get one Aliment
     * const aliment = await prisma.aliment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlimentFindFirstArgs>(args?: SelectSubset<T, AlimentFindFirstArgs<ExtArgs>>): Prisma__AlimentClient<$Result.GetResult<Prisma.$AlimentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aliment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentFindFirstOrThrowArgs} args - Arguments to find a Aliment
     * @example
     * // Get one Aliment
     * const aliment = await prisma.aliment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlimentFindFirstOrThrowArgs>(args?: SelectSubset<T, AlimentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlimentClient<$Result.GetResult<Prisma.$AlimentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aliments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aliments
     * const aliments = await prisma.aliment.findMany()
     * 
     * // Get first 10 Aliments
     * const aliments = await prisma.aliment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alimentWithIdOnly = await prisma.aliment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlimentFindManyArgs>(args?: SelectSubset<T, AlimentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlimentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aliment.
     * @param {AlimentCreateArgs} args - Arguments to create a Aliment.
     * @example
     * // Create one Aliment
     * const Aliment = await prisma.aliment.create({
     *   data: {
     *     // ... data to create a Aliment
     *   }
     * })
     * 
     */
    create<T extends AlimentCreateArgs>(args: SelectSubset<T, AlimentCreateArgs<ExtArgs>>): Prisma__AlimentClient<$Result.GetResult<Prisma.$AlimentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aliments.
     * @param {AlimentCreateManyArgs} args - Arguments to create many Aliments.
     * @example
     * // Create many Aliments
     * const aliment = await prisma.aliment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlimentCreateManyArgs>(args?: SelectSubset<T, AlimentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aliments and returns the data saved in the database.
     * @param {AlimentCreateManyAndReturnArgs} args - Arguments to create many Aliments.
     * @example
     * // Create many Aliments
     * const aliment = await prisma.aliment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aliments and only return the `id`
     * const alimentWithIdOnly = await prisma.aliment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlimentCreateManyAndReturnArgs>(args?: SelectSubset<T, AlimentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlimentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aliment.
     * @param {AlimentDeleteArgs} args - Arguments to delete one Aliment.
     * @example
     * // Delete one Aliment
     * const Aliment = await prisma.aliment.delete({
     *   where: {
     *     // ... filter to delete one Aliment
     *   }
     * })
     * 
     */
    delete<T extends AlimentDeleteArgs>(args: SelectSubset<T, AlimentDeleteArgs<ExtArgs>>): Prisma__AlimentClient<$Result.GetResult<Prisma.$AlimentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aliment.
     * @param {AlimentUpdateArgs} args - Arguments to update one Aliment.
     * @example
     * // Update one Aliment
     * const aliment = await prisma.aliment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlimentUpdateArgs>(args: SelectSubset<T, AlimentUpdateArgs<ExtArgs>>): Prisma__AlimentClient<$Result.GetResult<Prisma.$AlimentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aliments.
     * @param {AlimentDeleteManyArgs} args - Arguments to filter Aliments to delete.
     * @example
     * // Delete a few Aliments
     * const { count } = await prisma.aliment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlimentDeleteManyArgs>(args?: SelectSubset<T, AlimentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aliments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aliments
     * const aliment = await prisma.aliment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlimentUpdateManyArgs>(args: SelectSubset<T, AlimentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aliments and returns the data updated in the database.
     * @param {AlimentUpdateManyAndReturnArgs} args - Arguments to update many Aliments.
     * @example
     * // Update many Aliments
     * const aliment = await prisma.aliment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Aliments and only return the `id`
     * const alimentWithIdOnly = await prisma.aliment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlimentUpdateManyAndReturnArgs>(args: SelectSubset<T, AlimentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlimentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aliment.
     * @param {AlimentUpsertArgs} args - Arguments to update or create a Aliment.
     * @example
     * // Update or create a Aliment
     * const aliment = await prisma.aliment.upsert({
     *   create: {
     *     // ... data to create a Aliment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aliment we want to update
     *   }
     * })
     */
    upsert<T extends AlimentUpsertArgs>(args: SelectSubset<T, AlimentUpsertArgs<ExtArgs>>): Prisma__AlimentClient<$Result.GetResult<Prisma.$AlimentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aliments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentCountArgs} args - Arguments to filter Aliments to count.
     * @example
     * // Count the number of Aliments
     * const count = await prisma.aliment.count({
     *   where: {
     *     // ... the filter for the Aliments we want to count
     *   }
     * })
    **/
    count<T extends AlimentCountArgs>(
      args?: Subset<T, AlimentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlimentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aliment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlimentAggregateArgs>(args: Subset<T, AlimentAggregateArgs>): Prisma.PrismaPromise<GetAlimentAggregateType<T>>

    /**
     * Group by Aliment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentGroupByArgs} args - Group by arguments.
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
      T extends AlimentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlimentGroupByArgs['orderBy'] }
        : { orderBy?: AlimentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlimentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlimentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aliment model
   */
  readonly fields: AlimentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aliment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlimentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    steps<T extends Aliment$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Aliment$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingredients<T extends Aliment$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Aliment$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Aliment model
   */
  interface AlimentFieldRefs {
    readonly id: FieldRef<"Aliment", 'String'>
    readonly name: FieldRef<"Aliment", 'String'>
    readonly image: FieldRef<"Aliment", 'String'>
    readonly created_at: FieldRef<"Aliment", 'DateTime'>
    readonly updated_at: FieldRef<"Aliment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Aliment findUnique
   */
  export type AlimentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aliment
     */
    select?: AlimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aliment
     */
    omit?: AlimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentInclude<ExtArgs> | null
    /**
     * Filter, which Aliment to fetch.
     */
    where: AlimentWhereUniqueInput
  }

  /**
   * Aliment findUniqueOrThrow
   */
  export type AlimentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aliment
     */
    select?: AlimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aliment
     */
    omit?: AlimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentInclude<ExtArgs> | null
    /**
     * Filter, which Aliment to fetch.
     */
    where: AlimentWhereUniqueInput
  }

  /**
   * Aliment findFirst
   */
  export type AlimentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aliment
     */
    select?: AlimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aliment
     */
    omit?: AlimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentInclude<ExtArgs> | null
    /**
     * Filter, which Aliment to fetch.
     */
    where?: AlimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aliments to fetch.
     */
    orderBy?: AlimentOrderByWithRelationInput | AlimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aliments.
     */
    cursor?: AlimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aliments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aliments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aliments.
     */
    distinct?: AlimentScalarFieldEnum | AlimentScalarFieldEnum[]
  }

  /**
   * Aliment findFirstOrThrow
   */
  export type AlimentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aliment
     */
    select?: AlimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aliment
     */
    omit?: AlimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentInclude<ExtArgs> | null
    /**
     * Filter, which Aliment to fetch.
     */
    where?: AlimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aliments to fetch.
     */
    orderBy?: AlimentOrderByWithRelationInput | AlimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aliments.
     */
    cursor?: AlimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aliments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aliments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aliments.
     */
    distinct?: AlimentScalarFieldEnum | AlimentScalarFieldEnum[]
  }

  /**
   * Aliment findMany
   */
  export type AlimentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aliment
     */
    select?: AlimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aliment
     */
    omit?: AlimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentInclude<ExtArgs> | null
    /**
     * Filter, which Aliments to fetch.
     */
    where?: AlimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aliments to fetch.
     */
    orderBy?: AlimentOrderByWithRelationInput | AlimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aliments.
     */
    cursor?: AlimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aliments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aliments.
     */
    skip?: number
    distinct?: AlimentScalarFieldEnum | AlimentScalarFieldEnum[]
  }

  /**
   * Aliment create
   */
  export type AlimentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aliment
     */
    select?: AlimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aliment
     */
    omit?: AlimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentInclude<ExtArgs> | null
    /**
     * The data needed to create a Aliment.
     */
    data: XOR<AlimentCreateInput, AlimentUncheckedCreateInput>
  }

  /**
   * Aliment createMany
   */
  export type AlimentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aliments.
     */
    data: AlimentCreateManyInput | AlimentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aliment createManyAndReturn
   */
  export type AlimentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aliment
     */
    select?: AlimentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aliment
     */
    omit?: AlimentOmit<ExtArgs> | null
    /**
     * The data used to create many Aliments.
     */
    data: AlimentCreateManyInput | AlimentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aliment update
   */
  export type AlimentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aliment
     */
    select?: AlimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aliment
     */
    omit?: AlimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentInclude<ExtArgs> | null
    /**
     * The data needed to update a Aliment.
     */
    data: XOR<AlimentUpdateInput, AlimentUncheckedUpdateInput>
    /**
     * Choose, which Aliment to update.
     */
    where: AlimentWhereUniqueInput
  }

  /**
   * Aliment updateMany
   */
  export type AlimentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aliments.
     */
    data: XOR<AlimentUpdateManyMutationInput, AlimentUncheckedUpdateManyInput>
    /**
     * Filter which Aliments to update
     */
    where?: AlimentWhereInput
    /**
     * Limit how many Aliments to update.
     */
    limit?: number
  }

  /**
   * Aliment updateManyAndReturn
   */
  export type AlimentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aliment
     */
    select?: AlimentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aliment
     */
    omit?: AlimentOmit<ExtArgs> | null
    /**
     * The data used to update Aliments.
     */
    data: XOR<AlimentUpdateManyMutationInput, AlimentUncheckedUpdateManyInput>
    /**
     * Filter which Aliments to update
     */
    where?: AlimentWhereInput
    /**
     * Limit how many Aliments to update.
     */
    limit?: number
  }

  /**
   * Aliment upsert
   */
  export type AlimentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aliment
     */
    select?: AlimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aliment
     */
    omit?: AlimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentInclude<ExtArgs> | null
    /**
     * The filter to search for the Aliment to update in case it exists.
     */
    where: AlimentWhereUniqueInput
    /**
     * In case the Aliment found by the `where` argument doesn't exist, create a new Aliment with this data.
     */
    create: XOR<AlimentCreateInput, AlimentUncheckedCreateInput>
    /**
     * In case the Aliment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlimentUpdateInput, AlimentUncheckedUpdateInput>
  }

  /**
   * Aliment delete
   */
  export type AlimentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aliment
     */
    select?: AlimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aliment
     */
    omit?: AlimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentInclude<ExtArgs> | null
    /**
     * Filter which Aliment to delete.
     */
    where: AlimentWhereUniqueInput
  }

  /**
   * Aliment deleteMany
   */
  export type AlimentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aliments to delete
     */
    where?: AlimentWhereInput
    /**
     * Limit how many Aliments to delete.
     */
    limit?: number
  }

  /**
   * Aliment.steps
   */
  export type Aliment$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Aliment.ingredients
   */
  export type Aliment$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    cursor?: IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Aliment without action
   */
  export type AlimentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aliment
     */
    select?: AlimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aliment
     */
    omit?: AlimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    quantity: number | null
  }

  export type IngredientSumAggregateOutputType = {
    quantity: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    unit: $Enums.Unit | null
    aliment_id: string | null
    recipe_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    unit: $Enums.Unit | null
    aliment_id: string | null
    recipe_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    name: number
    quantity: number
    unit: number
    aliment_id: number
    recipe_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    quantity?: true
  }

  export type IngredientSumAggregateInputType = {
    quantity?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    aliment_id?: true
    recipe_id?: true
    created_at?: true
    updated_at?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    aliment_id?: true
    recipe_id?: true
    created_at?: true
    updated_at?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    aliment_id?: true
    recipe_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: string
    name: string
    quantity: number
    unit: $Enums.Unit
    aliment_id: string
    recipe_id: string
    created_at: Date
    updated_at: Date
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    aliment_id?: boolean
    recipe_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    aliment?: boolean | AlimentDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    aliment_id?: boolean
    recipe_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    aliment?: boolean | AlimentDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    aliment_id?: boolean
    recipe_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    aliment?: boolean | AlimentDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    aliment_id?: boolean
    recipe_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "quantity" | "unit" | "aliment_id" | "recipe_id" | "created_at" | "updated_at", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aliment?: boolean | AlimentDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aliment?: boolean | AlimentDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aliment?: boolean | AlimentDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      aliment: Prisma.$AlimentPayload<ExtArgs>
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      quantity: number
      unit: $Enums.Unit
      aliment_id: string
      recipe_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
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
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aliment<T extends AlimentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlimentDefaultArgs<ExtArgs>>): Prisma__AlimentClient<$Result.GetResult<Prisma.$AlimentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'String'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly quantity: FieldRef<"Ingredient", 'Float'>
    readonly unit: FieldRef<"Ingredient", 'Unit'>
    readonly aliment_id: FieldRef<"Ingredient", 'String'>
    readonly recipe_id: FieldRef<"Ingredient", 'String'>
    readonly created_at: FieldRef<"Ingredient", 'DateTime'>
    readonly updated_at: FieldRef<"Ingredient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model Ustensil
   */

  export type AggregateUstensil = {
    _count: UstensilCountAggregateOutputType | null
    _min: UstensilMinAggregateOutputType | null
    _max: UstensilMaxAggregateOutputType | null
  }

  export type UstensilMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UstensilMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UstensilCountAggregateOutputType = {
    id: number
    name: number
    image: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UstensilMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type UstensilMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type UstensilCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UstensilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ustensil to aggregate.
     */
    where?: UstensilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ustensils to fetch.
     */
    orderBy?: UstensilOrderByWithRelationInput | UstensilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UstensilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ustensils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ustensils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ustensils
    **/
    _count?: true | UstensilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UstensilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UstensilMaxAggregateInputType
  }

  export type GetUstensilAggregateType<T extends UstensilAggregateArgs> = {
        [P in keyof T & keyof AggregateUstensil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUstensil[P]>
      : GetScalarType<T[P], AggregateUstensil[P]>
  }




  export type UstensilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UstensilWhereInput
    orderBy?: UstensilOrderByWithAggregationInput | UstensilOrderByWithAggregationInput[]
    by: UstensilScalarFieldEnum[] | UstensilScalarFieldEnum
    having?: UstensilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UstensilCountAggregateInputType | true
    _min?: UstensilMinAggregateInputType
    _max?: UstensilMaxAggregateInputType
  }

  export type UstensilGroupByOutputType = {
    id: string
    name: string
    image: string
    description: string
    created_at: Date
    updated_at: Date
    _count: UstensilCountAggregateOutputType | null
    _min: UstensilMinAggregateOutputType | null
    _max: UstensilMaxAggregateOutputType | null
  }

  type GetUstensilGroupByPayload<T extends UstensilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UstensilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UstensilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UstensilGroupByOutputType[P]>
            : GetScalarType<T[P], UstensilGroupByOutputType[P]>
        }
      >
    >


  export type UstensilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    recipes?: boolean | Ustensil$recipesArgs<ExtArgs>
    steps?: boolean | Ustensil$stepsArgs<ExtArgs>
    _count?: boolean | UstensilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ustensil"]>

  export type UstensilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["ustensil"]>

  export type UstensilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["ustensil"]>

  export type UstensilSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UstensilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "description" | "created_at" | "updated_at", ExtArgs["result"]["ustensil"]>
  export type UstensilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | Ustensil$recipesArgs<ExtArgs>
    steps?: boolean | Ustensil$stepsArgs<ExtArgs>
    _count?: boolean | UstensilCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UstensilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UstensilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UstensilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ustensil"
    objects: {
      recipes: Prisma.$RecipePayload<ExtArgs>[]
      steps: Prisma.$StepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image: string
      description: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["ustensil"]>
    composites: {}
  }

  type UstensilGetPayload<S extends boolean | null | undefined | UstensilDefaultArgs> = $Result.GetResult<Prisma.$UstensilPayload, S>

  type UstensilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UstensilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UstensilCountAggregateInputType | true
    }

  export interface UstensilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ustensil'], meta: { name: 'Ustensil' } }
    /**
     * Find zero or one Ustensil that matches the filter.
     * @param {UstensilFindUniqueArgs} args - Arguments to find a Ustensil
     * @example
     * // Get one Ustensil
     * const ustensil = await prisma.ustensil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UstensilFindUniqueArgs>(args: SelectSubset<T, UstensilFindUniqueArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ustensil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UstensilFindUniqueOrThrowArgs} args - Arguments to find a Ustensil
     * @example
     * // Get one Ustensil
     * const ustensil = await prisma.ustensil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UstensilFindUniqueOrThrowArgs>(args: SelectSubset<T, UstensilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ustensil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilFindFirstArgs} args - Arguments to find a Ustensil
     * @example
     * // Get one Ustensil
     * const ustensil = await prisma.ustensil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UstensilFindFirstArgs>(args?: SelectSubset<T, UstensilFindFirstArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ustensil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilFindFirstOrThrowArgs} args - Arguments to find a Ustensil
     * @example
     * // Get one Ustensil
     * const ustensil = await prisma.ustensil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UstensilFindFirstOrThrowArgs>(args?: SelectSubset<T, UstensilFindFirstOrThrowArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ustensils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ustensils
     * const ustensils = await prisma.ustensil.findMany()
     * 
     * // Get first 10 Ustensils
     * const ustensils = await prisma.ustensil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ustensilWithIdOnly = await prisma.ustensil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UstensilFindManyArgs>(args?: SelectSubset<T, UstensilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ustensil.
     * @param {UstensilCreateArgs} args - Arguments to create a Ustensil.
     * @example
     * // Create one Ustensil
     * const Ustensil = await prisma.ustensil.create({
     *   data: {
     *     // ... data to create a Ustensil
     *   }
     * })
     * 
     */
    create<T extends UstensilCreateArgs>(args: SelectSubset<T, UstensilCreateArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ustensils.
     * @param {UstensilCreateManyArgs} args - Arguments to create many Ustensils.
     * @example
     * // Create many Ustensils
     * const ustensil = await prisma.ustensil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UstensilCreateManyArgs>(args?: SelectSubset<T, UstensilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ustensils and returns the data saved in the database.
     * @param {UstensilCreateManyAndReturnArgs} args - Arguments to create many Ustensils.
     * @example
     * // Create many Ustensils
     * const ustensil = await prisma.ustensil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ustensils and only return the `id`
     * const ustensilWithIdOnly = await prisma.ustensil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UstensilCreateManyAndReturnArgs>(args?: SelectSubset<T, UstensilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ustensil.
     * @param {UstensilDeleteArgs} args - Arguments to delete one Ustensil.
     * @example
     * // Delete one Ustensil
     * const Ustensil = await prisma.ustensil.delete({
     *   where: {
     *     // ... filter to delete one Ustensil
     *   }
     * })
     * 
     */
    delete<T extends UstensilDeleteArgs>(args: SelectSubset<T, UstensilDeleteArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ustensil.
     * @param {UstensilUpdateArgs} args - Arguments to update one Ustensil.
     * @example
     * // Update one Ustensil
     * const ustensil = await prisma.ustensil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UstensilUpdateArgs>(args: SelectSubset<T, UstensilUpdateArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ustensils.
     * @param {UstensilDeleteManyArgs} args - Arguments to filter Ustensils to delete.
     * @example
     * // Delete a few Ustensils
     * const { count } = await prisma.ustensil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UstensilDeleteManyArgs>(args?: SelectSubset<T, UstensilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ustensils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ustensils
     * const ustensil = await prisma.ustensil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UstensilUpdateManyArgs>(args: SelectSubset<T, UstensilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ustensils and returns the data updated in the database.
     * @param {UstensilUpdateManyAndReturnArgs} args - Arguments to update many Ustensils.
     * @example
     * // Update many Ustensils
     * const ustensil = await prisma.ustensil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ustensils and only return the `id`
     * const ustensilWithIdOnly = await prisma.ustensil.updateManyAndReturn({
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
    updateManyAndReturn<T extends UstensilUpdateManyAndReturnArgs>(args: SelectSubset<T, UstensilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ustensil.
     * @param {UstensilUpsertArgs} args - Arguments to update or create a Ustensil.
     * @example
     * // Update or create a Ustensil
     * const ustensil = await prisma.ustensil.upsert({
     *   create: {
     *     // ... data to create a Ustensil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ustensil we want to update
     *   }
     * })
     */
    upsert<T extends UstensilUpsertArgs>(args: SelectSubset<T, UstensilUpsertArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ustensils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilCountArgs} args - Arguments to filter Ustensils to count.
     * @example
     * // Count the number of Ustensils
     * const count = await prisma.ustensil.count({
     *   where: {
     *     // ... the filter for the Ustensils we want to count
     *   }
     * })
    **/
    count<T extends UstensilCountArgs>(
      args?: Subset<T, UstensilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UstensilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ustensil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UstensilAggregateArgs>(args: Subset<T, UstensilAggregateArgs>): Prisma.PrismaPromise<GetUstensilAggregateType<T>>

    /**
     * Group by Ustensil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilGroupByArgs} args - Group by arguments.
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
      T extends UstensilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UstensilGroupByArgs['orderBy'] }
        : { orderBy?: UstensilGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UstensilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUstensilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ustensil model
   */
  readonly fields: UstensilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ustensil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UstensilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends Ustensil$recipesArgs<ExtArgs> = {}>(args?: Subset<T, Ustensil$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    steps<T extends Ustensil$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Ustensil$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ustensil model
   */
  interface UstensilFieldRefs {
    readonly id: FieldRef<"Ustensil", 'String'>
    readonly name: FieldRef<"Ustensil", 'String'>
    readonly image: FieldRef<"Ustensil", 'String'>
    readonly description: FieldRef<"Ustensil", 'String'>
    readonly created_at: FieldRef<"Ustensil", 'DateTime'>
    readonly updated_at: FieldRef<"Ustensil", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ustensil findUnique
   */
  export type UstensilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * Filter, which Ustensil to fetch.
     */
    where: UstensilWhereUniqueInput
  }

  /**
   * Ustensil findUniqueOrThrow
   */
  export type UstensilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * Filter, which Ustensil to fetch.
     */
    where: UstensilWhereUniqueInput
  }

  /**
   * Ustensil findFirst
   */
  export type UstensilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * Filter, which Ustensil to fetch.
     */
    where?: UstensilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ustensils to fetch.
     */
    orderBy?: UstensilOrderByWithRelationInput | UstensilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ustensils.
     */
    cursor?: UstensilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ustensils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ustensils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ustensils.
     */
    distinct?: UstensilScalarFieldEnum | UstensilScalarFieldEnum[]
  }

  /**
   * Ustensil findFirstOrThrow
   */
  export type UstensilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * Filter, which Ustensil to fetch.
     */
    where?: UstensilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ustensils to fetch.
     */
    orderBy?: UstensilOrderByWithRelationInput | UstensilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ustensils.
     */
    cursor?: UstensilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ustensils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ustensils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ustensils.
     */
    distinct?: UstensilScalarFieldEnum | UstensilScalarFieldEnum[]
  }

  /**
   * Ustensil findMany
   */
  export type UstensilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * Filter, which Ustensils to fetch.
     */
    where?: UstensilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ustensils to fetch.
     */
    orderBy?: UstensilOrderByWithRelationInput | UstensilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ustensils.
     */
    cursor?: UstensilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ustensils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ustensils.
     */
    skip?: number
    distinct?: UstensilScalarFieldEnum | UstensilScalarFieldEnum[]
  }

  /**
   * Ustensil create
   */
  export type UstensilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * The data needed to create a Ustensil.
     */
    data: XOR<UstensilCreateInput, UstensilUncheckedCreateInput>
  }

  /**
   * Ustensil createMany
   */
  export type UstensilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ustensils.
     */
    data: UstensilCreateManyInput | UstensilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ustensil createManyAndReturn
   */
  export type UstensilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * The data used to create many Ustensils.
     */
    data: UstensilCreateManyInput | UstensilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ustensil update
   */
  export type UstensilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * The data needed to update a Ustensil.
     */
    data: XOR<UstensilUpdateInput, UstensilUncheckedUpdateInput>
    /**
     * Choose, which Ustensil to update.
     */
    where: UstensilWhereUniqueInput
  }

  /**
   * Ustensil updateMany
   */
  export type UstensilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ustensils.
     */
    data: XOR<UstensilUpdateManyMutationInput, UstensilUncheckedUpdateManyInput>
    /**
     * Filter which Ustensils to update
     */
    where?: UstensilWhereInput
    /**
     * Limit how many Ustensils to update.
     */
    limit?: number
  }

  /**
   * Ustensil updateManyAndReturn
   */
  export type UstensilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * The data used to update Ustensils.
     */
    data: XOR<UstensilUpdateManyMutationInput, UstensilUncheckedUpdateManyInput>
    /**
     * Filter which Ustensils to update
     */
    where?: UstensilWhereInput
    /**
     * Limit how many Ustensils to update.
     */
    limit?: number
  }

  /**
   * Ustensil upsert
   */
  export type UstensilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * The filter to search for the Ustensil to update in case it exists.
     */
    where: UstensilWhereUniqueInput
    /**
     * In case the Ustensil found by the `where` argument doesn't exist, create a new Ustensil with this data.
     */
    create: XOR<UstensilCreateInput, UstensilUncheckedCreateInput>
    /**
     * In case the Ustensil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UstensilUpdateInput, UstensilUncheckedUpdateInput>
  }

  /**
   * Ustensil delete
   */
  export type UstensilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * Filter which Ustensil to delete.
     */
    where: UstensilWhereUniqueInput
  }

  /**
   * Ustensil deleteMany
   */
  export type UstensilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ustensils to delete
     */
    where?: UstensilWhereInput
    /**
     * Limit how many Ustensils to delete.
     */
    limit?: number
  }

  /**
   * Ustensil.recipes
   */
  export type Ustensil$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    cursor?: RecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Ustensil.steps
   */
  export type Ustensil$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Ustensil without action
   */
  export type UstensilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    type: $Enums.MediaType | null
    src: string | null
    alt: string | null
    recipe_id: string | null
    step_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    type: $Enums.MediaType | null
    src: string | null
    alt: string | null
    recipe_id: string | null
    step_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    type: number
    src: number
    alt: number
    recipe_id: number
    step_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    type?: true
    src?: true
    alt?: true
    recipe_id?: true
    step_id?: true
    created_at?: true
    updated_at?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    type?: true
    src?: true
    alt?: true
    recipe_id?: true
    step_id?: true
    created_at?: true
    updated_at?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    type?: true
    src?: true
    alt?: true
    recipe_id?: true
    step_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    type: $Enums.MediaType
    src: string
    alt: string
    recipe_id: string | null
    step_id: string | null
    created_at: Date
    updated_at: Date
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    src?: boolean
    alt?: boolean
    recipe_id?: boolean
    step_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    recipe?: boolean | Media$recipeArgs<ExtArgs>
    step?: boolean | Media$stepArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    src?: boolean
    alt?: boolean
    recipe_id?: boolean
    step_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    recipe?: boolean | Media$recipeArgs<ExtArgs>
    step?: boolean | Media$stepArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    src?: boolean
    alt?: boolean
    recipe_id?: boolean
    step_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    recipe?: boolean | Media$recipeArgs<ExtArgs>
    step?: boolean | Media$stepArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    type?: boolean
    src?: boolean
    alt?: boolean
    recipe_id?: boolean
    step_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "src" | "alt" | "recipe_id" | "step_id" | "created_at" | "updated_at", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | Media$recipeArgs<ExtArgs>
    step?: boolean | Media$stepArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | Media$recipeArgs<ExtArgs>
    step?: boolean | Media$stepArgs<ExtArgs>
  }
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | Media$recipeArgs<ExtArgs>
    step?: boolean | Media$stepArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs> | null
      step: Prisma.$StepPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.MediaType
      src: string
      alt: string
      recipe_id: string | null
      step_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
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
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
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
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends Media$recipeArgs<ExtArgs> = {}>(args?: Subset<T, Media$recipeArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    step<T extends Media$stepArgs<ExtArgs> = {}>(args?: Subset<T, Media$stepArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly type: FieldRef<"Media", 'MediaType'>
    readonly src: FieldRef<"Media", 'String'>
    readonly alt: FieldRef<"Media", 'String'>
    readonly recipe_id: FieldRef<"Media", 'String'>
    readonly step_id: FieldRef<"Media", 'String'>
    readonly created_at: FieldRef<"Media", 'DateTime'>
    readonly updated_at: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media.recipe
   */
  export type Media$recipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
  }

  /**
   * Media.step
   */
  export type Media$stepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const StepScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    order: 'order',
    recipe_id: 'recipe_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StepScalarFieldEnum = (typeof StepScalarFieldEnum)[keyof typeof StepScalarFieldEnum]


  export const AlimentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AlimentScalarFieldEnum = (typeof AlimentScalarFieldEnum)[keyof typeof AlimentScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    quantity: 'quantity',
    unit: 'unit',
    aliment_id: 'aliment_id',
    recipe_id: 'recipe_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const UstensilScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UstensilScalarFieldEnum = (typeof UstensilScalarFieldEnum)[keyof typeof UstensilScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    type: 'type',
    src: 'src',
    alt: 'alt',
    recipe_id: 'recipe_id',
    step_id: 'step_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Unit'
   */
  export type EnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Unit'>
    


  /**
   * Reference to a field of type 'Unit[]'
   */
  export type ListEnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Unit[]'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'MediaType[]'
   */
  export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>
    
  /**
   * Deep Input Types
   */


  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: StringFilter<"Recipe"> | string
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    created_at?: DateTimeFilter<"Recipe"> | Date | string
    updated_at?: DateTimeFilter<"Recipe"> | Date | string
    medias?: MediaListRelationFilter
    steps?: StepListRelationFilter
    ingredients?: IngredientListRelationFilter
    ustensils?: UstensilListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    medias?: MediaOrderByRelationAggregateInput
    steps?: StepOrderByRelationAggregateInput
    ingredients?: IngredientOrderByRelationAggregateInput
    ustensils?: UstensilOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    created_at?: DateTimeFilter<"Recipe"> | Date | string
    updated_at?: DateTimeFilter<"Recipe"> | Date | string
    medias?: MediaListRelationFilter
    steps?: StepListRelationFilter
    ingredients?: IngredientListRelationFilter
    ustensils?: UstensilListRelationFilter
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recipe"> | string
    name?: StringWithAggregatesFilter<"Recipe"> | string
    description?: StringWithAggregatesFilter<"Recipe"> | string
    created_at?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
  }

  export type StepWhereInput = {
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    id?: StringFilter<"Step"> | string
    name?: StringFilter<"Step"> | string
    description?: StringFilter<"Step"> | string
    order?: IntFilter<"Step"> | number
    recipe_id?: StringFilter<"Step"> | string
    created_at?: DateTimeFilter<"Step"> | Date | string
    updated_at?: DateTimeFilter<"Step"> | Date | string
    medias?: MediaListRelationFilter
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    aliments?: AlimentListRelationFilter
    ustensils?: UstensilListRelationFilter
  }

  export type StepOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    medias?: MediaOrderByRelationAggregateInput
    recipe?: RecipeOrderByWithRelationInput
    aliments?: AlimentOrderByRelationAggregateInput
    ustensils?: UstensilOrderByRelationAggregateInput
  }

  export type StepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    name?: StringFilter<"Step"> | string
    description?: StringFilter<"Step"> | string
    order?: IntFilter<"Step"> | number
    recipe_id?: StringFilter<"Step"> | string
    created_at?: DateTimeFilter<"Step"> | Date | string
    updated_at?: DateTimeFilter<"Step"> | Date | string
    medias?: MediaListRelationFilter
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    aliments?: AlimentListRelationFilter
    ustensils?: UstensilListRelationFilter
  }, "id">

  export type StepOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: StepCountOrderByAggregateInput
    _avg?: StepAvgOrderByAggregateInput
    _max?: StepMaxOrderByAggregateInput
    _min?: StepMinOrderByAggregateInput
    _sum?: StepSumOrderByAggregateInput
  }

  export type StepScalarWhereWithAggregatesInput = {
    AND?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    OR?: StepScalarWhereWithAggregatesInput[]
    NOT?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Step"> | string
    name?: StringWithAggregatesFilter<"Step"> | string
    description?: StringWithAggregatesFilter<"Step"> | string
    order?: IntWithAggregatesFilter<"Step"> | number
    recipe_id?: StringWithAggregatesFilter<"Step"> | string
    created_at?: DateTimeWithAggregatesFilter<"Step"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Step"> | Date | string
  }

  export type AlimentWhereInput = {
    AND?: AlimentWhereInput | AlimentWhereInput[]
    OR?: AlimentWhereInput[]
    NOT?: AlimentWhereInput | AlimentWhereInput[]
    id?: StringFilter<"Aliment"> | string
    name?: StringFilter<"Aliment"> | string
    image?: StringFilter<"Aliment"> | string
    created_at?: DateTimeFilter<"Aliment"> | Date | string
    updated_at?: DateTimeFilter<"Aliment"> | Date | string
    steps?: StepListRelationFilter
    ingredients?: IngredientListRelationFilter
  }

  export type AlimentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    steps?: StepOrderByRelationAggregateInput
    ingredients?: IngredientOrderByRelationAggregateInput
  }

  export type AlimentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlimentWhereInput | AlimentWhereInput[]
    OR?: AlimentWhereInput[]
    NOT?: AlimentWhereInput | AlimentWhereInput[]
    name?: StringFilter<"Aliment"> | string
    image?: StringFilter<"Aliment"> | string
    created_at?: DateTimeFilter<"Aliment"> | Date | string
    updated_at?: DateTimeFilter<"Aliment"> | Date | string
    steps?: StepListRelationFilter
    ingredients?: IngredientListRelationFilter
  }, "id">

  export type AlimentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AlimentCountOrderByAggregateInput
    _max?: AlimentMaxOrderByAggregateInput
    _min?: AlimentMinOrderByAggregateInput
  }

  export type AlimentScalarWhereWithAggregatesInput = {
    AND?: AlimentScalarWhereWithAggregatesInput | AlimentScalarWhereWithAggregatesInput[]
    OR?: AlimentScalarWhereWithAggregatesInput[]
    NOT?: AlimentScalarWhereWithAggregatesInput | AlimentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Aliment"> | string
    name?: StringWithAggregatesFilter<"Aliment"> | string
    image?: StringWithAggregatesFilter<"Aliment"> | string
    created_at?: DateTimeWithAggregatesFilter<"Aliment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Aliment"> | Date | string
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    quantity?: FloatFilter<"Ingredient"> | number
    unit?: EnumUnitFilter<"Ingredient"> | $Enums.Unit
    aliment_id?: StringFilter<"Ingredient"> | string
    recipe_id?: StringFilter<"Ingredient"> | string
    created_at?: DateTimeFilter<"Ingredient"> | Date | string
    updated_at?: DateTimeFilter<"Ingredient"> | Date | string
    aliment?: XOR<AlimentScalarRelationFilter, AlimentWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    aliment_id?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    aliment?: AlimentOrderByWithRelationInput
    recipe?: RecipeOrderByWithRelationInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    name?: StringFilter<"Ingredient"> | string
    quantity?: FloatFilter<"Ingredient"> | number
    unit?: EnumUnitFilter<"Ingredient"> | $Enums.Unit
    aliment_id?: StringFilter<"Ingredient"> | string
    recipe_id?: StringFilter<"Ingredient"> | string
    created_at?: DateTimeFilter<"Ingredient"> | Date | string
    updated_at?: DateTimeFilter<"Ingredient"> | Date | string
    aliment?: XOR<AlimentScalarRelationFilter, AlimentWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    aliment_id?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingredient"> | string
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    quantity?: FloatWithAggregatesFilter<"Ingredient"> | number
    unit?: EnumUnitWithAggregatesFilter<"Ingredient"> | $Enums.Unit
    aliment_id?: StringWithAggregatesFilter<"Ingredient"> | string
    recipe_id?: StringWithAggregatesFilter<"Ingredient"> | string
    created_at?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
  }

  export type UstensilWhereInput = {
    AND?: UstensilWhereInput | UstensilWhereInput[]
    OR?: UstensilWhereInput[]
    NOT?: UstensilWhereInput | UstensilWhereInput[]
    id?: StringFilter<"Ustensil"> | string
    name?: StringFilter<"Ustensil"> | string
    image?: StringFilter<"Ustensil"> | string
    description?: StringFilter<"Ustensil"> | string
    created_at?: DateTimeFilter<"Ustensil"> | Date | string
    updated_at?: DateTimeFilter<"Ustensil"> | Date | string
    recipes?: RecipeListRelationFilter
    steps?: StepListRelationFilter
  }

  export type UstensilOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    recipes?: RecipeOrderByRelationAggregateInput
    steps?: StepOrderByRelationAggregateInput
  }

  export type UstensilWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UstensilWhereInput | UstensilWhereInput[]
    OR?: UstensilWhereInput[]
    NOT?: UstensilWhereInput | UstensilWhereInput[]
    name?: StringFilter<"Ustensil"> | string
    image?: StringFilter<"Ustensil"> | string
    description?: StringFilter<"Ustensil"> | string
    created_at?: DateTimeFilter<"Ustensil"> | Date | string
    updated_at?: DateTimeFilter<"Ustensil"> | Date | string
    recipes?: RecipeListRelationFilter
    steps?: StepListRelationFilter
  }, "id">

  export type UstensilOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UstensilCountOrderByAggregateInput
    _max?: UstensilMaxOrderByAggregateInput
    _min?: UstensilMinOrderByAggregateInput
  }

  export type UstensilScalarWhereWithAggregatesInput = {
    AND?: UstensilScalarWhereWithAggregatesInput | UstensilScalarWhereWithAggregatesInput[]
    OR?: UstensilScalarWhereWithAggregatesInput[]
    NOT?: UstensilScalarWhereWithAggregatesInput | UstensilScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ustensil"> | string
    name?: StringWithAggregatesFilter<"Ustensil"> | string
    image?: StringWithAggregatesFilter<"Ustensil"> | string
    description?: StringWithAggregatesFilter<"Ustensil"> | string
    created_at?: DateTimeWithAggregatesFilter<"Ustensil"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Ustensil"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    src?: StringFilter<"Media"> | string
    alt?: StringFilter<"Media"> | string
    recipe_id?: StringNullableFilter<"Media"> | string | null
    step_id?: StringNullableFilter<"Media"> | string | null
    created_at?: DateTimeFilter<"Media"> | Date | string
    updated_at?: DateTimeFilter<"Media"> | Date | string
    recipe?: XOR<RecipeNullableScalarRelationFilter, RecipeWhereInput> | null
    step?: XOR<StepNullableScalarRelationFilter, StepWhereInput> | null
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    src?: SortOrder
    alt?: SortOrder
    recipe_id?: SortOrderInput | SortOrder
    step_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    step?: StepOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    src?: StringFilter<"Media"> | string
    alt?: StringFilter<"Media"> | string
    recipe_id?: StringNullableFilter<"Media"> | string | null
    step_id?: StringNullableFilter<"Media"> | string | null
    created_at?: DateTimeFilter<"Media"> | Date | string
    updated_at?: DateTimeFilter<"Media"> | Date | string
    recipe?: XOR<RecipeNullableScalarRelationFilter, RecipeWhereInput> | null
    step?: XOR<StepNullableScalarRelationFilter, StepWhereInput> | null
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    src?: SortOrder
    alt?: SortOrder
    recipe_id?: SortOrderInput | SortOrder
    step_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    type?: EnumMediaTypeWithAggregatesFilter<"Media"> | $Enums.MediaType
    src?: StringWithAggregatesFilter<"Media"> | string
    alt?: StringWithAggregatesFilter<"Media"> | string
    recipe_id?: StringNullableWithAggregatesFilter<"Media"> | string | null
    step_id?: StringNullableWithAggregatesFilter<"Media"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type RecipeCreateInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaCreateNestedManyWithoutRecipeInput
    steps?: StepCreateNestedManyWithoutRecipeInput
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
    ustensils?: UstensilCreateNestedManyWithoutRecipesInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaUncheckedCreateNestedManyWithoutRecipeInput
    steps?: StepUncheckedCreateNestedManyWithoutRecipeInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
    ustensils?: UstensilUncheckedCreateNestedManyWithoutRecipesInput
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUpdateManyWithoutRecipeNestedInput
    steps?: StepUpdateManyWithoutRecipeNestedInput
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
    ustensils?: UstensilUpdateManyWithoutRecipesNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: StepUncheckedUpdateManyWithoutRecipeNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    ustensils?: UstensilUncheckedUpdateManyWithoutRecipesNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepCreateInput = {
    id?: string
    name: string
    description: string
    order: number
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaCreateNestedManyWithoutStepInput
    recipe: RecipeCreateNestedOneWithoutStepsInput
    aliments?: AlimentCreateNestedManyWithoutStepsInput
    ustensils?: UstensilCreateNestedManyWithoutStepsInput
  }

  export type StepUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    order: number
    recipe_id: string
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaUncheckedCreateNestedManyWithoutStepInput
    aliments?: AlimentUncheckedCreateNestedManyWithoutStepsInput
    ustensils?: UstensilUncheckedCreateNestedManyWithoutStepsInput
  }

  export type StepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUpdateManyWithoutStepNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutStepsNestedInput
    aliments?: AlimentUpdateManyWithoutStepsNestedInput
    ustensils?: UstensilUpdateManyWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUncheckedUpdateManyWithoutStepNestedInput
    aliments?: AlimentUncheckedUpdateManyWithoutStepsNestedInput
    ustensils?: UstensilUncheckedUpdateManyWithoutStepsNestedInput
  }

  export type StepCreateManyInput = {
    id?: string
    name: string
    description: string
    order: number
    recipe_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlimentCreateInput = {
    id?: string
    name: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
    steps?: StepCreateNestedManyWithoutAlimentsInput
    ingredients?: IngredientCreateNestedManyWithoutAlimentInput
  }

  export type AlimentUncheckedCreateInput = {
    id?: string
    name: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
    steps?: StepUncheckedCreateNestedManyWithoutAlimentsInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutAlimentInput
  }

  export type AlimentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: StepUpdateManyWithoutAlimentsNestedInput
    ingredients?: IngredientUpdateManyWithoutAlimentNestedInput
  }

  export type AlimentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: StepUncheckedUpdateManyWithoutAlimentsNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutAlimentNestedInput
  }

  export type AlimentCreateManyInput = {
    id?: string
    name: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AlimentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlimentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateInput = {
    id?: string
    name: string
    quantity: number
    unit: $Enums.Unit
    created_at?: Date | string
    updated_at?: Date | string
    aliment: AlimentCreateNestedOneWithoutIngredientsInput
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: string
    name: string
    quantity: number
    unit: $Enums.Unit
    aliment_id: string
    recipe_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    aliment?: AlimentUpdateOneRequiredWithoutIngredientsNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    aliment_id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateManyInput = {
    id?: string
    name: string
    quantity: number
    unit: $Enums.Unit
    aliment_id: string
    recipe_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    aliment_id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UstensilCreateInput = {
    id?: string
    name: string
    image: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    recipes?: RecipeCreateNestedManyWithoutUstensilsInput
    steps?: StepCreateNestedManyWithoutUstensilsInput
  }

  export type UstensilUncheckedCreateInput = {
    id?: string
    name: string
    image: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    recipes?: RecipeUncheckedCreateNestedManyWithoutUstensilsInput
    steps?: StepUncheckedCreateNestedManyWithoutUstensilsInput
  }

  export type UstensilUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUpdateManyWithoutUstensilsNestedInput
    steps?: StepUpdateManyWithoutUstensilsNestedInput
  }

  export type UstensilUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUncheckedUpdateManyWithoutUstensilsNestedInput
    steps?: StepUncheckedUpdateManyWithoutUstensilsNestedInput
  }

  export type UstensilCreateManyInput = {
    id?: string
    name: string
    image: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UstensilUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UstensilUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    id?: string
    type: $Enums.MediaType
    src: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    recipe?: RecipeCreateNestedOneWithoutMediasInput
    step?: StepCreateNestedOneWithoutMediasInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    type: $Enums.MediaType
    src: string
    alt: string
    recipe_id?: string | null
    step_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    src?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneWithoutMediasNestedInput
    step?: StepUpdateOneWithoutMediasNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    src?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    recipe_id?: NullableStringFieldUpdateOperationsInput | string | null
    step_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: string
    type: $Enums.MediaType
    src: string
    alt: string
    recipe_id?: string | null
    step_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    src?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    src?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    recipe_id?: NullableStringFieldUpdateOperationsInput | string | null
    step_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type StepListRelationFilter = {
    every?: StepWhereInput
    some?: StepWhereInput
    none?: StepWhereInput
  }

  export type IngredientListRelationFilter = {
    every?: IngredientWhereInput
    some?: IngredientWhereInput
    none?: IngredientWhereInput
  }

  export type UstensilListRelationFilter = {
    every?: UstensilWhereInput
    some?: UstensilWhereInput
    none?: UstensilWhereInput
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UstensilOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type AlimentListRelationFilter = {
    every?: AlimentWhereInput
    some?: AlimentWhereInput
    none?: AlimentWhereInput
  }

  export type AlimentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StepAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StepMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StepMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StepSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type AlimentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AlimentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AlimentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitFilter<$PrismaModel> | $Enums.Unit
  }

  export type AlimentScalarRelationFilter = {
    is?: AlimentWhereInput
    isNot?: AlimentWhereInput
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    aliment_id?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    aliment_id?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    aliment_id?: SortOrder
    recipe_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type EnumUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitWithAggregatesFilter<$PrismaModel> | $Enums.Unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitFilter<$PrismaModel>
    _max?: NestedEnumUnitFilter<$PrismaModel>
  }

  export type RecipeListRelationFilter = {
    every?: RecipeWhereInput
    some?: RecipeWhereInput
    none?: RecipeWhereInput
  }

  export type RecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UstensilCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UstensilMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UstensilMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RecipeNullableScalarRelationFilter = {
    is?: RecipeWhereInput | null
    isNot?: RecipeWhereInput | null
  }

  export type StepNullableScalarRelationFilter = {
    is?: StepWhereInput | null
    isNot?: StepWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    src?: SortOrder
    alt?: SortOrder
    recipe_id?: SortOrder
    step_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    src?: SortOrder
    alt?: SortOrder
    recipe_id?: SortOrder
    step_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    src?: SortOrder
    alt?: SortOrder
    recipe_id?: SortOrder
    step_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MediaCreateNestedManyWithoutRecipeInput = {
    create?: XOR<MediaCreateWithoutRecipeInput, MediaUncheckedCreateWithoutRecipeInput> | MediaCreateWithoutRecipeInput[] | MediaUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutRecipeInput | MediaCreateOrConnectWithoutRecipeInput[]
    createMany?: MediaCreateManyRecipeInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type StepCreateNestedManyWithoutRecipeInput = {
    create?: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput> | StepCreateWithoutRecipeInput[] | StepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: StepCreateOrConnectWithoutRecipeInput | StepCreateOrConnectWithoutRecipeInput[]
    createMany?: StepCreateManyRecipeInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type IngredientCreateNestedManyWithoutRecipeInput = {
    create?: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput> | IngredientCreateWithoutRecipeInput[] | IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput | IngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: IngredientCreateManyRecipeInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type UstensilCreateNestedManyWithoutRecipesInput = {
    create?: XOR<UstensilCreateWithoutRecipesInput, UstensilUncheckedCreateWithoutRecipesInput> | UstensilCreateWithoutRecipesInput[] | UstensilUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: UstensilCreateOrConnectWithoutRecipesInput | UstensilCreateOrConnectWithoutRecipesInput[]
    connect?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<MediaCreateWithoutRecipeInput, MediaUncheckedCreateWithoutRecipeInput> | MediaCreateWithoutRecipeInput[] | MediaUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutRecipeInput | MediaCreateOrConnectWithoutRecipeInput[]
    createMany?: MediaCreateManyRecipeInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput> | StepCreateWithoutRecipeInput[] | StepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: StepCreateOrConnectWithoutRecipeInput | StepCreateOrConnectWithoutRecipeInput[]
    createMany?: StepCreateManyRecipeInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type IngredientUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput> | IngredientCreateWithoutRecipeInput[] | IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput | IngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: IngredientCreateManyRecipeInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type UstensilUncheckedCreateNestedManyWithoutRecipesInput = {
    create?: XOR<UstensilCreateWithoutRecipesInput, UstensilUncheckedCreateWithoutRecipesInput> | UstensilCreateWithoutRecipesInput[] | UstensilUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: UstensilCreateOrConnectWithoutRecipesInput | UstensilCreateOrConnectWithoutRecipesInput[]
    connect?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MediaUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<MediaCreateWithoutRecipeInput, MediaUncheckedCreateWithoutRecipeInput> | MediaCreateWithoutRecipeInput[] | MediaUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutRecipeInput | MediaCreateOrConnectWithoutRecipeInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutRecipeInput | MediaUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: MediaCreateManyRecipeInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutRecipeInput | MediaUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutRecipeInput | MediaUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type StepUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput> | StepCreateWithoutRecipeInput[] | StepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: StepCreateOrConnectWithoutRecipeInput | StepCreateOrConnectWithoutRecipeInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutRecipeInput | StepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: StepCreateManyRecipeInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutRecipeInput | StepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: StepUpdateManyWithWhereWithoutRecipeInput | StepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type IngredientUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput> | IngredientCreateWithoutRecipeInput[] | IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput | IngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutRecipeInput | IngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: IngredientCreateManyRecipeInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutRecipeInput | IngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutRecipeInput | IngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type UstensilUpdateManyWithoutRecipesNestedInput = {
    create?: XOR<UstensilCreateWithoutRecipesInput, UstensilUncheckedCreateWithoutRecipesInput> | UstensilCreateWithoutRecipesInput[] | UstensilUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: UstensilCreateOrConnectWithoutRecipesInput | UstensilCreateOrConnectWithoutRecipesInput[]
    upsert?: UstensilUpsertWithWhereUniqueWithoutRecipesInput | UstensilUpsertWithWhereUniqueWithoutRecipesInput[]
    set?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    disconnect?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    delete?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    connect?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    update?: UstensilUpdateWithWhereUniqueWithoutRecipesInput | UstensilUpdateWithWhereUniqueWithoutRecipesInput[]
    updateMany?: UstensilUpdateManyWithWhereWithoutRecipesInput | UstensilUpdateManyWithWhereWithoutRecipesInput[]
    deleteMany?: UstensilScalarWhereInput | UstensilScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<MediaCreateWithoutRecipeInput, MediaUncheckedCreateWithoutRecipeInput> | MediaCreateWithoutRecipeInput[] | MediaUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutRecipeInput | MediaCreateOrConnectWithoutRecipeInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutRecipeInput | MediaUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: MediaCreateManyRecipeInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutRecipeInput | MediaUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutRecipeInput | MediaUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput> | StepCreateWithoutRecipeInput[] | StepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: StepCreateOrConnectWithoutRecipeInput | StepCreateOrConnectWithoutRecipeInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutRecipeInput | StepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: StepCreateManyRecipeInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutRecipeInput | StepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: StepUpdateManyWithWhereWithoutRecipeInput | StepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type IngredientUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput> | IngredientCreateWithoutRecipeInput[] | IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput | IngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutRecipeInput | IngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: IngredientCreateManyRecipeInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutRecipeInput | IngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutRecipeInput | IngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type UstensilUncheckedUpdateManyWithoutRecipesNestedInput = {
    create?: XOR<UstensilCreateWithoutRecipesInput, UstensilUncheckedCreateWithoutRecipesInput> | UstensilCreateWithoutRecipesInput[] | UstensilUncheckedCreateWithoutRecipesInput[]
    connectOrCreate?: UstensilCreateOrConnectWithoutRecipesInput | UstensilCreateOrConnectWithoutRecipesInput[]
    upsert?: UstensilUpsertWithWhereUniqueWithoutRecipesInput | UstensilUpsertWithWhereUniqueWithoutRecipesInput[]
    set?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    disconnect?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    delete?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    connect?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    update?: UstensilUpdateWithWhereUniqueWithoutRecipesInput | UstensilUpdateWithWhereUniqueWithoutRecipesInput[]
    updateMany?: UstensilUpdateManyWithWhereWithoutRecipesInput | UstensilUpdateManyWithWhereWithoutRecipesInput[]
    deleteMany?: UstensilScalarWhereInput | UstensilScalarWhereInput[]
  }

  export type MediaCreateNestedManyWithoutStepInput = {
    create?: XOR<MediaCreateWithoutStepInput, MediaUncheckedCreateWithoutStepInput> | MediaCreateWithoutStepInput[] | MediaUncheckedCreateWithoutStepInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutStepInput | MediaCreateOrConnectWithoutStepInput[]
    createMany?: MediaCreateManyStepInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type RecipeCreateNestedOneWithoutStepsInput = {
    create?: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutStepsInput
    connect?: RecipeWhereUniqueInput
  }

  export type AlimentCreateNestedManyWithoutStepsInput = {
    create?: XOR<AlimentCreateWithoutStepsInput, AlimentUncheckedCreateWithoutStepsInput> | AlimentCreateWithoutStepsInput[] | AlimentUncheckedCreateWithoutStepsInput[]
    connectOrCreate?: AlimentCreateOrConnectWithoutStepsInput | AlimentCreateOrConnectWithoutStepsInput[]
    connect?: AlimentWhereUniqueInput | AlimentWhereUniqueInput[]
  }

  export type UstensilCreateNestedManyWithoutStepsInput = {
    create?: XOR<UstensilCreateWithoutStepsInput, UstensilUncheckedCreateWithoutStepsInput> | UstensilCreateWithoutStepsInput[] | UstensilUncheckedCreateWithoutStepsInput[]
    connectOrCreate?: UstensilCreateOrConnectWithoutStepsInput | UstensilCreateOrConnectWithoutStepsInput[]
    connect?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutStepInput = {
    create?: XOR<MediaCreateWithoutStepInput, MediaUncheckedCreateWithoutStepInput> | MediaCreateWithoutStepInput[] | MediaUncheckedCreateWithoutStepInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutStepInput | MediaCreateOrConnectWithoutStepInput[]
    createMany?: MediaCreateManyStepInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type AlimentUncheckedCreateNestedManyWithoutStepsInput = {
    create?: XOR<AlimentCreateWithoutStepsInput, AlimentUncheckedCreateWithoutStepsInput> | AlimentCreateWithoutStepsInput[] | AlimentUncheckedCreateWithoutStepsInput[]
    connectOrCreate?: AlimentCreateOrConnectWithoutStepsInput | AlimentCreateOrConnectWithoutStepsInput[]
    connect?: AlimentWhereUniqueInput | AlimentWhereUniqueInput[]
  }

  export type UstensilUncheckedCreateNestedManyWithoutStepsInput = {
    create?: XOR<UstensilCreateWithoutStepsInput, UstensilUncheckedCreateWithoutStepsInput> | UstensilCreateWithoutStepsInput[] | UstensilUncheckedCreateWithoutStepsInput[]
    connectOrCreate?: UstensilCreateOrConnectWithoutStepsInput | UstensilCreateOrConnectWithoutStepsInput[]
    connect?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MediaUpdateManyWithoutStepNestedInput = {
    create?: XOR<MediaCreateWithoutStepInput, MediaUncheckedCreateWithoutStepInput> | MediaCreateWithoutStepInput[] | MediaUncheckedCreateWithoutStepInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutStepInput | MediaCreateOrConnectWithoutStepInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutStepInput | MediaUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: MediaCreateManyStepInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutStepInput | MediaUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutStepInput | MediaUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type RecipeUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutStepsInput
    upsert?: RecipeUpsertWithoutStepsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutStepsInput, RecipeUpdateWithoutStepsInput>, RecipeUncheckedUpdateWithoutStepsInput>
  }

  export type AlimentUpdateManyWithoutStepsNestedInput = {
    create?: XOR<AlimentCreateWithoutStepsInput, AlimentUncheckedCreateWithoutStepsInput> | AlimentCreateWithoutStepsInput[] | AlimentUncheckedCreateWithoutStepsInput[]
    connectOrCreate?: AlimentCreateOrConnectWithoutStepsInput | AlimentCreateOrConnectWithoutStepsInput[]
    upsert?: AlimentUpsertWithWhereUniqueWithoutStepsInput | AlimentUpsertWithWhereUniqueWithoutStepsInput[]
    set?: AlimentWhereUniqueInput | AlimentWhereUniqueInput[]
    disconnect?: AlimentWhereUniqueInput | AlimentWhereUniqueInput[]
    delete?: AlimentWhereUniqueInput | AlimentWhereUniqueInput[]
    connect?: AlimentWhereUniqueInput | AlimentWhereUniqueInput[]
    update?: AlimentUpdateWithWhereUniqueWithoutStepsInput | AlimentUpdateWithWhereUniqueWithoutStepsInput[]
    updateMany?: AlimentUpdateManyWithWhereWithoutStepsInput | AlimentUpdateManyWithWhereWithoutStepsInput[]
    deleteMany?: AlimentScalarWhereInput | AlimentScalarWhereInput[]
  }

  export type UstensilUpdateManyWithoutStepsNestedInput = {
    create?: XOR<UstensilCreateWithoutStepsInput, UstensilUncheckedCreateWithoutStepsInput> | UstensilCreateWithoutStepsInput[] | UstensilUncheckedCreateWithoutStepsInput[]
    connectOrCreate?: UstensilCreateOrConnectWithoutStepsInput | UstensilCreateOrConnectWithoutStepsInput[]
    upsert?: UstensilUpsertWithWhereUniqueWithoutStepsInput | UstensilUpsertWithWhereUniqueWithoutStepsInput[]
    set?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    disconnect?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    delete?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    connect?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    update?: UstensilUpdateWithWhereUniqueWithoutStepsInput | UstensilUpdateWithWhereUniqueWithoutStepsInput[]
    updateMany?: UstensilUpdateManyWithWhereWithoutStepsInput | UstensilUpdateManyWithWhereWithoutStepsInput[]
    deleteMany?: UstensilScalarWhereInput | UstensilScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutStepNestedInput = {
    create?: XOR<MediaCreateWithoutStepInput, MediaUncheckedCreateWithoutStepInput> | MediaCreateWithoutStepInput[] | MediaUncheckedCreateWithoutStepInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutStepInput | MediaCreateOrConnectWithoutStepInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutStepInput | MediaUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: MediaCreateManyStepInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutStepInput | MediaUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutStepInput | MediaUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type AlimentUncheckedUpdateManyWithoutStepsNestedInput = {
    create?: XOR<AlimentCreateWithoutStepsInput, AlimentUncheckedCreateWithoutStepsInput> | AlimentCreateWithoutStepsInput[] | AlimentUncheckedCreateWithoutStepsInput[]
    connectOrCreate?: AlimentCreateOrConnectWithoutStepsInput | AlimentCreateOrConnectWithoutStepsInput[]
    upsert?: AlimentUpsertWithWhereUniqueWithoutStepsInput | AlimentUpsertWithWhereUniqueWithoutStepsInput[]
    set?: AlimentWhereUniqueInput | AlimentWhereUniqueInput[]
    disconnect?: AlimentWhereUniqueInput | AlimentWhereUniqueInput[]
    delete?: AlimentWhereUniqueInput | AlimentWhereUniqueInput[]
    connect?: AlimentWhereUniqueInput | AlimentWhereUniqueInput[]
    update?: AlimentUpdateWithWhereUniqueWithoutStepsInput | AlimentUpdateWithWhereUniqueWithoutStepsInput[]
    updateMany?: AlimentUpdateManyWithWhereWithoutStepsInput | AlimentUpdateManyWithWhereWithoutStepsInput[]
    deleteMany?: AlimentScalarWhereInput | AlimentScalarWhereInput[]
  }

  export type UstensilUncheckedUpdateManyWithoutStepsNestedInput = {
    create?: XOR<UstensilCreateWithoutStepsInput, UstensilUncheckedCreateWithoutStepsInput> | UstensilCreateWithoutStepsInput[] | UstensilUncheckedCreateWithoutStepsInput[]
    connectOrCreate?: UstensilCreateOrConnectWithoutStepsInput | UstensilCreateOrConnectWithoutStepsInput[]
    upsert?: UstensilUpsertWithWhereUniqueWithoutStepsInput | UstensilUpsertWithWhereUniqueWithoutStepsInput[]
    set?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    disconnect?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    delete?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    connect?: UstensilWhereUniqueInput | UstensilWhereUniqueInput[]
    update?: UstensilUpdateWithWhereUniqueWithoutStepsInput | UstensilUpdateWithWhereUniqueWithoutStepsInput[]
    updateMany?: UstensilUpdateManyWithWhereWithoutStepsInput | UstensilUpdateManyWithWhereWithoutStepsInput[]
    deleteMany?: UstensilScalarWhereInput | UstensilScalarWhereInput[]
  }

  export type StepCreateNestedManyWithoutAlimentsInput = {
    create?: XOR<StepCreateWithoutAlimentsInput, StepUncheckedCreateWithoutAlimentsInput> | StepCreateWithoutAlimentsInput[] | StepUncheckedCreateWithoutAlimentsInput[]
    connectOrCreate?: StepCreateOrConnectWithoutAlimentsInput | StepCreateOrConnectWithoutAlimentsInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type IngredientCreateNestedManyWithoutAlimentInput = {
    create?: XOR<IngredientCreateWithoutAlimentInput, IngredientUncheckedCreateWithoutAlimentInput> | IngredientCreateWithoutAlimentInput[] | IngredientUncheckedCreateWithoutAlimentInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutAlimentInput | IngredientCreateOrConnectWithoutAlimentInput[]
    createMany?: IngredientCreateManyAlimentInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutAlimentsInput = {
    create?: XOR<StepCreateWithoutAlimentsInput, StepUncheckedCreateWithoutAlimentsInput> | StepCreateWithoutAlimentsInput[] | StepUncheckedCreateWithoutAlimentsInput[]
    connectOrCreate?: StepCreateOrConnectWithoutAlimentsInput | StepCreateOrConnectWithoutAlimentsInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type IngredientUncheckedCreateNestedManyWithoutAlimentInput = {
    create?: XOR<IngredientCreateWithoutAlimentInput, IngredientUncheckedCreateWithoutAlimentInput> | IngredientCreateWithoutAlimentInput[] | IngredientUncheckedCreateWithoutAlimentInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutAlimentInput | IngredientCreateOrConnectWithoutAlimentInput[]
    createMany?: IngredientCreateManyAlimentInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type StepUpdateManyWithoutAlimentsNestedInput = {
    create?: XOR<StepCreateWithoutAlimentsInput, StepUncheckedCreateWithoutAlimentsInput> | StepCreateWithoutAlimentsInput[] | StepUncheckedCreateWithoutAlimentsInput[]
    connectOrCreate?: StepCreateOrConnectWithoutAlimentsInput | StepCreateOrConnectWithoutAlimentsInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutAlimentsInput | StepUpsertWithWhereUniqueWithoutAlimentsInput[]
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutAlimentsInput | StepUpdateWithWhereUniqueWithoutAlimentsInput[]
    updateMany?: StepUpdateManyWithWhereWithoutAlimentsInput | StepUpdateManyWithWhereWithoutAlimentsInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type IngredientUpdateManyWithoutAlimentNestedInput = {
    create?: XOR<IngredientCreateWithoutAlimentInput, IngredientUncheckedCreateWithoutAlimentInput> | IngredientCreateWithoutAlimentInput[] | IngredientUncheckedCreateWithoutAlimentInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutAlimentInput | IngredientCreateOrConnectWithoutAlimentInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutAlimentInput | IngredientUpsertWithWhereUniqueWithoutAlimentInput[]
    createMany?: IngredientCreateManyAlimentInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutAlimentInput | IngredientUpdateWithWhereUniqueWithoutAlimentInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutAlimentInput | IngredientUpdateManyWithWhereWithoutAlimentInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutAlimentsNestedInput = {
    create?: XOR<StepCreateWithoutAlimentsInput, StepUncheckedCreateWithoutAlimentsInput> | StepCreateWithoutAlimentsInput[] | StepUncheckedCreateWithoutAlimentsInput[]
    connectOrCreate?: StepCreateOrConnectWithoutAlimentsInput | StepCreateOrConnectWithoutAlimentsInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutAlimentsInput | StepUpsertWithWhereUniqueWithoutAlimentsInput[]
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutAlimentsInput | StepUpdateWithWhereUniqueWithoutAlimentsInput[]
    updateMany?: StepUpdateManyWithWhereWithoutAlimentsInput | StepUpdateManyWithWhereWithoutAlimentsInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type IngredientUncheckedUpdateManyWithoutAlimentNestedInput = {
    create?: XOR<IngredientCreateWithoutAlimentInput, IngredientUncheckedCreateWithoutAlimentInput> | IngredientCreateWithoutAlimentInput[] | IngredientUncheckedCreateWithoutAlimentInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutAlimentInput | IngredientCreateOrConnectWithoutAlimentInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutAlimentInput | IngredientUpsertWithWhereUniqueWithoutAlimentInput[]
    createMany?: IngredientCreateManyAlimentInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutAlimentInput | IngredientUpdateWithWhereUniqueWithoutAlimentInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutAlimentInput | IngredientUpdateManyWithWhereWithoutAlimentInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type AlimentCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<AlimentCreateWithoutIngredientsInput, AlimentUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: AlimentCreateOrConnectWithoutIngredientsInput
    connect?: AlimentWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUnitFieldUpdateOperationsInput = {
    set?: $Enums.Unit
  }

  export type AlimentUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<AlimentCreateWithoutIngredientsInput, AlimentUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: AlimentCreateOrConnectWithoutIngredientsInput
    upsert?: AlimentUpsertWithoutIngredientsInput
    connect?: AlimentWhereUniqueInput
    update?: XOR<XOR<AlimentUpdateToOneWithWhereWithoutIngredientsInput, AlimentUpdateWithoutIngredientsInput>, AlimentUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    upsert?: RecipeUpsertWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutIngredientsInput, RecipeUpdateWithoutIngredientsInput>, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeCreateNestedManyWithoutUstensilsInput = {
    create?: XOR<RecipeCreateWithoutUstensilsInput, RecipeUncheckedCreateWithoutUstensilsInput> | RecipeCreateWithoutUstensilsInput[] | RecipeUncheckedCreateWithoutUstensilsInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUstensilsInput | RecipeCreateOrConnectWithoutUstensilsInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type StepCreateNestedManyWithoutUstensilsInput = {
    create?: XOR<StepCreateWithoutUstensilsInput, StepUncheckedCreateWithoutUstensilsInput> | StepCreateWithoutUstensilsInput[] | StepUncheckedCreateWithoutUstensilsInput[]
    connectOrCreate?: StepCreateOrConnectWithoutUstensilsInput | StepCreateOrConnectWithoutUstensilsInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type RecipeUncheckedCreateNestedManyWithoutUstensilsInput = {
    create?: XOR<RecipeCreateWithoutUstensilsInput, RecipeUncheckedCreateWithoutUstensilsInput> | RecipeCreateWithoutUstensilsInput[] | RecipeUncheckedCreateWithoutUstensilsInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUstensilsInput | RecipeCreateOrConnectWithoutUstensilsInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutUstensilsInput = {
    create?: XOR<StepCreateWithoutUstensilsInput, StepUncheckedCreateWithoutUstensilsInput> | StepCreateWithoutUstensilsInput[] | StepUncheckedCreateWithoutUstensilsInput[]
    connectOrCreate?: StepCreateOrConnectWithoutUstensilsInput | StepCreateOrConnectWithoutUstensilsInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type RecipeUpdateManyWithoutUstensilsNestedInput = {
    create?: XOR<RecipeCreateWithoutUstensilsInput, RecipeUncheckedCreateWithoutUstensilsInput> | RecipeCreateWithoutUstensilsInput[] | RecipeUncheckedCreateWithoutUstensilsInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUstensilsInput | RecipeCreateOrConnectWithoutUstensilsInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutUstensilsInput | RecipeUpsertWithWhereUniqueWithoutUstensilsInput[]
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutUstensilsInput | RecipeUpdateWithWhereUniqueWithoutUstensilsInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutUstensilsInput | RecipeUpdateManyWithWhereWithoutUstensilsInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type StepUpdateManyWithoutUstensilsNestedInput = {
    create?: XOR<StepCreateWithoutUstensilsInput, StepUncheckedCreateWithoutUstensilsInput> | StepCreateWithoutUstensilsInput[] | StepUncheckedCreateWithoutUstensilsInput[]
    connectOrCreate?: StepCreateOrConnectWithoutUstensilsInput | StepCreateOrConnectWithoutUstensilsInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutUstensilsInput | StepUpsertWithWhereUniqueWithoutUstensilsInput[]
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutUstensilsInput | StepUpdateWithWhereUniqueWithoutUstensilsInput[]
    updateMany?: StepUpdateManyWithWhereWithoutUstensilsInput | StepUpdateManyWithWhereWithoutUstensilsInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type RecipeUncheckedUpdateManyWithoutUstensilsNestedInput = {
    create?: XOR<RecipeCreateWithoutUstensilsInput, RecipeUncheckedCreateWithoutUstensilsInput> | RecipeCreateWithoutUstensilsInput[] | RecipeUncheckedCreateWithoutUstensilsInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUstensilsInput | RecipeCreateOrConnectWithoutUstensilsInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutUstensilsInput | RecipeUpsertWithWhereUniqueWithoutUstensilsInput[]
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutUstensilsInput | RecipeUpdateWithWhereUniqueWithoutUstensilsInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutUstensilsInput | RecipeUpdateManyWithWhereWithoutUstensilsInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutUstensilsNestedInput = {
    create?: XOR<StepCreateWithoutUstensilsInput, StepUncheckedCreateWithoutUstensilsInput> | StepCreateWithoutUstensilsInput[] | StepUncheckedCreateWithoutUstensilsInput[]
    connectOrCreate?: StepCreateOrConnectWithoutUstensilsInput | StepCreateOrConnectWithoutUstensilsInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutUstensilsInput | StepUpsertWithWhereUniqueWithoutUstensilsInput[]
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutUstensilsInput | StepUpdateWithWhereUniqueWithoutUstensilsInput[]
    updateMany?: StepUpdateManyWithWhereWithoutUstensilsInput | StepUpdateManyWithWhereWithoutUstensilsInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutMediasInput = {
    create?: XOR<RecipeCreateWithoutMediasInput, RecipeUncheckedCreateWithoutMediasInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutMediasInput
    connect?: RecipeWhereUniqueInput
  }

  export type StepCreateNestedOneWithoutMediasInput = {
    create?: XOR<StepCreateWithoutMediasInput, StepUncheckedCreateWithoutMediasInput>
    connectOrCreate?: StepCreateOrConnectWithoutMediasInput
    connect?: StepWhereUniqueInput
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type RecipeUpdateOneWithoutMediasNestedInput = {
    create?: XOR<RecipeCreateWithoutMediasInput, RecipeUncheckedCreateWithoutMediasInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutMediasInput
    upsert?: RecipeUpsertWithoutMediasInput
    disconnect?: RecipeWhereInput | boolean
    delete?: RecipeWhereInput | boolean
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutMediasInput, RecipeUpdateWithoutMediasInput>, RecipeUncheckedUpdateWithoutMediasInput>
  }

  export type StepUpdateOneWithoutMediasNestedInput = {
    create?: XOR<StepCreateWithoutMediasInput, StepUncheckedCreateWithoutMediasInput>
    connectOrCreate?: StepCreateOrConnectWithoutMediasInput
    upsert?: StepUpsertWithoutMediasInput
    disconnect?: StepWhereInput | boolean
    delete?: StepWhereInput | boolean
    connect?: StepWhereUniqueInput
    update?: XOR<XOR<StepUpdateToOneWithWhereWithoutMediasInput, StepUpdateWithoutMediasInput>, StepUncheckedUpdateWithoutMediasInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitFilter<$PrismaModel> | $Enums.Unit
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedEnumUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitWithAggregatesFilter<$PrismaModel> | $Enums.Unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitFilter<$PrismaModel>
    _max?: NestedEnumUnitFilter<$PrismaModel>
  }

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MediaCreateWithoutRecipeInput = {
    id?: string
    type: $Enums.MediaType
    src: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    step?: StepCreateNestedOneWithoutMediasInput
  }

  export type MediaUncheckedCreateWithoutRecipeInput = {
    id?: string
    type: $Enums.MediaType
    src: string
    alt: string
    step_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MediaCreateOrConnectWithoutRecipeInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutRecipeInput, MediaUncheckedCreateWithoutRecipeInput>
  }

  export type MediaCreateManyRecipeInputEnvelope = {
    data: MediaCreateManyRecipeInput | MediaCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type StepCreateWithoutRecipeInput = {
    id?: string
    name: string
    description: string
    order: number
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaCreateNestedManyWithoutStepInput
    aliments?: AlimentCreateNestedManyWithoutStepsInput
    ustensils?: UstensilCreateNestedManyWithoutStepsInput
  }

  export type StepUncheckedCreateWithoutRecipeInput = {
    id?: string
    name: string
    description: string
    order: number
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaUncheckedCreateNestedManyWithoutStepInput
    aliments?: AlimentUncheckedCreateNestedManyWithoutStepsInput
    ustensils?: UstensilUncheckedCreateNestedManyWithoutStepsInput
  }

  export type StepCreateOrConnectWithoutRecipeInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput>
  }

  export type StepCreateManyRecipeInputEnvelope = {
    data: StepCreateManyRecipeInput | StepCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type IngredientCreateWithoutRecipeInput = {
    id?: string
    name: string
    quantity: number
    unit: $Enums.Unit
    created_at?: Date | string
    updated_at?: Date | string
    aliment: AlimentCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientUncheckedCreateWithoutRecipeInput = {
    id?: string
    name: string
    quantity: number
    unit: $Enums.Unit
    aliment_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngredientCreateOrConnectWithoutRecipeInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput>
  }

  export type IngredientCreateManyRecipeInputEnvelope = {
    data: IngredientCreateManyRecipeInput | IngredientCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type UstensilCreateWithoutRecipesInput = {
    id?: string
    name: string
    image: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    steps?: StepCreateNestedManyWithoutUstensilsInput
  }

  export type UstensilUncheckedCreateWithoutRecipesInput = {
    id?: string
    name: string
    image: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    steps?: StepUncheckedCreateNestedManyWithoutUstensilsInput
  }

  export type UstensilCreateOrConnectWithoutRecipesInput = {
    where: UstensilWhereUniqueInput
    create: XOR<UstensilCreateWithoutRecipesInput, UstensilUncheckedCreateWithoutRecipesInput>
  }

  export type MediaUpsertWithWhereUniqueWithoutRecipeInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutRecipeInput, MediaUncheckedUpdateWithoutRecipeInput>
    create: XOR<MediaCreateWithoutRecipeInput, MediaUncheckedCreateWithoutRecipeInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutRecipeInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutRecipeInput, MediaUncheckedUpdateWithoutRecipeInput>
  }

  export type MediaUpdateManyWithWhereWithoutRecipeInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutRecipeInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    src?: StringFilter<"Media"> | string
    alt?: StringFilter<"Media"> | string
    recipe_id?: StringNullableFilter<"Media"> | string | null
    step_id?: StringNullableFilter<"Media"> | string | null
    created_at?: DateTimeFilter<"Media"> | Date | string
    updated_at?: DateTimeFilter<"Media"> | Date | string
  }

  export type StepUpsertWithWhereUniqueWithoutRecipeInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutRecipeInput, StepUncheckedUpdateWithoutRecipeInput>
    create: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput>
  }

  export type StepUpdateWithWhereUniqueWithoutRecipeInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutRecipeInput, StepUncheckedUpdateWithoutRecipeInput>
  }

  export type StepUpdateManyWithWhereWithoutRecipeInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutRecipeInput>
  }

  export type StepScalarWhereInput = {
    AND?: StepScalarWhereInput | StepScalarWhereInput[]
    OR?: StepScalarWhereInput[]
    NOT?: StepScalarWhereInput | StepScalarWhereInput[]
    id?: StringFilter<"Step"> | string
    name?: StringFilter<"Step"> | string
    description?: StringFilter<"Step"> | string
    order?: IntFilter<"Step"> | number
    recipe_id?: StringFilter<"Step"> | string
    created_at?: DateTimeFilter<"Step"> | Date | string
    updated_at?: DateTimeFilter<"Step"> | Date | string
  }

  export type IngredientUpsertWithWhereUniqueWithoutRecipeInput = {
    where: IngredientWhereUniqueInput
    update: XOR<IngredientUpdateWithoutRecipeInput, IngredientUncheckedUpdateWithoutRecipeInput>
    create: XOR<IngredientCreateWithoutRecipeInput, IngredientUncheckedCreateWithoutRecipeInput>
  }

  export type IngredientUpdateWithWhereUniqueWithoutRecipeInput = {
    where: IngredientWhereUniqueInput
    data: XOR<IngredientUpdateWithoutRecipeInput, IngredientUncheckedUpdateWithoutRecipeInput>
  }

  export type IngredientUpdateManyWithWhereWithoutRecipeInput = {
    where: IngredientScalarWhereInput
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyWithoutRecipeInput>
  }

  export type IngredientScalarWhereInput = {
    AND?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    OR?: IngredientScalarWhereInput[]
    NOT?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    id?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    quantity?: FloatFilter<"Ingredient"> | number
    unit?: EnumUnitFilter<"Ingredient"> | $Enums.Unit
    aliment_id?: StringFilter<"Ingredient"> | string
    recipe_id?: StringFilter<"Ingredient"> | string
    created_at?: DateTimeFilter<"Ingredient"> | Date | string
    updated_at?: DateTimeFilter<"Ingredient"> | Date | string
  }

  export type UstensilUpsertWithWhereUniqueWithoutRecipesInput = {
    where: UstensilWhereUniqueInput
    update: XOR<UstensilUpdateWithoutRecipesInput, UstensilUncheckedUpdateWithoutRecipesInput>
    create: XOR<UstensilCreateWithoutRecipesInput, UstensilUncheckedCreateWithoutRecipesInput>
  }

  export type UstensilUpdateWithWhereUniqueWithoutRecipesInput = {
    where: UstensilWhereUniqueInput
    data: XOR<UstensilUpdateWithoutRecipesInput, UstensilUncheckedUpdateWithoutRecipesInput>
  }

  export type UstensilUpdateManyWithWhereWithoutRecipesInput = {
    where: UstensilScalarWhereInput
    data: XOR<UstensilUpdateManyMutationInput, UstensilUncheckedUpdateManyWithoutRecipesInput>
  }

  export type UstensilScalarWhereInput = {
    AND?: UstensilScalarWhereInput | UstensilScalarWhereInput[]
    OR?: UstensilScalarWhereInput[]
    NOT?: UstensilScalarWhereInput | UstensilScalarWhereInput[]
    id?: StringFilter<"Ustensil"> | string
    name?: StringFilter<"Ustensil"> | string
    image?: StringFilter<"Ustensil"> | string
    description?: StringFilter<"Ustensil"> | string
    created_at?: DateTimeFilter<"Ustensil"> | Date | string
    updated_at?: DateTimeFilter<"Ustensil"> | Date | string
  }

  export type MediaCreateWithoutStepInput = {
    id?: string
    type: $Enums.MediaType
    src: string
    alt: string
    created_at?: Date | string
    updated_at?: Date | string
    recipe?: RecipeCreateNestedOneWithoutMediasInput
  }

  export type MediaUncheckedCreateWithoutStepInput = {
    id?: string
    type: $Enums.MediaType
    src: string
    alt: string
    recipe_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MediaCreateOrConnectWithoutStepInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutStepInput, MediaUncheckedCreateWithoutStepInput>
  }

  export type MediaCreateManyStepInputEnvelope = {
    data: MediaCreateManyStepInput | MediaCreateManyStepInput[]
    skipDuplicates?: boolean
  }

  export type RecipeCreateWithoutStepsInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaCreateNestedManyWithoutRecipeInput
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
    ustensils?: UstensilCreateNestedManyWithoutRecipesInput
  }

  export type RecipeUncheckedCreateWithoutStepsInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaUncheckedCreateNestedManyWithoutRecipeInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
    ustensils?: UstensilUncheckedCreateNestedManyWithoutRecipesInput
  }

  export type RecipeCreateOrConnectWithoutStepsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
  }

  export type AlimentCreateWithoutStepsInput = {
    id?: string
    name: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
    ingredients?: IngredientCreateNestedManyWithoutAlimentInput
  }

  export type AlimentUncheckedCreateWithoutStepsInput = {
    id?: string
    name: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
    ingredients?: IngredientUncheckedCreateNestedManyWithoutAlimentInput
  }

  export type AlimentCreateOrConnectWithoutStepsInput = {
    where: AlimentWhereUniqueInput
    create: XOR<AlimentCreateWithoutStepsInput, AlimentUncheckedCreateWithoutStepsInput>
  }

  export type UstensilCreateWithoutStepsInput = {
    id?: string
    name: string
    image: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    recipes?: RecipeCreateNestedManyWithoutUstensilsInput
  }

  export type UstensilUncheckedCreateWithoutStepsInput = {
    id?: string
    name: string
    image: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    recipes?: RecipeUncheckedCreateNestedManyWithoutUstensilsInput
  }

  export type UstensilCreateOrConnectWithoutStepsInput = {
    where: UstensilWhereUniqueInput
    create: XOR<UstensilCreateWithoutStepsInput, UstensilUncheckedCreateWithoutStepsInput>
  }

  export type MediaUpsertWithWhereUniqueWithoutStepInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutStepInput, MediaUncheckedUpdateWithoutStepInput>
    create: XOR<MediaCreateWithoutStepInput, MediaUncheckedCreateWithoutStepInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutStepInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutStepInput, MediaUncheckedUpdateWithoutStepInput>
  }

  export type MediaUpdateManyWithWhereWithoutStepInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutStepInput>
  }

  export type RecipeUpsertWithoutStepsInput = {
    update: XOR<RecipeUpdateWithoutStepsInput, RecipeUncheckedUpdateWithoutStepsInput>
    create: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutStepsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutStepsInput, RecipeUncheckedUpdateWithoutStepsInput>
  }

  export type RecipeUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUpdateManyWithoutRecipeNestedInput
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
    ustensils?: UstensilUpdateManyWithoutRecipesNestedInput
  }

  export type RecipeUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUncheckedUpdateManyWithoutRecipeNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    ustensils?: UstensilUncheckedUpdateManyWithoutRecipesNestedInput
  }

  export type AlimentUpsertWithWhereUniqueWithoutStepsInput = {
    where: AlimentWhereUniqueInput
    update: XOR<AlimentUpdateWithoutStepsInput, AlimentUncheckedUpdateWithoutStepsInput>
    create: XOR<AlimentCreateWithoutStepsInput, AlimentUncheckedCreateWithoutStepsInput>
  }

  export type AlimentUpdateWithWhereUniqueWithoutStepsInput = {
    where: AlimentWhereUniqueInput
    data: XOR<AlimentUpdateWithoutStepsInput, AlimentUncheckedUpdateWithoutStepsInput>
  }

  export type AlimentUpdateManyWithWhereWithoutStepsInput = {
    where: AlimentScalarWhereInput
    data: XOR<AlimentUpdateManyMutationInput, AlimentUncheckedUpdateManyWithoutStepsInput>
  }

  export type AlimentScalarWhereInput = {
    AND?: AlimentScalarWhereInput | AlimentScalarWhereInput[]
    OR?: AlimentScalarWhereInput[]
    NOT?: AlimentScalarWhereInput | AlimentScalarWhereInput[]
    id?: StringFilter<"Aliment"> | string
    name?: StringFilter<"Aliment"> | string
    image?: StringFilter<"Aliment"> | string
    created_at?: DateTimeFilter<"Aliment"> | Date | string
    updated_at?: DateTimeFilter<"Aliment"> | Date | string
  }

  export type UstensilUpsertWithWhereUniqueWithoutStepsInput = {
    where: UstensilWhereUniqueInput
    update: XOR<UstensilUpdateWithoutStepsInput, UstensilUncheckedUpdateWithoutStepsInput>
    create: XOR<UstensilCreateWithoutStepsInput, UstensilUncheckedCreateWithoutStepsInput>
  }

  export type UstensilUpdateWithWhereUniqueWithoutStepsInput = {
    where: UstensilWhereUniqueInput
    data: XOR<UstensilUpdateWithoutStepsInput, UstensilUncheckedUpdateWithoutStepsInput>
  }

  export type UstensilUpdateManyWithWhereWithoutStepsInput = {
    where: UstensilScalarWhereInput
    data: XOR<UstensilUpdateManyMutationInput, UstensilUncheckedUpdateManyWithoutStepsInput>
  }

  export type StepCreateWithoutAlimentsInput = {
    id?: string
    name: string
    description: string
    order: number
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaCreateNestedManyWithoutStepInput
    recipe: RecipeCreateNestedOneWithoutStepsInput
    ustensils?: UstensilCreateNestedManyWithoutStepsInput
  }

  export type StepUncheckedCreateWithoutAlimentsInput = {
    id?: string
    name: string
    description: string
    order: number
    recipe_id: string
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaUncheckedCreateNestedManyWithoutStepInput
    ustensils?: UstensilUncheckedCreateNestedManyWithoutStepsInput
  }

  export type StepCreateOrConnectWithoutAlimentsInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutAlimentsInput, StepUncheckedCreateWithoutAlimentsInput>
  }

  export type IngredientCreateWithoutAlimentInput = {
    id?: string
    name: string
    quantity: number
    unit: $Enums.Unit
    created_at?: Date | string
    updated_at?: Date | string
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientUncheckedCreateWithoutAlimentInput = {
    id?: string
    name: string
    quantity: number
    unit: $Enums.Unit
    recipe_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngredientCreateOrConnectWithoutAlimentInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutAlimentInput, IngredientUncheckedCreateWithoutAlimentInput>
  }

  export type IngredientCreateManyAlimentInputEnvelope = {
    data: IngredientCreateManyAlimentInput | IngredientCreateManyAlimentInput[]
    skipDuplicates?: boolean
  }

  export type StepUpsertWithWhereUniqueWithoutAlimentsInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutAlimentsInput, StepUncheckedUpdateWithoutAlimentsInput>
    create: XOR<StepCreateWithoutAlimentsInput, StepUncheckedCreateWithoutAlimentsInput>
  }

  export type StepUpdateWithWhereUniqueWithoutAlimentsInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutAlimentsInput, StepUncheckedUpdateWithoutAlimentsInput>
  }

  export type StepUpdateManyWithWhereWithoutAlimentsInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutAlimentsInput>
  }

  export type IngredientUpsertWithWhereUniqueWithoutAlimentInput = {
    where: IngredientWhereUniqueInput
    update: XOR<IngredientUpdateWithoutAlimentInput, IngredientUncheckedUpdateWithoutAlimentInput>
    create: XOR<IngredientCreateWithoutAlimentInput, IngredientUncheckedCreateWithoutAlimentInput>
  }

  export type IngredientUpdateWithWhereUniqueWithoutAlimentInput = {
    where: IngredientWhereUniqueInput
    data: XOR<IngredientUpdateWithoutAlimentInput, IngredientUncheckedUpdateWithoutAlimentInput>
  }

  export type IngredientUpdateManyWithWhereWithoutAlimentInput = {
    where: IngredientScalarWhereInput
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyWithoutAlimentInput>
  }

  export type AlimentCreateWithoutIngredientsInput = {
    id?: string
    name: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
    steps?: StepCreateNestedManyWithoutAlimentsInput
  }

  export type AlimentUncheckedCreateWithoutIngredientsInput = {
    id?: string
    name: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
    steps?: StepUncheckedCreateNestedManyWithoutAlimentsInput
  }

  export type AlimentCreateOrConnectWithoutIngredientsInput = {
    where: AlimentWhereUniqueInput
    create: XOR<AlimentCreateWithoutIngredientsInput, AlimentUncheckedCreateWithoutIngredientsInput>
  }

  export type RecipeCreateWithoutIngredientsInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaCreateNestedManyWithoutRecipeInput
    steps?: StepCreateNestedManyWithoutRecipeInput
    ustensils?: UstensilCreateNestedManyWithoutRecipesInput
  }

  export type RecipeUncheckedCreateWithoutIngredientsInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaUncheckedCreateNestedManyWithoutRecipeInput
    steps?: StepUncheckedCreateNestedManyWithoutRecipeInput
    ustensils?: UstensilUncheckedCreateNestedManyWithoutRecipesInput
  }

  export type RecipeCreateOrConnectWithoutIngredientsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
  }

  export type AlimentUpsertWithoutIngredientsInput = {
    update: XOR<AlimentUpdateWithoutIngredientsInput, AlimentUncheckedUpdateWithoutIngredientsInput>
    create: XOR<AlimentCreateWithoutIngredientsInput, AlimentUncheckedCreateWithoutIngredientsInput>
    where?: AlimentWhereInput
  }

  export type AlimentUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: AlimentWhereInput
    data: XOR<AlimentUpdateWithoutIngredientsInput, AlimentUncheckedUpdateWithoutIngredientsInput>
  }

  export type AlimentUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: StepUpdateManyWithoutAlimentsNestedInput
  }

  export type AlimentUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: StepUncheckedUpdateManyWithoutAlimentsNestedInput
  }

  export type RecipeUpsertWithoutIngredientsInput = {
    update: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUpdateManyWithoutRecipeNestedInput
    steps?: StepUpdateManyWithoutRecipeNestedInput
    ustensils?: UstensilUpdateManyWithoutRecipesNestedInput
  }

  export type RecipeUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: StepUncheckedUpdateManyWithoutRecipeNestedInput
    ustensils?: UstensilUncheckedUpdateManyWithoutRecipesNestedInput
  }

  export type RecipeCreateWithoutUstensilsInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaCreateNestedManyWithoutRecipeInput
    steps?: StepCreateNestedManyWithoutRecipeInput
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutUstensilsInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaUncheckedCreateNestedManyWithoutRecipeInput
    steps?: StepUncheckedCreateNestedManyWithoutRecipeInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutUstensilsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutUstensilsInput, RecipeUncheckedCreateWithoutUstensilsInput>
  }

  export type StepCreateWithoutUstensilsInput = {
    id?: string
    name: string
    description: string
    order: number
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaCreateNestedManyWithoutStepInput
    recipe: RecipeCreateNestedOneWithoutStepsInput
    aliments?: AlimentCreateNestedManyWithoutStepsInput
  }

  export type StepUncheckedCreateWithoutUstensilsInput = {
    id?: string
    name: string
    description: string
    order: number
    recipe_id: string
    created_at?: Date | string
    updated_at?: Date | string
    medias?: MediaUncheckedCreateNestedManyWithoutStepInput
    aliments?: AlimentUncheckedCreateNestedManyWithoutStepsInput
  }

  export type StepCreateOrConnectWithoutUstensilsInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutUstensilsInput, StepUncheckedCreateWithoutUstensilsInput>
  }

  export type RecipeUpsertWithWhereUniqueWithoutUstensilsInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutUstensilsInput, RecipeUncheckedUpdateWithoutUstensilsInput>
    create: XOR<RecipeCreateWithoutUstensilsInput, RecipeUncheckedCreateWithoutUstensilsInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutUstensilsInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutUstensilsInput, RecipeUncheckedUpdateWithoutUstensilsInput>
  }

  export type RecipeUpdateManyWithWhereWithoutUstensilsInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutUstensilsInput>
  }

  export type RecipeScalarWhereInput = {
    AND?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    OR?: RecipeScalarWhereInput[]
    NOT?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    id?: StringFilter<"Recipe"> | string
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    created_at?: DateTimeFilter<"Recipe"> | Date | string
    updated_at?: DateTimeFilter<"Recipe"> | Date | string
  }

  export type StepUpsertWithWhereUniqueWithoutUstensilsInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutUstensilsInput, StepUncheckedUpdateWithoutUstensilsInput>
    create: XOR<StepCreateWithoutUstensilsInput, StepUncheckedCreateWithoutUstensilsInput>
  }

  export type StepUpdateWithWhereUniqueWithoutUstensilsInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutUstensilsInput, StepUncheckedUpdateWithoutUstensilsInput>
  }

  export type StepUpdateManyWithWhereWithoutUstensilsInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutUstensilsInput>
  }

  export type RecipeCreateWithoutMediasInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    steps?: StepCreateNestedManyWithoutRecipeInput
    ingredients?: IngredientCreateNestedManyWithoutRecipeInput
    ustensils?: UstensilCreateNestedManyWithoutRecipesInput
  }

  export type RecipeUncheckedCreateWithoutMediasInput = {
    id?: string
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    steps?: StepUncheckedCreateNestedManyWithoutRecipeInput
    ingredients?: IngredientUncheckedCreateNestedManyWithoutRecipeInput
    ustensils?: UstensilUncheckedCreateNestedManyWithoutRecipesInput
  }

  export type RecipeCreateOrConnectWithoutMediasInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutMediasInput, RecipeUncheckedCreateWithoutMediasInput>
  }

  export type StepCreateWithoutMediasInput = {
    id?: string
    name: string
    description: string
    order: number
    created_at?: Date | string
    updated_at?: Date | string
    recipe: RecipeCreateNestedOneWithoutStepsInput
    aliments?: AlimentCreateNestedManyWithoutStepsInput
    ustensils?: UstensilCreateNestedManyWithoutStepsInput
  }

  export type StepUncheckedCreateWithoutMediasInput = {
    id?: string
    name: string
    description: string
    order: number
    recipe_id: string
    created_at?: Date | string
    updated_at?: Date | string
    aliments?: AlimentUncheckedCreateNestedManyWithoutStepsInput
    ustensils?: UstensilUncheckedCreateNestedManyWithoutStepsInput
  }

  export type StepCreateOrConnectWithoutMediasInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutMediasInput, StepUncheckedCreateWithoutMediasInput>
  }

  export type RecipeUpsertWithoutMediasInput = {
    update: XOR<RecipeUpdateWithoutMediasInput, RecipeUncheckedUpdateWithoutMediasInput>
    create: XOR<RecipeCreateWithoutMediasInput, RecipeUncheckedCreateWithoutMediasInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutMediasInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutMediasInput, RecipeUncheckedUpdateWithoutMediasInput>
  }

  export type RecipeUpdateWithoutMediasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: StepUpdateManyWithoutRecipeNestedInput
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
    ustensils?: UstensilUpdateManyWithoutRecipesNestedInput
  }

  export type RecipeUncheckedUpdateWithoutMediasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: StepUncheckedUpdateManyWithoutRecipeNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    ustensils?: UstensilUncheckedUpdateManyWithoutRecipesNestedInput
  }

  export type StepUpsertWithoutMediasInput = {
    update: XOR<StepUpdateWithoutMediasInput, StepUncheckedUpdateWithoutMediasInput>
    create: XOR<StepCreateWithoutMediasInput, StepUncheckedCreateWithoutMediasInput>
    where?: StepWhereInput
  }

  export type StepUpdateToOneWithWhereWithoutMediasInput = {
    where?: StepWhereInput
    data: XOR<StepUpdateWithoutMediasInput, StepUncheckedUpdateWithoutMediasInput>
  }

  export type StepUpdateWithoutMediasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutStepsNestedInput
    aliments?: AlimentUpdateManyWithoutStepsNestedInput
    ustensils?: UstensilUpdateManyWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateWithoutMediasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    aliments?: AlimentUncheckedUpdateManyWithoutStepsNestedInput
    ustensils?: UstensilUncheckedUpdateManyWithoutStepsNestedInput
  }

  export type MediaCreateManyRecipeInput = {
    id?: string
    type: $Enums.MediaType
    src: string
    alt: string
    step_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StepCreateManyRecipeInput = {
    id?: string
    name: string
    description: string
    order: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type IngredientCreateManyRecipeInput = {
    id?: string
    name: string
    quantity: number
    unit: $Enums.Unit
    aliment_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MediaUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    src?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    step?: StepUpdateOneWithoutMediasNestedInput
  }

  export type MediaUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    src?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    step_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    src?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    step_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUpdateManyWithoutStepNestedInput
    aliments?: AlimentUpdateManyWithoutStepsNestedInput
    ustensils?: UstensilUpdateManyWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUncheckedUpdateManyWithoutStepNestedInput
    aliments?: AlimentUncheckedUpdateManyWithoutStepsNestedInput
    ustensils?: UstensilUncheckedUpdateManyWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    aliment?: AlimentUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type IngredientUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    aliment_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    aliment_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UstensilUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: StepUpdateManyWithoutUstensilsNestedInput
  }

  export type UstensilUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: StepUncheckedUpdateManyWithoutUstensilsNestedInput
  }

  export type UstensilUncheckedUpdateManyWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyStepInput = {
    id?: string
    type: $Enums.MediaType
    src: string
    alt: string
    recipe_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MediaUpdateWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    src?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneWithoutMediasNestedInput
  }

  export type MediaUncheckedUpdateWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    src?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    recipe_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutStepInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    src?: StringFieldUpdateOperationsInput | string
    alt?: StringFieldUpdateOperationsInput | string
    recipe_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlimentUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUpdateManyWithoutAlimentNestedInput
  }

  export type AlimentUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: IngredientUncheckedUpdateManyWithoutAlimentNestedInput
  }

  export type AlimentUncheckedUpdateManyWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UstensilUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUpdateManyWithoutUstensilsNestedInput
  }

  export type UstensilUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUncheckedUpdateManyWithoutUstensilsNestedInput
  }

  export type UstensilUncheckedUpdateManyWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateManyAlimentInput = {
    id?: string
    name: string
    quantity: number
    unit: $Enums.Unit
    recipe_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StepUpdateWithoutAlimentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUpdateManyWithoutStepNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutStepsNestedInput
    ustensils?: UstensilUpdateManyWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateWithoutAlimentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUncheckedUpdateManyWithoutStepNestedInput
    ustensils?: UstensilUncheckedUpdateManyWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateManyWithoutAlimentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUpdateWithoutAlimentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type IngredientUncheckedUpdateWithoutAlimentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateManyWithoutAlimentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUpdateWithoutUstensilsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUpdateManyWithoutRecipeNestedInput
    steps?: StepUpdateManyWithoutRecipeNestedInput
    ingredients?: IngredientUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutUstensilsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: StepUncheckedUpdateManyWithoutRecipeNestedInput
    ingredients?: IngredientUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateManyWithoutUstensilsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepUpdateWithoutUstensilsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUpdateManyWithoutStepNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutStepsNestedInput
    aliments?: AlimentUpdateManyWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateWithoutUstensilsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medias?: MediaUncheckedUpdateManyWithoutStepNestedInput
    aliments?: AlimentUncheckedUpdateManyWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateManyWithoutUstensilsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    recipe_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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