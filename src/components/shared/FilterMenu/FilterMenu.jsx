import styles from "./FilterMenu.module.scss"
import backArrowSvg from "../../../assets/images/leftarrow.svg"
import { FilterContext } from "../../../context/filterContext.js"
import { useContext } from "react"
import { FilterMenuTile } from "../FilterMenuTile/FilterMenuTile.jsx"

export const FilterMenu = ({ onClickP }) => {
  const {
    gadgetFilter,
    setGadgetFilter,
    electronicsFilter,
    setElectronicsFilter,
    mobileFilter,
    setMobileFilter,
    clothFilter,
    setClothFilter,
    computerFilter,
    setComputerFilter,
    foodFilter,
    setFoodFilter,
    dragFilter,
    setDragFilter,
    furnitureFilter,
    setFurnitureFilter,
    babyFilter,
    setBabyFilter,
    cosmeticsFilter,
    setCosmeticsFilter,
    gymFilter,
    setGymFilter,
    price0_20Filter,
    setPrice0_20Filter,
    price20_50Filter,
    setPrice20_50Filter,
    price50_100Filter,
    setPrice50_100Filter,
    price100Filter,
    setprice100Filter,
    appleFilter,
    setAppleFilter,
    nikeFilter,
    setNikeFilter,
    adidasFilter,
    setAdidasFilter,
    lenovoFilter,
    setLenovoFilter,
    sonyFilter,
    setSonyFilter,
    nescafeFilter,
    setNescafeFilter,
    diorFilter,
    setDiorFilter,
    legoFilter,
    setLegoFilter,
    braunFilter,
    setBraunFilter,
    lorealFilter,
    setLorealFilter,
    zaraFilter,
    setZaraFilter,
  } = useContext(FilterContext)

  //Header will be a Component
  return (
    <aside className={styles.container}>
      <header className={styles.header}>
        <img
          onClick={onClickP}
          className={styles.back}
          src={backArrowSvg}
          alt="back"
        />
        <h2 className={styles.headline}>Filters</h2>
      </header>
      <article className={styles.options_card}>
        <h2 className={styles.options_headline}>Categories</h2>
        <div className={styles.card_flex_wrapper}>
          <FilterMenuTile
            content={"Gadget"}
            classNameTeneray={gadgetFilter}
            onClickP={() => setGadgetFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Electronics"}
            classNameTeneray={electronicsFilter}
            onClickP={() => setElectronicsFilter((prevState) => !prevState)}
          />{" "}
          <FilterMenuTile
            content={"Mobile"}
            classNameTeneray={mobileFilter}
            onClickP={() => setMobileFilter((prevState) => !prevState)}
          />{" "}
          <FilterMenuTile
            content={"Cloth"}
            classNameTeneray={clothFilter}
            onClickP={() => setClothFilter((prevState) => !prevState)}
          />{" "}
          <FilterMenuTile
            content={"Computer"}
            classNameTeneray={computerFilter}
            onClickP={() => setComputerFilter((prevState) => !prevState)}
          />{" "}
          <FilterMenuTile
            content={"Food"}
            classNameTeneray={foodFilter}
            onClickP={() => setFoodFilter((prevState) => !prevState)}
          />{" "}
          <FilterMenuTile
            content={"Drag"}
            classNameTeneray={dragFilter}
            onClickP={() => setDragFilter((prevState) => !prevState)}
          />{" "}
          <FilterMenuTile
            content={"Furniture"}
            classNameTeneray={furnitureFilter}
            onClickP={() => setFurnitureFilter((prevState) => !prevState)}
          />{" "}
          <FilterMenuTile
            content={"Baby & Kids"}
            classNameTeneray={babyFilter}
            onClickP={() => setBabyFilter((prevState) => !prevState)}
          />{" "}
          <FilterMenuTile
            content={"Cosmetics"}
            classNameTeneray={cosmeticsFilter}
            onClickP={() => setCosmeticsFilter((prevState) => !prevState)}
          />{" "}
          <FilterMenuTile
            content={"Gym & Sports"}
            classNameTeneray={gymFilter}
            onClickP={() => setGymFilter((prevState) => !prevState)}
          />
        </div>
      </article>
      <article className={styles.options_card}>
        <h2 className={styles.options_headline}>Price</h2>
        <div className={styles.card_flex_wrapper}>
          <FilterMenuTile
            content={"0 -20$"}
            classNameTeneray={price0_20Filter}
            onClickP={() => setPrice0_20Filter((prevState) => !prevState)}
          />{" "}
          <FilterMenuTile
            content={"20 -50$"}
            classNameTeneray={price20_50Filter}
            onClickP={() => setPrice20_50Filter((prevState) => !prevState)}
          />{" "}
          <FilterMenuTile
            content={"50 -100$"}
            classNameTeneray={price50_100Filter}
            onClickP={() => setPrice50_100Filter((prevState) => !prevState)}
          />{" "}
          <FilterMenuTile
            content={"over 100$"}
            classNameTeneray={price100Filter}
            onClickP={() => setprice100Filter((prevState) => !prevState)}
          />
        </div>
      </article>
      <article className={styles.options_card}>
        <h2 className={styles.options_headline}>Brands</h2>
        <div className={styles.card_flex_wrapper}>
          {" "}
          <FilterMenuTile
            content={"Apple"}
            classNameTeneray={appleFilter}
            onClickP={() => setAppleFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Nike"}
            classNameTeneray={nikeFilter}
            onClickP={() => setNikeFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"adidas"}
            classNameTeneray={adidasFilter}
            onClickP={() => setAdidasFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Lenovo"}
            classNameTeneray={lenovoFilter}
            onClickP={() => setLenovoFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Sony"}
            classNameTeneray={sonyFilter}
            onClickP={() => setSonyFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Nescafé"}
            classNameTeneray={nescafeFilter}
            onClickP={() => setNescafeFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Dior"}
            classNameTeneray={diorFilter}
            onClickP={() => setDiorFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Lego"}
            classNameTeneray={legoFilter}
            onClickP={() => setLegoFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Braun"}
            classNameTeneray={braunFilter}
            onClickP={() => setBraunFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"L’Oreal"}
            classNameTeneray={lorealFilter}
            onClickP={() => setLorealFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Zara"}
            classNameTeneray={zaraFilter}
            onClickP={() => setZaraFilter((prevState) => !prevState)}
          />
        </div>
      </article>
    </aside>
  )
}
