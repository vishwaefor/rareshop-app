export class Article {
  id;
  name;
  description;
  imageUrl;

  constructor(id, name, description, imageUrl) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}
