import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/App';

import { BrowserRouter, Switch , Route} from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

import Pagina404 from './pages/404';


ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route path= "/" component = {Home} exact />
    <Route path= "/cadastro/Video" component = {CadastroVideo} exact />
    <Route path= "/cadastro/Categoria" component = {CadastroCategoria} exact />
    <Route component = {Pagina404} />
  </Switch>
  
</BrowserRouter>,

document.getElementById('root')

);
