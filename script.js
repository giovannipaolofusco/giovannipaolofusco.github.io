// script.js

// Dark Mode Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme
if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
  rootElement.setAttribute('data-theme', 'dark');
}

// SVG icons for toggle button
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

function updateToggleIcon() {
  const isDark = rootElement.getAttribute('data-theme') === 'dark';
  if (themeToggle) {
    themeToggle.innerHTML = isDark ? sunIcon : moonIcon;
  }
}

// Initial icon setup
updateToggleIcon();

// Toggle event listener
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = rootElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      rootElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      rootElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    updateToggleIcon();
  });
}

// GitHub API Fetch Logic
const githubContainer = document.getElementById('github-projects-container');

if (githubContainer) {
  const currentLang = document.documentElement.lang || 'it';
  const isEn = currentLang === 'en';

  const messages = {
    loading: isEn ? 'Loading repositories...' : 'Caricamento repository in corso...',
    noDesc: isEn ? 'No description available.' : 'Nessuna descrizione disponibile.',
    viewBtn: isEn ? 'View on GitHub' : 'Vedi su GitHub',
    noRepos: isEn ? 'No public repositories found.' : 'Nessun repository pubblico trovato.',
    error: isEn ? 'Unable to load repositories at this time.' : 'Impossibile caricare i repository in questo momento.'
  };

  async function fetchGitHubProjects() {
    try {
      githubContainer.innerHTML = `<p>${messages.loading}</p>`;
      const response = await fetch('https://api.github.com/users/giovannipaolofusco/repos?sort=updated');
      if (!response.ok) {
        throw new Error('Network error');
      }
      const repos = await response.json();
      
      // Filter out forks if needed, and slice first 4
      const recentRepos = repos.filter(repo => !repo.fork).slice(0, 4);
      
      githubContainer.innerHTML = '';
      
      if (recentRepos.length === 0) {
        githubContainer.innerHTML = `<p>${messages.noRepos}</p>`;
        return;
      }

      recentRepos.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.className = 'card';
        
        // Truncate description
        let desc = repo.description || messages.noDesc;
        if (desc.length > 100) desc = desc.substring(0, 100) + '...';

        repoCard.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${desc}</p>
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="card-link">${messages.viewBtn}</a>
        `;
        
        githubContainer.appendChild(repoCard);
      });
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      githubContainer.innerHTML = `<p>${messages.error}</p>`;
    }
  }

  fetchGitHubProjects();
}

// --- Credly Badges ---
const credlyContainer = document.getElementById('credly-badges-container');

if (credlyContainer) {
  const currentLang = document.documentElement.lang || 'it';
  const isEn = currentLang === 'en';

  const credlyMessages = {
    loading: isEn ? 'Loading badges...' : 'Caricamento badge in corso...',
    noBadges: isEn ? 'No badges found.' : 'Nessun badge trovato.',
    error: isEn ? 'Unable to load badges at this time.' : 'Impossibile caricare i badge in questo momento.'
  };

  async function fetchCredlyBadges() {
    try {
      credlyContainer.innerHTML = `<p>${credlyMessages.loading}</p>`;
      const response = await fetch('/badges.json');
      
      if (!response.ok) {
        throw new Error('Network error');
      }
      
      const data = await response.json();
      
      let badgesArray = [];
      if (Array.isArray(data)) {
        badgesArray = data;
      } else if (data && Array.isArray(data.data)) {
        badgesArray = data.data;
      }

      credlyContainer.innerHTML = '';
      const credlyModulesContainer = document.getElementById('credly-badges-modules');
      if (credlyModulesContainer) credlyModulesContainer.innerHTML = '';
      
      if (badgesArray.length === 0) {
        credlyContainer.innerHTML = `<p>${credlyMessages.noBadges}</p>`;
        return;
      }

      badgesArray.forEach(badge => {
        const title = badge.badge_template?.name || badge.name || 'Certificazione';
        const imgUrl = badge.badge_template?.image?.url || badge.badge_template?.image_url || badge.image_url || '';
        const date = badge.issued_at_date || badge.issued_at || '';
        
        // Format the date if available
        let formattedDate = '';
        if (date) {
            const d = new Date(date);
            formattedDate = !isNaN(d.getTime()) ? d.toLocaleDateString(currentLang === 'en' ? 'en-US' : 'it-IT', { year: 'numeric', month: 'long', day: 'numeric' }) : date;
        }

        const badgeId = badge.id;
        const link = badge.badge_url || (badgeId ? `https://www.credly.com/badges/${badgeId}` : '#');

        const badgeCard = document.createElement('a');
        badgeCard.className = 'card-credly';
        badgeCard.href = link;
        badgeCard.target = '_blank';
        badgeCard.rel = 'noopener noreferrer';

        badgeCard.innerHTML = `
          ${imgUrl ? `<img src="${imgUrl}" alt="${title}">` : ''}
          <h3>${title}</h3>
          ${formattedDate ? `<p class="credly-date">${formattedDate}</p>` : ''}
        `;
        
        const isModule = title.toLowerCase().includes('google ai for') || title.toLowerCase().includes('google ai fundamentals');
        
        if (isModule && credlyModulesContainer) {
          credlyModulesContainer.appendChild(badgeCard);
        } else {
          credlyContainer.appendChild(badgeCard);
        }
      });
    } catch (error) {
      console.error('Error fetching Credly badges:', error);
      credlyContainer.innerHTML = `<p>${credlyMessages.error}</p>`;
    }
  }

  fetchCredlyBadges();
}
