/* Simple demo for timezone support using dayJS and Intl API */

/* Intl support - https://caniuse.com/#feat=internationalization */

import { DateTime } from "luxon";
import "./styles.css";

/* 
Timezones sourced from
https://github.com/eggert/tz/blob/master/zone1970.tab
*/

const CurrentTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

const displayTime = (timezone, locale = "en-US", number = "latn") => {
  const dayJSTime = DateTime.local()
    .setZone(timezone)
    .reconfigure({ locale: locale, numberingSystem: number })
    .toFormat("DDDD");
  return dayJSTime;
};

const currentTime = displayTime(CurrentTz);
//dayjs.locale("hi");
const BangaloreTime = displayTime("Asia/Kolkata", "hi", "deva");
//dayjs.locale("de");
const London = displayTime("Europe/London", "de", "thai");
//dayjs.locale("es");
const MountainStandardTime = displayTime("America/Hermosillo", "es", "orya");
//dayjs.locale("ar");
const CentralStandardTime = displayTime("America/Chicago", "ar", "arab");
//dayjs.locale("en");
const PacificStandardTime = displayTime("America/Los_Angeles");

/* some unknown places for good measure */
const newSalem = displayTime(
  "America/North_Dakota/New_Salem"
); /* there is a salem in ND */
const Pohnpei = displayTime("Pacific/Pohnpei");
const Samoa = displayTime("Pacific/Pago_Pago");
const Kiritimati = displayTime("Pacific/Kiritimati");
const Vostok = displayTime("Antarctica/Vostok");

const outputL = `
<h4>Hello Luxon demo (20kb) - locales from browser </h4>
<span class='warn'>Luxon uses Intl.DateTimeFormat().resolvedOptions() to get 
locale, numberingSystem & timeZone
<br>
* pm in bangalore is not localised <br>
* support for numberingSystem just arrived in chromium only
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

export default outputL;
