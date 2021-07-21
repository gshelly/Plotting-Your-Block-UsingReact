import React from 'react';
import '../App.css'
import SubContents from './SubContents';
import Advertisement from './Advertisement';

const Main = () => {
  return (
    <div id="Main">
      <SubContents />
      <SubContents />
      <SubContents />
      <Advertisement />
    </div>
  )
}

export default Main;