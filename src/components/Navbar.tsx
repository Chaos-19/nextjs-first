'use client'
import { useSession } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from 'next/navigation'

type Props = {}

const Navbar = (props: Props) => {

    const { isLoaded, session, isSignedIn } = useSession();

    const { signOut } = useClerk();

    const router = useRouter();

    return (
        <div className='py-8 flex items-center'>
            <Link href="/">
                <h3 className='text-lg font-bold text-gray-700 text-background'>Feed</h3>
            </Link>
            <ul className='flex gap-4 ms-auto items-center'>
                <li>
                    <Link href="/create">
                        <button>
                            New post
                        </button>
                    </Link>
                </li>
                {
                    Boolean(isSignedIn) && (
                        <li>
                            <Image
                                src={session?.user?.imageUrl as string}
                                alt="profile"
                                width={40}
                                height={40}
                                className='rounded-full'
                            />
                        </li>
                    )
                }
                {!Boolean(isSignedIn) ?
                    (<li>
                        <Link

                            href="/login">
                            LogIn
                        </Link>
                    </li>
                    ) : (

                        <li>
                            <button
                                className='bg-red-500 px-3 py-1.5 rounded'
                                onClick={() => signOut(() => router.push("/sing-in"))}
                            >
                                LogOut
                            </button>
                        </li>

                    )
                }
            </ul>

        </div>
    )
}

export default Navbar