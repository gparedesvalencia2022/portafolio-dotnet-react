# Build stage
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY . .

# 🔥 IMPORTANTE: ir a la carpeta del server
WORKDIR /src/portafolio-dotnet-react.Server

# restaurar
RUN dotnet restore

# publicar
RUN dotnet publish -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 8080

ENTRYPOINT ["dotnet", "portafolio-dotnet-react.Server.dll"]
