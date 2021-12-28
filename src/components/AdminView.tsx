import {
    Button,
} from "antd";

import ChooseAnswers from "./ChooseAnswers";
import {useDispatch, useSelector} from "react-redux";
import {resetClock, ticking} from "../clock/slice";
import {useCallback, useMemo, useRef, useState} from "react";
import {selectClock} from "../clock/selector";

const AdminView = () => {
    const [count, setCount] = useState(5);
    console.log('AdminView rendering...');

    const dispatch = useDispatch();

    const counter = useSelector(selectClock);

    const countTime = () => {
        let time = setInterval(function () {
            setCount(count - 1);

            console.log(count);

            if (count < 1) {
                clearInterval(time);
            }
        }, 1000);
    };


    const startTime = useCallback(() => {
        countTime();
    }, [countTime]);

    return (
        <div>
            <h1 className='text-center'>AdminView</h1>
            <div className='w-4/5 mx-auto flex border-2 border-indigo-600 border-solid'>
                <div className='w-8/12 p-5'>
                    {/*<ChooseAnswers count={}/>*/}
                </div>
                <div className='w-4/12 text-center'>
                    <div className='h-auto m-5'>
                        <Button type='primary' className='w-full text-2xl h-20'>Get Main Player Info</Button>
                    </div>
                    <div className='h-auto m-5'>
                        <Button type='primary' className='w-full text-2xl h-20'>Next Question</Button>
                    </div>
                    <div className='h-auto m-5'>
                        <Button
                            type='primary'
                            className='w-full text-2xl h-20'
                            onClick={startTime}
                        >
                            Start Clock
                        </Button>
                    </div>
                    <div className='h-auto m-5'>
                        <Button type='primary' className='w-full text-2xl h-20'>Show Correct Answer</Button>
                    </div>
                    <div className='h-auto m-5'>
                        <Button type='primary' className='w-full text-2xl h-20'>Show Player's Status</Button>
                    </div>
                    <div className='h-auto m-5'>
                        <Button type='primary' className='w-full text-2xl h-20'>Show Player's Stats</Button>
                    </div>
                    <div className='h-auto m-5'>
                        <Button type='primary' className='w-full text-2xl h-20'>Next Player</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminView;
