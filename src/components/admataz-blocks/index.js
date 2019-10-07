var React = require('react');
var ReactDom = require('react-dom');
var _ = {};
_.map = require('lodash/map');

var colours = [
  '#E86C4E',
  '#666',
  '#FFE074',
  '#71A166',
  '#667FCC'
];

var ylimit = 12,
  scale = 12,
  blocks = [],
  containerWidth = 640,
  containerHeight = 200,
  xoffset = 0,
  yoffset = 0,
  scrollTop = 0;

// console.log('this is the building block!');

function elastic(x) {
  return -1 * Math.pow(4, -8 * x) * Math.sin((x * 6 - 1) * (2 * Math.PI) / 2) + 1;
}


function getContainerWidth() {
  return window.innerWidth;
}

function getContainerHeight() {
  return window.innerHeight;
}

function getDocHeight() {
  var body = document.body,
    html = document.documentElement;

  var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

  return height;
}

function xlimit() {
  var limit = Math.ceil(getContainerWidth() / scale);
  return limit * 4;
}



function makeBlock() {

  var b = {};
  b.scale = scale;
  // b.;
  b.strokeColour = '#bbb';
  b.strokeWidth = 0.05;
  b.fillColourFrontLeft = '#fff';
  b.fillColourFrontRight = '#efefef';
  // b.randomizer=;
  return b;
}


function getYOffset() {
  var doc = document.documentElement;
  // var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  return top/10;
}


var Block = React.createClass({


  getTransform: function() {
    // console.log(this.props.y , this.props.yoffset , this.props.randomizer);
    // console.log(this.props.x , this.props.xoffset , this.props.randomizer);
    // matrix({{scale}} 0 0 {{scale}} {{xpos + xoffset*randomizer}} {{ypos + yoffset*randomizer}})
    return 'matrix(' + scale + ' 0 0 ' + scale + ' ' + (this.props.xpos + this.props.xoffset * this.props.randomizer) + ' ' + (this.props.ypos + this.props.yoffset * this.props.randomizer) + ')';
  },

  getDefaultProps: makeBlock,

  render: function() {
    return (
      <g transform ={this.getTransform()} fill={this.props.fillColour} stroke={this.props.strokeColour} strokeWidth={this.props.strokeWidth} >
            <polygon points="2,2 0,1 2,0 4,1" fill={this.props.fillColourTop} className="cubeTop" > </polygon>
            <polygon points="2,2 2,4 0,3 0,1" fill={this.props.fillColourFrontLeft } className="cubeFrontLeft" > </polygon>
            <polygon points="2,2 4,1 4,3 2,4" fill={this.props.fillColourFrontRight} className="cubeFrontRight" > </polygon>
      </g>
      );
  }
})


function makeBlocks(yoffset) {
  // console.log(yoffset);
  var xpos,
    ypos;


  if (!blocks.length) {

    for (y = 1; y < ylimit; y++) {
      for (x = 0; x < (xlimit() / 4); x++) {
        if (y && Math.random() < 0.7) {
          continue;
        }
        if (y % 2) {
          xoffset = scale * 2;
        } else {
          xoffset = 0;
        }
        xpos = 4 * x * scale - xoffset;
        ypos = (y * scale - scale);
        blocks.push({
          x: x,
          y: y,
          xpos: xpos,
          ypos: ypos,
          xoffset: xoffset,
          yoffset: yoffset,
          fillColour: colours[Math.floor(Math.random() * colours.length)],
          randomizer: Math.ceil(Math.random() * 100),
          key: 'block-' + x + '-' + y
        }

        );
      }
    }
  }

  return blocks;
// console.log(output.length);
// return output;
}


var BlockContainer = React.createClass({
  getViewBox: function() {
    return "0 0 " + xlimit() * 4 + " " + ylimit;
  },
  getDefaultProps: function() {
    return {
      yoffset: getYOffset(),
      blocksList: makeBlocks(getYOffset())
    }
  },
  render: function() {
    var y = 0;
    var x = 0;
    var ylimit = ylimit;
    var yoffset = this.props.yoffset;

    return ( <div style={
      {
        position: 'absolute',
        top: '0',
        height: getDocHeight() +'px',
        width: '100%'
      }
      } >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="blocks-svg" viewBox={this.getViewBox()} preserveAspectRatio="xMinYMin meet" >
          {
      // makeBlocks(this.props.yoffset)

      _.map(this.props.blocksList, function(itm) {
        return (
          <Block  x={itm.x} y={itm.y} xpos={itm.xpos} ypos={itm.ypos} xoffset={itm.xoffset} yoffset={yoffset} fillColour={itm.fillColour} randomizer={itm.randomizer} key={itm.key} />
        )
      })

      }
      </svg>

      </div>

    )
  }

})

window.addEventListener('scroll', function(evt) {
  ReactDom.render(<BlockContainer  yoffset={getYOffset()} />, d);
});

var d = document.getElementById('blocks');
if (d) {
  ReactDom.render(<BlockContainer yoffset={getYOffset()} />, d);
}
