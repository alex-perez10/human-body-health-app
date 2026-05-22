# Human Body Health App

A full-stack health information web application being built with React, Node.js, Express, and OpenAI API integration. Users click on body parts from an interactive diagram and receive AI-assisted health information through a conversational chat interface.

## Status
In active development. The frontend is complete and backend API integration is in progress.

## Features Planned
- Interactive SVG body diagram with clickable body part selection
- AI-powered chat interface that responds based on selected body region
- React-based frontend with component architecture and useState hooks
- Node.js and Express backend to securely handle OpenAI API requests
- API key protection using environment variables and .gitignore
- Desktop web application layout

## Tech Stack
- React + Vite
- JavaScript / JSX
- CSS
- Node.js
- Express
- OpenAI API (gpt-3.5-turbo)
- Git / GitHub

## What I Am Building
I am building the frontend and backend structure for a health-focused AI web application. The project is focused on practicing full-stack development, API integration, component-based UI design, and clean project organization.

## How It Works
Users click on a body part from an interactive diagram. The selected region is tracked using React state. Users then ask health-related questions through a chat interface. The frontend sends the question and selected body part to the Express backend, which constructs a prompt and calls the OpenAI API. The AI response is returned and displayed in the chat.

## Important Note
This application is intended for general educational and informational purposes only. It is not a medical diagnosis tool and should not replace advice from a licensed healthcare professional.

## Future Improvements
- Complete backend API connection
- Add loading and error states
- Improve prompt handling and response formatting
- Add chat history
- Male/female diagram toggle in settings
- Deployment to Render/Vercel
