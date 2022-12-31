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

