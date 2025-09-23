import './style.css'
import { Ship, Users, TrendingUp, BarChart3, PieChart, Target, Brain, ChevronDown, ChevronRight } from 'lucide'

const app = document.querySelector('#app')

// Navigation component
function createNavigation() {
  return `
    <nav class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div class="max-w-6xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 text-blue-600">${Ship.toSvg()}</div>
            <h1 class="text-xl font-bold text-gray-900">Titanic EDA Analysis</h1>
          </div>
          <div class="hidden md:flex space-x-6">
            <a href="#introduction" class="nav-link">Introduction</a>
            <a href="#insights" class="nav-link">Key Insights</a>
            <a href="#survival" class="nav-link">Survival</a>
            <a href="#gender" class="nav-link">Gender</a>
            <a href="#class" class="nav-link">Class</a>
            <a href="#age" class="nav-link">Age</a>
            <a href="#conclusion" class="nav-link">Conclusion</a>
          </div>
        </div>
      </div>
    </nav>
  `
}

// Hero section
function createHero() {
  return `
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Titanic Dataset Analysis
            <span class="hero-subtitle">Exploratory Data Analysis</span>
          </h1>
          <p class="hero-description">
            Uncovering survival patterns and insights from the tragic voyage of 1912
          </p>
          <button class="cta-button" onclick="document.getElementById('introduction').scrollIntoView({behavior: 'smooth'})">
            Explore the Data
            <div class="w-5 h-5 ml-2">${ChevronDown.toSvg()}</div>
          </button>
        </div>
        <div class="hero-visual">
          <div class="ship-icon">
            ${Ship.toSvg()}
          </div>
        </div>
      </div>
    </section>
  `
}

// Introduction section
function createIntroduction() {
  return `
    <section id="introduction" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Introduction</h2>
          <p class="section-subtitle">Understanding the Titanic Dataset</p>
        </div>
        
        <div class="intro-grid">
          <div class="intro-card">
            <div class="intro-icon">${BarChart3.toSvg()}</div>
            <h3>Dataset Overview</h3>
            <p>The Titanic dataset contains information about passengers aboard the RMS Titanic, including demographics, ticket information, and survival outcomes.</p>
          </div>
          
          <div class="intro-card">
            <div class="intro-icon">${Target.toSvg()}</div>
            <h3>Project Goals</h3>
            <ul class="goal-list">
              <li>Understand dataset structure and contents</li>
              <li>Identify survival patterns and relationships</li>
              <li>Generate meaningful visualizations</li>
              <li>Summarize key insights for future modeling</li>
            </ul>
          </div>
          
          <div class="intro-card">
            <div class="intro-icon">${TrendingUp.toSvg()}</div>
            <h3>Analysis Focus</h3>
            <p>This project focuses on exploratory data analysis, laying the groundwork for advanced machine learning classification tasks.</p>
          </div>
        </div>
      </div>
    </section>
  `
}

// Key insights overview
function createKeyInsights() {
  return `
    <section id="insights" class="section bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">🚢 Key Insights Overview</h2>
          <p class="section-subtitle">Critical findings from the Titanic passenger data</p>
        </div>
        
        <div class="insights-grid">
          <div class="insight-card highlight">
            <h3>Primary Survival Factors</h3>
            <p><strong>Gender and passenger class</strong> were the most decisive survival factors, with females and first-class passengers having significantly higher survival rates.</p>
          </div>
          
          <div class="insight-card">
            <h3>Correlation Patterns</h3>
            <p>Higher class, higher fare, and being female significantly increased survival likelihood. Family travel showed moderate positive correlation.</p>
          </div>
          
          <div class="insight-card">
            <h3>Historical Context</h3>
            <p>Findings align with historical records of "women and children first" evacuation protocols and social class barriers.</p>
          </div>
        </div>
      </div>
    </section>
  `
}

