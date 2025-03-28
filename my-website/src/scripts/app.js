import { createClient } from '@supabase/supabase-js';

// Supabase bağlantısı
const supabaseUrl = 'https://<your-supabase-url>';
const supabaseKey = '<your-anon-key>';
const supabase = createClient(supabaseUrl, supabaseKey);

// Kayıt olma işlemi
const signupForm = document.querySelector('#signup form');
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
        alert('Kayıt başarısız: ' + error.message);
    } else {
        alert('Kayıt başarılı! Lütfen e-postanızı kontrol edin.');
    }
});

// Giriş yapma işlemi
const loginForm = document.querySelector('#login form');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        alert('Giriş başarısız: ' + error.message);
    } else {
        alert('Giriş başarılı!');
    }
});