class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    let date = new Date(year, 1 , 1)
    return year - this.startDate
  }
}


class Route {

}
