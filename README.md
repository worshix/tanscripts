# Zimtech Engineering Website

## Engineering Company Website Structure

### **1. Core Navigation Pages (Level 1)**

These pages will form the main navigation menu of the website.

* **Home (`/`)**
    * **Goal:** High-level overview, strong visuals, and clear calls-to-action (CTAs).
    * **Content Focus:** Brief/animated display of **Services**, a brief section on **Products**, a snapshot of the latest **Blog** post or **Case Study**, and a final CTA to Contact Us.

* **About Us (`/about`)**
    * **Goal:** Build trust and establish credibility.
    * **Content Focus:** Company story, mission, vision, core values, and team/leadership profiles.

* **Services (`/services`)**
    * **Goal:** Detailed description of all engineering services offered.
    * **Content Focus:** Comprehensive text, diagrams, and explanations for each service line.

* **Products (`/products`)**
    * **Goal:** Showcase manufactured or offered products.
    * **Content Focus:** High-quality gallery of products with brief descriptions.
    * **Actionable Links:** Each product card will have a link to its **detailed article/blog post** and a link to its **Datasheet** (e.g., a PDF file).

* **Training (`/training`)**
    * **Goal:** Overview of all educational offerings.
    * **Content Focus:** A list/summary of all available training courses. This page acts as the main hub before diving into specific courses.

* **Blog / Articles (`/blog`)**
    * **Goal:** A central repository for thought leadership, case studies, and detailed product deep-dives.
    * **Content Focus:** A feed of all articles, including:
        * Case Studies
        * Product Deep-Dives (linked from the Products page)
        * Industry News/Insights

* **Case Studies (`/case-studies`)**
    * **Note:** While Case Studies will appear in the Blog, a dedicated landing page might be useful to feature the most impactful ones with a stronger visual layout, linking off to the full article on the Blog.

* **Contact Us (`/contact`)**
    * **Goal:** Facilitate client inquiries.
    * **Content Focus:** Contact form, location map, phone numbers, and email addresses.

* **Careers (`/careers`)**
    * **Goal:** Attract talent.
    * **Content Focus:** Company culture, benefits, and open job listings.

---

### **2. Nested Training Routes (Level 2)**

These are the detailed pages for each specific training course, nested under the main Training page.

* **Training (`/training`)**
    * **PLC Training** (`/training/plc`)
        * Detailed course outline, duration, prerequisites, and registration form.
    * **Embedded Systems Training** (`/training/embedded-systems`)
        * Detailed course outline, duration, prerequisites, and registration form.
    * **Mechanical Design for Industrial Automation Training** (`/training/mechanical-design-automation`)
        * Detailed course outline, duration, prerequisites, and registration form.
    * *...and any other specific training courses.*

---

### **3. Content Routes (Level 2)**

These routes handle the individual posts, articles, and product deep-dives.

* **Blog / Articles (`/blog`)**
    * **Individual Article/Post** (`/blog/[slug]`)
        * *Examples:*
            * `/blog/automating-assembly-line-case-study` (A Case Study)
            * `/blog/introducing-the-nexgen-controller` (A Product Deep-Dive, linked from the Products page)
            * `/blog/trends-in-civil-engineering-2024` (Industry Insight)

---

### **Summary of Key Cross-Linking**

| Origin Page | Destination Page | Purpose |
| :--- | :--- | :--- |
| **Products** (`/products`) | **Blog** (`/blog/[slug]`) | Detailed product information and narrative. |
| **Products** (`/products`) | **Datasheet** (PDF) | Technical specifications and downloads. |
| **Training** (`/training`) | **Nested Routes** (`/training/[course]`) | Dive into specific course details and registration. |
| **Home** (`/`) | **Services** (`/services`) | Lead users from the animated overview to the detailed page. |
| **Case Studies** (`/case-studies`) | **Blog** (`/blog/[slug]`) | Direct traffic to the full article content. |