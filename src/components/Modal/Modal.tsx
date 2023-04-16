import { ModalProps } from '../../types/interfaces';
import ReactDOM from 'react-dom';
import { useAppDispatch } from '../../redux/hooks';
import { closeModal } from '../../redux/slices/modalSlice';

function Modal({ children }: ModalProps) {
  const dispatch = useAppDispatch();

  return ReactDOM.createPortal(
    <div className="modal" data-testid="modal">
      <div className="overlay" onClick={() => dispatch(closeModal())}></div>
      <div className="modal__wrapper">{children}</div>
    </div>,
    document.body
  );
}

export default Modal;
