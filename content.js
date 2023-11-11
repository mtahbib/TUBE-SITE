function drawOnLoadContent() {
  
  const cardBox = document.getElementById("main-card");
  cardBox.innerHTML = "";
  const div = document.createElement("div");
  cardBox.setAttribute("class", "");
  div.innerHTML = `
  <div class="mx-auto text-center ">
      <div>
          <img src="./Images/Icon.png" alt="" class="mx-auto" />
      </div>
      <h3 class="text-4xl font-bold">Oops!! Sorry, There is no<br>content here</h3>
  </div>
  `;
 
  cardBox.appendChild(div);
}
  
const renderCards = (data) => {
    const cardBox = document.getElementById("main-card");
    cardBox.innerHTML = "";
    data.forEach((content) => {
      const time = content.others.posted_date;
      const totalSeconds = time;
      const totalHours = Math.floor(totalSeconds / 3600);
      const totalMinutes = Math.floor((totalSeconds % 3600)/60);
      const final_time= time ?`${totalHours} hrs ${totalMinutes} min ago` : " ";
      const div = document.createElement("div");
      div.innerHTML = `
      <figure class="relative">
    <img class="w-full lg:w-72 mb-3 rounded-md h-44" 
    src="${content.thumbnail}"/>
    <p class="absolute bottom-3 right-3  text-white lg:mr-2 bg-black  rounded-lg text-xs  lg:text-base">${final_time}
    </p>
  </figure>
   <div class="flex gap-2 mt-5 mb-8">
      <div class="flex ">
      <img class="w-8 h-8 rounded-full"src=${content.authors[0].profile_picture} " />
      </div>

      <div class="flex flex-col">
      <h2 class="text-xl font-bold">${content.title}</h2>

      <h2 class="flex items-center">${content.authors[0].profile_name}<span>

      ${content.authors[0].verified?'<img src="./../Images/fi_10629607.svg" />': " "} </span>
      </h2>
      <h2>${content.others.views} views</h2>
      </div>
      </div>`;
      cardBox.appendChild(div);
    });
  };
  
 