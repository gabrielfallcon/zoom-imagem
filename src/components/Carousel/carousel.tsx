"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./carousel.module.scss";

export const CarouselTag = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  
  const logos = [
    "/images/client-logo/santander-branco.png",
    "/images/client-logo/netflix-branco.png",
    "/images/client-logo/aws-branco.png",
    "/images/client-logo/99-branco.png",
    "/images/client-logo/vivo-branco.png",
    "/images/client-logo/heineken-branco.png",
    "/images/client-logo/bk-branco.png",
    "/images/client-logo/byd-branco.webp",
    "/images/client-logo/itau-branco.png",
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 0.5; 

    const animate = () => {
      position -= speed;

      const width = track.scrollWidth / 2;

      if (Math.abs(position) >= width) {
        position += width;
      }

      track.style.transform = `translateX(${position}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className={styles.clientsWrapper}>
      <div ref={trackRef} className={styles.track}>
        {[...logos, ...logos, ...logos, ...logos, ...logos].map(
          (logo, index) => (
            <div key={index} className={styles.item}>
              <Image src={logo} alt="" width={140} height={140} />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default CarouselTag;
