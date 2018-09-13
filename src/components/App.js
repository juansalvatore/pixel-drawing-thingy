import React, { Component } from 'react'

class App extends Component {
  state = {
    x: 0,
    y: 0,
    pixels: [],
  }

  handleClick = event => {
    let x = event.nativeEvent.offsetX
    let y = event.nativeEvent.offsetY

    this.setState({
      pixels: [...this.state.pixels, { cords: { x, y }, color: 'blue' }],
    })
  }

  renderPixels = () => {
    return this.state.pixels.map((pixel, i) => {
      return (
        <div
          key={i}
          style={{
            width: 15,
            height: 15,
            position: 'absolute',
            top: this.state.pixels[i].cords.y,
            left: this.state.pixels[i].cords.x,
            backgroundColor: this.state.pixels[i].color,
            opacity: 0.4,
          }}
        />
      )
    })
  }

  render() {
    return (
      <div className="app" onClick={this.handleClick}>
        {this.renderPixels()}
      </div>
    )
  }
}

export default App
