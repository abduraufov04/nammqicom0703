// BlogService.js

class BlogService {
    // Simulated data storage for blog posts
    static blogPosts = [];
  
    // Method to create a new blog post
    static createPost(title, content, authorId) {
      const newPost = {
        id: this.blogPosts.length + 1,
        title,
        content,
        authorId,
        timestamp: new Date().toISOString(),
      };
      this.blogPosts.push(newPost);
      return newPost;
    }
  
    // Method to get all blog posts
    static getAllPosts() {
      return this.blogPosts;
    }
  
    // Method to get a specific blog post by ID
    static getPostById(postId) {
      return this.blogPosts.find((post) => post.id === postId);
    }
  
    // Method to delete a blog post by ID
    static deletePost(postId) {
      this.blogPosts = this.blogPosts.filter((post) => post.id !== postId);
    }
  }
  
  export default BlogService;
  