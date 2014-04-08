Template.idxResults.helpers({ 
  headers: Idx.headers.find(),
  articles: Idx.articles.find(),
  getStats: function(id){
    return Idx.articles.findOne({_id: id}).stats;
  }
});

Template.idxResultsRow.events({
  'click .stats' : function(event){
    console.log(event);
    console.log(this);
    $('#status-' + this._id).toggleClass('hidden');
  }
});
