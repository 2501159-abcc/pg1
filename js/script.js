// 色違い切り替え
const img = document.getElementById("pokemon-img");
if (img) {
  const base = img.dataset.name;
  let isColor = false;

  img.addEventListener("click", () => {
    isColor = !isColor;
    img.src = isColor
      ? `img/${base}-color.webp`
      : `img/${base}.webp`;
  });
}

// 通常進化
const evolveBtn = document.getElementById("evolve-btn");
if (evolveBtn) {
  evolveBtn.addEventListener("click", () => {
    location.href = evolveBtn.dataset.next;
  });
}

// イーブイ進化
const typeBtn = document.getElementById("type-evolve-btn");
if (typeBtn) {
  typeBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="type"]:checked');
    if (!selected) {
      alert("進化タイプを選んでください");
      return;
    }
    location.href = `${selected.value}.html`;
  });
}
