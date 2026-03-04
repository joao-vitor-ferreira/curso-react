import { Post } from "@/types/Post";

type AddAction = {
    type: 'add';
    payload: {
        title: string;
        body: string;
    }
}

type RemoveAction = {
    type: 'remove';
    payload: {
        id: string;
    }
}

export type PostActions = AddAction | RemoveAction;

export const postReducer = (posts: Post[], action: PostActions) => {
    switch (action.type) {
        case 'add':
            const newPost: Post = {
                id: crypto.randomUUID(),
                title: action.payload.title,
                body: action.payload.body
            }
            return [...posts, newPost];
        case 'remove':
            return posts.filter(post => post.id !== action.payload.id);
        default:
            return posts;
    }
}