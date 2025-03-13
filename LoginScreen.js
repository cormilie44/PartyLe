import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signIn, signUp } from './authService';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    const { error } = await signIn(email, password);
    if (error) {
      setError(error.message);
    } else {
      alert('Giriş başarılı!');
    }
  };

  const handleSignUp = async () => {
    const { error } = await signUp(email, password);
    if (error) {
      setError(error.message);
    } else {
      alert('Kayıt başarılı!');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Giriş Yap" onPress={handleSignIn} />
      <Button title="Kayıt Ol" onPress={handleSignUp} />
      {error && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}
    </View>
  );
};

export default LoginScreen;