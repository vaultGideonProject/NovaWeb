# Website Main

This is a Node.js-based website using Express and EJS templates.

## Features
- Dynamic pages: Home, About, Contact, and Services
- Styled with custom CSS
- Docker support for containerization
- Cloud build configuration for CI/CD

## Project Structure
```
- Dockerfile
- README.md
- app.js
- cloudbuild.yaml
- package.json
- public/
  - css/
    - style.css
- views/
  - about.ejs
  - contact.ejs
  - index.ejs
  - services.ejs
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website-main
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

To start the development server:
```bash
npm start
```

The website will be available at `http://localhost:3000`

## Docker

Build and run the Docker container:
```bash
docker build -t website-main .
docker run -p 3000:3000 website-main
```

## Cloud Build

To use Google Cloud Build:
```bash
gcloud builds submit --config=cloudbuild.yaml .
```

## Contributing

Feel free to submit a pull request or open an issue to suggest improvements!

## License

This project is licensed under the MIT License.

