// data loading of 6
const loadData = async () => {
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  const res = await fetch(url);
  const data = await res.json();
  const allData = data.data.tools;
  displayData(allData);
};

// all data loading
const loadAllData = async () => {
  toggleSpinner(true);
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  const res = await fetch(url);
  const data = await res.json();
  const allData = data.data.tools;
  console.log(allData);
  displayAllData(allData);
  toggleSpinner(false);
  const buttonBox = document.getElementById("see-more-container");
  buttonBox.classList.add("d-none");
};

// displaying data of 6
const displayData = (ais) => {
  const aiContainer = document.getElementById("ai-box-container");
  arrayForSix = ais.slice(0, 7);
  arrayForSix.forEach((ai) => {
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
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailModal" onclick="loadDetail('${
                  ai.id
                }')">View Details</button>
              </div>
              </div>
            </div> `;
    aiContainer.appendChild(eachBox);
  });
};

// displaying all data
const displayAllData = (ais) => {
  const aiContainer = document.getElementById("ai-box-container");
  aiContainer.innerHTML = "";
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
                <button data-bs-toggle="modal" data-bs-target="#detailModal" class="btn btn-primary" onclick="loadDetail('${
                  ai.id
                }')">View Details</button>
              </div>
              </div>
            </div> `;
    aiContainer.appendChild(eachBox);
  });
};

// load detail data
const loadDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetail(data);
};

const displayDetail=data=>{
  const detaildata=data.data;
  console.log(detaildata);
  const modalBody=document.getElementById("modal-content");
  modalBody.innerHTML = `<div class="col ">
                <div class="card h-100 bg-success-subtle border border-success">
                  <div class="card-body">
                    <h5 class="card-title">${detaildata.description}</h5>
                    <div>
                    <div class="row row-cols-md-3 g-2 mt-3">
                        <div class="col">
                          <div class="card h-100">
                            <div class="card-body text-center">
                              <p class="text-success">${
                                detaildata.pricing[0].price
                              } </p>
                              <p class="text-success">${
                                detaildata.pricing[0].plan
                              } </p>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card h-100">
                            <div class="card-body text-center">
                              <p class="text-primary">${
                                detaildata.pricing[1].price
                              } </p>
                              <p class="text-primary">${
                                detaildata.pricing[1].plan
                              } </p>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card h-100">
                            <div class="card-body text-center">
                              <p class="text-danger">${
                                detaildata.pricing[2].price
                              } </p>
                              <p class="text-danger">${
                                detaildata.pricing[2].plan
                              } </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-3 d-flex justify-content-between">
                      <div>
                      <h5> Features </h5>
                      <p>1.${detaildata.features[1].feature_name} </p>
                      <p>2.${detaildata.features[2].feature_name} </p>
                      <p>3.${detaildata.features[3].feature_name} </p>
                      </div>

                      <div>   
                      <h5> Integrations </h5>
                      <p>1.${
                        detaildata.integrations[0]
                          ? detaildata.integrations[0]
                          : "No data found"
                      } </p>
                      <p>2.${
                        detaildata.integrations[1]
                          ? detaildata.integrations[1]
                          : "No data found"
                      } </p>
                      <p>3.${
                        detaildata.integrations[2]
                          ? detaildata.integrations[2]
                          : "No data found"
                      } </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>`;
}

// toggle spinner function

const toggleSpinner = (isLoading) => {
  const spinner = document.getElementById("spinner");
  if (isLoading) {
    spinner.classList.remove("d-none");
    spinner.classList.add("d-block");
  } else {
    spinner.classList.remove("d-block");
    spinner.classList.add("d-none");
  }
};
// initial loading
loadData();
