export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        payload: {
            id: id
        }
    };
};

export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        payload: {
            id: post.id,
            title: post.title,
            body: post.body
        }
    };
};

export const getPost = (title) => {
    return {
        type: 'GET_POSTS_LIKE',
        payload: {
            title: title
        }
    }
}

