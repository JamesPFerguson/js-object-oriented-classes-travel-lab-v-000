class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExpereienceFromBeginningOf(year){
    return year - this.startDate
  }
}


class Route {

}
