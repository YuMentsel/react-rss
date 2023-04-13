import { ModalProps } from '../../types/interfaces';

function Modal({ children, setModal }: ModalProps) {
  return (
    <div className="modal" data-testid="modal">
      <div className="overlay" onClick={setModal}></div>
      <div className="modal__wrapper">{children}</div>
    </div>
  );
}

export default Modal;
