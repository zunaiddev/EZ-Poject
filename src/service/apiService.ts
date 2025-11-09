import {AxiosError} from "axios";
import API from "./API.ts";
import type {FormReq} from "../types/FormReq.ts";
import type {FormRes} from "../types/FormRes.ts";

export async function submitForm(data: FormReq): Promise<FormRes> {
    console.log("data", data);

    try {
        const response =
            await API.post("/contact-us/", data);

        return {
            data: response.data,
            status: response.status,
            error: null,
        };
    } catch (err) {
        const error = err as AxiosError;

        if (error.code === "ECONNABORTED") {
            return {
                data: null,
                status: null,
                error: {
                    type: "SERVER",
                    message: "Request timed out. Please try again.",
                },
            };
        }

        if (error.message === "Network Error") {
            return {
                data: null,
                status: null,
                error: {
                    type: "INTERNET",
                    message: "No internet connection or server unreachable.",
                },
            };
        }

        return {
            data: null,
            status: error.response?.status || null,
            error: {type: "SERVER", message: "Something went wrong."},
        };
    }
}