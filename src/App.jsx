import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <p>main</p>
        </main>
      </div>
    </>
  )
}
