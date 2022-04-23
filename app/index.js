import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import * as messaging from "messaging";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const display_time = document.getElementById("display_time");
const display_title = document.getElementById("display_title");
let angle = {}
for(let a=0;a<360;a++) {
  angle[a]=document.getElementById("t"+a);
}

// let hour_start = settingsStorage.getItem("ifStart").value;
// let hour_end = settingsStorage.getItem("ifEnd").value;
let hour_start = 12;
let hour_end = 20;

function show_ring(from, to, now) {
    for(let a=0;a<360;a++) {
      angle[a].style.visibility =((a>=from*15)&&(a<=to*15)?"visible":"hidden");
      angle[a].style.fill="lime";
    }
  angle[now*15].style.visibility="visible";
  angle[now*15].style.fill="blue";
}

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  display_title.text=((hours>=hour_start)&&(hours<=hour_end)?"Feeding Window":"Fasting Window");
  show_ring(hour_start,hour_end,hours)
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  display_time.text = `${hours}:${mins}`;

}


messaging.peerSocket.addEventListener("message", (evt) => {
  console.log(evt.data.key);
  console.log(JSON.stringify(evt.data.value));
  if (evt && evt.data && evt.data.key === "ifStart") {
    hour_start = evt.data.value.values[0].value;
  }
  if (evt && evt.data && evt.data.key === "ifEnd") {
    hour_end = evt.data.value.values[0].value;
  }
});
