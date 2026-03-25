import './MLearn.css'
import Header from './../Components/Header/Header.jsx'
import Background from './../Components/Background/Background.jsx'


function MLearn() {

    const header_test1 = "There are still a few";
    const header_test2 = "but more will be added";

    return (
        <div>
            <div className = 'ML_header'><Header where = {1} /></div>
            <p className = 'ML_header_text1'>Lectures</p>
            <p className = 'ML_header_text2'>{ header_test1 }</p>
            <p className = 'ML_header_text3'>{ header_test2 }</p>
            <div>
                <div>language</div>
                <div>UI tool</div>
                <div>Algorithm</div>
                <div></div>
            </div>
        </div>
    )
}

export default MLearn