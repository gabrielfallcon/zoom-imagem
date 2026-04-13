import { ContentTag } from "@/components";
import Projects from "./fragments/projects/projects";
import styles from "./portfolio.module.scss";

export const PortfolioComponent = () => {
  return (
    <div className={styles.portfolioWrapper}>
      <ContentTag>
        
      </ContentTag>
      <ContentTag colorTopPosition="right">
        <Projects />
      </ContentTag>
    </div>
  );
};

export default PortfolioComponent;
