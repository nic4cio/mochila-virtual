import Body from "../../components/Body"
import FontePoppins from '../../components/FontePoppins';

import Cabecalho from '../../components/Cabecalho';

function Home() {
  window.scrollTo(0, 0); //Reinicia o scroll
  return (
    <div className="imageRegistros">
        <FontePoppins/>
        <Cabecalho home="menuaSpanRegistros" materias="" curador="" entrar="" registrar="" />
        <Body/>
    </div>
  );
}

export default Home;