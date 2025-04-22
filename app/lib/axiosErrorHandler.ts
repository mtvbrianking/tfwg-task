import { UseFormReturn, FieldValues, Path } from "react-hook-form"
import axios, { AxiosError } from "axios"
import { toast } from "sonner"
import { notFound } from "next/navigation";

type ApiErrorResponse = {
    message: string;
    errors?: Record<string, string[]>;
}

export function errorHandler<T extends FieldValues>(
    err: unknown,
    form: UseFormReturn<T>
) {
    if (!axios.isAxiosError(err)) {
        console.warn(err);
        toast.error("Something went terribly wrong...");
        return;
    }

    const apiError = err as AxiosError<ApiErrorResponse>;
    const { response } = apiError;

    if (response?.status === 404) {
        notFound();
        return;
    }

    if (!response?.data) {
        toast.error(apiError.message);
        return;
    }

    const { message, errors } = response.data;

    toast.error(message);

    if (!errors) return;

    Object.entries(errors).forEach(([field, messages]) => {
        form.setError(field as Path<T>, {
            type: "server",
            message: messages[0],
        });
    });
}
