import React, { useContext } from 'react'
import Image from 'next/image'

import AboutSection from '@molecules/AboutSection'
import Button from '@atoms/Button'
import Derek from '@atoms/Derek'
import Scene from '@atoms/Scene'
import Loader from '@atoms/Loader'

import derekPic from '@/assets/images/derekPic.png'
import styles from './_.module.scss'
import { StoreContext } from '@/context/store'

function MainSection() {
  const { value, setValue } = useContext(StoreContext)

  const onLoadModel = () => {
    setValue({
      ...value,
      mode3dLoading: true,
      modelLoading: true,
    })
  }

  return (
    <div className={`${styles['main-section']} p-5`}>
      <div>
        {value.mode3dLoading ? (
          <Scene>
            <Derek />
          </Scene>
        ) : (
          <figure>
            <Image src={derekPic} alt="derekPic" className={`${styles['derek-pic']} mb-8`} />
          </figure>
        )}
        {(!value.mode3dLoading || value.modelLoading) && (
          <div className={styles[value.modelLoading ? 'btn-loading' : '']}>
            <Button theme="secondary" onClick={onLoadModel} disabled={value.modelLoading} withoutShadow={value.modelLoading}>
              {value.modelLoading ? (
                <>
                  <Loader />
                  <span>Loading</span>
                </>
              ) : (
                'Load my 3D model'
              )}
            </Button>
          </div>
        )}
      </div>
      <AboutSection />
    </div>
  )
}

export default MainSection
