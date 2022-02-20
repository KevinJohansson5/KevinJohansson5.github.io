const Historical = () => {
  let historicalVal: string[] = ["temp"]
  return (
    <div>
      <h2>Historical Rates</h2>
      <p>
        <label>Enter Date</label>
        <br></br>
        <input type="Date"></input>
      </p>
      <p>
        <label>(Optional) Enter List of Symbols</label>
        <br></br>
        <input></input>
      </p>
      <p>
        <button>Get Rates</button>
      </p>
      <p>
        <label> { historicalVal } </label>
      </p>
    </div>
  )
}

export default Historical