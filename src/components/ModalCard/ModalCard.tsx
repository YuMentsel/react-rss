import Spinner from '../../components/Spinner';
import { useGetCharacterByIdQuery } from '../../redux/api';
import { ModalCardProps } from '../../types/interfaces';

function ModalCard({ id, closeModal }: ModalCardProps) {
  const { currentData, isFetching, isError } = useGetCharacterByIdQuery(id);

  return isFetching ? (
    <Spinner />
  ) : isError ? (
    <div className="error">Failed to fetch. Click on the background!</div>
  ) : currentData ? (
    <>
      <div className="card modal-card" data-testid="modal-card">
        <div className="card__photo" style={{ backgroundImage: `url(${currentData.image})` }}></div>
        <div className="card__info">
          <div className="card__species">{currentData.species}</div>
          <div className="card__title">{currentData.name}</div>
          <div>
            <span>Status: </span>
            {currentData.status}
          </div>
          <div>
            <span>Gender: </span>
            {currentData.gender}
          </div>
          <div>
            <span>Origin: </span>
            {currentData.origin.name}
          </div>
          <div>
            <span>Location: </span>
            {currentData.location.name}
          </div>
        </div>
      </div>
      <div className="close" onClick={closeModal} data-testid="close">
        ✖
      </div>
    </>
  ) : (
    <div className="card modal"></div>
  );
}

export default ModalCard;
