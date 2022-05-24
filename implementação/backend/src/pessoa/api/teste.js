let storeConfig = {"openingHoursCartRedemptionTemplate":[{"weekDays":["monday","tuesday","wednesday","thursday","friday"],"hour":[{"startTime":"0800","endTime":"1200"},{"startTime":"1300","endTime":"1600"}]},{"weekDays":["saturday"],"hour":[{"startTime":"0800","endTime":"1200",}]}]};
test();

function isAWorkindDate(currentDate){
    const weekArray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let currentHour = currentDate.getHours();
        currentHour += currentDate.getMinutes() >= 10 ? "" + currentDate.getMinutes() : "0" + currentDate.getMinutes();
    let dayWeek = weekArray[currentDate.getDay()];
    let configDay = storeConfig.openingHoursCartRedemptionTemplate.find(date => {
        return date.weekDays.some(days => days === dayWeek);
    });
    if(configDay){
        return configDay.hour.some(hour => {
            return parseInt(currentHour) >= parseInt(hour.startTime) && parseInt(currentHour) <= parseInt(hour.endTime);
        });
    }
    return false;
    
}

function getNextWorkDate(currentDate) {
    const weekArray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let dayWeek = weekArray[currentDate.getDay()];
    const currentHour = currentDate.getHours() + "" +  currentDate.getMinutes();
    let configDay = storeConfig.openingHoursCartRedemptionTemplate.find(date => {
        return date.weekDays.some(days => days === dayWeek);
    });
    if(configDay) {
            const nextHour = configDay.hour.find(hour => {
            return parseInt(currentHour) <= parseInt(hour.endTime);
        });
        
        if(nextHour) {
            currentDate.setHours(nextHour.startTime.substr(0, 2));
            currentDate.setMinutes(nextHour.startTime.substr(2, 2));
            return currentDate;
        }
    }
    let cont = 0;
    while(cont < 6) {
        currentDate.setDate(currentDate.getDate() + 1);
        dayWeek = weekArray[currentDate.getDay()];
        configDay = storeConfig.openingHoursCartRedemptionTemplate.find(date => {
            return date.weekDays.some(days => days === dayWeek);
        })
        
        if(configDay) {
            // Pega a configuração de hora do primeiro horario
            const nextDayHour = configDay.hour[0];
            currentDate.setHours(nextDayHour.startTime.substr(0, 2));
            currentDate.setMinutes(nextDayHour.startTime.substr(2, 2));
            break;
        }
        cont ++;
    }
    
    return currentDate;
}

function test() {
  let currDate = new Date("2022-05-09Z-03");
  let maxDate = new Date("2022-05-16Z-03");
  let minuteIncr = 5;
  let weekArray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  
  while (currDate.getTime() < maxDate.getTime()){        
        if(!isAWorkindDate(currDate)){
            console.log(getNextWorkDate(currDate).toLocaleString());
        }
        currDate = new Date(currDate.getTime() + minuteIncr * 60 * 1000);
  }
  
}