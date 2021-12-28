import {Button, Form, Radio} from "antd";
import {useState} from "react";


const SidePlayerView = () => {
    const [choice, setChoice] = useState(0);

    const [form] = Form.useForm();

    const onChange3 = (e: any) => {
        console.log('radio3 checked', e.target.value);
        console.log(choice);
        setChoice(e.target.value);
    };

    const options = [
        { label: 'A', value: 0 },
        { label: 'B', value: 1 },
        { label: 'C', value: 2 },
    ];

    return (
        <div className={'text-center'}>
            <h1>Side player view</h1>
            <Form
                form={form}
            >
                <Form.Item
                    name='choice'
                >
                    <Radio.Group

                        options={options}
                        onChange={onChange3}
                        optionType="button"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        className='mr-2'
                        type='default'
                        htmlType='reset'
                    >
                        Reset
                    </Button>
                    <Button
                        type='primary'
                        htmlType='submit'
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SidePlayerView;
