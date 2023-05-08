import { useEffect, useState } from 'react'

export default function useLoadHoudini() {
  const [customProp, setCustomProp] = useState([])

  useEffect(() => {
    setCustomProp([...customProp, '--bezel-color'])
  }, [])

  return customProp
}
