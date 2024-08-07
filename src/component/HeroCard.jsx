import React, { useState } from 'react';

const HeroCard = ({ hero }) => {
  const [rating, setRating] = useState(() => {
    const savedRating = localStorage.getItem(`rating_${hero.name}`);
    return savedRating ? parseInt(savedRating) : 0;
  });

  const handleRatingChange = (num) => {
    setRating(num);
    localStorage.setItem(`rating_${hero.name}`, num);
  };

  return (
    <div className="hero_card">
      <div className='about_hero'>
        <h3>{hero.name}</h3>
        <p><strong>Вселенная:</strong> {hero.universe}</p>
        <p><strong>Альтер эго:</strong> {hero.alterego}</p>
        <p><strong>Род деятельности:</strong> {hero.occupation}</p>
        <p><strong>Друзья:</strong> {hero.friends}</p>
        <p><strong>Суперсилы:</strong> {hero.superpowers}</p>
      </div>
      <div className='image_box'>
        <img src={hero.url} alt={hero.name} className='image'/>
      </div>
      <div className='star'>
        <label>Ваша оценка: </label>
        <div>
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              onClick={() => handleRatingChange(num)} // Обработчик клика
              style={{
                cursor: 'pointer', // Указатель при наведении
                color: num <= rating ? 'gold' : 'grey', // Цвет звезд
                fontSize: '30px', // Размер звезд
              }}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


export default HeroCard;