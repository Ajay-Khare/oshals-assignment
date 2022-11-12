import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/shareButton.css"
function Button() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const inpHandler = () => {
        navigate("/add")
    }
    return (
        <div className="Button">
            {
                toggle
                    ? <p className="bold">Click on input field to add people, emails, groups</p>
                    : <p className="bold">Click on Share button</p>
            }
            <button onClick={() => {
                setToggle(!toggle)
            }}>
                <span>share </span>
                <i className="fa fa-share-alt" aria-hidden="true"></i>
            </button>
            {
                toggle &&

                <div className="mainContainer">
                    <div className="shareToWeb">
                        <div className="leftPart">
                            <div className="icon">
                                <img src="/images/Icon.svg" alt="" />
                            </div>
                            <div className="text">
                                <p className="bold">Share to web</p>
                                <p className="faint">Publish and share link with anyone</p>
                            </div>
                        </div>
                        <div className="rightPart">
                            <div className="button"></div>
                        </div>
                    </div>
                    <div className="searchBox">
                        <input type="text" name="inp"
                            placeholder="Peoples, emails, groups"
                            onClick={inpHandler}
                        />
                        <label htmlFor="inp" className="bold">Invite</label>
                    </div>
                    <div className="Oslash">
                        <div className="leftPart">
                            <div className="logo">
                                <img src="/images/48_48.svg" alt="" />
                            </div>
                            <div className="text">
                                <p className="bold">Everyone at OSlash</p>
                                <p className="faint">25 workspace members</p>
                            </div>
                        </div>
                        <div className="rightPart">
                            <select name="" id="">
                                <option value="No_Access" className="faint">No Access</option>
                                <option value="can_edit">can edit</option>
                                <option value="member">member</option>
                            </select>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="leftPart">
                            <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                            <span className="faint">learn about sharing</span>
                        </div>
                        <div className="right">
                            <i className="fa fa-link bold" aria-hidden="true"></i>
                            <span className="bold">Copy link</span>
                        </div>
                    </div>
                </div>

            }
        </div>
    );
}

export default Button;
