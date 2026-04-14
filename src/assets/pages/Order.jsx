function Order() {
  return (
    <section className="order">
      <h2>Order Now</h2>
      <button onClick={() => alert("Order placed 🍪")}>
        Place Order
      </button>
    </section>
  )
}

export default Order