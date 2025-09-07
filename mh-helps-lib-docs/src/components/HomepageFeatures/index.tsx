import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [

  {
    title: 'Hello , im Muhammed Hamdi',
    image: require('@site/static/img/hamdi.jpg').default,
    description: (
      <>
        Senior Angular developer with over 5 years of experience and extensive knowledge in the business field, acquired through my combined education.
        Based on my experience and the projects I've worked on, I created this package to help us all complete tasks more efficiently and speed up our workflow.
      </>
    ),
  },

];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
       <img src={image} alt={title} style={{width: '250px', borderRadius: '35% 35% 35% 35%' , boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" style={{margin:'50px 0'}}>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
