import classes from "./toolbar.module.css";
import { useState } from "react";



export const Toolbar = (props) => {
  const { filters, selected, onSelectFilter } = props.item;
  return (
    <>
    <ul className={classes["ul"]}>
        {filters.map((c, i) => (
            <li key={i}><button onClick={onSelectFilter} className={c == selected ? classes[`btn-selected`] : classes[`btn`]}>{c}</button></li>
        ))}
    </ul>
    </>
  )
}