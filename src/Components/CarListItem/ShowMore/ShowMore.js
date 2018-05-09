import React from 'react'
import './ShowMore.css'
import CarImg from "../CarImg/CarImg";
import cars from "/home/maciabe/WebstormProjects/jfdd9-blueit-app/src/Components/SearchEngine/SearchEngine"
import CarFeatures from '/home/maciabe/WebstormProjects/jfdd9-blueit-app/src/Components/CarFeatures/CarFeatures.js'


class ShowMore extends React.Component {
  render() {
    return (
      <div className="ShowMore">
        <button id="show">SHOW MORE</button>
      </div>
    )
  }
}

export default ShowMore