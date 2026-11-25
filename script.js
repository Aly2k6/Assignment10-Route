'use strict';

// Data for the five interactive Technology tabs.
const technology = {
  frontend: {
    title: 'Frontend Technologies',
    subtitle: 'Modern frameworks and libraries for creating exceptional user interfaces',
    cards: [
      ['React.js', 'Component-driven UI library used for interactive web applications.', 'bi bi-atom', 'blue', 'blue', ['JSX', 'Hooks', 'Redux']],
      ['Next.js', 'React framework with server rendering and flexible web routing.', 'Next', 'gray', 'black', ['SSR', 'SSG', 'API Routes']],
      ['Vue.js', 'Approachable JavaScript framework for responsive user interfaces.', 'bi bi-code-square', 'green', 'green', ['Composition API', 'Vuex', 'Nuxt']],
      ['Angular', 'Full-featured platform for large-scale web applications.', 'bi bi-shield', 'orange', 'orange', ['TypeScript', 'RxJS', 'CLI']],
      ['Tailwind CSS', 'Utility classes that make styling custom interfaces faster.', 'bi bi-filetype-css', 'mint', 'mint', ['JIT', 'Components', 'Responsive']],
      ['Vite', 'Fast development server and build tools for frontend projects.', 'bi bi-lightning-charge-fill', 'violet', 'purple', ['HMR', 'ESM', 'Rollup']]
    ]
  },
  backend: {
    title: 'Backend Technologies',
    subtitle: 'Robust server-side technologies for scalable and secure applications',
    cards: [
      ['Node.js', 'JavaScript runtime for servers and APIs.', 'bi bi-hexagon', 'green', 'green', ['Express.js', 'NPM', 'TypeScript']],
      ['Python', 'Versatile language for web services and backend automation.', 'bi bi-filetype-py', 'blue', 'blue-dark', ['Django', 'FastAPI', 'Flask']],
      ['Golang', 'Compiled language popular for efficient web services.', 'Go', 'red', 'red', ['Gin', 'Goroutines', 'Microservices']],
      ['Java', 'Reliable platform for business-scale backend systems.', 'bi bi-cup-hot', 'violet', 'purple', ['Spring Boot', 'Hibernate', 'Maven']],
      ['.NET Core', 'Cross-platform development ecosystem for modern applications.', '.NET', 'blue', 'violet', ['C#', 'Entity Framework', 'Azure']],
      ['Ruby', 'Readable programming language used in productive web frameworks.', 'bi bi-gem', 'mint', 'teal', ['Rails', 'Sinatra', 'RubyGems']]
    ]
  },
  mobile: {
    title: 'Mobile Technologies',
    subtitle: 'Native and cross-platform solutions for iOS and Android development',
    cards: [
      ['React Native', 'Develop apps for multiple devices with React concepts.', 'bi bi-atom', 'blue', 'blue', ['Expo', 'Navigation', 'Redux']],
      ['Flutter', 'Build visually consistent applications with Dart and widgets.', 'bi bi-phone-fill', 'mint', 'mint', ['Dart', 'Widgets', 'Material']],
      ['iOS Native', 'Build Apple-platform applications with native tools.', 'bi bi-apple', 'gray', 'gray', ['Swift', 'SwiftUI', 'Core Data']],
      ['Android Native', 'Create Android experiences using the native toolkit.', 'bi bi-android2', 'green', 'green', ['Kotlin', 'Jetpack', 'Room']],
      ['Xamarin', 'Share C# application logic across mobile platforms.', 'bi bi-code-slash', 'violet', 'purple', ['C#', 'Forms', 'MVVM']],
      ['PWA', 'Web apps enhanced for an app-like mobile experience.', 'bi bi-globe2', 'orange', 'orange', ['Service Worker', 'Manifest', 'Offline']]
    ]
  },
  cloud: {
    title: 'Cloud & DevOps',
    subtitle: 'Modern cloud infrastructure and deployment technologies',
    cards: [
      ['Amazon AWS', 'Cloud services for hosting, computing, and storage.', 'aws', 'orange', 'orange', ['EC2', 'Lambda', 'S3']],
      ['Microsoft Azure', 'Enterprise cloud products and application services.', 'bi bi-microsoft', 'blue', 'blue', ['App Service', 'Functions', 'DevOps']],
      ['Google Cloud', 'Cloud platform for applications, data, and AI workloads.', 'G', 'red', 'red', ['Compute Engine', 'Cloud Run', 'BigQuery']],
      ['Docker', 'Package apps in portable and repeatable containers.', 'bi bi-boxes', 'blue', 'blue', ['Containers', 'Images', 'Compose']],
      ['Kubernetes', 'Manage container deployment and scale across clusters.', 'K8s', 'violet', 'purple', ['Pods', 'Services', 'Helm']],
      ['CI/CD Pipeline', 'Automate testing, building, and software delivery.', 'bi bi-diagram-3', 'gray', 'gray', ['Jenkins', 'GitHub Actions', 'GitLab CI']]
    ]
  },
  database: {
    title: 'Database Technologies',
    subtitle: 'Robust data storage solutions for modern applications',
    cards: [
      ['PostgreSQL', 'Open-source relational database with advanced features.', 'bi bi-database-fill', 'blue', 'blue-dark', ['ACID', 'JSON', 'Extensions']],
      ['MongoDB', 'Document database built for flexible data models.', 'Mongo', 'green', 'green', ['Documents', 'Aggregation', 'Sharding']],
      ['Redis', 'In-memory storage used for fast caching and messaging.', 'bi bi-fire', 'red', 'red', ['Cache', 'Pub/Sub', 'Streams']],
      ['MySQL', 'Popular relational database for many web applications.', 'bi bi-database-fill', 'yellow', 'yellow', ['InnoDB', 'Replication', 'Clustering']],
      ['Elasticsearch', 'Search and analysis platform for large datasets.', 'bi bi-graph-up-arrow', 'violet', 'purple', ['Search', 'Analytics', 'Kibana']],
      ['GraphQL', 'Query language that lets clients request specific API data.', 'bi bi-diagram-2-fill', 'blue', 'violet', ['Schema', 'Resolvers', 'Apollo']]
    ]
  }
};

