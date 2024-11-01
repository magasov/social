import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://img.freepik.com/premium-photo/chrome-white-bmw-m3-competition-burnout-neonlit-underground-garage-with-billowing-smoke-led-lights_1298309-23185.jpg?semt=ais_hybrid",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://img.freepik.com/premium-photo/chrome-white-bmw-m3-competition-burnout-neonlit-underground-garage-with-billowing-smoke-led-lights_1298309-23567.jpg?semt=ais_hybrid",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://larte-design.ru/storage/app/media/blog/rus/body-kit-winner-mercedes-amg-gle-63-s-coupe/k-5-0x0-6f7.webp",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://www.allcarz.ru/wp-content/uploads/2015/03/foto-gle-63-amg_01.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="story.img" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div key={story.id} className="story">
          <img src={story.img} alt="story.img" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
