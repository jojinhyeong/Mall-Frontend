import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";
import { useDispatch } from "react-redux";
import { login } from "../../slices/loginSlice";
import useCustomMove from "../../hooks/useCustomMove";
import useCustomLogin from "../../hooks/useCustomLogin";


const KakaoRedirectPage = () => {
    const [searchParams] = useSearchParams()
    const authCode = searchParams.get("code")

    const { moveToPath } = useCustomLogin()

    const dispatch = useDispatch()


    useEffect(() => {
        getAccessToken(authCode).then(accessToken => {

            getMemberWithAccessToken(accessToken).then(memberInfo => {

                console.log("-------------------")
                console.log(memberInfo)
                dispatch(login(memberInfo))

                if (memberInfo && memberInfo.social) {//소셜 회원이 아니라면 
                    moveToPath("/member/modify")
                } else {
                    moveToPath("/")
                }

            })

        })
    }, [authCode])


    return (
        <div>
            <div>Kakao Login Redirect</div>
            <div>{authCode}</div>
        </div>
    )
}
export default KakaoRedirectPage