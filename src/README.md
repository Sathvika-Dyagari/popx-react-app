# PopX React Application

## Overview

This project is a responsive React.js implementation of the PopX mobile application UI based on the provided Adobe XD design.

The application consists of four screens:

- Welcome Page
- Login Page
- Create Account Page
- Account Settings Page

Navigation between pages is implemented using React Router DOM.

---

## Features

- Responsive design for mobile, tablet, laptop, and desktop screens.
- Pixel-perfect UI based on the Adobe XD design.
- Login button becomes active only after entering email and password.
- Create Account page with required field indicators.
- Account Settings page with profile image and camera icon.
- Smooth navigation between pages.

---

## Technologies Used

- React.js
- JavaScript (ES6)
- HTML5
- CSS3
- React Router DOM
- React Icons
- VS Code

---

## Project Structure

```text
src
│
├── pages
│   ├── Welcome.js
│   ├── Login.js
│   ├── Register.js
│   └── Account.js
│
├── App.js
├── App.css
└── index.js
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd popx-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

---

## Screens

### Welcome Page
- Welcome message
- Create Account button
- Already Registered? Login button

### Login Page
- Email Address field
- Password field
- Dynamic Login button

### Create Account Page
- Full Name
- Phone Number
- Email Address
- Password
- Company Name
- Agency selection

### Account Settings Page
- Profile image
- Camera icon
- User information
- Description section