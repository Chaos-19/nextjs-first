import Post from "@/components/Post";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export type PostType = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

export function gatFeeds(): Promise<{ feed: PostType[] }> {
  const feed = [
    {
      id: "1",
      title: "Prisma is the perfect ORM for Next.js",
      content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      author: {
        name: "Nikolas Burk",
        email: "burk@prisma.io",
      },
    },
  ]

  return new Promise((resolve) => setTimeout(() => resolve({ feed }), 1000))
}

export default async function Home() {

  const feeds: { feed: PostType[] } = await gatFeeds();



  return (
    <main className="w-full h-full">
      <div className="p-4">
        <h1 className="text-2xl font-black capitalize">public feed</h1>

        <div className="pt-4">
          {
            feeds?.feed?.map((feed) => {
              return <Post key={feed?.id} {...feed} />
            })
          }
        </div>
      </div>
    </main>
  );
}
