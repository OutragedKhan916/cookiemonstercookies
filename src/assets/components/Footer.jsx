export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        <div>
          <h2 style={styles.logo}>🍪 Cookie Monster Cookies</h2>
          <p style={styles.text}>Fresh cookies baked daily</p>
        </div>

        <div>
          <h3>📍 Location</h3>
          <p style={styles.text}>Sharjah, UAE</p>
          <p style={styles.text}>Open: 10AM - 11PM</p>
        </div>

        <div>
          <h3>📞 Contact</h3>
          <p style={styles.text}>+971 67 67 67</p>
          <p style={styles.text}>cookies@shop.com</p>
        </div>

        <div>
         <div>
  <h3>🔗 Social</h3>

  <a href="https://instagram.com" target="_blank" style={styles.iconLink}>
    📸 Instagram
  </a>
  <br />

  <a href="https://tiktok.com" target="_blank" style={styles.iconLink}>
    🎵 TikTok
  </a>
  <br />

  <a href="https://twitter.com" target="_blank" style={styles.iconLink}>
    🐦 Twitter
  </a>
</div>
        </div>

      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} Cookie Monster Cookies
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: "#2b1d1d",
    color: "white",
    marginTop: "50px",
    padding: "40px 20px",
    fontFamily: "Georgia, serif",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
  },
  logo: {
    fontFamily: "cursive",
    marginBottom: "10px",
  },
  text: {
    opacity: 0.85,
  },
  link: {
    color: "#ffd1a1",
    textDecoration: "none",
  },
  bottom: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "12px",
    opacity: 0.7,
    borderTop: "1px solid #444",
    paddingTop: "10px",
  },
}