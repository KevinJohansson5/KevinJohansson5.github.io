import Symbols from './Symbols'
import Latest from './Latest'
import Historical from './Historical'

const Body = () => {
  return (
    <div style={ container }>
      <div style={ bodyStyle }>
        <Symbols />
      </div>
      <div style={ bodyStyle }>
        <Latest />
      </div>
      <div style={ bodyStyle }>
        <Historical />
      </div>
    </div>
  )
}

const container = {
  display: "flex"
}

const bodyStyle = {
  width: "33%",
}


export default Body