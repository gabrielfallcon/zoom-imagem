import { ContentTag } from "@/components";
import { OohHall } from "./hall";
import styles from "./ooh.module.scss";
import { OohDescription } from "./description";

export const SolutionsComponent = () => {
  return (
    <div className={styles.oohWrapper}>
      <ContentTag colorTopPosition="left">
        <OohHall />
      </ContentTag>
      <ContentTag colorTopPosition="right" colorBottomPosition="left">
        <OohDescription />
      </ContentTag>
    </div>
  );
};

export default SolutionsComponent;
