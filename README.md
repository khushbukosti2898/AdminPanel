Project Setup and Installation

Prerequisites
Before setting up the project, ensure you have the following installed:

Node.js (v14 or higher)
npm or yarn

Installation Steps

Clone the repository:
git clone https://github.com/khushbukosti2898/AdminPanel

Navigate to the project directory:
cd dashboard-app

Install dependencies:
npm install

Start the development server:
npm start

Open the app: The app will be running at http://localhost:3000.

Key Directories:
components: Contains reusable components like PageHeader, ChartComponent, and SummaryCard. These components are used across the app.
locales: Stores the translation files for i18next. These files handle multi-language support.
pages: Contains main page components like Dashboard.js.
services: Includes any mock APIs or data services used by the application.

Implemented Features

Dashboard Page
Page Header: Displays the page title dynamically.
Summary Cards: Displays statistical summaries like "New Users" with a dynamic value.
Charts:
Line Chart: Shows data over time (e.g., weekly stats).
Bar Chart: Provides visual insights into categorical data.
Pie Chart: Displays data breakdown for different traffic sources.

Projects Page
Implemented CRUD operations for projects.
Added filters for project listing.

Estimation Module
Implemented full featured form and log data only (did not get chance to table build)

i18next Integration
Supports multiple languages, with language files located in the locales folder.
Currently it is implemented for dashboard only.

Design Choices

1. Component-Driven Architecture
   The app is designed around reusable React components like PageHeader, SummaryCard, and ChartComponent. This modular approach ensures scalability and maintainability as more features are added.
2. i18next for Localization
   i18next was chosen for its flexibility and ease of integration into React applications. The project can easily support additional languages by adding translation files
3. Material-UI for Styling
   The application uses Material-UI components (Grid, Stack, etc.) to ensure consistent, responsive layouts and user-friendly design.
4. ECharts for Charting

Added redux toolkit for state management
