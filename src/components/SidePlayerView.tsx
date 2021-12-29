import {Button, Modal} from "antd";
import {memo, useCallback} from "react";
import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {ButtonType} from "antd/es/button";

const {info, warning} = Modal;

const chosenAnswer = atom({
    key: 'chosenAnswerSide',
    default: {
        value: 0,
        text: '',
    },
});

const options = [
    {
        value: 1,
        text: 'A',
    },
    {
        value: 2,
        text: 'B',
    },
    {
        value: 3,
        text: 'C',
    }
];

const Btn = memo(({value, text, type}: { value: number, text: string, type: ButtonType }) => {

    const setChoice = useSetRecoilState(chosenAnswer);

    const onChange3 = useCallback(() => {
        setChoice({value, text});
    }, [setChoice, value]);
    return (
        <>
            <Button
                    type={type}
                    className='border-2 border-solid rounded-full w-72 h-20 text-2xl mb-5'
                    onClick={onChange3}
            >
                {text}
            </Button>
        </>
    );
});

const OptionsList = () => {
    const selected = useRecoilValue(chosenAnswer);
    // console.log('selected: ', selected);
    return (
        <div className='mx-7'>
            {options.map(o =>
                <Btn
                    value={o.value}
                    key={o.value}
                    type={selected.value === o.value ? 'primary' : 'default'}
                    text={o.text}
                />
            )}
        </div>
    )
}

const SidePlayerView = () => {

    const [choice, setChoice] = useRecoilState(chosenAnswer);

    const resetAnswer = useCallback(() => {
        setChoice({
            value: 0,
            text: '',
        });
    }, [setChoice]);

    const submit = useCallback(() => {
        if (choice.value) {
            info({
                content: 'Ghi nhận đáp án: ' + choice.text,
                onOk() {
                    // console.log('OK');
                },
                onCancel() {
                    // console.log('Cancel');
                },
            });
        } else {
            warning({
                content: 'Bạn chưa chọn đáp án!',
                onOk() {
                    // console.log('OK');
                },
            })
        }

    }, [choice]);

    return (
        <div className={'text-center'}>
            <h1>Side player view</h1>
            <div>
                <OptionsList/>
            </div>
            <div>
                <Button
                    type='default'
                    onClick={resetAnswer}
                    className='px-5 py-3 items-center h-auto mr-5'
                >
                    Reset
                </Button>
                <Button
                    type='primary'
                    onClick={submit}
                    className='px-5 py-3 items-center h-auto'
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default SidePlayerView;
