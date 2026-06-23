var builder = WebApplication.CreateBuilder(args);

// Services
builder.Services.AddControllers();
builder.Services.AddOpenApi();

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


var app = builder.Build();

// ✅ Servir archivos frontend (React)
app.UseDefaultFiles();   // busca index.html
app.UseStaticFiles();   // sirve wwwroot

// ✅ Dev-only tools
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// ✅ SOLO en desarrollo usar HTTPS redirect
if (app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

app.UseAuthorization();

app.UseCors("AllowVite");

// ✅ API
app.MapControllers();

// ✅ React fallback
app.MapFallbackToFile("/index.html");

// ✅ Puerto dinámico para Render
if (app.Environment.IsProduction())
{
    var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
    app.Urls.Add($"http://0.0.0.0:{port}");
}

app.Run();
