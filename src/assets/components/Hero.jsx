function Hero() {
  return (
    <section className="hero">
      <h1>🍪 Fresh Cookies Every Day</h1>
      <p>Warm, soft, and loaded with chocolate chips.</p>

      <button onClick={() => alert("Order coming soon 🍪")}>
        Order Now
      </button>
    </section>
  )
}

export default Hero