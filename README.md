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


endpoint 
/user/login
POST
JSON.stringify({
                 usernameOrEmail: usernameOrEmail,
                 password: password
            })
need to create userLogin dto with those fields 
implement some logic so you check first with username then with email 
expects jwt token if successfull or null/empty string response

endpoint
/users/getAllUsers
GET 
expects list of all users in following format 
{ id: 1,
username:"Skara",
firstName: "John", 
lastName: "Doe", 
email: "john.doe@example.com",
phoneNumber: "123-456-7890",
profilePicUrl:"https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg",
role: "ADMIN" }
NOTE THAT PASSWORD IS MISSING!!!!! MIGHT NEED ANOTHER DTO

endpoint 
/users/me
GET
gets a token in the header(needs validation)
if token correct return current logged user info in this format
id:"",
        username:"",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        profilePicUrl:"",
        role: "ADMIN",
        cartId: "",
      else return error token expired or something


endpoint 
/users/deleteUser
DELETE
 JSON.stringify({ id }),
 expects ok response if succesful  search for user in the database with given id and remove him
 

endpoint
/product/getAllProducts
expects all products in this format 
            productId: 9,
            name: 'ProductC',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            description: 'Description for ProductC',
            price: 24.99,
            stockQuantity: 100,
            roomCategories: [],
            furnitureTypeCategories: []

            
<<<<<<<<<<
var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseHttpsRedirection();

app.MapControllers();

app.Run();>>>>>>>>>>>> put something like this so JSON objects follow the correct naming format (look line 38 prodcutID not ProductId) id doesnt work I will fix it on my end


/cart/getCartById
POST
cartId: cartId
expects a json response in this format 
    cartId: 1,
    cartItems: [
        {
            cartItemId:1,
            product: {
                id: 1,
                name: "Product A",
                imageUrl: "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg",
                price: 19.99
            },
            quantity: 2
        },
        {
            cartItemId:2,
            product: {
                id: 2,
                name: "Product B",
                imageUrl: "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg",
                price: 29.99
            },
            quantity: 1
        }]

/cart/removeCartItem
DELETE
cartId: cartId,
cartItemId: cartItemId
expects an ok response 


/cart/changeInProductItemQuantity
POST
cartId:cartId,
cartItemId: id,
quantity:updatedQuantity
expects an ok response

/product/getCurrentViewedProduct
POST
JSON.stringify({
               productId:productId
            })
expects a single entity response in the following format
const mockedProduct={
        name: 'ProductC',
        imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
        description: 'Description for ProductC',
        price: 24.99,
        stockQuantity: 100
}


/cart/addProductToCart
POST
JSON.stringify({
                cartId:cartId,
                productId:productId,
                quantity: quantity
            }
expects ok response

/products/getAllProducts
get 
returns all products with all fields 



/product/getProductToUpdate
POST
productId: productId
returns all info for product

