import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria () {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor:'',   
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState({valoresIniciais});

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange (infosDoEvento){  
    const {getAttribute, value} = infosDoEvento.target;
    setValue(
      getAttribute('name'),
    )
  }

  return (
    <PageDefault>
      <h1> Cadastro de Caregoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvent){
        infosDoEvent.preventDefault();
        console.log("Voce tentou enviar")
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais)
      }}>

      <FormField
        value={values.nome}
        onChange={handleChange}
      />

      <div>
      <label>
          Descrição:
          <textarea 
            type="text"
            value={values.descricao}
            name="descrição"
            onChange = {handleChange}
          />
        </label>
      </div>

      <div>
      <label>
         Cor:
          <input 
            type="color"
            value={values.cor}
            name="cor"
            onChange = {handleChange}
          />
        </label>
      </div>
      
      <button>
        Cadastrar
      </button>
      </form>

      <ul>
        {categorias.map ((categoria, indice) => {
        return(
          <li key= {`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ) 
      })}
      </ul>

      <Link to="/">
        Ir pra home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria