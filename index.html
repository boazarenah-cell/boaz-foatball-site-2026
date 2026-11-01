
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BOAZ FOOTBALL</title>
  <link rel="stylesheet" href="style.css">
  <style>
    .hero {
      text-align: center;
      padding: 35px 10px;
      background: linear-gradient(135deg,#142238,#080d18);
      border-radius: 15px;
      margin-bottom: 25px;
    }
    .hero h2 {font-size: 30px;}
    .tabs {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin: 15px 0;
    }
    .tabs button {flex: 1;}
    .match {
      background: #142238;
      border: 1px solid #263a55;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 13px;
    }
    .teams {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      text-align: center;
      font-weight: bold;
    }
    .teams span {flex: 1;}
    .match small {
      display: block;
      color: #aab7c7;
      margin-bottom: 12px;
    }
    .status {color: #00e676; font-weight: bold;}
    #message {color: #aab7c7; padding: 15px 0;}
  </style>
</head>
<body>

<header>
  <h1>⚽ BOAZ FOOTBALL</h1>
  <p>Your home of football action</p>
</header>

<nav>
  <a href="#home">Home</a>
  <a href="#matches">Matches</a>
  <a href="#leagues">Leagues</a>
  <a href="#about">About</a>
</nav>

<main id="home">

  <section class="hero">
    <h2>WELCOME TO BOAZ FOOTBALL</h2>
    <p>Live scores • Fixtures • Football updates</p>
    <br>
    <button onclick="loadMatches()">Refresh Matches</button>
  </section>

  <section id="matches">
    <h2>⚡ Football Matches</h2>

    <div class="tabs">
      <button onclick="loadMatches()">All Matches</button>
      <button onclick="showStatus('LIVE')">Live</button>
      <button onclick="showStatus('SCHEDULED')">Upcoming</button>
      <button onclick="showStatus('FINISHED')">Finished</button>
    </div>

    <div id="message">Loading matches...</div>
    <div id="match-list"></div>
  </section>

  <section id="leagues">
    <h2>🏆 Popular Leagues</h2>
    <div class="match-card">English Premier League</div>
    <div class="match-card">UEFA Champions League</div>
    <div class="match-card">La Liga</div>
    <div class="match-card">Bundesliga</div>
    <div class="match-card">Serie A</div>
    <div class="match-card">Ligue 1</div>
  </section>

  <section id="about">
    <h2>About BOAZ FOOTBALL</h2>
    <div class="match-card">
      <p>BOAZ FOOTBALL brings you football scores,
      fixtures and updates in one place.</p>
    </div>
  </section>

</main>

<footer>
  <h3>⚽ BOAZ FOOTBALL</h3>
  <p>Football lives here.</p>
  <p>© 2026 BOAZ FOOTBALL. All rights reserved.</p>
</footer>

<script>
let allMatches = [];

async function loadMatches() {
  const message = document.getElementById("message");
  const list = document.getElementById("match-list");

  message.textContent = "Loading football matches...";
  list.innerHTML = "";

  try {
    const response = await fetch("/api/matches");

    if (!response.ok) {
      throw new Error("Could not load matches");
    }

    const data = await response.json();
    allMatches = data.matches || [];

    displayMatches(allMatches);

    if (allMatches.length === 0) {
      message.textContent = "No matches available right now.";
    } else {
      message.textContent = allMatches.length + " matches found.";
    }

  } catch (error) {
    message.textContent =
      "Unable to load matches. Please try again later.";
  }
}

function displayMatches(matches) {
  const list = document.getElementById("match-list");
  list.innerHTML = "";

  matches.forEach(match => {
    const home = match.homeTeam?.name || "Home";
    const away = match.awayTeam?.name || "Away";
    const homeScore = match.score?.fullTime?.home;
    const awayScore = match.score?.fullTime?.away;
    const score = homeScore !== null && homeScore !== undefined
      ? homeScore + " - " + awayScore
      : "VS";

    const date = match.utcDate
      ? new Date(match.utcDate).toLocaleString()
      : "Date unavailable";

    const card = document.createElement("div");
    card.className = "match";

    const league = document.createElement("small");
    league.textContent = match.competition?.name || "Football";

    const teams = document.createElement("div");
    teams.className = "teams";

    const homeName = document.createElement("span");
    homeName.textContent = home;

    const scoreText = document.createElement("strong");
    scoreText.className = "score";
    scoreText.textContent = score;

    const awayName = document.createElement("span");
    awayName.textContent = away;

    teams.append(homeName, scoreText, awayName);

    const time = document.createElement("small");
    time.textContent = date;

    const status = document.createElement("p");
    status.className = "status";
    status.textContent = match.status || "UNKNOWN";

    card.append(league, teams, time, status);
    list.appendChild(card);
  });
}

function showStatus(status) {
  const filtered = allMatches.filter(match =>
    match.status === status
  );

  displayMatches(filtered);

  document.getElementById("message").textContent =
    filtered.length + " matches found.";
}

loadMatches();
</script>

</body>
</html>
