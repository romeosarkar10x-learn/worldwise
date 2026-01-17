import styles from "./Button.module.css";

export default function Button({
    type,
    children,
    onClick,
}: {
    type: "primary" | "back";
    children: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
    let cn = styles.btn;

    if (type === "primary") {
        cn += " " + styles.primary;
    } else if (type === "back") {
        cn += " " + styles.back;
    }

    return (
        <button className={cn} {...{ onClick }}>
            {children}
        </button>
    );
}
