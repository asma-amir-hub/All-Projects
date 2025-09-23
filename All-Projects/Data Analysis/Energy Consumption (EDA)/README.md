# World Energy Consumption Analysis (1965-2023)

[![Language](https://img.shields.io/badge/language-Python-blue.svg)](https://www.python.org/)
[![Libraries](https://img.shields.io/badge/libraries-Pandas%20%7C%20Numpy%20%7C%20Seaborn-brightgreen.svg)](requirements.txt)
[![IDE](https://img.shields.io/badge/IDE-Jupyter%20Notebook-F37626.svg?logo=jupyter)](main.ipynb)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

An in-depth analysis of global energy consumption trends from 1965 to 2023. This project leverages Python data analysis libraries to clean, explore, and visualize a comprehensive dataset, revealing key patterns in energy usage across countries and regions over nearly six decades.

---

## Table of Contents
- [Introduction](#introduction)
- [Project Objectives](#project-objectives)
- [Dataset](#dataset)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Analysis Overview](#analysis-overview)
- [Key Visualizations](#key-visualizations)
- [Conclusion](#conclusion)

## Introduction
Energy consumption is a critical metric for gauging economic development, technological progress, and environmental impact. This project provides a detailed exploratory data analysis (EDA) of world energy consumption data spanning 59 years. The goal is to uncover historical trends, identify top energy consumers, and analyze growth rates to provide a clear picture of the global energy landscape.

## Project Objectives
The primary objectives of this analysis are to:
1.  **Clean and Prepare** the raw dataset for analysis.
2.  **Analyze and Visualize** energy consumption trends for individual countries and aggregated regions over time.
3.  **Identify** the top 10 energy-consuming countries and regions for the most recent year (2023).
4.  **Calculate and Compare** the energy consumption growth rates from 1965 to 2023.
5.  **Provide** a clear, well-documented narrative of the findings in a Jupyter Notebook.

## Dataset
The dataset, `World_Energy_By_Country_And_Region_1965_to_2023.csv`, is sourced from Kaggle. It contains energy consumption data (in Exajoules) for over 100 countries and regional aggregates from 1965 to 2023.

- **Columns**: `Country`, and a column for each year from `1965` to `2023`.
- **Rows**: Each row represents a country or a region (e.g., 'Total North America', 'Total World').

## Project Structure
The repository is organized as follows:

├── Data/

│ └── World_Energy_By_Country_And_Region_1965_to_2023.csv

├── Documents/

│ └── ... (Supporting .docx files)

├── images/

│ └── ... (Saved visualizations)

├── venv/

├── main.ipynb

├── README.md

└── requirements.txt

## Setup and Installation
Follow these steps to set up the project environment and run the analysis.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/World-Energy-Consumption-Analysis-1965-2023.git
    cd World-Energy-Consumption-Analysis-1965-2023
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    # Create the virtual environment
    python -m venv venv

    # Activate it
    # On Windows:
    venv\Scripts\activate
    # On macOS/Linux:
    source venv/bin/activate
    ```

3.  **Install the required packages:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Launch Jupyter Notebook:**
    ```bash
    jupyter notebook
    ```
    This will open a new tab in your browser. Navigate to and open `main.ipynb`.

## Analysis Overview
The core analysis is performed in the `main.ipynb` notebook and includes the following key steps:
- **Data Loading & Initial Inspection**: Reading the CSV and examining its structure, data types, and null values.
- **Data Cleaning**: Dropping fully null rows and converting year columns to a numeric format.
- **Data Visualization Functions**:
    - `country_consumption_energy()`: Plots a line chart of a single country's energy consumption over time.
    - `year_consumption_energy()`: Creates a bar chart comparing consumption across all countries for a given year.
    - `growth_rate()`: Calculates the percentage growth between a start and end year and visualizes the top 10 countries by growth rate.
- **Data Segmentation**: The dataset is split into two dataframes: one for individual countries and one for aggregate regions to facilitate separate analyses.
- **Reporting**: The notebook concludes by generating bar charts for the top 10 energy-consuming countries and regions in 2023.

## Key Visualizations
- **Line Plot**: Energy Consumption in Canada (1965-2023)
- **Bar Chart**: Energy Consumption by Country (1992)
- **Heatmap**: Correlation of Yearly Energy Consumption
- **Bar Chart**: Top 10 Countries by Growth Rate (1965-2023)
- **Bar Chart**: Top 10 Countries by Consumption (2023)
- **Bar Chart**: Top 10 Regions by Consumption (2023)

## Conclusion
This project successfully analyzes nearly six decades of global energy consumption data, offering clear insights through structured analysis and visualizations. The findings highlight significant shifts in the energy landscape, with notable growth in specific countries and regions, reflecting broader economic and industrial changes worldwide.