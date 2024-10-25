import React from 'react'
import './Sign_up.css';
import { ReactComponent as GoogleLogo } from './icons/googl_logo.svg';


export default function Sign_up() {
    return (
        <div className="signup-container">
            <div className="logo">
                <img src="https://uploads-ssl.webflow.com/61a9b3cd4de55737b16b0ad1/61a9d78960c48da4e6b43e47_Fianceo%20Logo.svg" alt="fianceo logo" />
            </div>
            <h2 className="signup-title">Sign up</h2>
            <p className="signup-subtitle">Discover a better way of spendings with fianceo.</p>

            <button className="google-signin-button">
                <GoogleLogo width="35" height="35" />Sign with Google
            </button>

            <div className="divider">
                <span>Or</span>
            </div>

            <form className="signup-form">
                <div className="input-container">
                    <img src="https://uploads-ssl.webflow.com/61a9b3cd4de55737b16b0ad1/61c6cedbe02bcc383d061b70_Name.svg" alt="name-icon" className="input-icon" />
                    <input type="text" placeholder="Type your name" className="signup-input" />
                </div>
                <div className="input-container">
                    <img src="https://uploads-ssl.webflow.com/61a9b3cd4de55737b16b0ad1/61c6ad738b3d47e2c182118c_Mailbox.svg" alt="email-icon" className="input-icon" />
                    <input type="email" placeholder="Enter your e-mail" className="signup-input" />
                </div>
                <div className="input-container">
                    <img src="https://uploads-ssl.webflow.com/61a9b3cd4de55737b16b0ad1/61c6adf9b7480690664d69ec_Lock.svg" alt="password-icon" className="input-icon" />
                    <input type="password" placeholder="Password" className="signup-input" />
                </div>

                <label className="checkbox-label">
                    <input type="checkbox" required />
                    I agree with <a href="/terms" className="link">Terms</a> and <a href="/privacy" className="link">Privacy</a>
                </label>

                <button type="submit" className="signup-button">Sign up</button>
            </form>

            <p className="signup-footer">
            Have account? <a href="/create-account" className="link">Sign In</a>
            </p>
        </div>
    )
}
