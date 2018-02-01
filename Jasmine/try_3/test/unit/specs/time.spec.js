// import TimeUitl from './time.spec.js'
// var TimeUitl=require('./time.spec.js')
// import Vue from 'vue'
// console.log('timePaser',TimeUitl.default.parser)
// console.log('timePaser',TimeUitl.default)
// console.log('timePaser',TimeUitl)
var MIN=60000
var HOUR=3600000
var DAY=86400000
var MONTH=2592000000
var YEAR=31536000000
// i]
class TimeUitl {
  /**
   * [getTimeString description]
   * @param  {Date.getTime()} AdDate  [description]
   * @param  {int} AiStart [description]
   * @param  {int} AiEnd   [description]
   * @param  {object} cfg     connectorDate,connectorTime,
   * @return {String}         [description]
   */
  static getTimeString(AdDate, AiStart=0, AiEnd=19, cfg={}) {
    function fToTwo(aNum) {
      return aNum >= 10 ? aNum : "0" + aNum;
    };
    if (AdDate === undefined) {
      var dNow = new Date();
    } else {
      var dNow = new Date(AdDate);
    }
    if(cfg.connectorDate===undefined){
      cfg.connectorDate='/'
    }
    if(cfg.connectorTime===undefined){
      cfg.connectorTime=':'
    }
    var iH = fToTwo(dNow.getHours());
    var iM = fToTwo(dNow.getMinutes());
    var iS = fToTwo(dNow.getSeconds());
    var iD = fToTwo(dNow.getDate())
    var iMonth = fToTwo(dNow.getMonth() + 1)
    var iY = dNow.getFullYear()
    var sNow
    if(cfg.connectorDate==='char'){
      sNow = iY + '年' + iMonth + '月' + iD + "日 " 
      + iH + cfg.connectorTime+ iM + cfg.connectorTime+ iS;
    }else{
      sNow = iY + cfg.connectorDate + iMonth + cfg.connectorDate + iD + " " 
      + iH + cfg.connectorTime+ iM + cfg.connectorTime+ iS;
    }
    return sNow.slice(AiStart, AiEnd);
  };
  getRemainTime(ms){
    return (ms/3600000).toFixed(1)+'小时'
  }

  static test(ms){
    return (ms/3600000).toFixed(1)+'小时'
  }
  static topicListWithinMonth(ms){
    let rslt='undefined'
    if(ms<HOUR){
      return Math.floor(ms/MIN)+'分钟前'
    }else if(ms<DAY){
      return Math.floor(ms/HOUR)+'小时前'
    }else if(ms<DAY*2){
      return '昨天' 
    }else if(ms<MONTH){
      return Math.floor(ms/DAY)+'天前'
    }
    return rslt
  }
  static topicList(timeMS){
    let nowMS=(new Date()).getTime()
    let passedMS=nowMS-timeMS
    if(passedMS<MONTH){
      return this.topicListWithinMonth(passedMS)
    }else if(passedMS<YEAR){
      return this.getTimeString(passedMS,5,11,{connectorDate:'char'})
    }else {
      return this.getTimeString(passedMS,0,11,{connectorDate:'char'})
    }
  }
  static topicDetailWithinMonth(){//

  }
  static TopicListDetail(){

  }
  static actList(startTime,endTime){
    let duration=endTime-startTime,start,end
    if(duration<DAY){
      return this.getTimeString(startTime,5,11)
    }

    else if(duration<YEAR){
      start=this.getTimeString(startTime,5,16)
      end=this.getTimeString(endTime,5,16)
      return start+'-'+end
    }else{
      start=this.getTimeString(startTime,0,16)
      end=this.getTimeString(endTime,0,16)
      return start+'-'+end
    }
  }
  static actDetail(startTime,endTime){
    let duration=endTime-startTime,start,end
    if(duration<YEAR){

      start=this.getTimeString(startTime,5,16)
      end=this.getTimeString(endTime,5,16)
      return start+'-'+end
    }else{
      start=this.getTimeString(startTime,0,16)
      end=this.getTimeString(endTime,0,16)
      return start+'-'+end
    }
  }
  static visitor(){

  }
}

describe('topicList', () => {
  it("less than an hour", () =>{
    expect(TimeUitl.topicList(HOUR-1)).toBe('59分钟前');
  });
  it("less than one day", () =>{
    expect(TimeUitl.topicList(DAY-1)).toBe('23小时前');
    expect(TimeUitl.topicList(HOUR)).toBe('1小时前');
  });
  it("yesterday", () =>{
    expect(TimeUitl.topicList(DAY)).toBe('昨天');
    expect(TimeUitl.topicList(DAY*2-1)).toBe('昨天');
  });
  it("within 30days(a month)", () =>{
    expect(TimeUitl.topicList(DAY*2)).toBe('2天前');
    expect(TimeUitl.topicList(MONTH-1)).toBe('29天前');
  });
})
