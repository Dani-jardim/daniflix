import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    id:'',
    titulo:'',
    cor: '000000',
  };

  const [categorias, setCategorias] = useState([]);

  const { handleChange, values } = useForm(valoresIniciais);

  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();

    console.log(categorias, values);
    setCategorias([
      ...categorias,
      values,
    ]);
  }
  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://dani-flix.herokuapp.com/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.id}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Titulo da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria.id} ${index}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
