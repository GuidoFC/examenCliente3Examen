export class Cat {
  id;
  name;
  url;
  widht;
  height;


  constructor(id, name, url, widht, height) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.widht = widht;
    this.height = height;
  }

  get id() {
    return this.id;
  }

  set id(value) {
    this.id = value;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    this.name = value;
  }

  get url() {
    return this.url;
  }

  set url(value) {
    this.url = value;
  }

  get widht() {
    return this.widht;
  }

  set widht(value) {
    this.widht = value;
  }

  get height() {
    return this.height;
  }

  set height(value) {
    this.height = value;
  }
}
