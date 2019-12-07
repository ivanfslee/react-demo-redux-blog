import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }
    render() {
        const { user } = this.props;

        if (!user) { //on initial render, user will have no value 
            return null;
        }
        // user is an obj from api response -> action.payload -> reducer -> state
        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    //we modify the state to get the user we need and then we pass it as props to the component 
    // we are extracting out the specific user we are looking for (instead of entire list of users that we were doing before )
    return { user: state.users.find(user => user.id === ownProps.userId) }; //this.props === { user: state.users.find....... }
}
export default connect(mapStateToProps, { fetchUser })(UserHeader);