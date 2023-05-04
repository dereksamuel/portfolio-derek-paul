import React from 'react'
import Button from '@atoms/Button'
import styles from './_.module.scss'
import { useRouter } from 'next/router'

function Menu () {
  const router = useRouter()

  const onGoTo = (path) => {
    router.push(path)
  }

  return (
    <div className={`${styles.menu} pt-5 pb-3 pr-5`} data-testid='menu'>
      <Button onClick={() => onGoTo('/')} theme='primary' isActive={router.pathname === '/'}>About me</Button>
      <Button onClick={() => onGoTo('/projects')} theme='primary' isActive={router.pathname === '/projects'}>Projects</Button>
    </div>
  )
}

export default Menu
