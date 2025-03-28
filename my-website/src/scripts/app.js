import { createClient } from '@supabase/supabase-js';

// Supabase bağlantısı
const supabaseUrl = 'https://qtimbrjpvdznupvyahxp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0aW1icmpwdmR6bnVwdnlhaHhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MjEzNTAsImV4cCI6MjA1ODM5NzM1MH0.-4_0jaNb5iyeFD3Fd1rbB9XtW7uQ--fUR2fKeUCvn5c';
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