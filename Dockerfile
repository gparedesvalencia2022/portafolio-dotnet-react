# Build stage
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# instalar node
RUN apt-get update && apt-get install -y nodejs npm

COPY . .

# ✅ BUILD FRONTEND
WORKDIR /src/portafolio-dotnet-react.client
RUN npm install
RUN npm run build

# ✅ copiar build al backend
RUN mkdir -p /src/portafolio-dotnet-react.Server/wwwroot
RUN cp -r dist/* /src/portafolio-dotnet-react.Server/wwwroot/

# ✅ BUILD BACKEND
WORKDIR /src/portafolio-dotnet-react.Server
RUN dotnet restore
RUN dotnet publish -c Release -o /app/publish

# Runtime
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 8080

ENTRYPOINT ["dotnet", "portafolio-dotnet-react.Server.dll"]

