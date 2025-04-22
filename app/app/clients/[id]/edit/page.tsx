'use client';

import { useParams, notFound } from 'next/navigation';
import { EditForm } from "./edit-form"

export default function EditClientPage() {
    const { id } = useParams();

    if (isNaN(Number(id))) {
        notFound();
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <EditForm id={id as string} />
        </div>
    )
}
