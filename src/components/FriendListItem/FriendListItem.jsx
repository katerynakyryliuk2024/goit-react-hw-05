import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClsx = clsx(css.text, isOnline ? css.online : css.ofline);
  return (
    <div className={css.conteiner}>
      <img src={avatar} alt="Avatar" width="80" />
      <p className={css.name}>{name}</p>
      <p className={statusClsx}>{isOnline ? "Online" : "Ofline"}</p>
    </div>
  );
}
