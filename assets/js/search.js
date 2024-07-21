var index = new FlexSearch.Document({
  tokenize: "forward",
  cache: 100,
  document: {
    id: "id",
    store: [
      "href", "title", "description", "content", "summary", "date", "type", "url"
    ],
    index: [
      "title", "description", "content", "summary", "date", "type", "url"
    ]
  }
});

// Load index data asynchronously
let dataStore = [];
fetch("/search/index.json")
  .then(response => response.json())
  .then(data => {
    dataStore = data;
    data.forEach(item => {
      index.add({
        id: item.id,
        href: item.href,
        title: item.title,
        summary: item.summary,
        type: item.type,
        date: item.date
      });
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

const searchIcon = document.querySelector("[data-open-modal]");
const searchOverlay = document.querySelector("[data-modal]");
var inputElement = document.getElementById("search-query");
var resultsElement = document.getElementById("search-results");
console.log(inputElement, resultsElement)

// Toggle search overlay
searchIcon.addEventListener("click", function() {
  searchOverlay.showModal();
  document.body.classList.add("modal-open");
  inputElement.focus();
});

// Close overlay on outside click
searchOverlay.addEventListener("click", function(e) {
  if (e.target === searchOverlay) {
    searchOverlay.close();
    document.body.classList.remove("modal-open");
  }
});

// Search input event
inputElement.addEventListener("input", function() {
  var query = inputElement.value;
  var results = index.search(query);

  // Clear previous results
  resultsElement.innerHTML = "";

  // Flatten and deduplicate the results
  var docIds = new Set();
  results.forEach(function(result) {
    if (result.result) {
      result.result.forEach(function(id) {
        docIds.add(id);
      });
    }
  });

  // Display search results
  docIds.forEach(function(docId) {
    // Find the document in the original data store
    var doc = dataStore.find(item => item.id === docId);
    if (doc) {
      var li = document.createElement("li");

      // Construct result display
      li.innerHTML = `
            <div class="p-1">
              <a class="text-gray-700 bg-neutral-100 dark:text-gray-300 dark:bg-gray-900 dark:hover:bg-sky-600 hover:bg-sky-600 hover:text-gray-300 flex items-center px-3 py-2 rounded-md appearance-none focus:bg-primary-100 dark:focus:bg-primary-900 focus:outline-dotted focus:outline-transparent focus:outline-2" href="/" tabindex="0">
                <div class="grow">
                  <div class="-mb-1 text-lg font-bold">
                    ${doc.title}
                  </div>
                  <div class="text-sm text-neutral-500 dark:text-neutral-400 capitalize">
                    ${doc.type}
                    <span class="px-2 text-primary-500">·</span>
                    ${doc.date}
                  </div>
                </div>
                <div class="ml-2 ltr:block rtl:hidden text-neutral-500">→</div>
              </a>
            </div>
          `;

      li.querySelector("a").href = doc.url;
      resultsElement.appendChild(li);
    }
  });
});
