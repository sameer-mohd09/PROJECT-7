# Quote Generator Web App

A simple web application that displays a random quote of the day and allows you to share it via WhatsApp.

## Features
- Fetches random quotes from the [API Ninjas Quotes API](https://api-ninjas.com/api/quotes)
- Displays the quote and author
- Button to fetch a new quote
- Button to share the current quote via WhatsApp
- Clean, modern UI



## Getting Started

### Prerequisites
- A modern web browser
- An API key from [API Ninjas](https://api-ninjas.com/api/quotes)

### Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   ```
2. **Set up the API key:**
   - Create a file named `config.js` in the project root (if it doesn't exist).
   - Add the following code, replacing `YOUR_API_KEY` with your actual API key:
     ```js
     const config = {
         API_KEY: 'YOUR_API_KEY'
     };
     ```
   - **Note:** `config.js` is included in `.gitignore` and should not be committed to version control.

3. **Open `index.html` in your browser.**

## Usage
- Click **New Quote** to fetch a new random quote.
- Click the **WhatsApp** button to share the current quote via WhatsApp (requires WhatsApp to be installed on your device).

## File Structure
- `index.html` - Main HTML file
- `style.css` - Styling for the app
- `script.js` - JavaScript logic for fetching and displaying quotes
- `config.js` - API key configuration (not committed to git)
- `Whatsapp-Icon-PNG.png` - WhatsApp icon used in the UI

## Customization
- You can change the quote category by editing the `category` variable in `script.js`.

## License
This project is for educational purposes only. 