// Render a selected technology group without having to duplicate the HTML.
function showTechnology(category) {
  const group = technology[category];
  if (!group) return;
  document.getElementById('techTitle').textContent = group.title;
  document.getElementById('techDescription').textContent = group.subtitle;
  const wrapper = document.getElementById('techCards');
  wrapper.replaceChildren();

  group.cards.forEach(([name, description, icon, tone, color, tags]) => {
    const column = document.createElement('div');
    column.className = 'col-md-6 col-xl-4';
    const card = document.createElement('article');
    card.className = `tech-card tone-${tone} h-100`;
    const symbol = document.createElement('div');
    symbol.className = `tech-icon color-${color}`;
    if (icon.includes('bi ')) {
      const i = document.createElement('i');
      i.className = icon;
      i.setAttribute('aria-hidden', 'true');
      symbol.append(i);
    } else {
      symbol.textContent = icon;
      symbol.classList.add('tech-icon-word');
    }
    const heading = document.createElement('h4');
    heading.textContent = name;
    const paragraph = document.createElement('p');
    paragraph.textContent = description;
    const labels = document.createElement('div');
    labels.className = 'tech-tags';
    tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      labels.append(span);
    });
    card.append(symbol, heading, paragraph, labels);
    column.append(card);
    wrapper.append(column);
  });

  document.querySelectorAll('#techTabs button').forEach(button => {
    const active = button.dataset.category === category;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
    button.tabIndex = active ? 0 : -1;
  });
}

document.querySelectorAll('#techTabs button').forEach(button => {
  button.addEventListener('click', () => showTechnology(button.dataset.category));
});
showTechnology('frontend');

// Bootstrap automatically rotates the five review slides.
// The indicators provide direct selection of any individual review.
const reviews = document.getElementById('testimonialCarousel');
if (reviews && window.bootstrap) {
  const carousel = bootstrap.Carousel.getOrCreateInstance(reviews, {
    interval: 4800,
    pause: 'hover',
    wrap: true,
    ride: 'carousel',
    touch: true
  });
  carousel.cycle();
}

// Close the mobile navigation after clicking any anchor link.
const menu = document.getElementById('mainNavbar');
document.querySelectorAll('#mainNavbar a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    if (menu?.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu, {toggle: false}).hide();
    }
  });
});

// Highlight the link for the current page section while scrolling.
const sectionLinks = [...document.querySelectorAll('.main-links > .nav-item > .nav-link[href^="#"]')];
const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (!visible.length) return;
    const id = visible[0].target.id;
    sectionLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
  }, {rootMargin: '-110px 0px -40% 0px', threshold: [0, 0.15, 0.35]});
  sections.forEach(section => observer.observe(section));
}

// Demonstrate form validation without claiming a message was sent.
const form = document.getElementById('contactForm');
const feedback = document.getElementById('contactFeedback');
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  feedback.classList.remove('d-none');
  feedback.scrollIntoView({behavior: 'smooth', block: 'nearest'});
  form.reset();
});
