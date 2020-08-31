import React, { useState } from 'react';
import './style.scss';

enum SONGS {
  ONE = '1',
  TWO = '2',
  THREE = '3',
}

const PlaylistCarousel = () => {
  const [activeItem, setActiveItem] = useState<string>(SONGS.ONE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setActiveItem(event.target.value);

    document.body.classList.toggle('blue');
  };

  return (
    <div className="container">
      <input
        type="radio"
        name="slider"
        value={SONGS.ONE}
        id="item-1"
        checked={activeItem === SONGS.ONE}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="slider"
        value={SONGS.TWO}
        id="item-2"
        checked={activeItem === SONGS.TWO}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="slider"
        value={SONGS.THREE}
        id="item-3"
        checked={activeItem === SONGS.THREE}
        onChange={handleChange}
      />
      <div className="cards">
        <label className="card" htmlFor="item-1" id="song-1">
          <img src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song" />
        </label>
        <label className="card" htmlFor="item-2" id="song-2">
          <img src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song" />
        </label>
        <label className="card" htmlFor="item-3" id="song-3">
          <img src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song" />
        </label>
      </div>
      <div className="player">
        <div className="upper-part">
          <div className="play-icon">
            <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-play" viewBox="0 0 24 24">
              <defs />
              <path d="M5 3l14 9-14 9V3z"/>
            </svg>
          </div>
          <div className="info-area" id="info-area">
            <label className="song-info" id="song-info-1">
              <div className="title">Bunker</div>
              <div className="sub-line">
                <div className="subtitle">Balthazar</div>
                <div className="time">4.05</div>
              </div>
            </label>
            <label className="song-info" id="song-info-2">
              <div className="title">Words Remain</div>
              <div className="sub-line">
                <div className="subtitle">Moderator</div>
                <div className="time">4.05</div>
              </div>
            </label>
            <label className="song-info" id="song-info-3">
              <div className="title">Falling Out</div>
              <div className="sub-line">
                <div className="subtitle">Otzeki</div>
                <div className="time">4.05</div>
              </div>
            </label>
          </div>
        </div>
        <div className="progress-bar">
          <span className="progress"></span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCarousel;
