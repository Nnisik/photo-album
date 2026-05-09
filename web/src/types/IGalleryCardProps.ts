export interface IGalleryCardProps {
    id: number,
    type: "image_post",
    author?: {
        id: number,
        username: string,
        displayName: string,
        avatarUrl: string
    },
    caption: string,
    image: {
        url: string,
        altText: string
    },
    tags?: string[],
    likes: number,
    createdAt?: string,
    updatedAt?: string
}