document.addEventListener('DOMContentLoaded', async () => {
    try {
      const res = await fetch('/auth/user');
      if (!res.ok) throw new Error('Não autenticado');
      const data = await res.json();
      document.getElementById('name').textContent = `Nome: ${data.name}`;
      document.getElementById('email').textContent = `Email: ${data.email}`;
    } catch (err) {
      window.location.href = '/';
    }
  });
  