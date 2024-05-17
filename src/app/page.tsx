import Post, { PostType } from "@/components/Post";

import { prisma } from "@/lib/prisma";
import { Suspense } from "react";



async function SinglePost({ params }: { params: { id: string } }) {

  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: {
          name: true,
          email: true
        },
      },
    },
  }) as PostType;



  return <Post {...post} />
}

export default async function Home() {

  const feeds = await prisma.post.findMany();


  return (
    <main className="w-full h-full">
      <div className="p-4">
        <h1 className="text-2xl font-black capitalize">public feed</h1>
        <div className="pt-4 flex flex-col gap-3">
          <Suspense fallback={<div>Loading...</div>}>
            {
              feeds.map((post) => <SinglePost params={{ id: post.id }} key={post.id} {...post} />)
            }
          </Suspense>
        </div>
      </div>
    </main>
  );
}
