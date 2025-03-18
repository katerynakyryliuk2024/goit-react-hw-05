import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  followers,
  views,
  likes,
}) {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.foto}>
          <img src={image} alt="User avatar" />
        </div>
        <p className={css.text}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.part}>
          <span>Followers</span>
          <span className={css.number}>{followers}</span>
        </li>
        <li className={css.part}>
          <span>Views</span>
          <span className={css.number}>{views}</span>
        </li>
        <li className={css.part}>
          <span>Likes</span>
          <span className={css.number}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
