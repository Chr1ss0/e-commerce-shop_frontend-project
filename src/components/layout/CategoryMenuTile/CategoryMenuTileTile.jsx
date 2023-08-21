import styles from "./CategoryMenuTile.module.scss"
export const CategoryMenuTileTile = ({ img, catName, onClickP }) => {
  return (
    <article
      onClick={onClickP}
      className={styles.container}>
      <div className={styles.bg_wrapper}>
        <img
          className={styles.image}
          src={img}
          alt={catName}
        />
      </div>
      <h3 className={styles.cat_name}>{catName}</h3>
    </article>
  )
}
