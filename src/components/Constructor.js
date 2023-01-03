import React, { Component } from 'react'

export class Constructor extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      bg:'white',
      btnBg:'black'
    }
  }

// Click Handler

  btnHandler=()=> {
    if(this.state.bg=='white'){
      this.setState({
        bg:'black',
        btnBg:'white'
      })
    }
    else{
      this.setState({
        bg:'white',
        btnBg:'black'
      })
    }
  }
  
  render() {
    return (
      <div className={`constructor__container ${this.state.bg}`}>
        <h2 className='heading__underline'>1. Constructor</h2>
        <p>Lorem took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <button className={`button ${this.state.btnBg}`} onClick={this.btnHandler}>Change Theme</button>
      </div>
    )
  }
}

export default Constructor