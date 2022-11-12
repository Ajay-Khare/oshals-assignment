import { useEffect, useState } from "react";
import "./style/addPeople.css"
import { useNavigate } from "react-router-dom";
import Button from "./shareButton";
const AddPeople = () => {
    const [user, setUser] = useState(["wade Cooper", "arlene Mccoy", "Tom Cook", "harry potter", "roger jackson"])
    const [group, setGroup] = useState(["Product", "Engineering", "Manager", "Design"])
    const [search, setSearch] = useState("")
    const [toggle, setToggle] = useState(false);
    const [select, setSelect] = useState([]);

    const navigate = useNavigate()
    return (
        <>
            {/* <div className="selectedContaner">
                {
                    select.map(ele => {
                        return <span className="selected">{ele}</span>
                    })
                }
            </div> */}
            <div className="addPeopleContainer">
                <div className="container">
                    <div className="header">
                        <input placeholder="Search emails, names or groups"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setToggle(true)
                            }}
                        />
                        <span>
                            <select name="" id="">
                                <option value="No_Access" className="faint">No Access</option>
                                <option value="can_edit">Can Edit</option>
                                <option value="member">Member</option>
                                <option value="view_only">View Only</option>
                            </select>
                            <button>Invite</button>
                        </span>
                    </div>
                    <div className="body">
                        <div className="selectPersons">
                            <p>Select a person</p>
                            {
                                toggle
                                    ? user.map((ele, i) => {
                                        if (ele.includes(search)) {
                                            return (
                                                <div>
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    <span onClick={(e) => {
                                                        setSelect([...select, e.target.innerText])
                                                        navigate("/")
                                                    }}> {ele}</span>
                                                </div>
                                            )
                                        }
                                    })
                                    : user.map(ele => {
                                        return (
                                            <div>
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                                <span onClick={(e) => {
                                                    setSelect([...select, e.target.innerText])
                                                    navigate("/")
                                                }}> {ele}</span>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                        <div className="selectGroup">
                            <p>Select a group</p>
                            {
                                toggle
                                    ? group.map((ele, i) => {

                                        if (ele.includes(search)) {
                                            return (
                                                <div id={i}>
                                                    <span>{ele[0]} </span>
                                                    <span onClick={(e) => {
                                                        setSelect([...select, e.target.innerText])
                                                        navigate("/")
                                                    }}> {ele} </span>
                                                </div>
                                            )
                                        }
                                    })
                                    :
                                    group.map(ele => {
                                        return (
                                            <div>
                                                <span>{ele[0]} </span>
                                                <span onClick={(e) => {
                                                    setSelect([...select, e.target.innerText])
                                                    navigate("/")
                                                }}> {ele} </span>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </div>
                    <div className="footer">
                        <i className="fa fa-question-circle-o" aria-hidden="true"></i>
                        <span className="faint">learn about sharing</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddPeople;