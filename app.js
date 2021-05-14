var shop = [
  {
    title: 'Birds',
    image: './Parrot.jfif',
    price: '500-1,500',
    description: 'Percy Parrot'
    
  },
  {
    title: 'Cats',
    image: './Cat1.jfif',
    price: '500-1,500',
    description: 'Carl The Cat'
    
  },
  {
    title: 'Birds',
    image: './Dog1.jfif',
    price: '500-1,500',
    description: 'Doug The Dog'
    
  }
  

  
  ]


 
    
    
  
    
    
  
  var postHTML = " "

























  



  for (var i=0; i < shop.length; i++){
      var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>';
      var image = '<img src="' + shop[i].image + '"/';
      var price = '<p> $' + shop[i].price + '</p></span>';
      var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>';
      var concatThis = heading + image + price + description;
      postHTML = postHTML + concatThis;
  }
  document.getElementById('market').innerHTML = postHTML
    
  
    
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  