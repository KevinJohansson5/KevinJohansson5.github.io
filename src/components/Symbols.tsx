const Symbols = () => {
  let symbolsValue: String[] = ["temp"]
  return (
    <div>
      <h2>Symbols</h2>
      <button>Get List of Symbols</button>
      <p>
        <label>{ symbolsValue }</label>
      </p>
    </div>
  )
}

export default Symbols