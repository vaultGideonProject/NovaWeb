# VaultMessenger API

VaultMessenger is a secure real-time chat application leveraging Google Cloud services like Firestore, Cloud Tasks, and Firebase Authentication. This API, built with Go and Gin, facilitates message handling, conversation management, and notification dispatch.

## Features

- 🔒 **Real-time Messaging**: Send and retrieve messages instantly using Firestore.
- 📞 **Notification Scheduling**: Cloud Tasks integration for push notifications.
- 📡 **Secure API**: Firebase Authentication for user validation.
- ⚡ **Scalable Architecture**: Hosted on Google Cloud Platform (GCP).

## Project Structure

```
.
├── main.go              # API entry point
├── firebaseConfig/      # Firebase credentials (google-services.json)
├── routes/              # Route handlers (get-messages, send-message, etc.)
├── go.mod               # Dependency management
├── go.sum               # Dependency locks
└── README.md            # Project documentation
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/VaultMessenger.git
   cd VaultMessenger
   ```
2. **Install dependencies:**
   ```bash
   go mod tidy
   ```
3. **Set up Firebase:**
   - Add your Firebase credentials (`google-services.json`) to `firebaseConfig/`

4. **Run the server:**
   ```bash
   go run main.go
   ```

## API Endpoints

### Get Messages
- **Endpoint:** `GET /get-messages/:userId/:receiverId`
- **Description:** Retrieves the latest messages between two users.
- **Response:**
  ```json
  {
    "success": true,
    "message": [
      {"text": "Hello!", "timestamp": "2023-08-28T12:00:00Z"}
    ]
  }
  ```

### Send Message
- **Endpoint:** `POST /send-message`
- **Description:** Sends a new message between users.
- **Request Body:**
  ```json
  {
    "senderUid": "user123",
    "receiverUid": "user456",
    "message": {"text": "Hi there!", "timestamp": "2023-08-28T12:00:00Z"}
  }
  ```
- **Response:**
  ```json
  { "success": true, "message": "Message sent successfully" }
  ```

### Schedule Notification
- **Endpoint:** `POST /send-notification-task`
- **Description:** Creates a Cloud Task to send push notifications.
- **Request Body:**
  ```json
  {
    "token": "deviceToken123",
    "title": "New Message!",
    "body": "You have a new message.",
    "imageUrl": "https://example.com/image.png",
    "userId": "user123"
  }
  ```
- **Response:**
  ```json
  { "success": true, "message": "Notification task created" }
  ```

## Deployment

Deploy the API to Google Cloud Run or a VM instance:

```bash
gcloud builds submit --tag gcr.io/your-project-id/vaultmessenger-api
gcloud run deploy vaultmessenger-api --image gcr.io/your-project-id/vaultmessenger-api --platform managed
```

## Environment Variables

Ensure the following environment variables are set:

- `FIRESTORE_PROJECT_ID`: Your Firestore project ID.
- `CLOUD_TASKS_QUEUE_URL`: The URL for the Cloud Tasks queue.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for bug fixes or enhancements.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

---

Happy coding! 💬

