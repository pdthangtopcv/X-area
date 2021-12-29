import {Image} from "antd";


const Dashboard = () => {

    return (
        <div className='h-full border-2 border-indigo-600 border-solid'>
            <h1 className='text-center'>
                Bảng thành tích của người chơi
            </h1>

            <div className='px-20 py-5'>
                <div className='pr-5 flex items-center'>
                    <Image
                        src={require('../images/one_person.png')}
                        preview={false}
                        className='rounded-full border-2 border-solid h-16 w-auto border-black'
                    />
                    <span className='px-10 text-xl'>Nguyen Van A</span>
                    <span className='text-xl text-amber-600'>250</span>
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <span className='text-xl text-amber-600'>4</span>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;
