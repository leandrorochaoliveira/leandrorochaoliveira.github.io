import { ReactNode } from "react";

type Props = {
  title: string;
  click: () => void;
  children?: ReactNode;
};
export default function Button({ title, click, children }: Props) {
  return (
    <button
      className="button"
      onClick={() => {
        click();
      }}
    >
      <span className="relative">{title}</span>
      {children}
    </button>
  );
}
