import Post, { PostType } from "@/components/Post";
import getFeeds, { FeedType } from "./api/getFeeds";

export default async function Home() {

  const posts: FeedType = await getFeeds();

  return (
    <main className="w-full h-full">
      <div className="p-4">
        <h1 className="text-2xl font-black capitalize">public feed</h1>
        <div className="pt-4">
          {
            posts?.feed.map((post) => <Post key={post.id} {...post} />)
          }
        </div>
      </div>
    </main>
  );
}
