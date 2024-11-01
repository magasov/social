import "./rightbar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Предложения для Вас!</span>
          <div className="user">
            <div className="userInfo">
              <img src="assets/img/luna.jpg" alt="avatar" />
              <span>Adam</span>
            </div>
            <div className="buttons">
              <button>Подписаться</button>
              <button>Отклонить</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="assets/img/luna.jpg" alt="avatar" />
              <span>Adam</span>
            </div>
            <div className="buttons">
              <button>Подписаться</button>
              <button>Отклонить</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Последняя активность</span>
          <div className="user">
            <div className="userInfo">
              <img src="assets/img/luna.jpg" alt="avatar" />
              <p>
                <span>Adam</span> Подписался на вас
              </p>
            </div>
            <span>Минута назад</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="assets/img/luna.jpg" alt="avatar" />
              <p>
                <span>Adam</span> Подписался на вас
              </p>
            </div>
            <span>Минута назад</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="assets/img/luna.jpg" alt="avatar" />
              <p>
                <span>Adam</span> Подписался на вас
              </p>
            </div>
            <span>Минута назад</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="assets/img/luna.jpg" alt="avatar" />
              <p>
                <span>Adam</span> Подписался на вас
              </p>
            </div>
            <span>Минута назад</span>
          </div>
        </div>
        <div className="item">
          <span>Друзья в онлайн</span>
          <div className="user">
            <div className="userInfo">
              <img src="assets/img/luna.jpg" alt="avatar" />
              <div className="online" />
              <span>Adam</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="assets/img/luna.jpg" alt="avatar" />
              <div className="online" />
              <span>Adam</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="assets/img/luna.jpg" alt="avatar" />
              <div className="online" />
              <span>Adam</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="assets/img/luna.jpg" alt="avatar" />
              <div className="online" />
              <span>Adam</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="assets/img/luna.jpg" alt="avatar" />
              <div className="online" />
              <span>Adam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
