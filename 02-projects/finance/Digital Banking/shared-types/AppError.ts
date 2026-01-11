export interface AppError {
    message: string;
    statusCode: number;
    rawError?: any;
}