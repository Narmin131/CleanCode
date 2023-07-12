export const AddBlogFunction = (blog) => {
  return {
    type: "ADD_BLOG",
    payload: blog,
  };
};

export const RemoveBlogFunction = (id) => {
  return {
    type: "REMOVE_BLOG",
    payload: id,
  };
};

export const EditBlogFunction = (editBlog) => {
  return {
    type: "EDIT_BLOG",
    payload: editBlog,
  };
};

export const RemoveAllBlogsFunction = () => {
  return {
    type: "CLEAR_ALL_BLOG"
  };
};
