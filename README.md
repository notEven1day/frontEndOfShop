# frontEndOfShop
a dummy project

endpoint
/user/signup 
POST 
JSON.stringify({
                    username: username,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phoneNumber: phoneNumber

})
need to create userSignUp dto with those fields 
create a user with default value of profile picture

expects ok response 


endpoing 
/user/login
POST
JSON.stringify({
                 usernameOrEmail: usernameOrEmail,
                 password: password
            })
need to create userLogin dto with those fields 
implement some logic so you check first with username then with email 
expects jwt token if successfull or null/empty string response

