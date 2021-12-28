import { Image } from 'antd';
import { Outlet } from "react-router-dom";

const Player = ({name, status} : {name: string, status: number}) => {
    return (
        <div className='h-auto'>
            <div>
                <Image
                    src={require('../images/one_person.png')}
                    preview={false}
                    className={'rounded-full border-8 border-solid ' + (status === 1 ? 'border-green-400' : 'border-red-500')}
                />
            </div>
            <div className='h-16 text-center border-2 border-solid mt-0 flex justify-center items-center'>
                {name}
            </div>
        </div>
    );
}

const MainPlayerView = () => {

    const data = [
        {
            name: 'Tên này rất là dài nên cố mà css',
            status: 1,
        },
        {
            name: 'Phạm Xuân Khoái',
            status: 0,
        },
        {
            name: 'Tên này rất là dài nên cố mà css',
            status: 1,
        },
        {
            name: 'Tên này rất là dài nên cố mà css',
            status: 0,
        },
        {
            name: 'Phan Đức Thắng',
            status: 1,
        },
        {
            name: 'Phạm Xuân Khoái',
            status: 0,
        },
        {
            name: 'Phan Đức Thắng',
            status: 1,
        },
        {
            name: 'Phạm Xuân Khoái',
            status: 0,
        },
        {
            name: 'Phan Đức Thắng',
            status: 1,
        },
        {
            name: 'Phạm Xuân Khoái',
            status: 0,
        },
        {
            name: 'Phan Đức Thắng',
            status: 1,
        },
    ];

    return (
        <div>
            <h1 className='text-center'>MainView</h1>
            <div className='w-4/5 mx-auto flex border-2 border-black border-solid'>
                <div className='w-8/12 p-5 border-2 border-black border-solid'>
                    <Outlet/>
                </div>
                <div className='w-4/12 border-2 border-black border-solid'>
                    <div className='w-full flex flex-row flex-wrap'>
                        {
                            data.map(item => {
                                return (
                                    <div className='w-1/5 m-3'>
                                        <Player name={item.name} status={item.status} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPlayerView;
