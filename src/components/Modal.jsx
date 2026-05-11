function Modal({ children, onClose }) {
  return (
    <div className="modal modal--open">
      <div
        role="button"
        tabIndex={0}
        className="modal-backdrop"
        aria-label="모달 닫기"
        onKeyDown={onClose}
        onClick={onClose}
      />
      <div className="modal-container">{children}</div>
    </div>
  );
}
export default Modal;
