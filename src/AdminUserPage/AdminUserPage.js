import React, { useEffect, useState } from 'react';
import User from "./AdminUserPageElements/User";
import './AdminUserPage.css';
import Header from "../Header/Header";

const AdminUserPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const sampleUsers = [
            { id: 1,username:"Skara", firstName: "John", lastName: "Doe", email: "john.doe@example.com", phoneNumber: "123-456-7890",profilePicUrl:"https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg", role: "ADMIN" },
            { id: 2,username:"Skara", firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", phoneNumber: "987-654-3210",profilePicUrl:"https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg", role: "USER" },
            { id: 3,username:"Skara", firstName: "Jim", lastName: "Beam", email: "jim.beam@example.com", phoneNumber: "555-555-5555",profilePicUrl:"https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg", role: "USER" },
            { id: 4,username:"Skara", firstName: "Jack", lastName: "Daniels", email: "jack.daniels@example.com", phoneNumber: "666-666-6666",profilePicUrl:"https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg", role: "ADMIN" },
            { id: 5,username:"Skara", firstName: "Johnny", lastName: "Walker", email: "johnny.walker@example.com", phoneNumber: "777-777-7777",profilePicUrl:"https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg", role: "USER" },
            { id: 6,username:"Skara", firstName: "Jameson", lastName: "Irish", email: "jameson.irish@example.com", phoneNumber: "888-888-8888",profilePicUrl:"https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg", role: "USER" },
            // Add more users as needed
        ];
        setUsers(sampleUsers);
    }, []);

    // useEffect(() => {
    //     fetch('/users/getAllUsers')
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
                        phoneNumber={user.phoneNumber}
                        username={user.username}
                        profilePicUrl={user.profilePicUrl}
                        role={user.role}
                    />
                ))}
            </div>
        </div>

    );
};

export default AdminUserPage;
