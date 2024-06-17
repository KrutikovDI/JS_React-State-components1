// import { Component } from "react";
import { useState } from "react";
import { Toolbar } from "../Toolbar/Toolbar";
import {  ProjectList } from '../ProjectList'

export const Portfolio = () => {
  
  const item = {
    filters: ["All", "Websites", "Flayers", "Business Cards"],
    selected: "All",
    onSelectFilter: (filter) => {setFilter(filter.target.textContent)}
  };
  const [filter, setFilter] = useState(item.selected)
  item.selected = filter
  
return (   
  <>
      <Toolbar item={item}/>
      <ProjectList item={item.selected}/>
  </>
  )
}