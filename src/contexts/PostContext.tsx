import { Post } from '../types/Post';
import { createContext, Dispatch, ReactNode, use, useContext, useEffect, useReducer } from 'react';
import { PostActions, postReducer } from '@/reducers/postReducer';

const STORAGE_KEY = 'postContextContent';

type PostContextType = {
    posts: Post[];
    dispatch: Dispatch<PostActions>;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode}) => {

    const [posts, dispatch] = useReducer(postReducer, []);

    // para inicial o estado com os dados do localStorage, caso existam, devemos usar o useEffect,
    // pois o localStorage é uma API do browser e não pode ser acessada durante a renderização do componente
    useEffect(() => {
        const storedPosts = window?.localStorage?.getItem(STORAGE_KEY);
        if (storedPosts && storedPosts !== 'undefined') {
            JSON.parse(storedPosts).forEach((post: Post) => {
                console.log(post);
                dispatch({ type: 'add', payload: { title: post.title, body: post.body } });
            });
        }
    }, []);

    // monitorar as mudanças no estado de posts e salvar no localStorage sempre que houver uma mudança
    useEffect(() => {
        window?.localStorage?.setItem(STORAGE_KEY, JSON.stringify(posts));
    }, [posts]);

    return (
        <PostContext.Provider value={{ posts, dispatch }}>
            {children}
        </PostContext.Provider>
    );
}

export const usePosts = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePosts must be used within a PostProvider');
    }
    return context;
}