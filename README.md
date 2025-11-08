# Potluck App 🍲

A social media platform for sharing recipes and food-related content.

This repository contains two main parts:

- `backend/` — Express API server (Node.js + Express + MongoDB + Firebase Admin)
- `app/` — Expo React Native app (mobile + web)

This README explains how to install, configure, and run the project locally.

## Quick start

1. Clone the repo and open the project root:

		```powershell
		# change to the path where you cloned the repository
		cd "<path-to-cloned-repo>/potluck"
		```

2. Backend: install dependencies and start in dev mode (uses nodemon):

	 ```powershell
	 cd backend
	 npm install
	 # requires a .env with MONGODB_URI and optionally PORT
	 npm run dev
	 ```

3. App (Expo): install and start the client (web/mobile):

	 ```powershell
	 cd ..\app\potluck
	 npm install
	 npx expo start --web --clear    
	 ```

## What you'll need

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB URI (Atlas or local)
- Firebase project for authentication/storage

## Configuration

- Backend environment variables: Create a `.env` file in `backend/` with at least:

	```text
	MONGODB_URI=<your-mongodb-connection-string>
	PORT=5000
	```

- Firebase (backend): place your Firebase service account JSON at `backend/config/firebase-serviceAccountKey.json`. The backend imports it from `backend/config/firebase.js`.

## Contributing

Feel free to open issues or PRs. For small changes, follow this flow locally:

1. Create a branch from `main`.
2. Make changes and run the app/backend locally to verify.
3. Open a PR with a short description of the change.