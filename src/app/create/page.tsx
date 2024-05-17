import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import AddPost from "@/components/AddPost";

export default function createBlog() {
    return (

        <div className="">
            <h2 className="text-4xl font-black capitalize py-2 my-b">new draft</h2>
            <AddPost />
        </div>
    )
}