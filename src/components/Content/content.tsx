import { PropsWithChildren } from "react";
import styles from "./content.module.scss";
import { Center } from "../Center/center";
import clsx from "clsx";

export interface IContentProps extends PropsWithChildren {
  colorTopPosition?: "left" | "right";
  colorBottomPosition?: "left" | "right";
}

const Content = ({
  children,
  colorBottomPosition,
  colorTopPosition,
}: IContentProps) => {
  return (
    <div className={styles.contentWrapper}>
      {colorTopPosition && (
        <div
          className={clsx(
            styles.color,
            colorTopPosition === "left" ? styles.topLeft : styles.topRight
          )}
        ></div>
      )}
      <Center>
        <div className={styles.child}>{children}</div>
      </Center>
      {colorBottomPosition && (
        <div
          className={clsx(
            styles.color,
            colorBottomPosition === "left"
              ? styles.bottomLeft
              : styles.bottomRight
          )}
        ></div>
      )}
    </div>
  );
};

export { Content };
