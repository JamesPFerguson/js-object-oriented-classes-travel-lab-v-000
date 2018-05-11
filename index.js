class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }
}


class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }


blocksTravelled() {
  let distNorthSouth = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical));
  let distEastWest = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
  return distNorthSouth + distEastWest;
}

}
