import React from "react";

import "./avatarImg.scss";

import avatarImg from "../../assets/images/avatarImg.png";

const HeroAvatar = () => {
   return (
      <div className="avatar-container">
         <img src={avatarImg} alt="ASDF" className="avatar-container__img" />
         <div className="avatar-container__blur-div"></div>
      </div>
   );
};

export default HeroAvatar;
