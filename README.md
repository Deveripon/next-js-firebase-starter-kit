# Next Js With Firebase Authentication & Firestore Starter Kit 🚀

A professional, production-ready **Next.js** starter kit integrated with **Firebase Authentication** and **Firestore**. This kit features a modern UI, robust form validation, and a sleek dashboard layout.

## ✨ Features

-   **Framework**: Next.js 14+ (App Router)
-   **Authentication**: Firebase Auth (Email/Password & Google OAuth)
-   **Database**: Firebase Firestore for user profiles and data management
-   **Forms & Validation**: React Hook Form with Zod schema validation
-   **UI Components**: shadcn/ui (Tailwind CSS)
-   **State Management**: React Context API for global Auth session
-   **UX**: Skeleton loaders for data fetching and graceful error handling

## 🛠️ Tech Stack

-   **Frontend**: React, Next.js, Tailwind CSS
-   **Backend**: Firebase (Auth, Firestore)
-   **Validation**: Zod
-   **Icons**: Hugeicons

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/your-username/stoxie-starter.git](https://github.com/your-username/stoxie-starter.git)
cd stoxie-starter
2. Install dependencies
Bash

npm install
3. Setup Environment Variables
Create a .env.local file in the root directory and add your Firebase configuration:

Code snippet

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
4. Run the development server
Bash

npm run dev
Open http://localhost:3000 to see the result.

📂 Project Structure
/app: Next.js App Router (Routes and Pages)

/components/ui: shadcn/ui reusable components

/context: AuthContext for session management

/lib: Firebase config and utility functions

/hooks: Custom React hooks

🛡️ Security Rules
To protect user data in Firestore, ensure you set your Firebase rules to:

JavaScript

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

