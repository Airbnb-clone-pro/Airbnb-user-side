import React, { useState, useContext } from 'react';
import './sign-up.css'
import { Modal } from 'react-bootstrap';
import axiosInstance from '../../axios config/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { signupContext } from '../../contexts/singupModel';
import { useHistory } from 'react-router-dom';


const Signup = (props) => {

    const { showsignup, setShowsignup } = useContext(signupContext)
    const handleCloseSignup = () => setShowsignup(false)

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        fNameError: "",
        lNameError: "",
        birthDateError: "",
        emailError: "",
        passwordError: "",
    })


    const handleInputChange = (evt) => {
        console.log(user.birthDate);
        let emailRegex = /^[A-Za-z0-9]{3,}@(gmail|yahoo|outlook).com$/
        let PassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z0-9\d@$!%*?&]{8,}$/


        if (evt.target.name === "firstName") {
            setUser({ ...user, firstName: evt.target.value })

            setErrors({
                ...errors, fNameError: (evt.target.value.length === 0) ?
                    " First name is required. " : (evt.target.value.length < 3) ? " First name must be at least 3 characters. " : ""
            })

        } else if (evt.target.name === "lastName") {

            setUser({ ...user, lastName: evt.target.value })

            setErrors({
                ...errors, lNameError: (evt.target.value.length === 0) ? " Last name is required." : (evt.target.value.length < 3) ? " Last name  must be at least 3 characters." : ""
            })

        } else if (evt.target.name === "birthDate") {
            console.log();

            setUser({ ...user, birthDate: evt.target.value })

            setErrors({
                ...errors, birthDateError: (evt.target.value.length === 0) ?
                    " This field is required." : ""
            })
        } else if (evt.target.name === "email") {

            setUser({ ...user, email: evt.target.value })

            setErrors({
                ...errors, emailError: (evt.target.value.length === 0) ?
                    " This field is required." : (!emailRegex.test(evt.target.value)) ?
                        " Invalid Email format." : ""
            })
        } else if (evt.target.name === "password") {

            setUser({ ...user, password: evt.target.value })

            setErrors({
                ...errors, passwordError: (evt.target.value.length === 0) ?
                    " Password is required" : (!PassRegex.test(evt.target.value)) ?
                        " Password must be at least 8 characters, contains at least one uppercase , one lowercase letter,one special char.  " : ""
            })
        } else if (evt.target.name === "birthDate") {

            console.log(evt.target.value);
            console.log(user.birthDate);

            setUser({ ...user, birthDate: evt.target.value })

            setErrors({
                ...errors, birthDateError: (evt.target.value.length === 0) ?
                    " Birth date is required" : ""
            })
        }

    }

    const history = useHistory()

    const handleForm = (ev) => {


        ev.preventDefault();
        if (!errors.fNameError && !errors.lNameError && !errors.emailError && !errors.passwordError && !errors.birthDateError) {
            // dispatch(setUserState(user))
            // console.log(user);
            axiosInstance.post('/users', user).then((res) => {
                console.log(res);
                console.log(res.data.token);
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token);
                    setShowsignup(false)
                    history.push('/')

                    // ev.target.submit()

                    // alert("Form Sent Successfully")
                }
            }).catch((err) => {

            })


        } else {
            alert("Please Enter Valid Date")
        }
    }

    return (


        <div className=''>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}
            <Modal show={showsignup} onHide={handleCloseSignup} className="" {...props}
            // size="lg"
            // aria-labelledby="contained-modal-title-vcenter"
            // centered
            >


                <Modal.Body style={{ borderRadius: '2rem' }} className="">
                    <div className="signup-container ">
                        <div className="finish-signup p-0">
                            <h5 className="text-center" closeButton>Finish signing up</h5>
                        </div>
                        <form onSubmit={(e) => { handleForm(e) }} className=" "  >

                            <div className={` full-name ${(errors.fNameError || errors.lNameError ? "border-danger shadow-none" : "")}  `}>
                                <div className={`name-input ${(errors.fNameError ? "border-danger shadow-none" : "")} `}>
                                    <input type="text" className='  shadow-none'
                                        value={user.firstName}
                                        name="firstName"
                                        onChange={(e) => { handleInputChange(e) }}
                                        placeholder="First name"
                                    />

                                </div>

                                <div className="name-input last-name">
                                    <input type="text"
                                        className={`shadow-none`}
                                        value={user.lastName}
                                        name="lastName"
                                        onChange={(e) => { handleInputChange(e) }}
                                        placeholder="Last name"
                                    />
                                </div>
                            </div >
                            <p className={`error ${!errors.fNameError && !errors.lNameError ? "d-none" : ""} `}><i className=" fa-solid fa-circle-exclamation "></i>{errors.fNameError + errors.lNameError}</p>
                            <span>Make sure it matches the name on your government ID.</span>
                            <br />
                            <div>
                                <div className="input-container">

                                    <input type="date" className={`shadow-none`}
                                        value={user.birthDate}
                                        name="birthDate"
                                        onChange={(e) => { handleInputChange(e) }}
                                        placeholder="BirthDate"
                                    />
                                </div>
                                <p className={`error ${!errors.birthDateError ? "d-none" : ""} `}><i className=" fa-solid fa-circle-exclamation "></i>{errors.birthDateError}</p>
                            </div>

                            <span>
                                To sign up, you need to be at least 18. Your birthday won’t be
                                shared with other people who use Airbnb.
                            </span>
                            <br />
                            <div>
                                <div className={`input-container shadow-none ${(errors.emailError ? "border-danger shadow-none" : "")}`}>
                                    <input type="text" className={` shadow-none ${(errors.emailError ? "border-danger shadow-none" : "")}`}
                                        value={user.email}
                                        name="email"
                                        onChange={(e) => { handleInputChange(e) }}
                                        placeholder="Email"
                                    />
                                </div>
                                <p className={`error ${!errors.emailError ? "d-none" : ""} `}><i className=" fa-solid fa-circle-exclamation "></i>{errors.emailError}</p>
                            </div>
                            <span>We'll email you trip confirmations and receipts.</span>
                            <br />


                            <div>
                                <div className={` input-container ${(errors.passwordError ? "border-danger shadow-none" : "")}`}>

                                    <input type="text"
                                        className='shadow-none'
                                        value={user.password}
                                        name="password"
                                        onChange={(e) => { handleInputChange(e) }}
                                        placeholder="password"
                                    />
                                </div>
                                <p className={`error ${!errors.passwordError ? "d-none" : ""} `}><i className=" fa-solid fa-circle-exclamation "></i>{errors.passwordError}</p>
                            </div>

                            <span>
                                By selecting Agree and continue below, I agree to Airbnb’s
                                <a href="#">Terms of Service</a> ,
                                <a href="#">Payments Terms of Service</a> ,{' '}
                                <a href="#">Privacy Policy</a>, and{' '}
                                <a href="#">Nondiscrimination Policy</a>.
                            </span>
                            <br />
                            <input
                                type="submit"
                                className="agree-btn"
                                value="Agree and continue"
                                name="submit-btn"
                            // onClick={(e) => { handleForm(e) }}
                            />
                            <p className=' small pt-5'>
                                Airbnb will send you members-only deals, inspiration, marketing emails,
                                and push notifications. You can opt out of receiving these at any time
                                in your account settings or directly from the marketing notification.
                            </p>
                            <br />
                            <div className="send-reminder">
                                <input type="checkbox" name="keep_contact" id="checkBox" />
                                <label htmlFor="checkBox ">
                                    <span className=' small p-0'>I don’t want to receive marketing messages from Airbnb.</span>
                                </label>
                            </div>
                        </form >
                    </div>
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default Signup;


