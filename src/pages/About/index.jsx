/* eslint-disable jsx-a11y/alt-text */
import style from "../About/style.module.css";
import React from "react";
import { Wave } from "react-animated-text";
import { FcBusinesswoman } from "react-icons/fc";
import Particle from "../../components/Particle";

const About = () => {
  return (
    <div id="about" className="row">
      <div className={style.about}>
        <h3 className={style.woman}>
          <Wave text="About me" />
          <FcBusinesswoman className={style.a} />
        </h3>
      </div>
      <div className={style.par}>
        <Particle />
      </div>
      <div className="col col-md-6 col-sm-12">
        <div className={style.aboutpr}>
          <img src="./img/profile-pic.png" className={style.pic} />
        </div>
      </div>
      <div className="col col-md-6 col-sm-12">
        <div className={style.span}>
          <h2>
            Намайг Мөнхцэцэг гэнэ<br />
            <span>Full Stack Developer</span>
          </h2>
          <p className={style.tag}>
          Уртнасан овогтой Мөнхцэцэг 2007 онд Улаанбаатар дээд сургуулийг программ хангамжийн инженер мэргэжлээр баклавр, 
          2012 онд Солонгос улсын Дэжон хотын Pai Chai University -д E-Commerce мэргэжлээр магистрийн зэрэгтэй тус тус төгссөн. 
          Солонгост  H BEAM -ийн үйлдвэрийн зураг төслийн багт 5 сар ажилласан туршлагатай. 
          Солонгос хэлний 4-р түвшинтэй. Одоогоор Pinecone Academy-д вэб хөгжүүлэгчээр  9 сарын турш амжилттай суралцаад төгсөх гэж байна.
           Суралцаж байх хугацаандаа MERN stack багаар ажиллах, асуудлыг оновчтой шийдвэрлэх, хэрэгтэй мэдээллээ богино хугацаанд хайж олох зэрэг чадваруудыг эзэмшсэн.

          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
