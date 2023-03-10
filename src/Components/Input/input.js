import P from 'prop-types';
import './styles.css';

export default function Input({ handleChangeAddress }) {
  return <input className="input" onChange={(e) => handleChangeAddress(e.target.value)} placeholder="Ex: 55500-000" />;
}

Input.propTypes = {
  handleChangeAddress: P.func.isRequired,
};
