import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Амхадов Адам",
      userId: 1,
      profilePic:
        "https://cdn.tripster.ru/thumbs2/922a8231-2bc0-11e9-9c3b-02b782d69cda.870x490.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://cdn.tripster.ru/thumbs2/922a8231-2bc0-11e9-9c3b-02b782d69cda.870x490.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://severnykavkaz.ru/wp-content/uploads/2019/02/gory-ingushetii.jpg",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://severnykavkaz.ru/wp-content/uploads/2019/02/gory-ingushetii.jpg",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
