import { openModal } from '../../utils/handleModal';

function eventRemove(setToRemove) {
  const tbody = document.getElementsByTagName('tbody')[0];
  const trs = tbody.getElementsByTagName('tr');

  for (let i = 0; i < trs.length; i++) {
    const tr = trs[i];
    if (tr.getAttribute('data-event') !== 'true') {
      tr.setAttribute('data-event', 'true');
      tr.addEventListener('click', () => {
        const tds = tr.getElementsByTagName('td');
        setToRemove({
          firstName: tds[0].textContent,
          lastName: tds[1].textContent,
          dateBirth: tds[4].textContent,
        });
        openModal();
      });
    }
  }
}

export default eventRemove;
