import footerStyle from "../scss/_footer.module.scss"

const Footer = () => {
  return (
    <div className={footerStyle["copyright"]}>
        <p>
        Copyright by  Z.Gulen™ &copy; <span>{new Date().getFullYear()}</span>
        </p>
    </div>
  )
}

export default Footer