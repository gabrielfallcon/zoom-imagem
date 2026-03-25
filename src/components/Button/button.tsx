import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: "primary" | "secondary" | "tertiary" | "glass" | "ghost";
  size: "sm" | "md" | "lg";
  icon?: ReactNode;
  onClick?: () => void;
  load?: boolean;
}

const Button = ({
  label,
  size,
  variant,
  icon,
  onClick,
  load,
  ...props
}: IButtonProps) => {
  const hasVariant = (() => {
    switch (variant) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      case "tertiary":
        return styles.tertiary;
      case "glass":
        return styles.glass;
      case "ghost":
        return styles.ghost;
      default:
        return styles.default;
    }
  })();

  return (
    <button
      className={clsx(
        styles.button,
        hasVariant,
        size === "sm" && styles.sizeSm,
        size === "md" && styles.sizeMd,
        size === "lg" && styles.sizeLg
      )}
      onClick={onClick}
      {...props}
    >
      {load ? (
        <img
          src="/images/loading.svg"
          alt="Carregando"
          className={styles.loading}
        />
      ) : (
        <>
          {label}
          {icon}
        </>
      )}
    </button>
  );
};

export { Button };
