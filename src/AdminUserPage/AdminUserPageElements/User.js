import React from 'react';
import {Button} from "antd";

const User = ({ id, firstName, lastName, email, phone, address, role }) => {
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
                    })
                    .catch(error => {
                            console.error('Error deleting user:', error);
                    });
        };
        return (
            <div className="user-card">
                    <h2>{firstName} {lastName}</h2>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                    <p><strong>Address:</strong> {address}</p>
                    <p><strong>Role:</strong> {role}</p>
                    <Button type="primary" block={true} onClick={handleUserDeletion} style={{ backgroundColor: 'orange'}}>Delete User</Button>
            </div>
        );
};

export default User;
