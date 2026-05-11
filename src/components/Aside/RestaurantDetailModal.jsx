import PropTypes from 'prop-types';
import '../styles/default.css';
import '../styles/RestaurantDetailModal.css';
import Modal from '../Modal';

function RestaurantDetailModal({ setIsDetailModal, selectedRestaurant }) {
  return (
    <Modal onClose={() => setIsDetailModal(false)}>
      <h2 className="modal-title text-title">{selectedRestaurant.name}</h2>
      <div className="restaurant-info">
        <p className="restaurant-info__description text-body">{selectedRestaurant.description}</p>
      </div>
      <div className="button-container">
        <button
          type="button"
          className="button button--primary text-caption"
          onClick={() => setIsDetailModal(false)}
        >
          닫기
        </button>
      </div>
    </Modal>
  );
}
RestaurantDetailModal.propTypes = {
  setIsDetailModal: PropTypes.func.isRequired,
  selectedRestaurant: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default RestaurantDetailModal;
