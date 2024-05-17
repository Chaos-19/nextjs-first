import { prisma } from "../../lib/prisma"
import React from 'react'
import ReactMarkDown from "react-markdown"

type Props = {
    params: {
        id: string
    }
}

export default async function page({ params: { id } }: Props) {

    const blog = await prisma.post.findUnique({
        where: {
            id: String(id),
        },
        include: {
            author: {
                select: {
                    name: true,
                    email: true
                }
            }
        }
    })

    return (
        <div className="w-full h-full">

            <div className="p-4">
                <h1 className="text-2xl font-black capitalize my-3">{blog?.title}</h1>
                <p className='text-base text-gray-800'>{blog?.author?.name}</p>
                <ReactMarkDown className='text-lg text-background mt-5'>{blog?.content}</ReactMarkDown>
            </div>
        </div>
    )
}