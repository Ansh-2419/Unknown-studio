function loadCards(path) {
  document.getElementById("cards").innerHTML = `
    <div class="cards-container">
      <div class="card">
        <div class="card-icon">🎮</div>
        <h3>Addon Library</h3>
        <p>Browse and download free addons for your game.</p>
        <a href="${path}addons.html">View Library</a>
      </div>
      <div class="card">
        <div class="card-icon">📖</div>
        <h3>Wiki</h3>
        <p>Guides and documentation for all our addons.</p>
        <a href="${path}wiki.html">Read Wiki</a>
      </div>
      <div class="card">
        <div class="card-icon">👥</div>
        <h3>Studio Team</h3>
        <p>Meet the developers behind Unknown Studio.</p>
        <a href="${path}team.html">Meet the Team</a>
      </div>
    </div>
  `;
}