// Survival analysis section
function createSurvivalAnalysis() {
  return `
    <section id="survival" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">🎯 Overall Survival Analysis</h2>
        </div>
        
        <div class="survival-grid">
          <div class="stat-card danger">
            <div class="stat-number">~550</div>
            <div class="stat-label">Did Not Survive</div>
            <div class="stat-percentage">≈62%</div>
          </div>
          
          <div class="stat-card success">
            <div class="stat-number">~340</div>
            <div class="stat-label">Survived</div>
            <div class="stat-percentage">≈38%</div>
          </div>
        </div>
        
        <div class="survival-visual">
          <div class="survival-bar">
            <div class="survival-segment died" style="width: 62%">
              <span>62% Perished</span>
            </div>
            <div class="survival-segment survived" style="width: 38%">
              <span>38% Survived</span>
            </div>
          </div>
        </div>
        
        <p class="analysis-text">
          The data reflects the historical reality that the majority of Titanic passengers died in the disaster, 
          with survival rates significantly influenced by demographic and socio-economic factors.
        </p>
      </div>
    </section>
  `
}

// Gender analysis section
function createGenderAnalysis() {
  return `
    <section id="gender" class="section bg-gray-50">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">👥 Gender Distribution & Survival</h2>
        </div>
        
        <div class="gender-analysis">
          <div class="gender-distribution">
            <h3>Passenger Distribution</h3>
            <div class="distribution-stats">
              <div class="dist-item">
                <div class="dist-bar male" style="width: 65%"></div>
                <span>~575 Males (65%)</span>
              </div>
              <div class="dist-item">
                <div class="dist-bar female" style="width: 35%"></div>
                <span>~315 Females (35%)</span>
              </div>
            </div>
          </div>
          
          <div class="survival-table">
            <h3>Gender-Based Survival Rates</h3>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Gender</th>
                  <th>Survival Rate</th>
                  <th>Mortality Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Male</strong></td>
                  <td class="survival-rate low">~19%</td>
                  <td class="mortality-rate high">~81%</td>
                </tr>
                <tr>
                  <td><strong>Female</strong></td>
                  <td class="survival-rate high">~74%</td>
                  <td class="mortality-rate low">~26%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="key-finding">
          <div class="finding-icon">${Users.toSvg()}</div>
          <div class="finding-text">
            <strong>Key Finding:</strong> Despite males making up the majority of passengers, 
            females were <strong>nearly 4x more likely to survive</strong>, providing strong evidence 
            of the "women and children first" evacuation protocol.
          </div>
        </div>
      </div>
    </section>
  `
}

// Class analysis section
function createClassAnalysis() {
  return `
    <section id="class" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">🏷️ Survival by Passenger Class</h2>
          <p class="class-definition">1 = First Class | 2 = Second Class | 3 = Third Class</p>
        </div>
        
        <div class="class-survival-grid">
          <div class="class-card first-class">
            <div class="class-header">
              <h3>First Class</h3>
              <div class="class-icon">1</div>
            </div>
            <div class="class-stats">
              <div class="survival-rate-large">63%</div>
              <div class="rate-label">Survival Rate</div>
            </div>
          </div>
          
          <div class="class-card second-class">
            <div class="class-header">
              <h3>Second Class</h3>
              <div class="class-icon">2</div>
            </div>
            <div class="class-stats">
              <div class="survival-rate-large">47%</div>
              <div class="rate-label">Survival Rate</div>
            </div>
          </div>
          
          <div class="class-card third-class">
            <div class="class-header">
              <h3>Third Class</h3>
              <div class="class-icon">3</div>
            </div>
            <div class="class-stats">
              <div class="survival-rate-large">24%</div>
              <div class="rate-label">Survival Rate</div>
            </div>
          </div>
        </div>
        
        <div class="class-insights">
          <div class="insight-box">
            <h4>Socio-Economic Impact</h4>
            <p>Survival was strongly influenced by socio-economic status, with first-class passengers having the highest chance of survival.</p>
          </div>
          
          <div class="insight-box">
            <h4>Access Barriers</h4>
            <p>Third-class passengers suffered the most deaths, suggesting possible physical or procedural barriers that disadvantaged their access to lifeboats.</p>
          </div>
        </div>
      </div>
    </section>
  `
}

