/* Simple demo for timezone support using dayJS and Intl API */

/* Intl support - https://caniuse.com/#feat=internationalization */

import dayjs from "dayjs";
import "./styles.css";

import "dayjs/locale/de";
import "dayjs/locale/hi";
import "dayjs/locale/es";
import "dayjs/locale/ar";

/* 
Timezones sourced from
https://github.com/eggert/tz/blob/master/zone1970.tab
*/

const CurrentTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

const displayTime = timezone => {
  const dayJSTime = dayjs(
    new Date().toLocaleString("en-US", { timeZone: timezone })
  ).format("MMMM/DD dddd hh:m A");
  return dayJSTime;
};

const currentTime = displayTime(CurrentTz);
dayjs.locale("hi");
const BangaloreTime = displayTime("Asia/Kolkata");
dayjs.locale("de");
const London = displayTime("Europe/London");
dayjs.locale("es");
const MountainStandardTime = displayTime("America/Hermosillo");
dayjs.locale("ar");
const CentralStandardTime = displayTime("America/Chicago");
dayjs.locale("en");
const PacificStandardTime = displayTime("America/Los_Angeles");

/* some unknown places for good measure */
const newSalem = displayTime(
  "America/North_Dakota/New_Salem"
); /* there is a salem in ND */
const Pohnpei = displayTime("Pacific/Pohnpei");
const Samoa = displayTime("Pacific/Pago_Pago");
const Kiritimati = displayTime("Pacific/Kiritimati");
const Vostok = displayTime("Antarctica/Vostok");

const outputD = `
<h4>Hello dayJS demo (3kb) without any locales </h4>
<span class='warn'>Issue : dayJS locale object does not contain digits so digits are always Cardinal numbers
</span><div>
<br>
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

export default outputD;
