import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {

    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());

    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
}
const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {

        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds()}`; // fix with date
    const stringDate = `${date.getDay()-3}.${date.getMonth()+1}.${date.getFullYear()}`; // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
