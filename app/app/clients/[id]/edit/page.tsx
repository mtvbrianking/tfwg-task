'use client';

import { useParams, notFound } from 'next/navigation';
import { EditForm } from "./edit-form"

export default function EditClientPage() {
    const { id } = useParams();

    if (isNaN(Number(id))) {
        notFound();
    }

    return (
        <EditForm id={id as string} />
    )
}
