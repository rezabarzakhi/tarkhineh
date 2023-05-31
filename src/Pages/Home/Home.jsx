import React from 'react'
import MainSlider from '../../Components/MainSlider/MainSlider'
import MainResturantMenu from '../../Components/MainResturantMenu/MainResturantMenu'
import MainAbout from '../../Components/MainAbout/MainAbout'

export default function Home() {
  return (
    <div>
        <MainSlider/>
        <MainResturantMenu/>
        <MainAbout/>
    </div>
  )
}
