export interface FormRes {
    data: never | null;
    status: number | null;
    error: {
        type: "INTERNET" | "SERVER" | null;
        message: string | null;
    } | null;
}