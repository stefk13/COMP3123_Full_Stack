import React, { useState } from 'react'
import './userForm.css'

export default function UserFormFunction() {
    var [user, setUser] = useState({
        email: '',
        name: '',
        address: '',
        address2: '',
        city: '',
        province: '',
        postalCode: '',
        agreeToTerms: false
    })

    const provincesCanada = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan']

    const [submitted, setSubmitted] = useState(false)

    const onValueChanged = (event) => {
        event.preventDefault()
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const onCheckboxChange = () => {
        setUser({
            ...user,
            agreeToTerms: !user.agreeToTerms
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        if (!user.agreeToTerms) {
            alert('Please agree to the terms and conditions.')
        } else {
            setSubmitted(true)
            console.log(user)
        }
    }

    return (
        <div className="user-form-container">
            <h1>Data Entry Form</h1>
            <form onSubmit={(e) => onSubmitForm(e)}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            name="email"
                            type="text"
                            onChange={(e) => onValueChanged(e)}
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                            name="name"
                            type="text"
                            onChange={(e) => onValueChanged(e)}
                            placeholder="Enter Name"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <br />
                    <input
                        name="address"
                        type="text"
                        onChange={(e) => onValueChanged(e)}
                        placeholder="1234 Main Street"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address2">Address 2</label>
                    <br />
                    <input
                        name="address2"
                        type="text"
                        onChange={(e) => onValueChanged(e)}
                        placeholder="Apartment, Studio, or Floor"
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <br />
                        <input name="city" type="text" onChange={(e) => onValueChanged(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="province">Province</label>
                        <br />
                        <select name="province" onChange={(e) => onValueChanged(e)}>
                            <option value="" disabled selected>
                                Select Province
                            </option>
                            {provincesCanada.map((province) => (
                                <option key={province} value={province}>
                                    {province}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCode">Postal Code</label>
                        <br />
                        <input name="postalCode" type="text" onChange={(e) => onValueChanged(e)} />
                    </div>
                </div>

                <div className="checkbox-group">
                    <input
                        name="agreeToTerms"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={user.agreeToTerms}
                    />
                    <label htmlFor="agreeToTerms">Agree to Terms & Conditions?</label>
                </div>

                <input
                    name="btnSubmit"
                    type="submit"
                    value="Submit"
                    className="submit-button"
                />
            </form>

            {submitted && user.agreeToTerms ? (
                <div className="info-display">
                    <h2>Entered Information:</h2>
                    <p>
                        <span className="info-title">Email:</span> {user.email}
                    </p>
                    <p>
                        <span className="info-title">Full Name:</span> {user.name}
                    </p>
                    <p>
                        <span className="info-title">Address:</span> {user.address} - {user.address2}
                    </p>
                    <p>
                        <span className="info-title">City:</span> {user.city}
                    </p>
                    <p>
                        <span className="info-title">Province:</span> {user.province}
                    </p>
                    <p>
                        <span className="info-title">Postal Code:</span> {user.postalCode}
                    </p>
                </div>
            ) : null}
        </div>
    )
}
