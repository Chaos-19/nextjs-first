async function gatFeeds() {
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
