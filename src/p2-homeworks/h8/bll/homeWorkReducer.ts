import {PeopleType} from "../HW8";
//
// function inferLiteralFromString<T extends string>(arg: T): T {
//     return arg
// }

export const SortAC = (payload: string) => {
    return {
        type: "sort",
        payload
    } as const
}
export const CheckAC = (payload:number) => {
    return {
        type: "check",
        payload
    } as const
}
type  ActionTypes = SortACType | CheckACType

type CheckACType = ReturnType<typeof CheckAC>
type SortACType = ReturnType<typeof SortAC>


export const homeWorkReducer = (state: Array<PeopleType>, action: ActionTypes): Array<PeopleType> => {
    switch (action.type) {
        case "sort": {
            let stateCopy = [...state]
            switch (action.payload) {
                case "up": {
                   return  stateCopy.sort((a, b) => a.name > b.name ? 1 : -1)
                }
                case "down": {
                  return   state.sort(function (a, b) {
                    return   a.name > b.name ? 1 : -1
                    }).reverse()

                }
                default:
                    return state
            }
        }
        case "check": {
            let stateCopy = [...state]
            return stateCopy.filter(a => a.age >= action.payload)
        }
        default:
            return state
    }
}
