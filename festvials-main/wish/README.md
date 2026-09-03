# Celebration & Festival Reminder & Wish Platform 🎂💍🪔✨

A premium, all-in-one celebration platform to track birthdays, anniversaries, and major festivals, get live countdown reminders, and generate personalized interactive celebration web pages.

## 🚀 Key Features

### 📅 Multi-Event Celebration Dashboard
- **All-in-One Tracking**: Manage **Birthdays**, **Anniversaries**, **Diwali**, **Pongal/Sankranti**, **Christmas & New Year**, **Eid Mubarak**, **Valentine's Day**, and custom **Milestones**.
- **Event Category Filters**: Instant filtering by category pills (All, Birthdays, Anniversaries, Festivals, Milestones).
- **Contextual Countdowns**: Smart countdown cards customized for each event type (e.g. "5th Anniversary in 14 days", "Diwali in 25 days", "Turns 24 in 2 days").
- **Quick-Add Festivals**: Single-click presets to populate upcoming festival dates (Diwali, Pongal, Christmas, New Year, Eid).
- **Privacy Controls**: Public and private visibility options with instant Google Calendar sync and WhatsApp sharing.

### 🎨 The Template Studio (`template/`)
Choose from specialized, mobile-optimized celebration templates inside the `template/` folder:
- **`template/birthday.html`**: Colorful celebration with floating balloons, interactive 3D gift box unboxing, retro polaroid memories, secret letter, and confetti cannon.
- **`template/anniversary.html`**: Deep wine & gold foil luxury aesthetic with floating rose petals, interactive champagne cheers, eternal love vows, and romantic journey mosaic.
- **`template/festival.html`**: Dynamic grand festival celebration featuring real-time theme switcher (Diwali lamps/diyas, Pongal pot, Christmas snow/pine, Eid crescent/stars) and auspicious blessings.
- **`template/modern_card.html`**: Futuristic 3D tilt glassmorphic greeting card with ambient neon glow, synthesized Web Audio fanfare chime, and VIP scratch-reveal card.
- **`template/index.html`**: Interactive live template catalog & showcase gallery.
- **`wish1.html`**: Classic interactive celebration template (fully backwards-compatible).

### 🛡️ Secure & Scalable Architecture
- **Modular Config**: Isolated Firebase configuration in `firebase-config.js`.
- **Administrative Control**: Dedicated `admin.html` page for system-wide collection oversight and data management.
- **Visitor Analytics & Security**: Automated visitor tracking, IP logging, and blocklist enforcement.

## 🛠️ Tech Stack
- **Frontend**: HTML5, Modern Vanilla CSS3, ES6 Modules.
- **Visuals & Effects**: Canvas Confetti, Web Audio API, CSS 3D Transforms, Google Fonts (Fredoka, Outfit, Playfair Display, Cinzel, Syne, Great Vibes).
- **Backend (BaaS)**: Firebase Authentication, Cloud Firestore.

## 📦 Project Structure
- `index.html`: Main celebration dashboard, category filters, and personalization wizard.
- `template/`: Dedicated directory of interactive wish templates and showcase gallery:
  - `template/birthday.html`: Birthday Extravaganza template.
  - `template/anniversary.html`: Golden Romance Anniversary template.
  - `template/festival.html`: Multi-Festival Celebration template.
  - `template/modern_card.html`: 3D Luxury Glass Card template.
  - `template/index.html`: Live Template Catalog & Gallery.
- `wish1.html`: Classic celebratory template.
- `admin.html`: Administrative control panel.
- `firebase-config.js`: Centralized Firebase configuration.

---
*Made with ❤️ to help the world celebrate every special moment.*
