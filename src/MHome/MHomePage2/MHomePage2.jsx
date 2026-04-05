import './MHomePage2.css'
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Page2_Service(props) {

    return (
        <div className = 'PS_Main'>
            <p className = 'PS_Num'>{ props.Num }</p>
            <div>
                <div>
                    <p className = 'PS_Title'>{ props.Title }</p>
                    <p className = 'PS_SubTitle'>{ props.SubTitle }</p>
                </div>
                <p className = 'PS_Text'>{ props.Text }</p>
            </div>
        </div>
    )
}

function MHomePage2() {
    return(
        <div>
            <p className = 'MH2_Title'>Services</p>
            <p className = 'MH2_SubTitle'>YOU CAN DO</p>
            <div className = 'MH_Services'>
                <div className = 'MH2_GuideLine'></div>
                <Page2_Service Num = '01' Title = 'Learn' SubTitle = 'Programming Lecture' Text = '다양한 프로그래밍 언어를 배울 수 있습니다.'/>            
                <div className = 'MH2_GuideLine'></div>
                <Page2_Service Num = '02' Title = 'Experience' SubTitle = 'Technology Experience' Text = '간단한 알고리즘을 이용한 기술을 체험 할 수 있습니다.'/>            
                <div className = 'MH2_GuideLine'></div>
                <Page2_Service Num = '03' Title = 'Tools' SubTitle = 'Useful features' Text = '개발하는 데 유용한 몇 가지 도구를 사용할 수 있습니다.'/>            
                <div className = 'MH2_GuideLine'></div>
                <Page2_Service Num = '04' Title = 'Docs' SubTitle = 'documents' Text = '사이드에 대한 정보가 담긴 문서를 읽을 수 있습니다.'/>            
                <div className = 'MH2_GuideLine'></div>
            </div>
        </div>
    )
}

export default MHomePage2

