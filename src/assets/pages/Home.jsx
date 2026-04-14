export default function Home() {
  return (
    <section style={styles.container}>
      <h1>Welcome to Cookie Monster Cookies 🍪</h1>
      <p>Fresh baked cookies made daily in Sharjah</p>

      <div style={styles.buttons}>
        <button style={styles.btn}>View Menu</button>
        <button style={styles.btn}>Order Now</button>
        <button style={styles.btn}>Our Story</button>
      </div>
    </section>
  )
}

const styles = {
  container: {
    textAlign: "center",
    padding: "60px 20px",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  btn: {
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#3b2f2f",
    color: "white",
    cursor: "pointer",
    borderRadius: "8px",
  },
}
