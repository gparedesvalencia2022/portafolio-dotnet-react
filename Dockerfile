# Build stage
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# ✅ INSTALL NODEJS 
RUN apt-get update && apt-get install -y nodejs npm

COPY . .

# go to backend directory
WORKDIR /src/portafolio-dotnet-react.Server

# restore
RUN dotnet restore

#  install frontend deps
WORKDIR /src/portafolio-dotnet-react.client
RUN npm install

# back to server
WORKDIR /src/portafolio-dotnet-react.Server

# build completo (incluye React)
RUN dotnet publish -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 8080

ENTRYPOINT ["dotnet", "portafolio-dotnet-react.Server.dll"]
``
