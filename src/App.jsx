import estrela from './assets/realcar.png'
import localizacao from './assets/local.png'
import email from './assets/carta.png'
import telephone from './assets/telefone.png'
import './App.css'

function App() {
  
  return (
    <>
      <section id="center">
        <div className='sec1'>
          <h1> FRANCISCO HENRIQUE DA SILVA NETO </h1>
          <p className='p'>   
            <span className='span'>
              <img src={telephone} alt="telefone" />
              <p>(75) 98883-7668</p>
            </span>
            <span className='span'>
              <img src={email} alt="" />
              <p>fhoficial079@gmail.com</p>
            </span>
          </p>
          <p className='p'>
            <img src={localizacao} alt="localização" />
            <p>Rua Antônio Sirianni, 517, Jardim Recreio, Bragança Paulista, São Paulo.</p>
          </p>
        </div>
        <div className='sec2'>
          <p>
            <span className='span'>
              <img src={estrela} alt="estrela para destaque" />
              <h3>Objetivo</h3>
            </span>
            <br />
            <p>
              Desenvolver neste campo de trabalho, as atividades profissionais que visam
              o maior crescimento tanto para a empresa quanto pessoal, buscando
              sempre estar atualizado das novidades que o mercado exige para cada
              vez mais expandir o nosso crescimento.
            </p>
          </p>
          <br />
          <p>
            <span className='span'>
              <img src={estrela} alt="estrela para destaque" />
              <h3>Sobre mim</h3>
            </span>
            <br />
            <p>
              Olá! Sou Francisco Henrique, tenho 20 anos, sou formado em técnico de
              informática. Procuro oportunidades de atuação onde eu possa aprender
              e crescer como profissional
            </p>
          </p>
          <br />
          <p>
            <span className='span'>
              <img src={estrela} alt="estrela para destaque" />
              <h3>Formação Acadêmica</h3>
            </span>
            <br />
            <p>
              Ensino Médio - Completo. <br />
              Cursando Ensino Superior - Análise e desenvolvimento de sistema.
            </p>
          </p>
          <br />
          <p>
            <span className='span'>
              <img src={estrela} alt="estrela para destaque" />
              <h3>Cursos Complementares</h3>
            </span>
            <br />
            <p>
              Técnico em Informática - IFBA
            </p>
          </p>
          <br />
          <p>
            <span className='span'>
              <img src={estrela} alt="estrela para destaque" />
              <h3>Experiência</h3>
            </span>
            <br />
            <p>
              Supermercado Ki Preço (Valença-BA) <br />
              <ul>
                <li>Cargo: Estoquista/Repositor</li>
                <li>Período - 1 ano e 3 meses</li>
              </ul>
            </p>
          </p>
        </div>
      </section>
    </>
  )
}

export default App
