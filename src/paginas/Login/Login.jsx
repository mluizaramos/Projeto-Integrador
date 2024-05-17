import estilos from './Home .module.css'
import {Cabecalho} from '../componentes/Cabecalho'
import {Conteudo} from '../componentes/Conteudo'
import {Footer} from '../componentes/Footer'

export function Home(){
    return(
        <div className={estilos.grinContainer}>
            <Cabecalho />
            <Conteudo />
            <Footer />
        </div>
    )
}