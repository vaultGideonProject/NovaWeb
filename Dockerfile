# Use the official Node.js base image (LTS version)
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (the port our app will run on)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
