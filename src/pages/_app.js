import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Cursor from '@atoms/Cursor'
import GeneralBorder from '@molecules/GeneralBorder'
import Menu from '@molecules/Menu'

import { StoreContext } from '@/context/store'
import aboutMe from '../context/modules/about_me.json'
import projects from '../context/modules/projects.json'

import '@/styles/globals.scss'
import useLoadHoudini from '@/hooks/useLoadHoudini'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useRouter } from 'next/router'

function App({ Component, pageProps }) {
  const [value, setValue] = useState({
    mode3dLoading: false,
    modelLoading: false,
    about_me: aboutMe,
    projects,
  })
  const router = useRouter()
  useLoadHoudini()

  return (
    <StoreContext.Provider value={{ value, setValue }}>
      <GeneralBorder>
        <Menu />
        <SwitchTransition>
          <CSSTransition key={router.pathname} in={!!router.pathname} timeout={200} classNames="my-node" unmountOnExit>
            <Component {...pageProps} />
          </CSSTransition>
        </SwitchTransition>
        <Cursor />
      </GeneralBorder>
    </StoreContext.Provider>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App
