import Modal from './modal';
import drawCard from './card';

document.addEventListener("DOMContentLoaded", () => {
  const modal = new Modal();
  modal.closeModal();
  modal.openModal();

  const card = document.getElementById('strategy-card');
  card.addEventListener('click', () => {
    card.innerHTML = drawCard();
  });
});
