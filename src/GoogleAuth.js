import React from 'react';
import {Redirect} from 'react-router-dom';

class GoogleAuth extends React.Component {

    state = {
        isSignedIn: null,
        currentUser: null
        }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '815871266809-2kdeqka4kt7sipn6g8rpi2g8klslprfv.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange()
                this.auth.isSignedIn.listen(this.onAuthChange);
                console.log(this.auth.currentUser.Ab.w3.U3)
                this.props.onGetEmail(this.auth.currentUser.Ab.w3.U3);
                
            });
        });
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        });
    }

     onSignIn = async () => {
        await this.auth.signIn();
        this.onAuthChange();
         this.props.onGetEmail(this.auth.currentUser.Ab.w3.U3)
    }

    onSignOut = async () => {
        await this.auth.signOut();
        this.onAuthChange();
        this.props.onGetEmail('');
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        }
        else if (this.state.isSignedIn) {
            return (
            <button onClick={this.onSignOut} className="negative ui button">
                Sign Out
            </button>
            )
        }
        else {
            return (
                <button onClick={this.onSignIn} className="positive ui button">
                        Sign In with Google
                </button>
                )
        }
    }
    
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth;