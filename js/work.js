
const project1 = {
  image: "assets/project/ecom.png",
  name: "Task Notifier",
  category: "Android Application",
  description: "A notifier app that provides a collaborative task management system with alerts realted to tasks.",
  tags: "Android, Java, Kotlin, Firebase, Fcm"
}

const project2 = {
  image: "assets/project/health.png",
  name: "Health App",
  category: "Android Application",
  description: "Health & Fitness based app for analysing daily activities, mood and sleep of the user.",
  tags: "Android, Java, Php, Mysql, Retrofit"
}

const project3 = {
  image: "assets/project/music.png",
  name: "Music App",
  category: "Android Application",
  description: "Music application for android devices. Play in shuffle, repeat and save songs to a favourite playlist.",
  tags: "Android, Java, Mvvm"
}

const project4 = {
  image: "assets/project/ecom.png",
  name: "Stylin E-Commerce Store",
  category: "Website",
  description: "Online apparel store with modules for seller amd user. Features beautiful ui and great user experience.",
  tags: "Web, Php, Mysql, Bootstrap, Javascript"
}
let project1 = `<div id="spotify" class="row align-items-center text-end">
<div class="col-md-6 project_desc">
    <h5 class="project_title">Spotify Clone</h5>
    <div class="tags">
        <span class="chip">FLUTTER</span>
        <span class="chip">DART</span>
    </div>
    <p class="desc">This project mimics the ui of the Spotify app.</p>
    <a href="https://github.com/himanshu240601/spotify-clone" target="_blank"
        class="project-link">view project</a>
</div>
<div class="col-md-6 img_box">
    <img src="../assets/project/spotify-clone.png" class="w-100 p_img" alt="">
</div>
</div>`;

let project2 = `<div id="ecomweb" class="row align-items-center text-end">
<div class="col-md-6 project_desc">
    <h5 class="project_title">Online Apparels Store</h5>
    <div class="tags">
        <span class="chip">PHP</span>
        <span class="chip">MYSQL</span>
        <span class="chip">HTML</span>
        <span class="chip">CSS</span>
        <span class="chip">JAVASCRIPT</span>
    </div>
    <p class="desc">This project is a online clothing store. This website has a beautiful ui
        with lots of features.</p>
    <a href="https://github.com/himanshu240601/ecommerce-website" target="_blank"
        class="project-link">view project</a>
</div>
<div class="col-md-6 img_box">
    <img src="../assets/project/ecom.png" class="w-100 p_img" alt="">
</div>
</div>`;

let project3 = `<div id="musicapp" class="row align-items-center text-end">
<div class="col-md-6 project_desc">
    <h5 class="project_title">Music Player App</h5>
    <div class="tags">
        <span class="chip">JAVA</span>
        <span class="chip">ANDROID</span>
        <span class="chip">XML</span>
    </div>
    <p class="desc">This project is a online clothing store. This website has a beautiful ui
        with lots of features.</p>
    <a href="https://github.com/himanshu240601/music-app-java" target="_blank"
        class="project-link">view project</a>
</div>
<div class="col-md-6 img_box">
    <img src="../assets/project/music.png" class="w-100 p_img" alt="">
</div>
</div>`;

let project4 = `<div id="healthapp" class="row align-items-center text-end">
<div class="col-md-6 project_desc">
    <h5 class="project_title">Health Application</h5>
    <div class="tags">
        <span class="chip">JAVA</span>
        <span class="chip">ANDROID</span>
        <span class="chip">MYSQL</span>
        <span class="chip">PHP</span>
        <span class="chip">JSON</span>
    </div>
    <p class="desc">This is a health application to monitor the users daily tasks, moods and
        sleep patterns.</p>
    <a href="https://github.com/himanshu240601/" target="_blank"
        class="project-link">view project</a>
</div>
<div class="col-md-6 img_box">
    <img src="../assets/project/health.png" class="w-100 p_img" alt="">
</div>
</div>`;

const projects = [project1, project2, project3, project4]

function createCards() {
  const container = document.getElementById("work-samples")

  for (let i = 0; i < 4; i++) {

    let tags_arr = projects[i].tags.split(", ")
    let tags = '';
    for (let j = 0; j < tags_arr.length; j++) {
      tags += `<span>${tags_arr[j]}</span> `
    }

    container.innerHTML += `<div class="col-md-6 px-2 pb-5">
  <div class="card">
    <div class="img">
      <img src="${projects[i].image}" class="w-100" alt="">
    </div>
    <div class="card-text p-4">
      <h6>${projects[i].category}</h6>
      <h4><a href="#">${projects[i].name}</a></h4>
      <p>${projects[i].description}</p>
      <div class="tags">
      ${tags}
      </div>
    </div>
  </div>
  </div>`
  }
}

createCards()

