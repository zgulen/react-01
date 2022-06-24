import headerStyle from "../scss/_header.module.scss"

const Header = () => {
  return (
    <div className={headerStyle["header"]}>
        <h1 className={headerStyle["header__title"]}>React Basic Shop</h1>
        <p>Welcome to My Shop</p>
    </div>
  )
}

export default Header