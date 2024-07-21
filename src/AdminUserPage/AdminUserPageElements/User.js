import React from 'react';
import {Button} from "antd";

const User = ({ id, firstName, lastName, email, phoneNumber, username, role,profilePicUrl }) => {
        const handleUserDeletion = () => {
                fetch('/users/deleteUser', {
                        method: 'DELETE',
                        headers: {
                                'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ id }),
                })
                    .then(response => {
                            if (!response.ok) {
                                    return Promise.reject('Failed to delete user');
                            }
                            // Refresh the page to fetch the latest user data
                            window.location.reload();
                            //is this a valid solution??
                    })
                    .catch(error => {
                            console.error('Error deleting user:', error);
                    });
        };
        return (
            <div className="user-card">
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h2 style={{margin: '0 50px 0 0'}}>{firstName} {lastName}</h2>
                    <img src={profilePicUrl} style={{maxHeight: '100px'}} alt={`${firstName} ${lastName}`}/>
                </div>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone number:</strong> {phoneNumber}</p>
                <p><strong>Username:</strong> {username}</p>
                <p><strong>Role:</strong> {role}</p>
                <Button type="primary" block={true} onClick={handleUserDeletion} style={{backgroundColor: 'orange'}}>Delete
                    User</Button>
            </div>
        );
};

export default User;
