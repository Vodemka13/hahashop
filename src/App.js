import './App.css';
import logosHeader from './pics/logos_header.svg'
import btnsHeader from './pics/btns_header.svg'

function App() {
  return (
    <div className="wrapper">
      <header className='header'>
        <img className='logos_header' src={logosHeader}/>
        <img className='btns_header' src={btnsHeader}/>
      </header>

      <h1 className='title'> Магазин авторской 3D-продукции. </h1>
      <h2 className='desc'> Мы изготавливаем 3D-модели и вырезки уникального дизайна и по вашему заказу. </h2>
      <div className='catalogScroll'> <h3 className='btnText'> Перейти в каталог </h3> </div>
      <div className='leaveWill'> <h3 className='btnText'> Оставить заявку </h3> </div>

      <h2 className='modelsTitle'> 3D-модели </h2>
    </div>
  );
}

export default App;
