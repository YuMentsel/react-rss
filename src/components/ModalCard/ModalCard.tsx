import Spinner from '../../components/Spinner';
import { useGetCharacterByIdQuery } from '../../redux/api';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { closeModal } from '../../redux/slices/modalSlice';

function ModalCard() {
  const dispatch = useAppDispatch();
  const cardId = useAppSelector((state) => state.modal.id);
  const { currentData, isFetching, isError } = useGetCharacterByIdQuery(cardId);

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
      <div className="close" onClick={() => dispatch(closeModal())} data-testid="close">
        ✖
      </div>
    </>
  ) : (
    <div className="card modal"></div>
  );
}

export default ModalCard;
