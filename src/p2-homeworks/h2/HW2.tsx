import React, {ChangeEvent, useState} from 'react'
import Affairs from './Affairs'
import AlternativeAffairs from "./AlternativeAffairs";

// types
export type AffairPriorityType = "high"|'low'|'middle' // need to fix any
export type AffairType = {
    _id:number
    name:string
    priority:AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'}
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType):  Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    else return affairs.filter((a)=>a.priority===filter)// need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(a=>a._id!==_id)
    // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')
    const [value,setValue] = useState<string>('')
    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any
    const onChangeAffair = (e:ChangeEvent<HTMLInputElement>)=>
    {
        {
            setValue(e.currentTarget.value)
        }
    }
 const addAffair = (title:string)=>{
   const affair: AffairType = {_id: 7, name: title, priority: 'middle'}
   setAffairs([...affairs,affair])
     setValue('')
    }
    return (
        <div>
            <hr/>
            homeworks 2
            <button  onClick={()=>{addAffair(value)}}>+</button>
            <input value={value}  autoFocus onChange={onChangeAffair}/>
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            для личного творчества, могу проверить
            <AlternativeAffairs/>
            <hr/>
        </div>
    )
}

export default HW2
