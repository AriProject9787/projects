# Birthday Reminder & Celebration Generator 🎂✨

A premium, all-in-one platform to manage birthdays, get reminders, and generate stunning personalized celebration pages for your loved ones. Built with a focus on aesthetics, speed, and viral sharing.

## 🚀 Key Features

### 📅 Birthday Dashboard
- **Real-time Reminders**: Automatic age calculation and countdowns.
- **Privacy Controls**: Toggle between "Public" and "Private" visibility.
- **Guest Mode**: Instantly view public birthdays without an account.

### 🛡️ Secure & Scalable Architecture
- **Modular Config**: Isolated Firebase configuration in `firebase-config.js` for better security and maintainability.
- **Administrative Control**: Dedicated `admin.html` page for system-wide data management and collection oversight.
- **Visitor Analytics**: Automated logging of visitor traffic, IP tracking, and duration metrics.
- **Security Hardening**: Implementation of API restrictions and robust security protocols.

### 🎁 The Wish Factory (Custom Generator)
- **Deep Personalization**: Add custom photos, heartfelt messages, and surprise plans.
- **Memory Gallery**: Create a scrollable gallery of your favorite moments.
- **contagious Growth**: Recipients can instantly "Create their own wish" from the view page.

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3 (Modern Vanilla), Vanilla JavaScript (ES6 Modules).
- **Backend (BaaS)**: Firebase Authentication, Cloud Firestore.
- **Security**: Modular configuration, restrictive security rules, and encrypted/separated keys.

## 📦 Project Structure
- `index.html`: Main user dashboard and login.
- `admin.html`: Professional administrative control panel.
- `firebase-config.js`: Centralized Firebase credentials.
- `wish1.html`: The interactive personalized celebration template.

## ⚙️ Configuration
Replace the credentials in [firebase-config.js](firebase-config.js) with your own Firebase project settings. Ensure you restrict your API keys in the Google Cloud Console to your specific domains.

## 📜 License & Terms
Please refer to [terms.html](terms.html) for our full User Terms and Privacy Policy.

---
*Made with ❤️ to help the world celebrate better.*
