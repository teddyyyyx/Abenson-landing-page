# Abenson-landing-page

## Introduction : 🤟

Hi, I'm Benz Samson Tagle, and I built this project entirely from scratch using only HTML and CSS. My focus was on minimizing JavaScript usage and leveraging the capabilities of modern HTML and CSS to create a responsive, clean, and optimized website.

Modern web development offers advanced features that enable the creation of beautiful and interactive websites using just HTML and CSS. This approach results in a less bloated, lightweight website with superior performance.

This website is fully optimized and SEO-friendly, featuring appropriate meta tags such as `og:type`, `og:url`, `og:image`, `description`, and `keywords`. Images are handled with the `<picture>` tag, which allows for responsive and optimized image loading, serving WebP format for better performance while providing fallback JPEG or PNG images for browser compatibility. Icons are in proper SVG format to ensure smaller file sizes and faster loading times.

The project is uploaded to GitHub and deployed on Vercel for seamless accessibility.

## My Notes :: 🤟🤟

To achieve a responsive, clean, and optimized design, a well-structured HTML and CSS foundation is crucial. Below are the practices implemented in this project:

### Responsive Design

- **Using `clamp()` for CSS Values**:  
  Most CSS values are defined using the `clamp()` function, ensuring consistent responsiveness across all viewports.

- **Responsive Fonts**:  
  Font sizes also utilize `clamp()` to scale seamlessly across devices.

### Dynamic Design Structure

- **CSS Variables**:  
  CSS variables are used throughout the project to maintain a flexible and dynamic design system.

### Optimized Image Handling

- **`<picture>` Tag for Images**:  
  The `<picture>` tag is used for a dynamic image approach:
  - **WebP Format**: WebP is the primary format for better performance and optimized loading times.
  - **Fallback Images**: JPEG or PNG images are provided as fallback options for browsers that do not support WebP.

### Scroll Behavior

- **Using `overflow: auto`**:  
  Containers are set to `overflow: auto` instead of `overflow: scroll` to make them scrollable only when necessary.

### Input Validation

- **HTML and CSS-Based Validation**:  
  Input validation relies on the capabilities of HTML and CSS:
  - A `placeholder=" "` is added to inputs.
  - The CSS pseudo-class `:not([placeholder])` is used to detect when the placeholder text is hidden, indicating user input.

### Dropdown Implementation

- **HTML and CSS-Driven Dropdowns**:  
  Dropdown menus are created using modern HTML and CSS techniques:
  - An `input` and `label` pair toggles the dropdown visibility.
  - The `ul` element’s `max-height` is initially set to `0` to keep it hidden.
  - When toggled, a larger `max-height` is applied to reveal the dropdown.

### SEO Enhancements

- **Meta Tags for SEO**:  
  To improve the website's search engine visibility, the following meta tags are included:
  - `og:type`
  - `og:url`
  - `og:image`
  - `description`
  - `keywords`

### Icons and Images

- **SVG Icons**:  
  All icons are SVG for scalability and better performance.
- **Optimized Pictures**:  
  Images are primarily in WebP format for faster loading, with fallback formats (JPEG/PNG) provided for browser compatibility.

These practices ensure the website is responsive, optimized, and SEO-friendly while leveraging the full potential of modern HTML and CSS.

---

# Website Structure Documentation

## HTML Overview ::: 🤟🤟🤟

This document provides a detailed breakdown of HTML structure that I made.

## Header

The header is divided into three parts:

- **`header-top`**  
  Used for top-level elements, such as notifications, announcements, or utility links.

- **`main-header`**  
  Serves as the central area for the website's logo and primary navigation.

- **`header-bottom`**  
  A list container (`<ul>`) for secondary navigation, category links, or quick access items.

## Main Content

The main content contains multiple sections, each with a specific purpose:

1. **`hero-section`**  
   A visually engaging section to introduce the website with a headline, image, or call-to-action.

2. **`about-section`**  
   Describes the website, its purpose, or mission statement.

3. **`wju-section`**  
   "Why Join Us" section to showcase benefits, values, or opportunities.

4. **`teams-section`**  
   Highlights team members, their roles, or a collaborative focus.

5. **`job-list-section`**  
   Displays job opportunities or related details.

6. **`contact-section`**  
   A section for contact information or a form to facilitate user inquiries.

7. **`social-section`**  
   Includes Facebook, Jobstreet, and Linkedin link icons.

## Footer

The footer is divided into multiple areas for structured content:

### Footer Main

The primary footer container is divided into three sections:

1. **`footer-first-div`**

   - **`banner-cta`**: Includes call-to-action h1 and input for audience conversion.
   - **`banner-container`**: Wraps the image banner and the two links on it.

2. **`footer-second-div`**  
   Includes two `<div>` elements, each containing two child `<div>` elements and a ul for quick links: Discover, Support, Our Services, Payment icons.

3. **`footer-third-div`**  
   Includes:
   - Two general containers for contact links and info. -**`div:first-of-type`**: The first div includes Connect With Us with the 5 footer social icons.
   - **`footer-third-last-child`**: A dedicated section for the Contact Us and Customer Care links

### Footer Bottom

- First div container has 2 childen ul links that includes Privacy Policy, Terms of Use, Warranty, FAQ, Feedback, and Careers
- Includes a horizontal line (`<hr>`) to visually separate sections.
- A `<p>` element for displaying the © Copyright text.

---

https://benztagle.vercel.app/ | https://zenn2.vercel.app/
