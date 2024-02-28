FROM node:20

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
# RUN npm run dev

# Expose port 3000 (if your application listens on this port)
EXPOSE 3000
