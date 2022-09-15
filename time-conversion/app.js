//Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
//- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
  // Write your code here

  let time = s.includes('PM')

  if(time){
    //if PM
    s = s.split('PM')
    s = s[0].split(':')
    if(s[0] !== '12') s[0] = (parseInt(s[0]) + 12).toString()
   return s.join(':')
  } else {
    //if AM
    s = s.split('AM')
    s = s[0].split(':')
    if(s[0] === '12' ) s[0] = '00'
    return s.join(':')
  }

}


console.log(timeConversion('12:05:45PM'))