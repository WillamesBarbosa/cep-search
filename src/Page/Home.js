import { useState } from 'react';

import Button from '../Components/Buttons/button,';
import Input from '../Components/Input/input';
import Screen from '../Components/Screen/screen';
import './Home.css';

function Home() {
  const [address, setAddress] = useState('');
  const [url, setUrl] = useState('');

  const handleChangeAddress = (value) => {
    setAddress(value);
  };

  const handleSetUrl = () => {
    if (address.length <= 7 || address.length >= 9) {
      setUrl('');
      console.log(url);
    } else {
      setUrl(`https://viacep.com.br/ws/${address}/json/`);
      console.log(url);
    }
    console.log(address.length);
  };

  return (
    <>
      <div className="container-input-button">
        <Input handleChangeAddress={handleChangeAddress} />
        <Button handleSearchAddress={handleSetUrl} />
      </div>
      <div className="container-screen">
        <Screen url={url.toString()} />
      </div>
    </>
  );
}

export default Home;
