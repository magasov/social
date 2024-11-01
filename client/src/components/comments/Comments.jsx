import React from "react";

import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = React.useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://s.auto.drom.ru/img4/catalog/photos/fullsize/mercedes-benz/e-class/mercedes-benz_e-class_35651.jpg",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://vipavto39.ru/wp-content/uploads/2019/01/Arenda_Mercedes_E_Class_W212_AMG_SPb_DALEX_VIP-1024x717.jpg",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Напишите комментарий" />
        <button>Отправить</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 час назад</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
