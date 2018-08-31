import React, {Component} from 'react';
import './FaceBook.css';

class FaceBookLeftPage extends Component {
    render() {
        return (
            <div id="leftbod">

                <div className="connect bolder">
                </div>






                <div className="leftbar">
                    <img
                        src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851565_602269956474188_918638970_n.png"
                        alt="" className="iconwrap fb1"/>
                    <div className="fb1">
                        <span className="rowtext"> <strong> Connect with friends and the</strong></span>
                        <br/>
                        <div className="rowtext2 fb1"> <strong>world around you on Facebook</strong></div>
                    </div>
                </div>







                <div className="leftbar">
                    <img
                        src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851558_160351450817973_1678868765_n.png "
                        alt="" className="iconwrap fb1"/>
                    <div className="fb1">
                        <span className="rowtext"><strong> See photos and updates</strong>  </span>
                        <span
                            className="rowtext2 fb1">from friends in News Feed </span>


                    </div>
                </div>







                <div className="leftbar">
                    <img
                        src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851558_160351450817973_1678868765_n.png "
                        alt="" className="iconwrap fb1"/>
                    <div className="fb1">
                        <span className="rowtext"><strong> Share what's new  </strong>  </span>
                        <span
                            className="rowtext2 fb1">in your life on your timeline</span>

                    </div>
                </div>




                <div className="leftbar">
                    <img
                        src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851558_160351450817973_1678868765_n.png "
                        alt="" className="iconwrap fb1"/>
                    <div className="fb1">
                        <span className="rowtext"><strong> Find More </strong>  </span>
                        <span
                            className="rowtext2 fb1">of what your're looking for with graph search</span>

                    </div>
                </div>






            </div>
        )
    }
}

export default FaceBookLeftPage;