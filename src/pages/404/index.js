import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import './index.css';

function Pagina404() {
  return (
    <PageDefault>
      <div className="title">
        <h1> ESSA PÁGINA NÃO EXISTE!</h1>
      </div>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default Pagina404;
