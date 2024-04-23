import React from 'react'
import styles from './Display.module.css'

function Display({calVal}) {
  return (
    <div>
        <input classNameName={styles.display} type="text" value={calVal} 
      />
    </div>
  )
}

export default Display