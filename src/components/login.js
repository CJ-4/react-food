import React, {Component} from 'react';

class Login extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     name: ''
        // }
    }

    goToLogin = () => {
        // Do stuffs
    }

    render() {
        return(
            <div>
                <p1 onclick={this.goToLogin}>Login</p1>
            </div>
        );
    }
}

export default Login;