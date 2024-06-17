import { data } from '../../../public/db'
import classes from "./projectList.module.css"

export const ProjectList = (props) => {
  let content = data
  if (props.item != "All") {
    content = data.filter(element => element.category == props.item)
  }
  return (
    <>
    <p className={classes["projects"]}>
        {content.map((c, i) => (
            <img key={i} src={c.img} className={classes['img']}/>
        ))}
    </p>
    </>
  )
}