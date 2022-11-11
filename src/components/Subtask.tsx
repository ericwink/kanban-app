interface props{
    task: String
}

export default function Subtask ({task}: props){
    return(
        <div className="subtask">
         <input type="checkbox" name="subtask"/>
         <label className="body-b" htmlFor="subtask">{task}</label>
        </div>
    )
}