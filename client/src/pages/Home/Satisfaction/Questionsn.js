import React from 'react'
import CONSTANTS from '../../../constants'
import styles from './Satisfaction.module.sass'

function Questionsn () {
  return (
    <div className={styles.containerQuestionsn}>
      <ul className={styles.listBoxSatisfaction}>
        <li className={styles.listItemQuestions}>
          <h4>Questions?</h4>
          <p>
            Speak with a Squadhelp platform expert to learn more and get your
            questions answered.
          </p>
          <button className={styles.btnConsultion}>
            Schedule Consultation
          </button>
          <a
            href={`tel:${CONSTANTS.CONTACTS.TEL}`}
            style={{ textDecoration: 'none', color: '#FFF' }}
          >
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt='phone' />
            {CONSTANTS.CONTACTS.TEL}
          </a>
          <span>Call us for assistance</span>
        </li>
      </ul>
    </div>
  )
}

export default Questionsn
