const initState = {
    posts: [
        { id: 1, title: 'Squirtle laid an egg!', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non est dictum, iaculis magna iaculis, aliquet justo. Ut iaculis, velit nec ornare convallis, eros risus porta dui, ac dictum diam.' },
        { id: 2, title: 'Bulbasaur laid an egg!', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non est dictum, iaculis magna iaculis, aliquet justo. Ut iaculis, velit nec ornare convallis, eros risus porta dui, ac dictum diam.' },
        { id: 3, title: 'A Helix Fossil was found!', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non est dictum, iaculis magna iaculis, aliquet justo. Ut iaculis, velit nec ornare convallis, eros risus porta dui, ac dictum diam.' },
    ],
    search: []
};

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case 'DELETE_POST':
            let newPosts = state.posts.filter(post => post.id !== action.payload.id);
            return {
                ...state,
                posts: newPosts
            };
        case 'GET_POSTS_LIKE':
            let postsLike = state.posts.filter(post => post.title.includes(action.payload.title));
            return {
                ...state,
                search: postsLike
            }
        default:
            return state;
    }

};

export default rootReducer;