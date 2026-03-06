import { usePosts } from "@/contexts/PostContext";
import { Post } from "@/types/Post";
import { useState } from "react";

export const Posts = () => {
    const postContext = usePosts();
    const [newPost, setNewPost] = useState<Post>({ id: '', title: '', body: '' });
    const length = postContext?.posts?.length ?? 0;

    const handleTypeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(e.currentTarget.id == 'title-input-text'){
            if(newPost){
                setNewPost({...newPost, title: e.currentTarget.value});
            } else {
                setNewPost({id: '', title: e.currentTarget.value, body: ''});
            }
        } else {
            if(newPost){
                setNewPost({...newPost, body: e.currentTarget.value});
            } else {
                setNewPost({id: '', title: '', body: e.currentTarget.value});
            }
        }
    }

    const handleAddClick = () => {
        if(newPost.title && newPost.body){
            postContext?.dispatch({ type: 'add', payload: { title: newPost.title, body: newPost.body } });
        }
    }

    const handleDeleteClick = (id: string) => {
        postContext?.dispatch({ type: 'remove', payload: { id } });
    }

    return (
        <div className="w-scren h-screen flex flex-col items-center text-2xl">
            <h1 className="text-4xl mt-5">Posts</h1>
            <div className="flex flex-wrap w-full max-w-lg my-3 p-4 rounded-md bg-gray-500 border-2 border-gray-700">
                <div className="w-full flex flex-wrap p-3 border border-black rounded-md">
                    <input
                        type="text"
                        placeholder="Título"
                        className="flex-1 border border-black p-3 text-2xl text-black rounded-md mb-3"
                        value={newPost.title}
                        onChange={handleTypeInput}
                        id="title-input-text"
                    />

                    <textarea
                        placeholder="Postagem"
                        className="w-full border border-black p-3 text-2xl text-black rounded-md mb-3"
                        value={newPost.body}
                        id="body-input-text"
                        onChange={handleTypeInput}
                    ></textarea>
                    <button className="bg-blue-500 p-3 rounded flex-1" onClick={handleAddClick}>Adicionar</button>
                </div>
                <ul className="w-full max-w-lg list-disc">
                    {postContext?.posts?.map((post) => (
                        <li
                            key={post.id}
                            className="flex py-3 my-3 border-b border-gray-788 justify-between"
                        >
                            <div className="flex flex-col">
                                <span className="text-3xl mr-3">{post.title}</span>
                                <span className="text-1xl">{post.body}</span>
                            </div>
                            <div className="flex flex-nowrap">
                                {/* <button
                                    className="mr-2 text-black hover:text-gray justify-self-end-safe"
                                    onClick={() => handleClickEditar(item.id)}
                                >Editar
                                </button> */}
                                <button
                                    onClick={() => handleDeleteClick(post.id)}
                                    className="bg-red-500 p-2 rounded text-white hover:text-black justify-self-end-safe cursor-pointer"
                                >Excluir</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <footer>
                    <p className="my-4">
                        {length === 0 && 'Não há post.'}
                        {length === 1 && '1 post.'}
                        {length && length > 1 && length + ' posts.'}
                    </p>
                </footer>
            </div>
        </div>
    );
}