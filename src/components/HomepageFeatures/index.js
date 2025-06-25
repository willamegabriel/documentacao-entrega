import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facil de Usar',
    gif: '/img/facil.gif',
    description: (
      <>
        Básico e simples, funcionando para qualquer ramo de controle, vinculado diretamente ao seu caixa, permitindo a criação das entregas no próprio ato da compra.
      </>
    ),
  },
  {
    title: 'Entregas Rapidas e Praticas',
    gif: '/img/entrega.gif',
    description: (
      <>
        Dentro do nosso aplicativo, o usuário consegue gerenciar suas entregas em um DashBoard prático de fácil manuseio, assim como enviar entregas em formato de lote, movimentando várias entregas de uma única vez.
      </>
    ),
  },
  {
    title: 'Organize e Administre',
    gif: '/img/admin.gif',
    description: (
      <>
        Com a nossa ferramenta, você pode administrar todas as suas entregas de forma rápida e prática. Analisando o fluxo de entregas, me atraso, feitas e etc.
      </>
    ),
  },
];
function Feature({gif, title, description}) {
  const gifUrl = useBaseUrl(gif); // resolve a URL correta mesmo no GitHub Pages
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={gifUrl} alt={title} className={styles.featureSvg} />
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
