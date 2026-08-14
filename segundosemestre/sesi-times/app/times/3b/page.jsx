export default function TerceiroB() {
  const alunos = [
    { id: 1, nome: 'Arthur Hidalgo', funcao: 'Capitão', numero: '10', emoji: '👑' },
    { id: 2, nome: 'Estevan', funcao: 'Resenhudo', numero: '07', emoji: '⚽' },
    { id: 3, nome: 'Lucas Pergolado', funcao: 'Mais fiot', numero: '00', emoji: '🔊' },
    { id: 4, nome: 'Heitor Degan', funcao: '0 resenha', numero: '12', emoji: '📸' },
  ];

  return (
    <div>
      {/* Banner do 3º B */}
      <section style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2.5rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ color: 'var(--secondary)', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              Turma 2026
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '0.2rem' }}>
              Terceirão 3º B ⚡
            </h1>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.4rem' }}>
              SESI Mirandópolis — O elo imbatível da escola.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{
              backgroundColor: 'var(--bg-main)',
              padding: '0.8rem 1.4rem',
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid var(--border)'
            }}>
              <p style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--secondary)' }}>32</p>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ALUNOS</span>
            </div>
            <div style={{
              backgroundColor: 'var(--bg-main)',
              padding: '0.8rem 1.4rem',
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid var(--border)'
            }}>
              <p style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary)' }}>#1</p>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>RANKING</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lista do Elenco */}
      <section>
        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1.2rem' }}>
          📋 Integrantes do 3º B
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1.2rem'
        }}>
          {alunos.map((aluno) => (
            <div key={aluno.id} style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                top: '12px',
                right: '15px',
                fontSize: '1.1rem',
                fontWeight: '800',
                opacity: 0.25
              }}>
                #{aluno.numero}
              </span>

              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                {aluno.emoji}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>{aluno.nome}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                {aluno.funcao}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}