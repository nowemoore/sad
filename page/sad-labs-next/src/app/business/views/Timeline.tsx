import styles from "../../research/views/views.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faPeopleGroup, faCrown, faMagnifyingGlass, faCubesStacked, faShield, faArrowsUpDownLeftRight, faArrowsTurnRight} from '@fortawesome/free-solid-svg-icons';

export default function Timeline() {
  const events = [
  {
    id: '1',
    date: 'Q1 2026',
    icon: faPeopleGroup,
    topContent: {
      title: 'Unite Researchers',
      description: 'Establish a coordinated network aligned on RAD objectives.',
    },
    bottomContent: null,
  },
  {
    id: '2',
    date: 'Q1 - Q2 2026',
    icon: faCrown,
    topContent: {
      title: 'Set Priority Questions',
      description: 'Identify gaps most relevant to building a monitoring solution.',
    },
  },
  {
    id: '3',
    date: 'Q2 - Q3 2026',
    icon: faRocket,
    topContent: {
      title: 'Conduct Preliminary Studies',
      description: 'Produce early empirical results to guide metric and solution development.',
    },
  },
  {
    id: '4',
    date: 'Q3 - Q4 2026',
    icon: faCubesStacked,
    topContent: {
      title: 'Ship MVP',
      description: 'Implement functional monitoring features and test them in a live environment.',
    },
    bottomContent: {
      title: 'Propose Benchmarks',
      description: 'Put forward initial evaluations and use ongoing findings to improve the platform.',
    },
  },
  {
    id: '5',
    date: '2027 and Beyond',
    icon: faArrowsUpDownLeftRight,
    topContent: {
      title: 'Expand Coverage',
      description: 'Expand the platform to cover more institution types using adaptable task types.',
    },
    bottomContent: {
      title: 'Drive Iterative Improvement',
      description: 'Answer more relevant questions to continuously improving the solution and inform safeguards.',
    },
  },
  {
    id: '6',
    date: '2027 and Beyond',
    icon: faShield,
    topContent: {
      title: 'Towards Certifications',
      description: 'Use quantity data from across institution types to develop a formal certification.',
    },
    bottomContent: {
      title: 'Towards Safeguards',
      description: 'Use technical research to inform safeguards development and policy recommendations.',
    },
  },
  ];

  return (
    <section id="timeline" className="section timeline-section surface-a">
      <div className="section-container">
        <h2 className="section-title from-bottom"><FontAwesomeIcon icon={faArrowsTurnRight}></FontAwesomeIcon> Timeline</h2>

        <div className={styles.timeline}>
          <div className={styles.line} />
          {events.map((event) => (
            <div key={event.id} className={styles.item}>
              <div className={styles.contentTop}>
                {event.topContent && (
                  <>
                    <span className={styles.date}>{event.date}</span>
                    <h3 className={styles.title}>{event.topContent.title}</h3>
                    <p className={styles.description}>{event.topContent.description}</p>
                  </>
                )}
              </div>
              <div className={styles.dot}>
                {event.icon && <FontAwesomeIcon icon={event.icon} className={styles.dotIcon} />}
              </div>
              <div className={styles.contentBottom}>
                {event.bottomContent && (
                  <>
                    <span className={styles.date}>{event.date}</span>
                    <h3 className={styles.title}>{event.bottomContent.title}</h3>
                    <p className={styles.description}>{event.bottomContent.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}