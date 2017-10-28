// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "1991-2017",
      text: {
        headline: "Welcome To Harry Potter's Magic World!",
        text: "<p>This is Harry Potter's magic world, a wizarding world existing parallel to the Muggle world, albeit hidden and in secrecy. Shh, come with me and explore the magic together!</p>"
      },
      media: {
        url: "https://static1.squarespace.com/static/53138597e4b03cbb5111c4ca/573cc7ad2b8dde77b5a20c73/576d92dc59cc689571467626/1466798813452/harrypotter-header.jpg?format=1000w",
        credit: "Harry Potter's Magic World",
        caption: "About"
      }
    }, {
      date: "1997",
      text: {
        headline: "Platform 9¾ ",
        text: "<p> Get ready? Hogwarts Express is arriving at Platform 9¾  at King's Cross station. Get on the train and start your trip to magic. Three, two, one, let's go!</p>"
      },
      location: {
        name: "Platform 9 3/4",
        icon: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
        lat: 51.5329,
        lon: -.1224,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://www.film-travel.com/wp-content/uploads/2012/08/hogwarts.jpeg",
        type: 		"image",
        credit: "Harry Potter's Magic World",
        caption: "King's Cross Station"
      }
    }, {
      date: "1997",
      text: {
        headline: "Diagon Alley",
        text: "<p>Now you have come to wizards' world. This is Diagon Alley, a cobblestoned wizarding alley and shooping area. All items on the Hogwarts supply list can be bought here. Now it's time to buy a wand for yourself.</p> "
      },
      location: {
        name: "Leadenhall Market",
        lat: 51.5128,
        lon: -.0835,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://orlandoinformer.com/wp-content/uploads/2016/05/DSC_0910-Edit_1-Edit_2-Edit_3-Edit_fused-5.jpg",
        credit: "Harry Potter's Magic World",
        caption: "Leadenhall Market."
    }
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}