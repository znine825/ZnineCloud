import './MLearn.css'
import Header from './../Components/Header/Header.jsx'
import Background from './../Components/Background/Background.jsx'


function MLearn() {

    const header_test1 = "There are still a few";
    const header_test2 = "but more will be added";

    return (
        <div className = 'ML_Learn'>
            <div className = 'ML_header'><Header where = {1} /></div>
            <div className = 'ML_Background'><Background /></div>
        </div>
    )
}

export default MLearn