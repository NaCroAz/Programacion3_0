import Grevillea from './images/Grevillea-robusta.jpg'
import Brachychiton from './images/Brachychiton.jpg'
import Magnolia from './images/Magnolia.jpg'
import './App.css'

function App() {

  return (
    <div className='contenedor'>
      <h1>Arboles Exoticos</h1>
      <div className='contenedorArboles'>
        <div className='panelArbol'>
          <img src="{Grevillea}" alt="grevillea" />
          <h2>Grevelia</h2>
          <h3>Grevillea robustas</h3>
          <p>Grevillea robusta, o roble sedoso, es un árbol australiano que puede alcanzar 30 metros de altura. Tiene corteza oscura, hojas pinnadas similares a helechos y produce llamativas flores anaranjadas en primavera. Es valorado por su madera resistente y uso ornamental.</p>
        </div>
        <div className='panelArbol'>
          <img src="{Brachychiton}" alt="brachychiton" />
          <h2>Brachychiton</h2>
          <h3>Brachychiton acerifolius</h3>
          <p>Brachychiton acerifolius, conocido como árbol de fuego o kurrajong de Illawarra, es un árbol australiano que puede alcanzar 30 metros de altura. Destaca por sus hojas lobuladas y sus brillantes flores rojas en forma de campana, que cubren el árbol en primavera y verano, creando un espectáculo visual impresionante. Es popular en jardinería por su impacto visual y adaptabilidad.</p>
        </div>
        <div className='panelArbol'>
          <img src="{Magnolia}" alt="magnolia" />
          <h2>Magnolia</h2>
          <h3>Magnolia grandiflora</h3>
          <p>Magnolia grandiflora, conocida como magnolia del sur, es un árbol ornamental originario del sureste de Estados Unidos. Puede crecer hasta 30 metros de altura y tiene hojas grandes, brillantes y perennes. Sus flores blancas y fragantes, que pueden medir hasta 30 cm de diámetro, aparecen en primavera y verano, siendo muy apreciadas por su belleza y aroma.
          </p>
        </div>
      </div>
    </div>
  )

}

export default App
