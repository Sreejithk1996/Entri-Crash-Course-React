import React from 'react';
import Header from './Components/Header/Header'
import Profile from './Components/profile/Profile';
import List from './Components/List';

export default function App() {

const profile1 = {
  name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com"
}

  const profile2 = {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }

  return (
    <>
     {/* <Header/> 
      <Profile profile = {profile1}/>
      <Profile profile = {profile2} /> */}
      <List/>
    </>
  )
}
