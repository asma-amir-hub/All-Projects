# The Octagon Oracle: A Predictive UFC Fight Analytics Platform

![Octagon Oracle Banner](https://raw.githubusercontent.com/username/reponame/main/frontend/assets/banner.png)  <!-- Replace with a real banner image you create -->

[![Language](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://www.python.org/)
[![Frontend](https://img.shields.io/badge/Frontend-Streamlit-ff4b4b.svg)](https://streamlit.io/)
[![ML Model](https://img.shields.io/badge/Model-XGBoost%20%7C%20SHAP-brightgreen.svg)](https://xgboost.ai/)
[![Status](https://img.shields.io/badge/Status-In%20Development-orange.svg)]()

The Octagon Oracle is not just a data dashboard; it's an end-to-end machine learning application designed to predict the outcomes of UFC fights with high accuracy. The platform leverages a high-volume web scraping pipeline, a sophisticated feature engineering factory, and an explainable AI (XAI) model to provide deep, data-driven insights for fight fans, analysts, and bettors.

---

## 🔮 Live Demo & Showcase

> **Note:** The final application will be demonstrated here.

![Live Demo GIF](frontend/assets/demo.gif)

---

## ✨ Key Features

*   **End-to-End Data Pipeline:** From raw web data to a clean, feature-rich dataset, the entire ETL process is automated with custom Python scripts.
*   **High-Volume Web Scraper:** A parallelized scraping engine capable of efficiently extracting data from over 230,000 unique URLs from `ufcstats.com`.
*   **Advanced Feature Engineering:** Creation of over 50 differential and historical features (e.g., `Reach_diff`, `Current_Win_Streak`, `SLpM_diff`) that dramatically enhance predictive power.
*   **Accurate Outcome Prediction:** Utilizes a fine-tuned **XGBoost Classifier** to predict the winner of any given UFC matchup.
*   **Explainable AI (XAI):** Integrates **SHAP (SHapley Additive exPlanations)** to explain *why* the model made a specific prediction, showing the key factors that favor each fighter.
*   **Interactive Multi-Page Web App:** A stunning and user-friendly interface built with Streamlit, featuring:
    *   Real-time predictions for upcoming fights.
    *   A "Fight Simulator" to pit any two fighters against each other.
    *   A searchable "Fighter Deep Dive" encyclopedia with career stats and charts.
    *   A "Model Performance" page for full transparency.

---

## 🛠️ Technology Stack

| Category                  | Technologies                                                                 |
| ------------------------- | ---------------------------------------------------------------------------- |
| **Backend & ETL**         | Python, Requests, BeautifulSoup4, Multiprocessing, TQDM                        |
| **Data Science & ML**     | Pandas, NumPy, Scikit-learn, XGBoost, SHAP, Joblib                           |
| **Frontend & Visualization**| Streamlit, Plotly, Matplotlib                                                |
| **Development & Tooling**   | VS Code, Git, GitHub, Virtualenv                                             |

---

## 🚀 The Application Showcase

The Octagon Oracle is a multi-page application designed for a seamless user experience.

### Page 1: Upcoming Fights & Predictions
The landing page provides at-a-glance predictions for scheduled UFC events, complete with confidence scores and the key reasons behind each prediction.

![Upcoming Fights Page](frontend/assets/page1_predictions.png) <!-- Replace with your screenshot -->

### Page 2: The Fight Simulator
The core interactive tool. Users can select any two fighters from the database to generate an instant, on-demand prediction and see the detailed SHAP analysis.

![Fight Simulator Page](frontend/assets/page2_simulator.png) <!-- Replace with your screenshot -->

### Page 3: Fighter Deep Dive
A comprehensive encyclopedia of every fighter in the dataset. Search for a fighter to view their physical stats, career statistics, and full fight history with interactive charts.

![Fighter Deep Dive Page](frontend/assets/page3_deepdive.png) <!-- Replace with your screenshot -->

### Page 4: Model Performance & About
A transparency page that builds trust. It displays the model's overall accuracy, a confusion matrix, and a global feature importance plot, alongside a summary of the project's methodology.

![Model Performance Page](frontend/assets/page4_performance.png) <!-- Replace with your screenshot -->

---

## ⚙️ The Data Science Pipeline: A Look Under the Hood

The power of this application comes from its robust, multi-stage data science pipeline.

**1. Data Acquisition Engine (Scraping)**
   - The process begins by ingesting a master list of over 77,000 fight URLs.
   - A **parallelized Python scraper** is deployed to scrape data from three pages for each fight (the main fight stats page and one for each of the two fighters), totaling over 230,000 web pages.
   - The raw HTML is parsed using BeautifulSoup to extract hundreds of raw data points, which are then saved to CSV files.

**2. The Feature Factory (Cleaning & Engineering)**
   - Raw data is meticulously cleaned, with text values converted to numerics and missing stats intelligently imputed.
   - This is where the magic happens. We engineer a powerful set of features designed to compare fighters directly:
     - **Differential Features:** `Age_diff`, `Reach_diff`, `SLpM_diff`, `TD_Accuracy_diff`.
     - **Historical & Performance Features:** `Current_Win_Streak`, `Finish_Rate`, `Avg_Fight_Time_in_Last_3_Fights`.
   - The final, processed dataset is a rich tabular file ready for modeling.

**3. The Prediction Core (XGBoost & SHAP)**
   - An **XGBoost Classifier** is trained on the feature-engineered dataset to predict the winner. The model is fine-tuned for optimal performance.
   - A **SHAP Explainer** is trained alongside the model. This allows us to pass any single fight through the explainer to generate a force plot, visually breaking down the factors that pushed the prediction towards one fighter or the other.

---

## 📁 Project Structure

A professional, modular structure is used to keep the codebase organized and scalable.

octagon-oracle/

├── backend/

│ ├── scraper.py

│ ├── data_processor.py

│ ├── model_trainer.py

│ └── models/

├── data/

│ ├── ufc_betting_odds.csv

│ ├── raw_data/

│ └── processed_data/

├── frontend/

│ ├── app.py

│ ├── style.css

│ └── assets/

├── notebooks/

│ └── 01_UFC_Data_EDA_and_Modeling.ipynb

├── .gitignore

├── README.md

└── requirements.txt


---

## 📋 Setup and Installation Guide

Follow these steps to set up and run the entire application locally.

### Phase 1: Environment Setup
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/octagon-oracle.git
    cd octagon-oracle
    ```
2.  **Create and activate a virtual environment:**
    ```bash
    python -m venv venv
    # On Windows (PowerShell)
    .\venv\Scripts\Activate.ps1
    # On macOS/Linux
    source venv/bin/activate
    ```
3.  **Install all required libraries:**
    ```bash
    pip install -r requirements.txt
    ```

### Phase 2: Running the Data Pipeline
> **Warning:** The scraping process is resource-intensive and will take several hours to complete. It will generate several gigabytes of raw data.

1.  **Run the Web Scraper:** This script will scrape all 230,000+ pages.
    ```bash
    python backend/scraper.py
    ```
2.  **Run the Data Processor:** This script cleans the raw data and engineers the features.
    ```bash
    python backend/data_processor.py
    ```
3.  **Train the ML Model:** This script trains the XGBoost model and SHAP explainer and saves them.
    ```bash
    python backend/model_trainer.py
    ```

### Phase 3: Launching the Web Application
1.  **Navigate to the frontend directory and run the Streamlit app:**
    ```bash
    streamlit run frontend/app.py
    ```
2.  Your web browser will automatically open a new tab with the **Octagon Oracle** application running live.

