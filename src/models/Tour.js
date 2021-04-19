export default class Tour {
  constructor({
    title = [],
    description = "",
    startDate = "",
    endDate = "",
    year = "2021",
    name = "",
    position = "next",
    image = "",
  }) {
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.year = year;
    this.name = name;
    this.position = position;
    this.image = image;
  }

  get dateSpan() {
    return `${this.startDate} - ${this.endDate}. (${this.year})`;
  }
}
