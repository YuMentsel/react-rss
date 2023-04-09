import { useState, useEffect } from 'react';
import { BASE_URL } from '../../types/constants';
import { Character, ModalCardProps } from '../../types/interfaces';

function ModalCard({ cardId }: ModalCardProps) {
  const [data, setData] = useState<Character>();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${BASE_URL}/${cardId}`);
        const card: Character = await res.json();
        setData(card);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [cardId]);

  return data ? (
    <div className="card modal-card">
      <div className="card__photo" style={{ backgroundImage: `url(${data.image})` }}></div>
      <div className="card__info">
        <div className="card__species">{data.species}</div>
        <div className="card__title">{data.name}</div>
        <div>
          <span>Status: </span>
          {data.status}
        </div>
        <div>
          <span>Gender: </span>
          {data.gender}
        </div>
        <div>
          <span>Origin: </span>
          {data.origin.name}
        </div>
        <div>
          <span>Location: </span>
          {data.location.name}
        </div>
      </div>
    </div>
  ) : (
    <div className="card modal"></div>
  );
}

export default ModalCard;
