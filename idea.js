class Idea {
  constructor(title, body){
    this.id = event.timestamp;
    this.title = title || 'No title?';
    this.body = body || 'No good ideas?';
    this.starred = false;
    this.comments = [];
  };
}

module.exports = Idea
