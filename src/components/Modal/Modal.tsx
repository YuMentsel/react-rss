import { ModalProps } from '../../types/interfaces';
import ReactDOM from 'react-dom';

function Modal({ children, setModal }: ModalProps) {
  return ReactDOM.createPortal(
    <div className="modal" data-testid="modal">
      <div className="overlay" onClick={setModal}></div>
      <div className="modal__wrapper">{children}</div>
    </div>,
    document.body
  );
}

export default Modal;
