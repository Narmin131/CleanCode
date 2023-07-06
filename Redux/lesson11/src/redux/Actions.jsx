export const AddBlogFunction = (blog) => {
    return{
        type:'ADD_BLOG',
        payload:blog
    }
};

export const RemoveBlogFunction = (id) => {
    return{
        type:'REMOVE_BLOG',
        payload:id
    }
};
