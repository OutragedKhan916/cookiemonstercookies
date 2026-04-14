import { useState } from "react"

export default function Order() {
  const [selected, setSelected] = useState("")

  const cookies = [
    "Chocolate Chip",
    "Double Chocolate",
    "Oat Cookies",
    "Nutella Filled",
    "Red Velvet",
  ]

  return (
    <section style={styles.container}>
      <h2>🍪 Order Your Cookies</h2>
      <p>Select your favorite flavor below</p>

      <div style={styles.grid}>
        {cookies.map((item) => (
          <button
            key={item}
            onClick={() => setSelected(item)}
            style={{
              ...styles.card,
              backgroundColor: selected === item ? "#3b2f2f" : "white",
              color: selected === item ? "white" : "black",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <button style={styles.orderBtn}>
        {selected ? `Order ${selected}` : "Select a Cookie"}
      </button>
    </section>
  )
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px 20px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    margin: "20px 0",
  },
  card: {
    padding: "12px 18px",
    border: "1px solid #3b2f2f",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "0.2s",
  },
  orderBtn: {
    marginTop: "20px",
    padding: "12px 25px",
    backgroundColor: "#3b2f2f",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
}