import React from 'react'
import styles from './Satisfaction.module.sass'

function PayFraction () {
  return (
    <div className={styles.containerPayFraction}>
      <ul className={styles.listBoxSatisfaction}>
        <li className={styles.listItemPayFraction}>
          <span className={styles.icon}>
            <i className='fas fa-angle-right'></i>
          </span>
          <div>
            <h4>Pay a Fraction of cost vs hiring an agency</h4>
            <p>
              For as low as $299, our naming contests and marketplace allow you
              to get an amazing brand quickly and affordably.
            </p>
          </div>
        </li>
        <li className={styles.listItemBorderTop}></li>
        <li className={styles.listItemPayFraction}>
          <span className={styles.icon}>
            <i className='fas fa-angle-right'></i>
          </span>
          <div>
            <h4>Satisfaction Guarantee</h4>
            <p>
              Of course! We have policies in place to ensure that you are
              satisfied with your experience.{' '}
              <a href='#' style={{ textDecoration: 'none', color: '#377dff' }}>
                Learn more
              </a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default PayFraction
