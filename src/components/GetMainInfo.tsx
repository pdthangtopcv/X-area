import {Image} from 'antd';

const GetMainInfo = () => {

    return (
        <div className='text-xl'>
            <div className='w-full text-center'>
                <Image
                    preview={false}
                    className='flex items-center justify-center rounded-full border-8 border-solid'
                    src={require('../images/one_person.png')}
                />
            </div>
            <div>
                <span><strong>Họ và tên: </strong></span>
                <span>Nguyễn Văn A</span>
            </div>
            <div>
                <span><strong>Mã nhân viên: </strong></span>
                <span>TCVxxx</span>
            </div>
            <div>
                <span><strong>Giới thiệu bản thân: </strong></span>
                <span>
                    Sau khi làm quen, giới thiệu với người chơi chính, GM sẽ thông báo chính thức bắt đầu cuộc chơi.
                    Để bắt đầu câu hỏi, GM ấn nút: “Next Question". Thông tin về câu hỏi hiển thị lên màn hình chính, và màn hình của admin.
                </span>
            </div>
            <div>
                <span><strong>Lý do tham gia: </strong></span>
                <span>Sau khi kết thúc 6s, GM sẽ hỏi đáp án của người chơi chính. Và chọn đáp án cho người chơi chính trên màn hình admin.
                Bên cạnh đó, người chơi chính cũng có thể chọn những sự trợ giúp khác nhau. (chi tiết ở phần sau.
                Để kết thúc cho câu hỏi, GM ấn nút: “Show Correct Answer" để hiển thị kết quả.
                Rồi ấn nút: “Show Players’ Status" để hiển thị trạng thái của các người cùng chơi.
                </span>
            </div>
        </div>
    );
}

export default GetMainInfo;
