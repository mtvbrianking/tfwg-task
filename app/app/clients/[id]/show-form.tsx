"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { Input } from "@/components/ui/input"

type ShowFormProps = {
    id: string
}

export function ShowForm({ id }: ShowFormProps) {
    const router = useRouter()

    const [client, setClient] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchClient = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/clients/${id}`)
                toast.success("Client loaded...")
                setClient(res.data)
            } catch (err: unknown) {
                toast.error("Failed to load client details.")
            } finally {
                setLoading(false)
            }
        }

        if (id) fetchClient()
    }, [id])

    const handleDelete = async () => {
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/clients/${id}`)
            toast.success("Client deleted successfully")
            router.push('/clients')
        } catch (err: unknown) {
            toast.error("Failed to delete client.")
        }
    }

    if (loading) return <p>Loading...</p>

    if (!client) return <p>Client not found</p>

    return (
        <div className="space-y-6">
            <div>
                <label className="block font-medium mb-1">First Name</label>
                <Input value={client.firstName} readOnly />
            </div>
            <div>
                <label className="block font-medium mb-1">Last Name</label>
                <Input value={client.lastName} readOnly />
            </div>
            <div>
                <label className="block font-medium mb-1">Email</label>
                <Input value={client.email} type="email" readOnly />
            </div>
            <div>
                <label className="block font-medium mb-1">Gender</label>
                <Input value={client.gender} readOnly />
            </div>
            <div>
                <label className="block font-medium mb-1">Avatar</label>
                <Input value={client.image} readOnly />
            </div>

            <div className="space-x-4 pt-4">
                <Link href={`/clients/${id}/edit`}>
                    <Button variant="outline" className="cursor-pointer">Edit</Button>
                </Link>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the client.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    )
}
