const prisonStart = new Date("2023-08-05T00:00:00+05:00");


function updateCounter(){

  const now = new Date();

  let diff = Math.max(
    0,
    now - prisonStart
  );


  const totalSeconds =
    Math.floor(diff / 1000);


  const days =
    Math.floor(
      totalSeconds / 86400
    );


  const hours =
    Math.floor(
      (totalSeconds % 86400) / 3600
    );


  const minutes =
    Math.floor(
      (totalSeconds % 3600) / 60
    );


  const seconds =
    totalSeconds % 60;


  const daysEl =
    document.getElementById("days");

  const hoursEl =
    document.getElementById("hours");

  const minutesEl =
    document.getElementById("minutes");

  const secondsEl =
    document.getElementById("seconds");


  if(
    daysEl &&
    hoursEl &&
    minutesEl &&
    secondsEl
  ){

    daysEl.textContent =
      days.toLocaleString();

    hoursEl.textContent =
      String(hours).padStart(2,"0");

    minutesEl.textContent =
      String(minutes).padStart(2,"0");

    secondsEl.textContent =
      String(seconds).padStart(2,"0");

  }

}


updateCounter();

setInterval(
  updateCounter,
  1000
);



/* =========================
   NEWS
========================= */


const newsItems = [

  {

    date:"20 SEP 2026",

    title:
      "Aleema Khan detained ahead of planned PTI march",

    summary:
      "Reuters reported that Khan's sister Aleema Khan was detained in Lahore ahead of a PTI march planned for 27 September. Authorities cited public-safety concerns; PTI criticized the detention.",

    source:"REUTERS",

    url:
      "https://www.reuters.com/world/asia-pacific/police-arrest-pakistan-ex-pm-imran-khans-sister-lahore-ahead-partys-planned-2026-09-20/"

  },


  {

    date:"22 AUG 2026",

    title:
      "PTI seeks contempt action over hospital transfer",

    summary:
      "Reuters reported that PTI filed a contempt petition after authorities took Khan to a state-run hospital rather than the private hospital named in a Supreme Court order. Government officials cited security concerns.",

    source:"REUTERS",

    url:
      "https://www.reuters.com/world/asia-pacific/imran-khans-party-seeks-contempt-action-over-jailed-leaders-hospital-move-2026-08-22/"

  },


  {

    date:"19 AUG 2026",

    title:
      "Government challenges private-hospital order",

    summary:
      "Pakistan's government challenged a Supreme Court order concerning Khan's transfer to a private hospital. The dispute followed concerns raised by Khan's family and party about his medical care.",

    source:"REUTERS",

    url:
      "https://www.reuters.com/world/asia-pacific/pakistan-government-challenge-imran-khan-hospital-move-says-law-minister-2026-08-19/"

  }

];



const newsGrid =
  document.getElementById("newsGrid");


if(newsGrid){

  newsItems.forEach(item=>{

    const article =
      document.createElement("article");


    article.className =
      "card reveal";


    article.innerHTML = `

      <div class="news-date">
        ${item.date}
      </div>

      <h3>
        ${item.title}
      </h3>

      <p>
        ${item.summary}
      </p>

      <span class="news-source">
        ${item.source}
      </span>

      <br>

      <a href="${item.url}"
         target="_blank"
         rel="noopener">

        Read source ↗

      </a>

    `;


    newsGrid.appendChild(article);

  });

}



/* =========================
   MOBILE MENU
========================= */


const menuBtn =
  document.getElementById("menuBtn");


const nav =
  document.getElementById("nav");


if(menuBtn && nav){

  menuBtn.addEventListener(
    "click",
    ()=>{

      const open =
        nav.classList.toggle("open");


      menuBtn.setAttribute(
        "aria-expanded",
        open
      );


      menuBtn.textContent =
        open ? "✕" : "☰";

    }
  );


  nav.querySelectorAll("a")
     .forEach(a=>{

       a.addEventListener(
         "click",
         ()=>{

           nav.classList.remove("open");


           menuBtn.setAttribute(
             "aria-expanded",
             "false"
           );


           menuBtn.textContent =
             "☰";

         }
       );

     });

}



/* =========================
   TIMELINE FILTER
========================= */


document
  .querySelectorAll(".filter")
  .forEach(button=>{

    button.addEventListener(
      "click",
      ()=>{


        document
          .querySelectorAll(".filter")
          .forEach(b=>
            b.classList.remove("active")
          );


        button.classList.add("active");


        const filter =
          button.dataset.filter;


        document
          .querySelectorAll(".timeline-item")
          .forEach(item=>{


            const shouldHide =

              filter !== "all" &&

              item.dataset.category
              !== filter;


            item.classList.toggle(
              "hidden",
              shouldHide
            );

          });

      }
    );

  });



/* =========================
   SCROLL REVEAL
========================= */


if("IntersectionObserver" in window){

  const observer =
    new IntersectionObserver(

      entries=>{

        entries.forEach(entry=>{

          if(entry.isIntersecting){

            entry.target
                 .classList
                 .add("visible");


            observer.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold:.08
      }

    );


  document
    .querySelectorAll(".reveal")
    .forEach(el=>
      observer.observe(el)
    );

}

else{

  document
    .querySelectorAll(".reveal")
    .forEach(el=>
      el.classList.add("visible")
    );

}
