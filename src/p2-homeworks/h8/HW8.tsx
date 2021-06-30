import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type PeopleType = {
    _id: number
    name: string
    age: number
}

export const initialPeople: Array<PeopleType> = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);
    let [value,setValue] = useState<number>(0)
    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const adulthood = () => setPeople(homeWorkReducer(initialPeople, {type: "check",payload: value}))
    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {people.map(p => {
                return <div key={p._id}>{p._id}) {p.name} {p.age}</div>
            })}
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div>Возраст сортировки<input value={value}  onChange={e => setValue(+e.currentTarget.value)}/></div>
            <div><SuperButton  onClick={adulthood}>check</SuperButton></div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>

    );

}

export default HW8;
