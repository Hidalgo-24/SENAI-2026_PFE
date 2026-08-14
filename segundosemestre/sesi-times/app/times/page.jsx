import Link from 'next/link';

export default function Times() {
  // Lista dos times da escola
  const times = [
    {
      id: '3b',
      nome: 'Terceiro Médio B',
      categoria: 'Terceirão',
      mascote: '⚡',
      membros: '32 Integrantes',
      descricao: 'A turma destaque do ano! Liderando as atividades e eventos do colégio.',
      destaque: true,
      link: '/times/3b'
    },
    {
      id: '3a',
      nome: 'Terceiro Médio A',
      categoria: 'Terceirão',
      mascote: '🔥',
      membros: '30 Integrantes',
      descricao: 'Adversários diretos no campeonato e parceiros de formatura.',
      destaque: false,
      link: '#'
    },
    {
      id: '2a',
      nome: 'Segundo Médio A',
      categoria: 'Segundão',
      mascote: '🦁',
      membros: '28 Integrantes',
      descricao: 'Promessa dos jogos escolares para a próxima temporada.',
      destaque: false,
      link: '#'
    },
    {
      id: '1a',
      nome: 'Primeiro Médio A',
      categoria: 'Primeirão',
      mascote: '🚀',
      membros: '35 Integrantes',
      descricao: 'Os novatos do Ensino Médio marcando presença nos times.',
      destaque: false,
      link: '#'
    }
  ];

  return (
    <div>
      {/* Cabeçalho da Seção */}
      <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <span style={{
          backgroundColor: 'rgba(255, 71, 87, 0.15)',
          color: 'var(--primary)',
          padding: '0.4rem 1rem',
          borderRadius: '20px',
          fontWeight: 'bold',
          fontSize: '0.85rem',
          textTransform: 'uppercase'
        }}>
          SESI Mirandópolis
        </span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '0.8rem', marginBottom: '0.5rem' }}>
          Times & Turmas da Escola 🏆
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
          Confira abaixo as equipes e turmas do Ensino Médio participantes do portal SESI Times.
        </p>
      </div>

      {/* Grid de Times */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {times.map((time) => (
          <div key={time.id} style={{
            backgroundColor: 'var(--bg-card)',
            border: time.destaque ? '2px solid var(--secondary)' : '1px solid var(--border)',
            borderRadius: '16px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div>
              {/* Badge da Categoria */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{
                  backgroundColor: time.destaque ? 'rgba(46, 213, 115, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                  color: time.destaque ? 'var(--secondary)' : 'var(--text-muted)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '700'
                }}>
                  {time.categoria}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {time.membros}
                </span>
              </div>

              {/* Título e Mascote */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '2.2rem' }}>{time.mascote}</span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff' }}>
                  {time.nome}
                </h2>
              </div>

              {/* Descrição */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                {time.descricao}
              </p>
            </div>

            {/* Botão de Ação */}
            <Link href={time.link} style={{
              display: 'block',
              textAlign: 'center',
              backgroundColor: time.destaque ? 'var(--secondary)' : 'var(--bg-main)',
              color: time.destaque ? '#0d1117' : 'var(--text-primary)',
              fontWeight: '700',
              padding: '0.8rem 1.2rem',
              borderRadius: '8px',
              border: time.destaque ? 'none' : '1px solid var(--border)',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}>
              {time.destaque ? 'Conhecer Turma ✨' : 'Ver Detalhes'}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}