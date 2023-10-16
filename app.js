const bookmarkObj = {
  bm1: {
    title: "jQuery",
    url: `javascript:var s=document.createElement('script');s.setAttribute('src','//code.jquery.com/jquery.js');document.getElementsByTagName('body')[0].appendChild(s);`,
    desc: "jQuery is a fast, small, and feature-rich JavaScript library.",
    tags: ["javascript", "library", "framework"],
  },
  bm2: {
    title: "Bootstrap",
    url: `javascript:var s=document.createElement('script');s.setAttribute('src','//code.jquery.com/jquery.js');document.getElementsByTagName('body')[0].appendChild(s);`,
    desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    tags: ["css", "library", "framework"],
  },
  bm3: {
    title: "YT No Ads",
    url: `javascript:(function() {    function clickAdSkipButton() {        const button = document.querySelector('.ytp-ad-skip-button.ytp-button');        if (button) {            button.click();        }    }    const observer = new MutationObserver(function(mutations) {        for(let mutation of mutations) {            if(mutation.addedNodes.length) {                clickAdSkipButton();            }        }    });    const config = { attributes: false, childList: true, subtree: true };    observer.observe(document, config);})();`,
    desc: "Remove Youtube Ads",
    tags: ["youtube", "ads"],
  },
};

//when dom loaded
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
});

function renderCards() {
  let contents = [];
  Object.keys(bookmarkObj).forEach((key) => {
    const { title, desc, url, tags } = bookmarkObj[key];
    const content = `
<div class="col">
    <div class="card" style="min-height:200px;">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${desc}</p>
        <a href="${url}" class="btn btn-primary">拖曳書籤</a>
        <button type="button" class="btn btn-secondary">新增</button>
        </div>
    </div>
</div>
        `;
    contents.push(content);
  });
  document.querySelector("#box").innerHTML = contents.join("");
}
