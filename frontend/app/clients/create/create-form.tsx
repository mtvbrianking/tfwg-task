"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { Button, buttonVariants } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ChevronDown } from "lucide-react"
import { errorHandler } from "@/lib/axiosErrorHandler"
import { useRouter } from 'next/navigation';

const createFormSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email(),
    gender: z.string().min(1, { message: "Gender is required" }),
    image: z.string().url().optional(),
})

type CreateFormValues = z.infer<typeof createFormSchema>

const defaultValues: Partial<CreateFormValues> = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    image: "",
}

export function CreateForm() {
    const form = useForm<CreateFormValues>({
        resolver: zodResolver(createFormSchema),
        defaultValues,
    })

    const router = useRouter()

    const onSubmit = async (data: CreateFormValues) => {
        try {
            form.clearErrors();

            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/clients`, data);

            toast.message('Client created...');

            router.push(`/clients/${res.data.id}`);
        } catch (err: unknown) {
            errorHandler(err, form);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-6 rounded shadow space-y-8">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="A valid email address..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <div className="relative w-max">
                                <FormControl>
                                    <select
                                        className={cn(
                                            buttonVariants({ variant: "outline" }),
                                            "w-[200px] appearance-none font-normal"
                                        )}
                                        {...field}
                                    >
                                        <option value="">Choose gender...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </FormControl>
                                <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Avatar</FormLabel>
                            <FormControl>
                                <Input type="url" placeholder="Simply add a URL" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Create client</Button>
            </form>
        </Form>
    )
}
