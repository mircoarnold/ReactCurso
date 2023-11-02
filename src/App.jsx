import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './Component/NavBarComponent/NavBarComponent';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
import './index.css';


function App() {

  return <div>
    <NavBarComponent />
    <ItemListContainer despedida = "Bienvenidos a el Work Shop"/>
  </div>;
}

export default App;