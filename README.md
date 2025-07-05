# 🏯 Animated Temple Website

Welcome to the **Animated Temple Website** — a calming, immersive, and aesthetically rich landing page inspired by traditional Japanese temples. With smooth animations, responsive design, and falling sakura petals, this project brings serenity to the screen. 🌸

> ✨ *“Step into a realm where ancient stones breathe stories and the breeze carries calm.”*

---

## 🌐 Live Demo

[🔗 View Demo](https://your-live-demo-link.com) 

---

## 📁 Project Structure

```bash
├── index.html                  # Main HTML file
├── assets/
│   ├── css/
│   │   ├── styles.css          # Main stylesheet
│   │   └── sakura.min.css      # Sakura animation styling
│   ├── js/
│   │   ├── main.js             # Custom JavaScript
│   │   └── gsap.min.js         # GSAP animation library
│   ├── img/
│   │   ├── favicon.png
│   │   ├── img-bg.svg
│   │   ├── img-1.svg ... img-6.svg
│   │   └── lantern-1.svg / lantern-2.svg
```

---

## 🚀 Features

### 🎨 Elegant Visual Design

- Calming gradients and harmonious color palette
- Traditional temple-inspired iconography

### 📱 Responsive Layout

- Fully responsive across mobile, tablet, and desktop devices
- Optimized with modern media queries and fluid containers

### 🧭 Interactive Navigation

- Hamburger menu for mobile view
- Smooth menu open/close transitions
- Dynamic blur effect on the header after scroll

### 🌸 Sakura Animation

- Animated falling cherry blossoms
- Powered by a lightweight animation library
- Adds a peaceful, ambient visual effect

### ✨ GSAP-powered Animations

- Smooth staggered entrance for elements
- Natural transitions using easing and delays
- Image slides, fades, and reveals enhance engagement

### 💬 Accessible, Semantic HTML5

- Clean, semantic markup for better SEO and accessibility
- Maintainable structure with logical tag usage

---

## 🛠️ Built With

| Technology      | Purpose                                  |
|-----------------|-------------------------------------------|
| `HTML5`         | Structure and layout                     |
| `CSS3`          | Styling, responsiveness, and layout      |
| `JavaScript`    | Interactivity and behavior               |
| [`GSAP`](https://greensock.com/gsap/)         | Smooth entrance animations for elements |
| [`Sakura.js`](https://github.com/jhoriuchi/sakura) | Falling sakura petal effect             |
| [`Remix Icon`](https://remixicon.com/)       | Icons for UI and navigation             |
| [`Google Fonts`](https://fonts.google.com/specimen/Montserrat+Alternates) | Font: Montserrat Alternates              |

---

## 📦 Installation & Setup
- Follow the steps below to run this project locally:

1. **Clone the Repository**
```bash
git clone https://github.com/sudhanshu-j/animated-temple-website.git
cd animated-temple-website
```

2. **Open in Browser***
- Just open `index.html` in your preferred browser.

3. **Or Use a Local Server**
```bash
# With Python 3
python3 -m http.server
# Open http://localhost:8000 in your browser
```

4. **Optional Deployment**
- Deploy using GitHub Pages, Vercel, Netlify, or any static host.

---

## 🎬 How It Works

### 🔄 Navigation Functionality

- `nav-toggle` opens the mobile menu by adding the `.show-menu` class.

- Clicking a navigation link or the close icon removes the `.show-menu` 
class.

- Scrolling past 50px triggers the `blur-header` class, adding a soft blur to the header background.

### ✨ GSAP Animations
On page load, elements animate into view using [GSAP](https://greensock.com/gsap/):

- `.home-img-*`: Slide in from various directions with fade-in opacity.

- `.home-data`: Slides in from the top with easing for a smooth entrance.

- `.home-lantern-*`: Gently drift in from the sides to enhance visual charm.

### 🌸 Sakura Petals

- `Sakura.js` generates a cascade of animated cherry blossoms.

- Targets the `.sakura-petals` container.

- Fully decorative and non-interactive (`pointer-events: none`).

---

## 🧪 Browser Support

Tested and works as expected on:

- ✅ **Chrome**
- ✅ **Firefox**
- ✅ **Safari**
- ✅ **Edge**
- ✅ **Mobile Browsers**

> 📝 **Note**: Safari requires `-webkit-backdrop-filter` for proper blur effect rendering.

---

## 📌 To-Do / Future Enhancements

- [ ] Add scroll-triggered section reveals using `IntersectionObserver`.

- [ ] Improve accessibility: add ARIA roles, keyboard navigation, tab focus.

- [ ] Add a **light/dark mode** toggle with user preference saved in `localStorage`.

- [ ] Integrate a fully functional **contact form** using a service like [EmailJS](https://www.emailjs.com/).

---

## 🤝 Contributing

Contributions are welcome!  
If you’d like to improve or add features:

1. **🍴 Fork this repo**

2. **🔀 Create a feature branch**
   ```bash
   git checkout -b feature-name
   ```

3. **💾 Commit your changes**

4. **🚀 Push to your branch**

5. **📝 Submit a pull request!**

---

## 🪷 Credits

- 🎨 **Icons**: [Remix Icon](https://remixicon.com/)

- 🌸 **Sakura Animation**: Adapted from open-source libraries like [Sakura.js](https://github.com/jhoriuchi/sakura)

- 🎥 **Animations**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)

- ✍️ **Typography**: [Montserrat Alternates](https://fonts.google.com/specimen/Montserrat+Alternates) via [Google Fonts](https://fonts.google.com/)

---

## 🙏 Acknowledgments

> Inspired by the harmony, peace, and craftsmanship of ancient temples —  
> a small digital retreat built with modern tools to bring stillness to the screen.

Made with ❤️, coffee ☕, and cherry blossoms 🌸
