import './MHome.css'
import './MHomePage2.css'
import Header from './../Components/Header/Header.jsx'
import { Link } from "react-router-dom";

function Page2_Service(props) {

    return (
        <div className = 'PS_Main'>
            <p className = 'PS_p PS_Num'>{ props.Num }</p>
            <p className = 'PS_p PS_Title'>{ props.Title }</p>
            <p className = 'PS_p PS_SubTitle'>{ props.SubTitle }</p>
        </div>
    )
}


function MHome() {

    return (
        <div className = 'MHome'>
            <div className = 'MH_header'><Header where = {0} /></div>
            <div className = 'MH_Back'>
                <div className = 'MH_BackLine'></div>
                <div className = 'MH_BackLine'></div>
                <div className = 'MH_BackLine'></div>
                <div className = 'MH_BackLine'></div>
                <div className = 'MH_BackLine'></div>
            </div>
            <div className = 'MH_LineFade LF_Top'></div>
            <div className = 'MH_LineFade LF_Bottom'></div>
            <div className = 'MH_ZNINELOGO'>
                <p className = 'ZL_Text MH_F'>ZNINE</p>
                <div className = "MH_Trick"></div>
                <p className = 'ZL_Text MH_B'>ZNINE</p>
            </div>
            <div className = 'MH_Subtitle'>
                <div className = 'MH_L'></div>
                <p className = 'MH_SubText'>A PLACE WHERE ANYONE CAN STUDY</p>
                <div className = 'MH_R'></div>
            </div>
            <div className = 'MH_BottomTitle'>
                <div>영남대학교</div>
                <div>컴퓨터공학부</div>
            </div>
            <div className = "MH_BottomButton">
                <Link to = "/learn">
                    <div><p>TART LEARNING</p></div>
                </Link>
                <Link to = "/Docs">
                    <div><p>README</p></div>
                </Link>
            </div>

            {/* ====================PAGE 2================== */}

            <div className = 'MH2_Page2'>
                <p className = 'MH2_Title'>Services</p>
                <p className = 'MH2_SubTitle'>YOU CAN DO</p>
            </div>
            <div className = 'MH2_GuideLine GL1'></div>
            <div className = 'PS_1'>
                <Page2_Service Num = '01' Title = 'Learn' SubTitle = 'Programming Lecture'/>            
            </div>
            <div className = 'MH2_GuideLine GL2'></div>
            <div className = 'PS_2'>
                <Page2_Service Num = '02' Title = 'Experience' SubTitle = 'Technology Experience'/>            
            </div>
            <div className = 'MH2_GuideLine GL3'></div>
            <div className = 'PS_3'>
                <Page2_Service Num = '03' Title = 'Tools' SubTitle = 'Useful features'/>            
            </div>
            <div className = 'MH2_GuideLine GL4'></div>
            
        </div>
    )
}

export default MHome

