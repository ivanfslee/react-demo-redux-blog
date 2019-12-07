import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }
    render() {
        // 'find' is built-in javascript method.
        //we are passing in entire list of users and looking at each one to find a match to the id 
        const user = this.props.users.find(user => user.id === this.props.userId); //find user that matches the user.id we are looking for
        
        if (!user) { //on initial render, user will have no value 
            return null;
        }
        // user is an obj from api response -> action.payload -> reducer -> state
        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps = state => {
    return { users: state.users }; //this.props === { users: state.users }
}
export default connect(mapStateToProps, { fetchUser })(UserHeader);