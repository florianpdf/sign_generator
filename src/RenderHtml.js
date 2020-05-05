import React from 'react'

class RenderHtml extends React.Component{
  render(){
    return(
      <React.Fragment>
        {Object.keys(this.props.infoUser).map((key) => {
          return <p>{key} => {this.props.infoUser[key]}</p>
        })}
      </React.Fragment>
      
    )
  }
}

export default RenderHtml