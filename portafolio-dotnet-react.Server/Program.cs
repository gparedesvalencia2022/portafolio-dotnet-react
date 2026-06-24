using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using portafolio_dotnet_react.Server.Services;

var builder = WebApplication.CreateBuilder(args);

// Services
builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddScoped<IPortfolioService, PortfolioService>();
builder.Services.AddMemoryCache();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowVite",
        policy =>
        {
            policy.WithOrigins("https://localhost:63293")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

// Authentication: actually not configured because API is not public,
// but you can add it later if needed beacause the controller is ready for it
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowAll",
//        policy =>
//        {
//            policy.AllowAnyOrigin()
//                  .AllowAnyHeader()
//                  .AllowAnyMethod();
//        });
//});


//var key = Encoding.UTF8.GetBytes("super_secret_key_12345");
//builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//    .AddJwtBearer(options =>
//    {
//        
//options.TokenValidationParameters = new TokenValidationParameters
//{
//    ValidateIssuerSigningKey = true,
//    IssuerSigningKey = new SymmetricSecurityKey(key),
//    ValidateLifetime = true,
//    ValidateIssuer = false,
//    ValidateAudience = false
//};
//    });



var app = builder.Build();

app.UseRouting();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1");
    });
}


app.UseMiddleware<ExceptionMiddleware>();

//only if i want to use cors with vite but not actually needed because of the proxy in vite.config.ts
//if (app.Environment.IsDevelopment())
//{
//    app.UseCors("AllowVite");
//}

//desactive actually because the API is not public and only for internal use.
//app.UseAuthentication();
//app.UseAuthorization();

app.UseAuthorization();

// API
app.MapControllers();

// Servir archivos frontend (React)
app.UseDefaultFiles();   // busca index.html
app.UseStaticFiles();   // sirve wwwroot

// React fallback
app.MapFallbackToFile("/index.html");

//  Dev-only tools
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// ✅ SOLO en desarrollo usar HTTPS redirect
if (app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

app.UseCors("AllowVite");

// ✅ Puerto dinámico para Render
if (app.Environment.IsProduction())
{
    var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
    app.Urls.Add($"http://0.0.0.0:{port}");
}

app.Run();