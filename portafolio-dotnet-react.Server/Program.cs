var builder = WebApplication.CreateBuilder(args);

// Services
builder.Services.AddControllers();
builder.Services.AddOpenApi();

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
