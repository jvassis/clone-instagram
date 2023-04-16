import './style.css'

export function Suggestion() {
    return (
        <div className='container-suggestion'>
            <div className="header-suggestion">
                <img src='https://github.com/gabrieldiasss.png' />
                <div className="user-infos-suggestion">
                    <div className="infos">
                        <span>gbrldiass</span>
                        <p>gabriel dias</p>
                    </div>
                    <button className='switch'>Mudar</button>
                </div>
            </div>
            <div className='header-main-suggestion'>
                <p>Sugestões para você</p>
                <span>Ver tudo</span>
            </div>
            <div className='user-suggestion'>
                <div className='infos-suggestion'>
                    <img src='https://github.com/gabrieldiasss.png' />
                    <div className='info-suggestion'>
                        <span>gbrldiass</span>
                        <p>Seguido por filipedechamps</p>
                    </div>
                    <button className='follow'>Seguir</button>
                </div>
            </div>
            <footer className='footer-suggestion'>
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>
                <p>&copy; 2021 INSTAGRAM FROM META</p>
            </footer>
        </div>
    )
}