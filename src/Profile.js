import React from 'react'

const Profile = (props) => {
    return (
        <div>
            <h1>User's profile</h1>
            <button  onClick = {props.handleState}>Logout</button>
        </div>
    )
}

export default Profile;
