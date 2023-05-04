import React, { useEffect } from 'react'
import Image from 'next/image'

import Button from '../Button'
import styles from './_.module.scss'

import comicCssSrc from '@/assets/images/comic_css.png'
import comicSrc from '@/assets/images/comic.png'
import landingSrc from '@/assets/images/landing.png'
import errorSrc from '@/assets/images/error.png'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

function Carousel () {
  let currChildEl = 0

  useEffect(() => {
    const timeout = setTimeout(() => {
      const carouselEl = document.getElementById('carousel')
      const carouselContent = document.getElementById('carousel-content')
      const childrenEls = carouselContent.children
      const n = childrenEls.length
      const gap = carouselEl.dataset.gap || 0
      const bfc = 'bfc' in carouselEl.dataset

      const theta = 2 * Math.PI / n

      setupCarousel(n, parseFloat(getComputedStyle(childrenEls[0]).width))
      window.addEventListener('resize', () => {
        setupCarousel(n, parseFloat(getComputedStyle(childrenEls[0]).width))
      })

      function setupCarousel (n, s) {
        const apothem = s / (2 * Math.tan(Math.PI / n))
        console.log(n)
        carouselContent.style.transformOrigin = `50% 50% ${-apothem}px`

        // eslint-disable-next-line no-var
        for (var i = 0; i < n; i++) {
          childrenEls[i].style.paddingLeft = `${gap}px`
          childrenEls[i].style.paddingRight = `${gap}px`
        }

        for (i = 1; i < n; i++) {
          childrenEls[i].style.transformOrigin = `50% 50% ${-apothem}px`
          childrenEls[i].style.transform = `rotateY(${i * theta}rad)`
        }

        if (bfc) {
          for (i = 0; i < n; i++) {
            childrenEls[i].style.backfaceVisibility = 'hidden'
          }
        }
      }
      clearTimeout(timeout)
    }, 100)
  }, [])

  function onPrevOrNext (e, id) {
    e.stopPropagation()
    const carouselContent = document.getElementById('carousel-content')

    if (id === 'next') {
      currChildEl++
    } else {
      currChildEl--
    }

    const theta = 2 * Math.PI / carouselContent.children.length
    carouselContent.style.transform = `rotateY(${currChildEl * -theta}rad)`
  }

  return (
    <div className={`${styles.carousel} px-8 py-5`} id='carousel' data-gap="150">
      <div className={styles['carousel-content']} id='carousel-content'>
        <div className={styles['carousel-content__item']}>
          <a href="https://dereksamuel.github.io/HOLDING/" target='__blank'>
            <Image src={comicCssSrc} className={styles['carousel-card']} />
          </a>
          <p className='pt-3'>COMIC in web 100% with CSS</p>
        </div>
        <div className={styles['carousel-content__item']}>
          <a href="https://github.com/dereksamuel/amaris_test_consulting" target='__blank'>
            <Image src={landingSrc} className={styles['carousel-card']} />
          </a>
          <p className='pt-3'>Landing page with auth and DB</p>
        </div>
        <div className={styles['carousel-content__item']}>
          <a href="https://404-error-dk.netlify.app/" target='__blank'>
            <Image src={errorSrc} className={styles['carousel-card']} />
          </a>
          <p className='pt-3'>Error 404 in 3D</p>
        </div>
        <div className={styles['carousel-content__item']}>
          <a href="https://github.com/dereksamuel/comic-web" target='__blank'>
            <Image src={comicSrc} className={styles['carousel-card']} />
          </a>
          <p className='pt-3'>Rank for comics</p>
        </div>
      </div>
      <nav>
        <Button onClick={(e) => onPrevOrNext(e, 'prev')}>
          <IoMdArrowDropleft />
        </Button>
        <Button onClick={(e) => onPrevOrNext(e, 'next')}>
          <IoMdArrowDropright />
        </Button>
      </nav>
    </div>
  )
}

export default Carousel
