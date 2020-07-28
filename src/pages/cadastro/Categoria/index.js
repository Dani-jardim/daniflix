import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadstroCategoria () {
  return (
    <PageDefault>
      <h1> Cadastro de Caregoria</h1>

      <Link to="/">
        Ir pra home
      </Link>
    </PageDefault>
  )
}

export default CadstroCategoria