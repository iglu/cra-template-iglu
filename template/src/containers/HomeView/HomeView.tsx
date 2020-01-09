import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppStore } from '../../index'

const HomeView: React.FC = observer((props) => {
  const appStore = useAppStore()
  console.log(appStore)
  return (
    <div>
      <h1>HomeView</h1>
    </div>
  )
})

export default HomeView
