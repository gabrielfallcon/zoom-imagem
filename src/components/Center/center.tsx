import { PropsWithChildren } from "react";
import styles from "./center.module.scss";

export const CenterTag = ({ children }: PropsWithChildren) => {
  return <div className={styles.centerWrapper}>{children}</div>;
};

export default CenterTag;
