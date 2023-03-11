import P from 'prop-types';
import { useFetch } from '../../utils/useFetch';

import warning from '../../utils/warning.png';
import './styles.css';

export default function Screen({ url }) {
  const { value, isLoading, error } = useFetch(url);

  if (value) {
    const objetoArray = Object.entries(value);
    return objetoArray.map((information, index) => (
      <div className="screen info" key={index}>
        {information[1] !== '' && information[0] + ' : ' + information[1]}
      </div>
    ));
  }

  if (url === '') {
    return <div className="screen status">Digite o CEP desejado</div>;
  }

  if (isLoading) {
    return <div className="screen status">Loading...</div>;
  }

  if (error || url <= 7 || url >= 9) {
    return (
      <div className="screen status">
        <p className="screen-error-text">Digite um CEP válido</p>
        <img src={warning} />
      </div>
    );
  }
}

Screen.propTypes = {
  url: P.string.isRequired,
};
