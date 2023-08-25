import styles from "./FilterMenu.module.scss"
import backArrowSvg from "../../../assets/images/leftarrow.svg"
import { FilterContext } from "../../../context/filterContext.js"
import { useContext } from "react"
import { FilterMenuTile } from "../FilterMenuTile/FilterMenuTile.jsx"
import { ButtonBlue } from "../ButtonBlue/ButtonBlue.jsx"
import { useLocation } from "react-router-dom"
import { Button } from "@mui/material"

export const FilterMenu = ({ onClickBack }) => {
  const {
    electronicsFilter,
    setElectronicsFilter,
    lifeStyleFilter,
    setLifeStyleFilter,
    homeFilter,
    setHomeFilter,
    clothesFilter,
    setClothesFilter,
    accessoriesFilter,
    setAccessoriesFilter,
    vehicleFilter,
    setVehicleFilter,
    menFilter,
    setMenFilter,
    womenFilter,
    setWomanFilter,
    price0_20Filter,
    setPrice0_20Filter,
    price20_50Filter,
    setPrice20_50Filter,
    price50_100Filter,
    setPrice50_100Filter,
    price100Filter,
    setPrice100Filter,
    appleFilter,
    setAppleFilter,
    samsungFilter,
    setSamsungFilter,
    superCodeFilter,
    setSuperCodeFilter,
    topSweaterFilter,
    setTopSweaterFilter,
    ghaziFilter,
    setGhaziFilter,
    vintageFilter,
    setVintageFilter,
    warehouseFilter,
    setWarehouseFilter,
    louisWillFilter,
    setLoisWillFilter,
    skmeiFilter,
    setSkmeiFilter,
    easternWatchFilter,
    setEasternWatchFilter,
  } = useContext(FilterContext)

  const filterMenuLocation = useLocation().pathname

  const filterSetterFunctions = [
    setElectronicsFilter,
    setLifeStyleFilter,
    setHomeFilter,
    setClothesFilter,
    setAccessoriesFilter,
    setVehicleFilter,
    setMenFilter,
    setWomanFilter,
    setPrice0_20Filter,
    setPrice20_50Filter,
    setPrice50_100Filter,
    setPrice100Filter,
    setAppleFilter,
    setSamsungFilter,
    setSuperCodeFilter,
    setTopSweaterFilter,
    setGhaziFilter,
    setVintageFilter,
    setWarehouseFilter,
    setLoisWillFilter,
    setSkmeiFilter,
    setEasternWatchFilter,
  ]

  const clearAllFilters = () => {
    filterSetterFunctions.forEach((setFilter) => setFilter(false))
  }

  return (
    <aside className={styles.container}>
      <header className={styles.header}>
        <img
          onClick={onClickBack}
          className={styles.back}
          src={backArrowSvg}
          alt="back"
        />
        <h2 className={styles.headline}>Filters</h2>
      </header>
      {filterMenuLocation === "/products" && (
        <article className={styles.options_card}>
          <h2 className={styles.options_headline}>Categories</h2>
          <div className={styles.card_flex_wrapper}>
            <FilterMenuTile
              content={"Electronics"}
              classNameTeneray={electronicsFilter}
              onClickP={() => setElectronicsFilter((prevState) => !prevState)}
            />
            <FilterMenuTile
              content={"Lifestyle"}
              classNameTeneray={lifeStyleFilter}
              onClickP={() => setLifeStyleFilter((prevState) => !prevState)}
            />{" "}
            <FilterMenuTile
              content={"Clothes"}
              classNameTeneray={clothesFilter}
              onClickP={() => setClothesFilter((prevState) => !prevState)}
            />{" "}
            <FilterMenuTile
              content={"Home"}
              classNameTeneray={homeFilter}
              onClickP={() => setHomeFilter((prevState) => !prevState)}
            />{" "}
            <FilterMenuTile
              content={"Moto Vehicle"}
              classNameTeneray={vehicleFilter}
              onClickP={() => setVehicleFilter((prevState) => !prevState)}
            />{" "}
            <FilterMenuTile
              content={"Accessories"}
              classNameTeneray={accessoriesFilter}
              onClickP={() => setAccessoriesFilter((prevState) => !prevState)}
            />{" "}
            <FilterMenuTile
              content={"Men"}
              classNameTeneray={menFilter}
              onClickP={() => setMenFilter((prevState) => !prevState)}
            />{" "}
            <FilterMenuTile
              content={"Woman"}
              classNameTeneray={womenFilter}
              onClickP={() => setWomanFilter((prevState) => !prevState)}
            />
          </div>
        </article>
      )}
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
            onClickP={() => setPrice100Filter((prevState) => !prevState)}
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
            content={"Samsung"}
            classNameTeneray={samsungFilter}
            onClickP={() => setSamsungFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Powered by SuperCode"}
            classNameTeneray={superCodeFilter}
            onClickP={() => setSuperCodeFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Top Sweater"}
            classNameTeneray={topSweaterFilter}
            onClickP={() => setTopSweaterFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Ghazi Fabric"}
            classNameTeneray={ghaziFilter}
            onClickP={() => setGhaziFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Vintage Apparel"}
            classNameTeneray={vintageFilter}
            onClickP={() => setVintageFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"The Warehouse"}
            classNameTeneray={warehouseFilter}
            onClickP={() => setWarehouseFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Eastern Watches"}
            classNameTeneray={easternWatchFilter}
            onClickP={() => setEasternWatchFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"Louis Will"}
            classNameTeneray={louisWillFilter}
            onClickP={() => setLoisWillFilter((prevState) => !prevState)}
          />
          <FilterMenuTile
            content={"SKMEI 9117"}
            classNameTeneray={skmeiFilter}
            onClickP={() => setSkmeiFilter((prevState) => !prevState)}
          />
        </div>
      </article>
      <ButtonBlue
        onClickP={onClickBack}
        text={"Apply Filter"}
      />
      <Button onClick={clearAllFilters}>Clear</Button>
    </aside>
  )
}
