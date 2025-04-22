'use client';

import { useParams, notFound } from 'next/navigation';
import { ShowForm } from "./show-form"

export default function ShowClientPage() {
    const { id } = useParams();

    // if (isNaN(Number(id))) {
    //     notFound();
    // }

    return (
        <ShowForm id={id as string} />
    )
}
