function SVG(tag) {
    return document.createElementNS("http://www.w3.org/2000/svg", tag);
  }
  
  var admataz = [
    "0000000000011000000000000000000110000000000000000",
    "0000000000011000000000000000000110000000000000000",
    "0111110001111011111100011111011111100111110111111",
    "1100110110011011010110110011000110001100110000110",
    "1100110110011011010110110011000110001100110001100",
    "1101110110011011010110110111000110001101110011000",
    "0110110011111011010110011011000110000110110111111"
  ];
  
  function makeLogo(container) {
    
    var row = null;
    var piece = null;
    var width = admataz[0].length;
    var height = admataz.length;
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;
    var bitwidth = 6; //Math.floor(containerWidth/width);
    var bitheight = 5; //Math.floor(containerWidth/width);
    var yspace = 1; //(containerWidth/width/4);
    var xspace = 0;
    
    var svg = SVG("svg");
    svg.setAttribute("version", "1.1");
    svg.setAttribute(
      "viewBox",
      `0 0 ${(bitwidth + xspace) * admataz[0].length} ${(bitheight + yspace) *
        admataz.length}`
    );
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("id", "admataz-svg");  
  
    var isspace = true;
    var letter = null;
    for (var x = 0; x < admataz[0].length; x++) {
    
      col = x;
      if (isspace) {
        
        if (letter) {
          svg.appendChild(letter);
        }
        letter = SVG("g")
        letter.setAttribute("class", "letter");
      }
  
      isspace = true;
    
      for (var y = 0; y < admataz.length; y++) {
        if (admataz[y][x] === "1") {
          isspace = false;
          piece = SVG("rect");
          piece.setAttribute("x", x * bitwidth + x * xspace)
          piece.setAttribute("y", y * bitheight + y * yspace)
          piece.setAttribute("height", bitheight)
          piece.setAttribute("width", bitwidth)
          piece.setAttribute("data-x", x)
          piece.setAttribute("data-y", y)
          piece.setAttribute("class", "svgbit");
          letter.appendChild(piece);
        }
      }
    }
    svg.appendChild(letter);
    container.innerHTML='';
    container.appendChild(svg)
  }
  
  makeLogo(document.getElementById("svg-logo"));
  