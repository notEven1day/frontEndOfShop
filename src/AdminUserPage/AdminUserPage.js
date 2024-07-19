import React, { useEffect, useState } from 'react';
import User from "./AdminUserPageElements/User";
import './AdminUserPage.css';
import Header from "../Header/Header";

const AdminUserPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const sampleUsers = [
            { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "123-456-7890", address: "123 Main St", role: "ADMIN" },
            { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", phone: "987-654-3210", address: "456 Elm St", role: "USER" },
            { id: 3, firstName: "Jim", lastName: "Beam", email: "jim.beam@example.com", phone: "555-555-5555", address: "789 Oak St", role: "USER" },
            { id: 4, firstName: "Jack", lastName: "Daniels", email: "jack.daniels@example.com", phone: "666-666-6666", address: "101 Pine St", role: "ADMIN" },
            { id: 5, firstName: "Johnny", lastName: "Walker", email: "johnny.walker@example.com", phone: "777-777-7777", address: "202 Maple St", role: "USER" },
            { id: 6, firstName: "Jameson", lastName: "Irish", email: "jameson.irish@example.com", phone: "888-888-8888", address: "303 Birch St", role: "USER" },
            // Add more users as needed
        ];
        setUsers(sampleUsers);
    }, []);
    //restartite ne sa dobawili cartId
    // useEffect(() => {
    //     fetch('/api/users')
    //         .then(response => response.json())
    //         .then(data => {
    //             setUsers(data)
    //         })
    //         .catch(error => console.error('Error fetching products:', error));
    // }, []);

    return (
        <div>
            <Header/>
            <div className="user-grid">
                {users.map(user => (
                    <User
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                        phone={user.phone}
                        address={user.address}
                        role={user.role}
                    />
                ))}
            </div>
        </div>

    );
};

export default AdminUserPage;
