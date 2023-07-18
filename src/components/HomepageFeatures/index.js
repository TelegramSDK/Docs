import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Developer Friendly',
    Svg: require('@site/static/gif/developer.gif').default,
    description: (
      <>
        As much freedom as possible to the developer.
      </>
    ),
  },
  {
    title: 'Extensible',
    Svg: require('@site/static/gif/extend.gif').default,
    description: (
      <>
        Fully extensible with the new Telegram Features.
      </>
    ),
  },
  {
    title: 'Examples',
    Svg: require('@site/static/gif/heart.gif').default,
    description: (
      <>
        Beginner-friendly examples
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} alt="A feaature" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
