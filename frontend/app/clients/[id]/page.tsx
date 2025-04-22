'use client';

import { useParams, notFound } from 'next/navigation';
import { ShowForm } from "./show-form"

export default function ShowClientPage() {
    const { id } = useParams();

    if (isNaN(Number(id))) {
        notFound();
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <ShowForm id={id as string} />
        </div>
    )
}
