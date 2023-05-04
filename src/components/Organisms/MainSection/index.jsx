import React from 'react'
import AboutSection from '@molecules/AboutSection'
import Derek from '@atoms/Derek'
import Scene from '@atoms/Scene'
import styles from './_.module.scss'

function MainSection () {
  return (
    <div className={`${styles['main-section']} p-5`}>
      <Scene>
        <Derek />
      </Scene>
      <AboutSection />
    </div>
  )
}

export default MainSection
