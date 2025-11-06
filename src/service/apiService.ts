import type {FormReq} from "../types/FormReq.ts";
import API from "./API.ts";

async function submitForm(data: FormReq): Promise<unknown> {
    try {
        const response = await API.post("/contact-us", data);

        return {
            data: response.data,
            status: response.status
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}

export {submitForm}