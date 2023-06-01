import React from 'react'
import MainSlider from '../../Components/MainSlider/MainSlider'
import MainResturantMenu from '../../Components/MainResturantMenu/MainResturantMenu'
import MainAbout from '../../Components/MainAbout/MainAbout'
import MainResturantBranches from '../../Components/MainResturantBranches/MainResturantBranches'

export default function Home() {
  return (
    <div>
        <MainSlider/>
        <MainResturantMenu/>
        <MainAbout/>
        <MainResturantBranches/>
    </div>
  )
}
