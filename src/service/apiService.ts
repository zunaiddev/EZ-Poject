import {AxiosError} from "axios";
import API from "./API.ts";
import ErrorType from "../types/ErrorType.ts";
import type {FormReq} from "../types/FormReq.ts";

interface FormResponse {
    data: never | null;
    status: number | null;
    error: {
        type: ErrorType | null;
        message: string | null;
    };
}

export async function submitForm(data: FormReq): Promise<FormResponse> {
    try {
        const response = await API.post("/contact-us", data, {timeout: 10000});

        return {
            data: response.data,
            status: response.status,
            error: {type: null, message: null},
        };
    } catch (err) {
        const error = err as AxiosError;

        if (error.code === "ECONNABORTED") {
            return {
                data: null,
                status: null,
                error: {
                    type: ErrorType.SERVER,
                    message: "Request timed out. Please try again.",
                },
            };
        }

        if (error.message === "Network Error") {
            return {
                data: null,
                status: null,
                error: {
                    type: ErrorType.INTERNET,
                    message: "No internet connection or server unreachable.",
                },
            };
        }

        return {
            data: null,
            status: error.response?.status || null,
            error: {type: ErrorType.SERVER, message: "Something went wrong."},
        };
    }
}