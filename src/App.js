// root öğesini seç
const root = document.getElementById('root');

// Sayfa başlıklarını ve içeriklerini dinamik olarak oluşturmak için bir fonksiyon
function renderPage(page) {
  root.innerHTML = ''; // Önceki içeriği temizle

  if (page === 'home') {
    renderHomePage();
  } else if (page === 'login') {
    renderLoginPage();
  } else if (page === 'signup') {
    renderSignupPage();
  } else if (page === 'events') {
    renderEventsPage();
  } else {
    renderNotFoundPage();
  }
}

// Ana Sayfa
function renderHomePage() {
  const heading = document.createElement('h1');
  heading.textContent = "PartyLe'ye Hoş Geldiniz!";

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Gece hayatını keşfedin ve etkinliklere katılın!';

  const loginButton = document.createElement('button');
  loginButton.textContent = 'Giriş Yap';
  loginButton.addEventListener('click', () => renderPage('login'));

  const signupButton = document.createElement('button');
  signupButton.textContent = 'Kayıt Ol';
  signupButton.addEventListener('click', () => renderPage('signup'));

  root.appendChild(heading);
  root.appendChild(paragraph);
  root.appendChild(loginButton);
  root.appendChild(signupButton);
}

// Giriş Yap Sayfası
function renderLoginPage() {
  const heading = document.createElement('h1');
  heading.textContent = 'Giriş Yap';

  const form = document.createElement('form');

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'E-posta:';
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'login-email';

  const passwordLabel = document.createElement('label');
  passwordLabel.textContent = 'Şifre:';
  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'login-password';

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Giriş Yap';
  submitButton.type = 'submit';

  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(submitButton);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    // Giriş işlemi (Supabase entegrasyonu)
    console.log('Giriş yapılıyor:', email, password);
    alert('Giriş başarılı!');
    renderPage('home');
  });

  root.appendChild(heading);
  root.appendChild(form);
}

// Kayıt Ol Sayfası
function renderSignupPage() {
  const heading = document.createElement('h1');
  heading.textContent = 'Kayıt Ol';

  const form = document.createElement('form');

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'E-posta:';
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'signup-email';

  const passwordLabel = document.createElement('label');
  passwordLabel.textContent = 'Şifre:';
  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'signup-password';

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Kayıt Ol';
  submitButton.type = 'submit';

  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(submitButton);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    // Kayıt işlemi (Supabase entegrasyonu)
    console.log('Kayıt olunuyor:', email, password);
    alert('Kayıt başarılı! Lütfen e-postanızı kontrol edin.');
    renderPage('home');
  });

  root.appendChild(heading);
  root.appendChild(form);
}

// Etkinlikler Sayfası
function renderEventsPage() {
  const heading = document.createElement('h1');
  heading.textContent = 'Etkinlikler';

  const eventList = document.createElement('ul');

  const event1 = document.createElement('li');
  event1.textContent = 'DJ Night - İstanbul - 30 Mart 2025';

  const event2 = document.createElement('li');
  event2.textContent = 'Canlı Müzik - Ankara - 5 Nisan 2025';

  eventList.appendChild(event1);
  eventList.appendChild(event2);

  root.appendChild(heading);
  root.appendChild(eventList);
}

// 404 Sayfası
function renderNotFoundPage() {
  const heading = document.createElement('h1');
  heading.textContent = 'Sayfa Bulunamadı';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Aradığınız sayfa bulunamadı.';

  root.appendChild(heading);
  root.appendChild(paragraph);
}

// Uygulama başlangıcı
renderPage('home');