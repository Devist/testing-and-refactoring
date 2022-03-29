import { postUser } from '../../libs/user'
import _Join from '../../components/template/legacy/_Join'

const join = () => {


    // 회원가입 버튼 클릭 시 유효한 경우 통신 부분만 구현
    const onJoinClick = async (joinData) => {
        try {
            const result = await postUser(joinData);
            if (result.status === 200) {
                alert('회원가입 완료');
            }
        } catch (err) {
            alert(err);
        }
    }

    return (
        <_Join onJoinClick={onJoinClick} />
    )

}


export default join