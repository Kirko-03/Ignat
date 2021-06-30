
import {PeopleType} from '../../HW8';
import {CheckAC, homeWorkReducer, SortAC} from "../homeWorkReducer";

let initialState: PeopleType[];

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const action = SortAC("up")
    const newState = homeWorkReducer(initialState, action)
    expect(newState[0].name).toBe("Александр")
});
test("sort name down", () => {
    const action = SortAC("down")
    const newState = homeWorkReducer(initialState, action);
    expect(newState[5].name).toBe("Александр")
});
test("check age 18", () => {
    const action = CheckAC(18)
    const newState = homeWorkReducer(initialState, action);
    expect(newState[0].name).toBe("Александр")
    expect(!newState[5]).toBe(true)


});
