import Post, { PostType } from "@/components/Post";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default async function Home() {

  const feeds = await gatFeeds() as { feed: PostType[] };

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
