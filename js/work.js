const project1 = {
  image: "assets/project/task.png",
  name: "Task Notifier",
  category: "Android App",
  description: "A notifier app that provides a collaborative task management system with alerts realted to tasks.",
  tags: "JAVA, KOTLIN, XML, FIREBASE",
  link: "https://github.com/himanshu240601/cp-activity-notifier"
}

const project2 = {
  image: "assets/project/health.png",
  name: "Health App",
  category: "Android App",
  description: "Health & Fitness based app for analysing daily activities, mood and sleep of the user.",
  tags: "JAVA, XML, PHP, MYSQL, RETROFIT",
  link: "https://github.com/himanshu240601/cp-health-app"
}

const project3 = {
  image: "assets/project/music.png",
  name: "Music App",
  category: "Android App",
  description: "Music application for android devices. Play in shuffle, repeat and save songs to a favourite playlist.",
  tags: "JAVA, XML",
  link: "https://github.com/himanshu240601/music-app-java"
}

const project4 = {
  image: "assets/project/ecom.png",
  name: "Stylin E-Commerce Store",
  category: "Website",
  description: "Online apparel store with modules for seller amd user. Features beautiful ui and great user experience.",
  tags: "HTML, CSS, JAVASCRIPT, PHP, MYSQL",
  link: "https://github.com/himanshu240601/ecommerce-website"
}

const projects = [project1, project2, project3, project4]

function createCards() {
  const container = document.getElementById("work-samples")

  for (let i = 0; i < 4; i++) {

    let tags_arr = projects[i].tags.split(", ")
    let tags = '';
    for (let j = 0; j < tags_arr.length; j++) {
      tags += `<span>${tags_arr[j]}</span> `
    }

    container.innerHTML += `<div class="col-md-6 px-md-2 pb-5">
  <div class="card">
    <div class="img">
      <img src="${projects[i].image}" class="w-100" alt="">
    </div>
    <div class="card-text p-4">
      <h6>${projects[i].category}</h6>
      <h4><a href=${projects[i].link} target="_blank">${projects[i].name}</a></h4>
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

