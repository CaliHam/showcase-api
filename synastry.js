const zodiacData = require('./data/zodiac')

// app.locals.zodiacData = zodiacData
// import { Configuration, OpenAIApi} from 'openai'

// const configuration = new Configuration({
//   apiKey: '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'
// })

// const openai = new OpenAIApi(configuration);

function checkCompatibility(month1, day1, month2, day2) {
  const sign1 = getZodiacSign(month1, day1);
  const sign2 = getZodiacSign(month2, day2);
  return zodiacData[sign1].compatible.includes(sign2);
}

function getZodiacSign(month, day) {
  const currentDate = month * 100 + day;
  if (currentDate < 120 || currentDate >= 1222) {
    return 'Capricorn';
  }

  const zodiacSignsSorted = Object.entries(zodiacData).sort(([,a],[,b]) => a.startDate - b.startDate);
  for (let i = 0; i < zodiacSignsSorted.length; i++) {
    const currentSignStartDate = zodiacSignsSorted[i][1].startDate;
    const nextSignStartDate = (i === zodiacSignsSorted.length - 1) ? 1232 : zodiacSignsSorted[i+1][1].startDate;
    if (currentDate >= currentSignStartDate && currentDate <= nextSignStartDate) {
      return zodiacSignsSorted[i][0];
    }
  }
}

const getReport = (sign1, signData1, sign2, areCompatible) => {
  let compatibilityReport;
    if (signData1.compatible.includes(sign2)) {
    areCompatible = true;
    compatibilityReport = signData1.compatibilityReport[sign2];
  } else if (signData1.incompatible.includes(sign2)) {
    compatibilityReport = signData1.incompatibilityReport[sign2];
  } else {
    compatibilityReport = `The relationship between ${sign1} and ${sign2} is unique and cannot be categorized. Both signs bring their own strengths and weaknesses to the table. Understanding and respect are key to the success of this match.`;
    }
  return compatibilityReport
}

const calcCompatibilityScore = (score, sign1, sign2, day1, month1, day2, month2) => {
  const daysInYear = 366; // For leap year
  const start1 = (zodiacData[sign1].startDate % 100) - 1 + Math.floor(zodiacData[sign1].startDate / 100) * 30; 
  const start2 = (zodiacData[sign2].startDate % 100) - 1 + Math.floor(zodiacData[sign2].startDate / 100) * 30; 
  const birth1 = (day1 - 1) + (month1 * 30);
  const birth2 = (day2 - 1) + (month2 * 30);
  const diff1 = (birth1 + daysInYear - start1) % daysInYear;
  const diff2 = (birth2 + daysInYear - start2) % daysInYear;
  
  const diffAverage = (diff1 + diff2) / 2;
  const modifier = diffAverage / 30 * 50; 

  score += modifier;
  return score
}

function getSynastry(month1, day1, month2, day2) {
  // Get Signs
  const sign1 = getZodiacSign(month1, day1);
  const sign2 = getZodiacSign(month2, day2);

  // Get Sign Data
  const signData1 = zodiacData[sign1];
  const signData2 = zodiacData[sign2];
  
  // Check compatibility
  const areCompatible = checkCompatibility(month1, day1, month2, day2);
  // Get Compatibility Report
  const compatibilityReport = getReport(sign1, signData1, sign2, areCompatible);

  // Calculate compatibility score
  const score = calcCompatibilityScore((areCompatible ? 50 : 0), sign1, sign2, day1, month1, day2, month2)
  
	if (!score && !compatibilityReport) {
		return false
	} 

  return {
    sign1,
    sign2,
    areCompatible,
    compatibilityScore: `${Math.floor(score)}%`,
    compatibilityReport
  };

}

module.exports = getSynastry;