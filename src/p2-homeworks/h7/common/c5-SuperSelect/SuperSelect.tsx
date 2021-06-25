import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    value:string
    options: string[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options?.map((o,i:number)=><option key={o+'-'+i}>{o}</option>); // map options with key
    const select={
        margin:'5px',
        width:'100px',
        padding:'5px',
        borderTop:'none',
        borderLeft:'none',
        borderRadius:'10px',
        backgroundImage:'url(https://lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg)'
    }
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange&&onChange(e)
        onChangeOption&&onChangeOption(e.currentTarget.value)
    }

    return (
        <select style={select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
