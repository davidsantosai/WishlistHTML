//Created by: Juan, Michael, Ayeepez, David


const Wishlist = function(elementId) {
  // This array will contain the items present in the wishlist
  this.items = []
  
  // We keep a reference to the element associated to the whishlist
  this.element = document.getElementById(elementId);
};

// TO IMPLEMENT
Wishlist.prototype.contains = function(itemId) {
  // This method should check in the `items` array if there's any item with the specified `itemId``, if yes, it should return true, otherwise it will return false;

  for(let i = 0; i < this.items.length; i++) {
    if(this.items[i].id === itemId) {
      //console.log(`::Existe:: ${this.items[i]}`)
      return true;
    }    
  }
  return false;
}

// TO IMPLEMENT
Wishlist.prototype.add = function(item) {
  // This method should add the item to the `items` array, then call the `render` method. You need to make sure that the item can't be added twice.

  let exist = this.contains(item.id);
  if(exist === false) {
    this.items.push(item);
    this.render();
  }
};

// TO IMPLEMENT
Wishlist.prototype.remove = function(itemId) {
  // This method should remove the item specified by `itemId` from the `items` array. Then, you need to call the render method
    for(let i = 0; i < this.items.length; i++) {
      if(this.items[i].id === itemId);
        this.items.splice(this.items[i], 1);
        this.render();
        return;
  }
};

Wishlist.prototype.render = function() {
  this.clear();
  
  this.items.forEach((i) => {
    const li = document.createElement('li');
    const remove = document.createElement('button');
    remove.innerHTML = 'Remove from wishlist';
    remove.addEventListener('click', (e) => {
      this.remove(i.id);
    });
    li.innerHTML = i.name;
    li.appendChild(remove);
    
    this.element.appendChild(li);
  });
}

Wishlist.prototype.clear = function() {
  this.element
    .querySelectorAll('li')
    .forEach((li) => {
      this.element.removeChild(li);
    });
}

const wishlist = new Wishlist('wishlist');

document
  .querySelectorAll('.add-to-wishlist')
  .forEach((e) => {
    e.addEventListener('click', (ev) => {
      const element = ev.target;
      
      wishlist.add({
        id: element.dataset.id,
        name: element.dataset.name
      });
      //console.log(element.id)
    })
  });
