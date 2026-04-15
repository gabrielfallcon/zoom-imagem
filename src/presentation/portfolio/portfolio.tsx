import { ContentTag } from "@/components";
import styles from "./portfolio.module.scss";
import { Projects } from "@/components/projects";

export const PortfolioComponent = () => {
  return (
    <div className={styles.portfolioWrapper}>
      <ContentTag>
        
      </ContentTag>
      <ContentTag colorTopPosition="right">
        <Projects tag="Todos" />
      </ContentTag>
    </div>
  );
};

export default PortfolioComponent;
