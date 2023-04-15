import Spinner from '../../components/Spinner';
import { useGetCharacterByIdQuery } from '../../redux/api';

import { ModalCardProps } from '../../types/interfaces';

function ModalCard({ cardId, setModal }: ModalCardProps) {
  const { data, isLoading, isError } = useGetCharacterByIdQuery(cardId);

  return isLoading ? (
    <Spinner />
  ) : isError ? (
    <div className="error">Failed to fetch. Click on the background!</div>
  ) : data ? (
    <>
      <div className="card modal-card" data-testid="modal-card">
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
      <div className="close" onClick={setModal} data-testid="close">
        ✖
      </div>
    </>
  ) : (
    <div className="card modal"></div>
  );
}

export default ModalCard;
