import { ContentTag } from "@/components";
import { Projects } from "@/components/projects";
import { PortfolofioHall } from "./fragments/hall";
import styles from "./portfolio.module.scss";

export const PortfolioComponent = () => {
  return (
    <div className={styles.portfolioWrapper}>
         <PortfolofioHall />
      <ContentTag colorTopPosition="right">
        <Projects tag="Todos" />
      </ContentTag>
    </div>
  );
};

export default PortfolioComponent;
