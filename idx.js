Idx = {};
Idx.headers = new Meteor.Collection(null);
Idx.articles = new Meteor.Collection(null);

function setIdxHeaders(data){
  var headerList = data.map(function(article){
      return Object.keys(article);
  });
  headerList = headerList.reduce(function(a, b){
        return a.concat(b);
  });
  headerList = headerList.reverse().filter(function (e, i, joined) {
        return headerList.indexOf(e, i+1) === -1;
  }).reverse();
  
  for ( i = 0; i < headerList.length; i++){
    Idx.headers.insert({name: headerList[i]});
  }
  return headerList;
}
function updateArticles(json){
  var headerList = setIdxHeaders(json);
  for(var article in json){
    Idx.articles.insert(json[article]);
  }
}

$(function(){
  $.post('http://landes-indexing-queues.herokuapp.com//articles/all', function(json){
      var articles = json.articles;
      var postObj = {};
      postObj.dois = [];
      for (var i = 0 ; i < articles.length ; i++){
        postObj.dois[i] = articles[i].doi;
      }
      $.post('http://landes-indexing-queues.herokuapp.com//article', postObj, function(json){
      updateArticles(json);
      });
  });
});
