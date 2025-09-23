# Fitness & Gym Management Dashboard

[![Dashboard Tool](https://img.shields.io/badge/Tool-Power%20BI-yellow.svg)](https://powerbi.microsoft.com/)
[![Data Source](https://img.shields.io/badge/Data-Excel%2FC SV-green.svg)](Fitness_Dataset.csv)
[![Category](https://img.shields.io/badge/Category-Business%20Intelligence-blue.svg)](Fitness-Dashboard.pbix)

![Fitness Dashboard Home](images/Home.png)

## Project Overview

This project features a comprehensive and interactive **Fitness Dashboard** built with Power BI to provide a 360-degree view of a gym's operations. Designed for gym owners and managers, this business intelligence tool transforms raw data into actionable insights, enabling data-driven decisions to optimize finances, track member engagement, and enhance overall performance.

The dashboard is structured into four main pages: **Home**, **Overview**, **Calculator**, and **Members**, each tailored to specific analytical needs.

---

## Table of Contents
- [Business Problem](#business-problem)
- [Key Features & KPIs](#key-features--kpis)
- [Technology Stack](#technology-stack)
- [Dashboard Showcase](#dashboard-showcase)
  - [Home Page](#home-page)
  - [Overview Page](#overview-page)
  - [Calculator Page](#calculator-page)
  - [Members Page](#members-page)
- [Dataset](#dataset)
- [How to Use](#how-to-use)
- [Conclusion](#conclusion)

## Business Problem
A modern fitness center generates a vast amount of data related to memberships, finances, and member activities. Without a proper analytics system, it's challenging to:
-   Monitor financial health (Revenue vs. Expenses).
-   Track member growth and retention rates.
-   Understand the demographic makeup of the membership base.
-   Assess the popularity of different membership plans.
-   Provide value-added tools to members, like fitness calculators.

This dashboard solves these problems by consolidating all key metrics into a single, user-friendly interface.

## Key Features & KPIs
The dashboard tracks and visualizes the following core metrics:
-   **High-Level KPIs:** Total Members, Trainers, Revenue, and Expenses.
-   **Financial Analysis:** Monthly trends for Revenue, Expenses, and Profit.
-   **Membership Analytics:** Breakdown of active vs. expired memberships across different tiers (Platinum, Gold, Silver).
-   **Member Demographics:** Analysis of members by age, gender, and status (active/expired).
-   **Member Engagement:** A detailed member information table showing join dates, goals, and progress.
-   **Interactive Tools:** A built-in BMI and Calorie Calculator for member use.

## Technology Stack
-   **Visualization & Dashboarding:** Microsoft Power BI
-   **Data Modeling:** Power Query
-   **Calculations & KPIs:** Data Analysis Expressions (DAX)
-   **Data Source:** Excel / CSV (`Fitness_Dataset.csv`)

## Dashboard Showcase

### Home Page
The Home Page serves as a visually engaging landing screen, setting a professional tone for the analytic dashboard.

![Home Page Screenshot](images/Home_Splash.png)

### Overview Page
This page provides a high-level summary of the gym's financial and membership performance.
-   **Finances:** Tracks monthly revenue, expenses, and profit.
-   **Category Breakdown:** Shows the distribution of members by membership type and status.
-   **Memberships:** Lists members by their status and progress percentage.

![Overview Page Screenshot](images/Overview.png)

### Calculator Page
A functional tool for members to track their health metrics.
-   **BMI Calculator:** Calculates Body Mass Index based on user inputs.
-   **Calorie Calculator:** Estimates daily calorie needs for maintenance or weight loss based on activity level.

![Calculator Page Screenshot](images/Calculator.png)

### Members Page
This page offers a deep dive into member demographics and individual details.
-   **Demographics:** Visualizes the member base by age, gender, and status.
-   **Member Information:** A searchable and filterable table with detailed information for each member.

![Members Page Screenshot](images/Members.png)

## Dataset
The analysis is powered by the `Fitness_Dataset.csv` file, which contains anonymized data for 100 members. The dataset includes columns such as:
-   `UserName`, `Gender`, `Age`, `Status`
-   `JoinDate`, `Goal`, `Membership`
-   `ProgressPercent`, `BMI`, `Height`, `Weight`
-   Financial data (summarized for the dashboard)

## How to Use
To explore the interactive dashboard:
1.  **Download and Install** [Power BI Desktop](https://powerbi.microsoft.com/en-us/desktop/) (it's free).
2.  **Clone or download this repository.**
3.  **Open** the `Fitness-Dashboard.pbix` file in Power BI Desktop.
4.  The dashboard will load with the embedded data, ready for interaction.

## Conclusion
This Fitness Dashboard is a powerful tool for any gym owner looking to leverage data for strategic advantage. By providing clear, visual insights into finances, member behavior, and engagement, it empowers management to make smarter decisions that drive growth and improve member satisfaction.