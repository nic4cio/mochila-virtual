import Header from "../../components/Header"
import Body from "../../components/Body"
import FontePoppins from '../../components/FontePoppins';

import Cabecalho from '../../components/Cabecalho';

function Home() {
  return (
    <div className="imageRegistros">
        <FontePoppins/>
        <Cabecalho home="menuaSpanRegistros" materias="" curador="" entrar="" registrar="" />
        <Body/>
    </div>
  );
}

export default Home;