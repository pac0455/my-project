import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Persigue el nuevo sabor" />
      <h1 className="app__header-h1">La clave de la buena mesa</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Experiencia culinaria excepcional en un entorno elegante y sofisticado, donde cada plato es una obra maestra y cada detalle está cuidadosamente pensado para satisfacer los paladares más exigentes </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
