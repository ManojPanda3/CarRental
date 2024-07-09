FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file
COPY package*.json  ./

# Remove node_modules and package-lock.json if they exist
RUN rm -rf node_modules package-lock.json

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . . 

# Build the React app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

RUN npm install -g serve

# Run the command to start the development server
CMD ["serve", "-s", "dist"]