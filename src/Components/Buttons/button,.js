import P from 'prop-types';
import lupa from '../../utils/lupa.png';
import './styles.css';

export default function Button({ handleSearchAddress }) {
  return (
    <button className="button" onClick={handleSearchAddress}>
      <span className="button-text">Buscar</span>
      <img className="button-image" src={lupa} />
    </button>
  );
}

Button.propTypes = {
  handleSearchAddress: P.func.isRequired,
};
