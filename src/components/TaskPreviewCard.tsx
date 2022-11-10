import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"

export default function TaskPreviewCard() {
const theme = useContext(ThemeContext)

    return (
        <div id='task-preview-card' className={theme}>
            <h1 className='heading-m'>Design settings and search pages</h1>
            <h2 className='heading-s'>1 of 3 subtasks</h2>
        </div>
    )
}

//props title task count