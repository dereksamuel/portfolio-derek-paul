import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Cursor from '@atoms/Cursor'
import GeneralBorder from '@molecules/GeneralBorder'
import Menu from '@molecules/Menu'
import Loading from '@atoms/Loading'

import { StoreContext } from '@/context/store'
import aboutMe from '../context/modules/about_me.json'
import projects from '../context/modules/projects.json'

import '@/styles/globals.scss'
import useLoadHoudini from '@/hooks/useLoadHoudini'

function App ({ Component, pageProps }) {
  const [value, setValue] = useState({
    loading: false,
    mode3dLoading: false,
    modelLoading: false,
    about_me: aboutMe,
    projects
  })
  useLoadHoudini()

  return <StoreContext.Provider value={{ value, setValue }}>
    <GeneralBorder>
      <Menu />
      {value.loading ? <Loading /> : <Component {...pageProps} />}
      <Cursor />
    </GeneralBorder>
  </StoreContext.Provider>
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
