import React from 'react'
export function POST(request: Request) {

    console.log(request.body)

    return Response.json({
        success: true,

        message: "success",
        data: request.body
    })
}