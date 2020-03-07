/* Simple demo for timezone support using dayJS and Intl API */

/* Intl support - https://caniuse.com/#feat=internationalization */

import { format, utcToZonedTime } from "date-fns-tz";
import { de, hi, arSA, es, enUS } from "date-fns/locale";
import "./styles.css";

/* 
Timezones sourced from
https://github.com/eggert/tz/blob/master/zone1970.tab
*/

const CurrentTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

const displayTime = (timezone, locale = enUS) => {
  const utc = utcToZonedTime(new Date(), timezone);
  const dayJSTime = format(utc, "PPPPpppp", {
    locale: locale,
    timeZone: timezone
  });
  return dayJSTime;
};

const currentTime = displayTime(CurrentTz);
//dayjs.locale("hi");
const BangaloreTime = displayTime("Asia/Kolkata", hi);
//dayjs.locale("de");
const London = displayTime("Europe/London", de);
//dayjs.locale("es");
const MountainStandardTime = displayTime("America/Hermosillo", es);
//dayjs.locale("ar");
const CentralStandardTime = displayTime("America/Chicago", arSA);
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

const outputDateFns = `
<h4>Hello Date-fns and date-fns-tz demo (17kb + 3kb) - locales from browser </h4>
<span class='warn'>
* digits are always Cardinal numbers
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

export default outputDateFns;
