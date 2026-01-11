import axios from 'axios';
import { globalErrorHandler } from './error-handler';

export const apiClient = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
        // 1. تحويل الخطأ إلى الصيغة العالمية التي أنشأناها
        const formattedError = globalErrorHandler(error);

        console.error(`[Global Error]: ${formattedError.message}`, formattedError);

        // 3. نمرر الخطأ المهيأ لـ TanStack Query ليتعامل معه في الكاش
        return Promise.reject(formattedError);
    }
);