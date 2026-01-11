import { AppError } from '@/shared-types/AppError';
import { AxiosError } from 'axios';



export const globalErrorHandler = (error: AxiosError): AppError => {
    const statusCode = error.response?.status || 500;
    let message = 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً';

    // معالجة الأخطاء بناءً على كود الحالة (Status Code)
    if (statusCode === 400) message = 'البيانات المرسلة غير صحيحة';
    if (statusCode === 404) message = 'العنصر المطلوب غير موجود';
    if (statusCode === 403) message = 'ليس لديك صلاحية للقيام بهذا الإجراء';
    if (statusCode === 500) message = 'مشكلة في خادم البنك، يرجى الانتظار';
    if (error.code === 'ECONNABORTED') message = 'انتهت مهلة الطلب، اعد المحاولة';

    return {
        message,
        statusCode,
        rawError: error.response?.data
    };
};