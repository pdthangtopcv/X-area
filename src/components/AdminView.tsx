import {
    Button,
} from "antd";

import ChooseAnswers from "./ChooseAnswers";
import {useDispatch, useSelector} from "react-redux";
import {resetClock, ticking} from "../clock/slice";
import {useCallback} from "react";

const AdminView = () => {
    console.log('AdminView rendering...');

    const dispatch = useDispatch();

    const startTime = useCallback(() => {
        let time = 5;
        dispatch(resetClock(time));
        const interval = setInterval(() => {
            dispatch(ticking());
            time--;
            if (time < 1) {
                clearInterval(interval);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [dispatch]);

    return (
        <div>
            <h1 className='text-center'>AdminView</h1>
            <div className='w-4/5 mx-auto flex border-2 border-indigo-600 border-solid'>
                <div className='w-8/12 p-5'>
                    <ChooseAnswers/>
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
