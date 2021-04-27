export interface SuccessResponse<T> {
  success: true;
  result: T;
}

export interface FailedResponse<T> {
  success: false;
  status: number;
  message?: string;
}

export type ApiResponse<T> = SuccessResponse<T> | FailedResponse<T>;
