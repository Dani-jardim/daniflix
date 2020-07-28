import React from 'react'; 
import Menu from '../../components/Menu/index';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Data from '../../data/data.json';

function Home() {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle={Data.categorias[2].videos[0].titulo}
        url={Data.categorias[2].videos[0].url}
        videoDescription={"#AsMinaEnsina é um projeto com 4 Bgirls ensinando movimentos base do Breaking."}
      />
      <div id="Prêmio Breaking Latino">
        <Carousel
          category={Data.categorias[0]}
        />
      </div>
      <div id="BackEnd">
        <Carousel
          category={Data.categorias[1]}
        />
      </div>
      <div id="Science">
        <Carousel
          category={Data.categorias[2]}
        />   
      </div>   
      <div id="Movies">
        <Carousel
          category={Data.categorias[3]}
        />     
      </div>  
      <div id="Docs">
        <Carousel
          category={Data.categorias[4]}
        />    
      </div> 
    <div id="Learning">
      <Carousel 
        category={Data.categorias[5]}
      />      
    </div>
      <Footer />
            
    </div>
  );
}

export default Home;