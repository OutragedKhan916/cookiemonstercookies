export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.section}>
          <h3>🍪 Cookie Monster Cookies</h3>
          <p>Freshly baked cookies every day</p>
        </div>

        <div style={styles.section}>
          <h4>📍 Location</h4>
          <p>Riyadh, Saudi Arabia</p>
          <p>Open: 10AM - 10PM</p>
        </div>

        <div style={styles.section}>
          <h4>📞 Contact</h4>
          <p>+966 XXX XXX XXX</p>
          <p>cookie@shop.com</p>
        </div>

      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} Cookie Monster Cookies. All rights reserved.
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: "#2b1d1d",
    color: "white",
    marginTop: "40px",
    padding: "30px 20px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
  },
  section: {
    minWidth: "200px",
  },
  bottom: {
    marginTop: "20px",
    textAlign: "center",
    borderTop: "1px solid #444",
    paddingTop: "10px",
    fontSize: "12px",
    opacity: 0.7,
  },
}