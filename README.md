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

            var builder = WebApplication.CreateBuilder(args);

<<<<<<<<<<// Add services to the container.
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseHttpsRedirection();

app.MapControllers();

app.Run();>>>>>>>>>>>> put something like this so JSON objects follow the correct naming format (look line 38 prodcutID not ProductId) id doesnt work I will fix it on my end
