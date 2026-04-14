import logo from "../images/logo.png"

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <img src={logo} alt="logo" style={styles.logo} />
        <h2>Cookie Monster Cookies</h2>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "#3b2f2f",
    color: "white",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
}