"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createPost } from "@/actions/action"
import { useRef } from "react"

type Props = {}

const AddPost = (props: Props) => {
  
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={ref}
      className="gap-2 mx-auto flex flex-col"
      action={async (formData) => {
        ref.current?.reset();
        await createPost(formData)
      }}
    >
      <div>
        <label className="font-semibold" htmlFor="title">
          Title
        </label>
        <Input name="title" className="py-6 text-xl my-3 text-foreground" placeholder="Enter the title of your blog post" />
      </div>
      <div>
        <label className="font-semibold" htmlFor="content">
          Content
        </label>
        <Textarea name="content" rows={6} placeholder="Write your blog post content here..." className="mt-3 text-xl text-foreground" />
      </div>
      <Button type="submit" className="bg-background text-foreground border-foreground hover:text-background hover:border-background hover:border-2">Create Blog Post</Button>
    </form>
  )
}

export default AddPost