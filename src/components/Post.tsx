
import ReactMarkDown from 'react-markdown'


export type PostType = {
    id: string;
    title: string;
    author: {
        name: string;
        email: string;
    } | null;
    content: string;
    published: boolean;
}

const Post = ({ title, author = { name: "Unknown", email: "Unknown" }, content }: PostType) => {

    return (
        <div className='bg-background p-5 w-ful flex flex-col gap-3 rounded-xl shadow-md'>
            <h1 className="text-2xl font-black capitalize text-foreground">{title}</h1>
            <p className='text-base text-gray-800'>{author?.name}</p>
            <ReactMarkDown className='text-lg text-foreground'>{content}</ReactMarkDown>
        </div>
    )
}

export default Post