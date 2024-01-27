"use client";
import React, { useState } from "react"
import Header from "./header.js";
import Search from "./search.js";
import Info from "./information.js";
export default function Home() {
  return (
    <>  
      <Header/>
      <hr/>
      <hr/>
      <Search/>
      <Info/>
    </>
  )
}
