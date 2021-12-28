import {
    Button,
    Image,
} from "antd";
import {memo, useCallback} from "react";
import {atom, useRecoilValue, useSetRecoilState} from "recoil";
import {ButtonType} from "antd/es/button";
import './ChooseAnswers.css';
import {useSelector} from "react-redux";
import {selectClock} from "../clock/selector";

const selectedState = atom({
    key: 'optional-selected',
    default: -1,
});


const Btn = memo(({value, type, answer}: { value: number, type: ButtonType, answer: string }) => {
    const setSelected = useSetRecoilState(selectedState)
    // console.log(value, type);
    const setSelect = useCallback(() => {
        setSelected(value);
    }, [setSelected, value]);

    return (
        <Button
            type={type}
            className='min-w-full h-auto mb-3 rounded-xl'
            onClick={setSelect}
        >
            <p className='break-words whitespace-normal mb-0 text-xl'>
                {answer}
            </p>
        </Button>
    );
});
const options = [
    {
        value: 1,
        answer: 'A. Nếu người chơi chính trả lời đúng, và vẫn còn người cùng chơi ở trạng thái xanh thì GM sẽ chọn câu hỏi tiếp theo',
    },
    {
        value: 2,
        answer: 'B. Rồi ấn nút: “Show Players’ Status" để hiển thị trạng thái của các người cùng chơi.',
    },
    {
        value: 3,
        answer: 'C. Để kết thúc cho câu hỏi, GM ấn nút: “Show Correct Answer" để hiển thị kết quả.',
    },
];

const OptionsList = () => {
    const selected = useRecoilValue(selectedState);

    return (
        <div className='mx-7'>
            {options.map(o =>
                <Btn
                    value={o.value}
                    key={o.value}
                    type={selected === o.value ? 'primary' : 'default'}
                    answer={o.answer}
                />
            )}
        </div>
    )
}

const onClick = () => {
    alert(1);
}
const SupportAction = () => {
    return (
        <div className='w-full text-center flex'>
            <div className='items-center justify-center'>
                <Image
                    className='rounded-full border-2 border-indigo-600 border-solid w-1/2 m-auto hovered'
                    src={require('../images/one_person.png')}
                    preview={false}
                    onClick={onClick}
                />
            </div>
            <div className='items-center justify-center'>
                <Image
                    className='rounded-full border-2 border-indigo-600 border-solid w-1/2 m-auto hovered'
                    src={require('../images/one_person.png')}
                    preview={false}
                />
            </div>
            <div className='items-center justify-center'>
                <Image
                    className='rounded-full border-2 border-indigo-600 border-solid w-1/2 m-auto hovered'
                    src={require('../images/one_person.png')}
                    preview={false}
                />
            </div>
            <div className='items-center justify-center'>
                <Image
                    className='rounded-full border-2 border-indigo-600 border-solid w-1/2 m-auto hovered'
                    src={require('../images/one_person.png')}
                    preview={false}
                />
            </div>
        </div>
    );

};
const ClockBox = () => {
    console.log('clock box rendering ...')
    const counter = useSelector(selectClock);
    return (
        <div className='border-2 border-green-400 border-solid rounded-full w-20 h-20 flex items-center justify-center text-3xl'>
            {counter}
        </div>
    );
}
const ChooseAnswers = () => {
    console.log('Choose answer rendering ...');
    return (
        <div>
            <div className='flex justify-end'>
                <ClockBox/>
            </div>
            <p className='text-xl mb-20 border-2 border-black border-solid py-20'>
                Để kết thúc cho câu hỏi, GM ấn nút: “Show Correct Answer" để hiển thị kết quả.
                Rồi ấn nút: “Show Players’ Status" để hiển thị trạng thái của các người cùng chơi.
                Dựa trên, kết quả của người chơi chính để quyết định:
                Nếu người chơi chính trả lời đúng, và vẫn còn người cùng chơi ở trạng thái xanh thì GM sẽ chọn câu hỏi
                tiếp theo (ấn nút “Next Question”), rồi lặp lại như trên.
                Nếu người chơi chính trả lời đúng, đánh bại hết người cùng chơi thì giành chiến thắng, trao thưởng, rồi
                tìm ra người chơi tiếp theo.
                Nếu người chơi chính trả lời sai, thì tìm ra người chơi tiếp theo.
            </p>
            <OptionsList/>
            <SupportAction/>
        </div>
    );
};

export default ChooseAnswers;
