"use server";

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
    const user = await currentUser();

    console.log(user?.firstName, user?.lastName,);
    console.log(formData.get("title"));


    await prisma.post.create({
        data: {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
            authorId: "clv30q1la00008efzwnx5ctbn",
        },
    },);

    revalidatePath("/");
}