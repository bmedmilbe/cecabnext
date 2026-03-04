type BaseResponse = { message: string };

export type ActionAPIResponse<T> =
  | (BaseResponse & {
      success: true;
      data?: T;
      error?: never;
      errors?: never;
      status?: number;
    })
  | (BaseResponse & {
      success: false;
      data?: never;
      error: string;
      errors?: Record<string, string[]>;
      status?: number;
    });

export type PaginatedResult<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type ActionAPIResponseList<T> =
  | (BaseResponse & {
      success: true;
      data?: PaginatedResult<T>;
      error?: never;
      errors?: never;
      status?: number;
    })
  | (BaseResponse & {
      success: false;
      data?: never;
      error: string;
      errors?: Record<string, string[]>;
      status?: number;
    });

export type ActionResponse = BaseResponse & {
  success: boolean;
  error?: string;
  errors?: Record<string, string[]>;
};
export type ActionFormResponse = ActionResponse & { input: object };
