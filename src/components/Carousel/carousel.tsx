import Image from "next/image";
import styles from "./carousel.module.scss";

const logos = [
  "/images/client-logo/santander1.png",
  "/images/client-logo/netflix.png",
  "/images/client-logo/amazon.jpg",
  "/images/client-logo/99.png",
  "/images/client-logo/santander1.png",
  "/images/client-logo/netflix.png",
  "/images/client-logo/amazon.jpg",
  "/images/client-logo/99.png",
];

export default function Carousel() {
  return (
    <div className={styles.clientsWrapper}>
      <div className={styles.track}>
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className={styles.item}>
            <Image
              src={logo}
              alt={`Cliente ${index}`}
              width={220}
              height={120}
              className={styles.clientLogo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { Carousel };
