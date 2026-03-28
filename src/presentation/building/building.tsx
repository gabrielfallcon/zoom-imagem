'use client'

import Image from "next/image";
import styles from './building.module.scss';

const Building = () => {
  return (
    <div  className={styles.wrapper} >
      <div className={styles.content}>
        <div className={styles.listImgs}>
          <div className={styles.item}>
            <Image src="/images/logoAssinatura.png" alt="Logo" width={309} height={56} className={styles.logo}/>
          </div>
          <div className={styles.boxIcons}>
            <div className={styles.item}>
              <Image src="/images/laptopWhite.png" alt="Computador" width={96} height={96}/>
            </div>
            <div className={styles.item}>
              <Image src="/images/cellWhite.png" alt="Celular" width={96} height={96}/>
            </div>
          </div>
        </div>

        <div className={styles.description}> 
          <h2>nosso site está em construção.</h2>
          <p>enquanto trabalhamos, aproveite para fazer um café e entrar em contato com a gente.</p>
        </div>

        <div className={styles.social}>
          <div className={styles.itemSocial}>
            <Image src="/images/insta.png" alt="Instagram" width={32} height={32}/>
            <p>@plinapps</p>
          </div>
          <div className={styles.itemSocial}>
            <Image src="/images/EnvelopeSimple.png" alt="Email" width={32} height={32}/>
            <p>contato@plinapps.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export {Building}