import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facil de Usar',
    gif: '/img/facil.gif',
    description: (
      <>
        Basico e simples, funcionando para qualquer ramo de controle, vinculado diretamente ao seu Caixa permitindo a criação
        das entregas no proprio ato da compra.
      </>
    ),
  },
  {
    title: 'Entregas Rapidas e Praticas',
    gif: '/img/entrega.gif',
    description: (
      <>
        Dentro do nosso aplicativo o usuario consegue gerenciar suas entregas em um DashBoard 
        pratico de facil manuseio assim como enviar entregas em formato de lote movimentando varias entregas de uma unica vez.
      </>
    ),
  },
  {
    title: 'Organize e Administre',
    gif: '/img/admin.gif',
    description: (
      <>
        Com a nossa ferramenta você pode administrar todas as suas entregas de forma
        rapida e pratica. Analisando o fluxo de entregas me atraso, feitas e Etc.
      </>
    ),
  },
];

function Feature({gif, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={gif} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
