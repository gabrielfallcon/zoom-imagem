import Image from "next/image";
import styles from "./carousel.module.scss";

const logos = [
  "/images/client-logo/santander1.png",
  "/images/client-logo/netflix.png",
  "/images/client-logo/amazon.jpg",
  "/images/client-logo/99.png",
  "/images/client-logo/vivo1.png",
  "/images/client-logo/heineken.jpg",
  "/images/client-logo/bk.png",
  "/images/client-logo/byd.svg",
  "/images/client-logo/itau.png",
];

export default function Carousel() {
    const repeated = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className={styles.clientsWrapper}>
      <div className={styles.track}>
        {repeated.map((logo, index) => (
          <div key={index} className={styles.item}>
            <Image
              src={logo}
              alt={`Cliente ${index}`}
              width={220} 
              height={220}
              className={styles.clientLogo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { Carousel };

