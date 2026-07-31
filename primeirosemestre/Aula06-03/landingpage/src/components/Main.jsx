import imgMusculacao from '../assets/img/musculacao.jpg'
import imgCardio from '../assets/img/corrida.jpg'
import imgYoga from '../assets/img/yoga.jpg'

export default function Main() {
    return (
        <main>
            {/* HERO */}
            <section id="home" className="hero">
                <h2>Transforme seu corpo com a <span>Fofitness</span></h2>
                <p>A academia perfeita para quem quer ficar no Shape.</p>
                <button className="btn-comecar">Começar Agora</button>
            </section>

            {/* SOBRE */}
            <section id="sobre" className="sobre">
                <h2>Sobre Nós</h2>
                <p>Somos uma academia focada em perda de peso e construção de shapes incríveis, no estilo Mr.Olympia. Com 2 dias de experiência no mercado, esperamos oferecer o melhor para nossos clientes. Quer ser um BodyBuild? Nós podemos te ajudar!</p>
            </section>

            {/* MODALIDADES - Adicionada a classe flex-wrapper */}
            <section id="modalidades">
                <h2>Modalidades</h2>
                <div className="flex-wrapper">
                    <div className="card">
                        <img src={imgMusculacao} alt="Musculação" />
                        <h3>Musculação</h3>
                    </div>
                    <div className="card">
                        <img src={imgCardio} alt="Cardio" />
                        <h3>Cardio</h3>
                    </div>
                    <div className="card">
                        <img src={imgYoga} alt="Yoga" />
                        <h3>Yoga</h3>
                    </div>
                </div>
            </section>

            {/* PLANOS - Adicionada a classe flex-wrapper */}
            <section id="planos">
                <h2>Planos e preços</h2>
                <div className="flex-wrapper">
                    <div className="card">
                        <h3>Básico</h3>
                        <p className="preco">R$ 79,90/mês</p>
                        <ul><li>Acesso a musculação</li><li>Aulas coletivas</li><li>Horário livre</li></ul>
                    </div>
                    {/* A classe 'premium' adiciona o destaque */}
                    <div className="card premium">
                        <h3>Premium</h3>
                        <p className="preco">R$ 129,90/mês</p>
                        <ul><li>Acesso total</li><li>Personal trainer</li><li>Yoga & Funcional</li></ul>
                    </div>
                    <div className="card">
                        <h3>Vip</h3>
                        <p className="preco">R$ 199,90/mês</p>
                        <ul><li>Personal trainer exclusivo</li><li>Nutricionista</li><li>Acompanhamento mensal</li></ul>
                    </div>
                </div>
            </section>

            {/* DEPOIMENTOS */}
            <section id="depoimentos" className="depoimentos">
                <h2>O que nossos alunos estão dizendo</h2>
                <div className="box-depoimento">
                    <p>"Academia incrível, um dia e eu já me sinto maromba"</p>
                    <span>— Jorge</span>
                </div>
                <div className="box-depoimento">
                    <p>"Não gostei porque não tem ar condicionado"</p>
                    <span>— Miguel</span>
                </div>
            </section>

            {/* CONTATO */}
            <section id="contato" className="contato-form">
                <h2>Entre em contato</h2>
                <form>
                    <input type="text" placeholder="Seu nome" />
                    <input type="text" placeholder="Seu email" />
                    <textarea placeholder="Sua mensagem"></textarea>
                    <button className="btn-enviar">Enviar</button>
                </form>
            </section>
        </main>
    )
}