import React from 'react'
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
        <Featured />
        <TrustedBy  />
        <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
             <h1>A Whole world Of Freelance talent at uyour fingerprint.</h1>
          </div>
          <div className="item">
             <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home