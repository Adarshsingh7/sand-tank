import axios from 'axios';

// creating the user class to generate the user
class Post {
  constructor (title, coverImage, content) {
    this.title = title;
    this.coverImage = coverImage;
    this.content = content;

    this.date = Date.now();
    this.createUser();
    this.slug = this.title.split(' ').join('_');
  }

  createUser = async function () {
    const res = (await axios.get('https://randomuser.me/api/?nat=in')).data.results[0];
    this.author = res.name.first + " " + res.name.last;
    this.authorPhoto = res.picture.large;
  };
}

// a function that takes the title converImage and content and then automatically generate the user and review
export const createPost = async function (title, coverImage, content) {
  try {
    // first initialize the post
    const newPost = new Post(title, coverImage, content);
    await newPost.createUser();

    // fetch our backend api
    const url = 'http://127.0.0.1:3000/api/posts/createPost';
    const post = await axios.post(url, newPost, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmU4YWU2MzgyZjEwZGYxZmE5ZWM5MSIsImlhdCI6MTcwNzAyMzU2MCwiZXhwIjoxNzA3NjI4MzYwfQ.i7knZqP7JDgCWWueMzir7NJP4QA1Zm91FxnowaYMvto`
      }
    });
    return post.data;
  } catch (err) {
    console.log(err.response.data);
    return undefined;
  }
};