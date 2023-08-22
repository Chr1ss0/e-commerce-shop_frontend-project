import styles from "../FilterMenu/FilterMenu.module.scss"

export const FilterMenuTile = ({ classNameTeneray, onClickP, content }) => {
  return (
    <>
      <div
        className={classNameTeneray ? styles.selected : styles.not_selected}
        onClick={onClickP}>
        {content}
      </div>
    </>
  )
}
