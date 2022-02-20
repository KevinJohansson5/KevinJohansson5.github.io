const Latest = () => {
  let ratesVal: string[] = ["temp"]
  return (
    <div>
      <h2>Latest Rates</h2>
      <p>
        <label>(Optional) Enter List of Symbols</label>
        <br></br>
        <input></input>
      </p>
      <button>Get Latest Rates</button>
      <p>
        <label> { ratesVal } </label>
      </p>
    </div>
  )
}

export default Latest