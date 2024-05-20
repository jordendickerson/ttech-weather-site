const URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=635170d9ae99489099137d58ec8d474a`;
const archive = document.getElementById("news-archive");
fetch(URL)
  .then((news) => news.json())
  .then((newsObject) => {
    console.log(newsObject);
    const articles = newsObject.articles;
    archive.innerHTML = ``;
    for (let i = 0; i < articles.length; i++) {
      archive.innerHTML += `
        <article class="article">
              <img src="${articles[i].urlToImage}" id="header-img" alt="article photo" />
              <h2>
                <a href="${articles[i].url}" target="_blank">${articles[i].title}</a>
              </h2>
              <p id="header-desc">${articles[i].description}</p>
        </article>
        `;
    }
  });
