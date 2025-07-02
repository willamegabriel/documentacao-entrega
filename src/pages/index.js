import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import BackgroundSymbol from "@site/src/components/BackgroundSymbol";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.lightMask}>
        <BackgroundSymbol />
        <div className={styles.lightBeam} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>eEntrega</h1>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link className="button button--secondary button--lg" to="/intro">
          eEntrega Tutorial – 5 min ⏱️
        </Link>

        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="eEntrega" description="Home do site eEntrega">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
