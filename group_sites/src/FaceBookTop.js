import React, {Component} from 'react';
import './FaceBook.css';

class FaceBookTop extends Component {
    render() {
        return (
            <div id="navwrapper">
                <div id="navbar">
                    <table className="tablewrapper">
                        <tr>
                            <td className="row1"><b>Email and Phone</b></td>
                            <td className="row1"><b>Password</b></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="email" className="inputtext" id="email" tabIndex="1"
                                       data-testid="royal_email"/>
                            </td>
                            <td>
                                <input type="password" className="inputtext" id="pass" tabIndex="2"
                                       data-testid="royal_pass"/>
                            </td>
                            <td>
                                <div id="button">Log In</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="row2"><input type="checkbox"/>Keep me logged in</div>
                            </td>
                            <td className="row2 h">Forgot account?</td>
                        </tr>
                    </table>

                    <h1 className="logowrapper">facebook</h1>

                </div>
            </div>
        )
    }
}

export default FaceBookTop;