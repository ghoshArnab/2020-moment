/* Simple demo for timezone support using dayJS and Intl API */

/* Intl support - https://caniuse.com/#feat=internationalization */

import moment from "moment-timezone";
import "./styles.css";

import "moment/locale/de";
import "moment/locale/hi";
import "moment/locale/es";
import "moment/locale/ar";

/* 
Timezones sourced from
https://github.com/eggert/tz/blob/master/zone1970.tab
*/

const CurrentTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

const displayTime = timezone => {
  const dayJSTime = moment(new Date())
    .tz(timezone)
    .format("LLLL");
  return dayJSTime;
};

const currentTime = displayTime(CurrentTz);
moment.locale("hi");
const BangaloreTime = displayTime("Asia/Kolkata");
moment.locale("de");
const London = displayTime("Europe/London");
moment.locale("es");
const MountainStandardTime = displayTime("America/Hermosillo");
moment.locale("ar");
const CentralStandardTime = displayTime("America/Chicago");
moment.locale("en");
const PacificStandardTime = displayTime("America/Los_Angeles");

/* some unknown places for good measure */
const newSalem = displayTime(
  "America/North_Dakota/New_Salem"
); /* there is a salem in ND */
const Pohnpei = displayTime("Pacific/Pohnpei");
const Samoa = displayTime("Pacific/Pago_Pago");
const Kiritimati = displayTime("Pacific/Kiritimati");
const Vostok = displayTime("Antarctica/Vostok");

const outputM = `
<h4>Hello momentJS demo (91kb) - locales + tz</h4>
<span class='warn'> Check bangalore and chicago : digits are localised
</span><div><br>
<div>
The time in following cities/timezones are listed : 
<br><br>
  ${CurrentTz} : ${currentTime} <br><br>

  Bangalore : ${BangaloreTime} <br>
  London : ${London} <br>
  Chicago : ${CentralStandardTime} <br>
  Phoenix : ${MountainStandardTime} <br>
  Los Angeles : ${PacificStandardTime} <br><br>

  new Salem : ${newSalem} <br>
  Pohnpei : ${Pohnpei} <br>
  Samoa Islands : ${Samoa} <br>
  Kiritimati : ${Kiritimati} <br>
  Vostok Antarctica : ${Vostok} <br>
</div>
`;

export default outputM;
