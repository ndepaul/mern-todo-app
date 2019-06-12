import React, { Component } from 'react';
import amplitude from "amplitude-js";

class Welcome extends Component {
render() {
return (
amplitude.logEvent('Welcome Page Viewed'),
<div className="row">
<div className="medium-12 columns">
<h2 id="welcomeText">Welcome Page</h2>
</div>
</div>
);
}
}
export default Welcome;
