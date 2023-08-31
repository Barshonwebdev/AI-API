// data loading of 6
const loadData = async () => {
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  const res = await fetch(url);
  const data = await res.json();
  const allData = data.data.tools;
  console.log(data.data.tools);
  displayData(allData);
};

// all data loading 
const loadAllData = async () => {
  toggleSpinner(true);
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  const res = await fetch(url);
  const data = await res.json();
  const allData = data.data.tools;
  console.log(data.data.tools);
  displayAllData(allData);
  toggleSpinner(false);
  const buttonBox=document.getElementById("see-more-container");
  buttonBox.classList.add("d-none");
};

// displaying data of 6 
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
                <p>1. ${ai.features[0]}</p>
                <p>2. ${ai.features[1]}</p>
                <p>3. ${ai.features[2]? ai.features[2]:"Fast Service"}</p>
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
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailModal">View Details</button>
              </div>
              </div>
            </div> `;
    aiContainer.appendChild(eachBox);
  });
};

// displaying all data 
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
              <img src="${
                ai.image
              }" class="card-img-top p-3 rounded-5" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p>1. ${ai.features[0]}</p>
                <p>2. ${ai.features[1]}</p>
                <p>3. ${ai.features[2] ? ai.features[2] : "Fast Service"}</p>
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
                <button data-bs-toggle="modal" data-bs-target="#detailModal" class="btn btn-primary">View Details</button>
              </div>
              </div>
            </div> `;
    aiContainer.appendChild(eachBox);
  });
};

// toggle spinner function 

const toggleSpinner=isLoading=>{
  const spinner=document.getElementById("spinner");
  if(isLoading){
    spinner.classList.remove("d-none");
    spinner.classList.add("d-block");
  }
  else {
    spinner.classList.remove("d-block");
    spinner.classList.add("d-none");
  }
}
// initial loading 
loadData();
