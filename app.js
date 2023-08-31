// data loading
const loadData = async () => {
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  const res = await fetch(url);
  const data = await res.json();
  const allData = data.data.tools;
  console.log(data.data.tools);
  displayData(allData);
};

const loadAllData = async () => {
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  const res = await fetch(url);
  const data = await res.json();
  const allData = data.data.tools;
  console.log(data.data.tools);
  displayAllData(allData);
  const buttonBox=document.getElementById("see-more-container");
  buttonBox.classList.add("d-none");
};

const displayData = (ais) => {
  console.log(ais);
  const aiContainer = document.getElementById("ai-box-container");
  arrayForSix=ais.slice(0,7);
  arrayForSix.forEach((ai) => {
    if (ai.id === "06") {
      return;
    }
    const eachBox = document.createElement("div");
    eachBox.classList.add("col");
    eachBox.innerHTML = `<div class="card h-100">
              <img src="${ai.image}" class="card-img-top p-3 rounded-5" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer bg-white d-flex justify-content-between align-items-center">
              <div>
                <h5 class=""
                  >${ai.name}
                </h5>
                <p>
                Release: ${ai.published_in}
                </p>
              </div>
              <div>
                <button class="btn btn-primary">View Details</button>
              </div>
              </div>
            </div> `;
    aiContainer.appendChild(eachBox);
  });
};

const displayAllData = (ais) => {
  console.log(ais);
  const aiContainer = document.getElementById("ai-box-container");
  aiContainer.innerHTML="";
  ais.forEach((ai) => {
    if (ai.id === "06") {
      return;
    }
    const eachBox = document.createElement("div");
    eachBox.classList.add("col");
    eachBox.innerHTML = `<div class="card h-100">
              <img src="${ai.image}" class="card-img-top p-3 rounded-5" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer bg-white d-flex justify-content-between align-items-center">
              <div>
                <h5 class=""
                  >${ai.name}
                </h5>
                <p>
                Release: ${ai.published_in}
                </p>
              </div>
              <div>
                <button class="btn btn-primary">View Details</button>
              </div>
              </div>
            </div> `;
    aiContainer.appendChild(eachBox);
  });
};

loadData();
