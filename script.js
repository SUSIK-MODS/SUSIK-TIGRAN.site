async function redirect() {
  const code = document.getElementById("shortCode").value.trim();
  const errorElement = document.getElementById("error");

  if (!code) {
    errorElement.textContent = "Пожалуйста, введите код.";
    return;
  }

  try {
    const response = await fetch('./links.json');
    const links = await response.json();

    if (links[code]) {
      // Редирект на соответствующий URL
      window.location.href = links[code];
    } else {
      errorElement.textContent = "Код не найден.";
    }
  } catch (err) {
    console.error("Ошибка загрузки JSON:", err);
    errorElement.textContent = "Ошибка загрузки данных.";
  }
}
