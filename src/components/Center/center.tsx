import { PropsWithChildren } from "react"
import styles from './center.module.scss'

const Center = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.centerWrapper}>{children}</div>
  )
}

export { Center }