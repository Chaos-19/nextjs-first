import { FeedType, getFeeds } from "@/api/getFeeds";
import Post, { PostType } from "@/components/Post";



export default async function Home() {

  const feeds: FeedType = await getFeeds();

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