// Age analysis section
function createAgeAnalysis() {
  return `
    <section id="age" class="section bg-gradient-to-br from-purple-50 to-pink-100">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">📊 Age Distribution & Survival</h2>
        </div>
        
        <div class="age-analysis-grid">
          <div class="age-distribution">
            <h3>General Age Distribution</h3>
            <div class="age-insights">
              <div class="age-insight">
                <div class="age-range">20s-30s</div>
                <div class="age-description">Most passengers</div>
              </div>
              <div class="age-insight">
                <div class="age-range">60+</div>
                <div class="age-description">Very few passengers</div>
              </div>
              <div class="age-insight">
                <div class="age-range">~28</div>
                <div class="age-description">Median age</div>
              </div>
            </div>
          </div>
          
          <div class="age-survival">
            <h3>Age & Survival Patterns</h3>
            <div class="survival-insights">
              <div class="survival-insight">
                <div class="insight-icon child">👶</div>
                <div class="insight-content">
                  <strong>Children (under 10)</strong>
                  <p>Had better survival chances - prioritized in evacuation</p>
                </div>
              </div>
              
              <div class="survival-insight">
                <div class="insight-icon adult">👥</div>
                <div class="insight-content">
                  <strong>Adults</strong>
                  <p>Age alone was not a strong predictor of survival</p>
                </div>
              </div>
              
              <div class="survival-insight">
                <div class="insight-icon median">📊</div>
                <div class="insight-content">
                  <strong>Median Age</strong>
                  <p>Similar for survivors and non-survivors (~28 years)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

// Conclusion section
function createConclusion() {
  return `
    <section id="conclusion" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">🧠 Conclusion</h2>
          <p class="section-subtitle">Key Takeaways from the Analysis</p>
        </div>
        
        <div class="conclusion-grid">
          <div class="conclusion-card primary">
            <div class="conclusion-icon">${Users.toSvg()}</div>
            <h3>Primary Factors</h3>
            <p><strong>Gender and class</strong> were the most decisive survival factors in the Titanic disaster.</p>
          </div>
          
          <div class="conclusion-card">
            <div class="conclusion-icon">${TrendingUp.toSvg()}</div>
            <h3>Highest Survival Rates</h3>
            <p><strong>Females</strong> and <strong>first-class passengers</strong> were most likely to survive the disaster.</p>
          </div>
          
          <div class="conclusion-card">
            <div class="conclusion-icon">${Target.toSvg()}</div>
            <h3>Age Factor</h3>
            <p><strong>Children</strong> were prioritized in evacuation, while age among adults had minimal effect on survival.</p>
          </div>
          
          <div class="conclusion-card">
            <div class="conclusion-icon">${Brain.toSvg()}</div>
            <h3>Historical Alignment</h3>
            <p>These insights align with historical records and highlight the importance of <strong>social structures</strong> in disaster situations.</p>
          </div>
        </div>
        
        <div class="final-insight">
          <div class="insight-content">
            <h3>Research Impact</h3>
            <p>This analysis demonstrates how demographic and socio-economic factors significantly influenced survival outcomes during one of history's most famous maritime disasters. The findings provide valuable insights for understanding human behavior and social dynamics in crisis situations.</p>
          </div>
        </div>
      </div>
    </section>
  `
}

// Footer
function createFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <div class="w-6 h-6 text-blue-600">${Ship.toSvg()}</div>
              <span>Titanic EDA Analysis</span>
            </div>
            <p>Exploratory Data Analysis of the Titanic Dataset</p>
          </div>
          
          <div class="footer-section">
            <h4>Analysis Sections</h4>
            <ul class="footer-links">
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#survival">Survival Analysis</a></li>
              <li><a href="#gender">Gender Patterns</a></li>
              <li><a href="#class">Class Analysis</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Key Insights</h4>
            <ul class="footer-links">
              <li><a href="#age">Age Distribution</a></li>
              <li><a href="#conclusion">Conclusions</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 Titanic EDA Project. Data analysis for educational purposes.</p>
        </div>
      </div>
    </footer>
  `
}

// Render the complete application
app.innerHTML = `
  ${createNavigation()}
  ${createHero()}
  ${createIntroduction()}
  ${createKeyInsights()}
  ${createSurvivalAnalysis()}
  ${createGenderAnalysis()}
  ${createClassAnalysis()}
  ${createAgeAnalysis()}
  ${createConclusion()}
  ${createFooter()}
`

// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = link.getAttribute('href').substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// Add scroll-based animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
    }
  })
}, observerOptions)

// Observe all sections for animation
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section)
})

// Add active navigation highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.nav-link')
  
  let current = ''
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id')
    }
  })
  
  navLinks.forEach(link => {
    link.classList.remove('active')
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active')
    }
  })
})