class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title || 'No title?';
    this.body = body || 'No good ideas?';
    this.starred = false;
    this.comments = [];
  };

  favorite(){
    this.starred = true;
  }

  unFavorite(){
    this.starred = false;
  }
}
