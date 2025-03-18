import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((el) => (
        <li className={css.item} key={el.id}>
          <FriendListItem
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
