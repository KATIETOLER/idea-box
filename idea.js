class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title || 'No title?';
    this.body = body || 'No good ideas?';
    this.starred = false;
    this.comments = [];
  };

  updateIdea() {
    if (this.starred === true){
      this.starred = false;
    } else if (this.starred === false){
      this.starred = true;
    };
  };
};
