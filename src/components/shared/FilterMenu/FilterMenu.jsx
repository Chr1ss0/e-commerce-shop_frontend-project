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
  const resetPriceFilters = () => {
    setPrice100Filter(false)
    setPrice50_100Filter(false)
    setPrice20_50Filter(false)
    setPrice0_20Filter(false)
  }
  const resetBrandFilters = () => {
    setAppleFilter(false)
    setSamsungFilter(false)
    setSuperCodeFilter(false)
    setTopSweaterFilter(false)
    setGhaziFilter(false)
    setVintageFilter(false)
    setWarehouseFilter(false)
    setLoisWillFilter(false)
    setSkmeiFilter(false)
    setEasternWatchFilter(false)
  }
  const resetCategorieFilters = () => {
    setElectronicsFilter(false)
    setLifeStyleFilter(false)
    setHomeFilter(false)
    setClothesFilter(false)
    setAccessoriesFilter(false)
    setVehicleFilter(false)
    setMenFilter(false)
    setWomanFilter(false)
  }

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
              onClickP={() => {
                resetCategorieFilters()
                setElectronicsFilter((prev) => !prev)
              }}
            />
            <FilterMenuTile
              content={"Lifestyle"}
              classNameTeneray={lifeStyleFilter}
              onClickP={() => {
                resetCategorieFilters()
                setLifeStyleFilter((prev) => !prev)
              }}
            />{" "}
            <FilterMenuTile
              content={"Clothes"}
              classNameTeneray={clothesFilter}
              onClickP={() => {
                resetCategorieFilters()
                setClothesFilter((prev) => !prev)
              }}
            />{" "}
            <FilterMenuTile
              content={"Home"}
              classNameTeneray={homeFilter}
              onClickP={() => {
                resetCategorieFilters()
                setHomeFilter((prev) => !prev)
              }}
            />{" "}
            <FilterMenuTile
              content={"Moto Vehicle"}
              classNameTeneray={vehicleFilter}
              onClickP={() => {
                resetCategorieFilters()
                setVehicleFilter((prev) => !prev)
              }}
            />{" "}
            <FilterMenuTile
              content={"Accessories"}
              classNameTeneray={accessoriesFilter}
              onClickP={() => {
                resetCategorieFilters()
                setAccessoriesFilter((prev) => !prev)
              }}
            />{" "}
            <FilterMenuTile
              content={"Men"}
              classNameTeneray={menFilter}
              onClickP={() => {
                resetCategorieFilters()
                setMenFilter((prev) => !prev)
              }}
            />{" "}
            <FilterMenuTile
              content={"Woman"}
              classNameTeneray={womenFilter}
              onClickP={() => {
                resetCategorieFilters()
                setWomanFilter((prev) => !prev)
              }}
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
            onClickP={() => {
              resetPriceFilters()
              setPrice0_20Filter((prev) => !prev)
            }}
          />
          <FilterMenuTile
            content={"20 -50$"}
            classNameTeneray={price20_50Filter}
            onClickP={() => {
              resetPriceFilters()
              setPrice20_50Filter((prev) => !prev)
            }}
          />{" "}
          <FilterMenuTile
            content={"50 -100$"}
            classNameTeneray={price50_100Filter}
            onClickP={() => {
              resetPriceFilters()
              setPrice50_100Filter((prev) => !prev)
            }}
          />{" "}
          <FilterMenuTile
            content={"over 100$"}
            classNameTeneray={price100Filter}
            onClickP={() => {
              resetPriceFilters()
              setPrice100Filter((prev) => !prev)
            }}
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
            onClickP={() => {
              resetBrandFilters()
              setAppleFilter((prev) => !prev)
            }}
          />
          <FilterMenuTile
            content={"Samsung"}
            classNameTeneray={samsungFilter}
            onClickP={() => {
              resetBrandFilters()
              setSamsungFilter((prev) => !prev)
            }}
          />
          <FilterMenuTile
            content={"Powered by SuperCode"}
            classNameTeneray={superCodeFilter}
            onClickP={() => {
              resetBrandFilters()
              setSuperCodeFilter((prev) => !prev)
            }}
          />
          <FilterMenuTile
            content={"Top Sweater"}
            classNameTeneray={topSweaterFilter}
            onClickP={() => {
              resetBrandFilters()
              setTopSweaterFilter((prev) => !prev)
            }}
          />
          <FilterMenuTile
            content={"Ghazi Fabric"}
            classNameTeneray={ghaziFilter}
            onClickP={() => {
              resetBrandFilters()
              setGhaziFilter((prev) => !prev)
            }}
          />
          <FilterMenuTile
            content={"Vintage Apparel"}
            classNameTeneray={vintageFilter}
            onClickP={() => {
              resetBrandFilters()
              setVintageFilter((prev) => !prev)
            }}
          />
          <FilterMenuTile
            content={"The Warehouse"}
            classNameTeneray={warehouseFilter}
            onClickP={() => {
              resetBrandFilters()
              setWarehouseFilter((prev) => !prev)
            }}
          />
          <FilterMenuTile
            content={"Eastern Watches"}
            classNameTeneray={easternWatchFilter}
            onClickP={() => {
              resetBrandFilters()
              setEasternWatchFilter((prev) => !prev)
            }}
          />
          <FilterMenuTile
            content={"Louis Will"}
            classNameTeneray={louisWillFilter}
            onClickP={() => {
              resetBrandFilters()
              setLoisWillFilter((prev) => !prev)
            }}
          />
          <FilterMenuTile
            content={"SKMEI 9117"}
            classNameTeneray={skmeiFilter}
            onClickP={() => {
              resetBrandFilters()
              setSkmeiFilter((prev) => !prev)
            }}
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
