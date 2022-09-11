import React from "react";
import styles from "../../../styles/Component.module.scss";

interface LinkButtonProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  text: string;
  url: string;
  bgcolor?: string;
}

const LinkButton: React.FunctionComponent<LinkButtonProps> = (props) => {
  const { children, text, url, bgcolor, style } = props;

  let _style: React.CSSProperties = style || {};

  // override
  if (bgcolor) _style.backgroundColor = bgcolor;

  return (
    <a
      className={styles.link}
      href={url}
      style={_style}
      {...props}
      target={"_blank"}
      rel="noreferrer"
    >
      {text}
      {children}
    </a>
  );
};

export default LinkButton;
