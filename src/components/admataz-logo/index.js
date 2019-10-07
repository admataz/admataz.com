var React = require('react');
var ReactDom = require('react-dom');
var _ = {};
_.unzip = require('lodash/unzip');
_.map = require('lodash/map');
_.reduce = require('lodash/reduce');
_.uniq = require('lodash/uniq');
_.split = require('lodash/split');





var admataz = [
'0000000000011000000000000000000110000000000000000',
'0000000000011000000000000000000110000000000000000',
'0111110001111011111100011111011111100111110111111',
'1100110110011011010110110011000110001100110000110',
'1100110110011011010110110011000110001100110001100',
'1101110110011011010110110111000110001101110011000',
'0110110011111011010110011011000110000110110111111'
];
var row = null;
var piece = null;
var width = admataz[0].length;
var height = admataz.length;
// var containerWidth = container.width();
// var containerHeight = container.height();
var bitwidth = 6; //Math.floor(containerWidth/width);
var bitheight = 5; //Math.floor(containerWidth/width);
var yspace = 1; //(containerWidth/width/4);
var xspace = 0;


var flipped;
var letters;

flipped = _.unzip(_.map(admataz, function(itm){ return _.split(itm,'')}));
letters = [[]];

_.reduce(flipped, function(result, value, key){
    if(_.uniq(value).join('') == "0"){
      letters.push([]);
    } else {
      letters[letters.length-1].push(value);
    }
}, letters);


function viewBoxValues(){
    return '0 0 ' + ((bitwidth + xspace) * admataz[0].length) + ' ' + ((bitheight + yspace) * admataz.length);
}


var SvgBit = React.createClass({

    render: function(){

        return (
            <rect x={this.props.xpos} y={this.props.ypos} height={this.props.blockHeight} width={this.props.blockWidth} data-x={this.props.xpos} data-y={this.props.ypos} className="svgbit"></rect>
        );
    }

})

var LetterBit = React.createClass({
    render: function(){
        var num = this.props.num;
        var pos = this.props.pos;
        var bits = this.props.bits;


        return (
            <g className="letter">
            {
                _.map(this.props.bits, function(col, c){
                return _.map(col, function(row, r){
                    if(row == "1"){
                        return (
                            <SvgBit xpos={ (c+pos)*bitwidth + (c+pos)*xspace } ypos={r * bitheight + r * yspace} blockWidth={bitwidth} blockHeight={bitheight} key={'letter='+num+'-'+c+'-'+r} />
                        )
                    }


                });
            })
        }

            </g>
        );
    }
})

var SvgContainer = React.createClass({
    render: function(){
        var pos=0;
        return (
            <svg version="1.1" viewBox={viewBoxValues()} xmlns="http://www.w3.org/2000/svg" id="admataz-svg" >
            {
                _.map(letters, function(itm, i, c){
                    var mypos = pos;
                        pos += itm.length+1
                    return (
                        <LetterBit bits={itm}  key={'letter-'+i} num={i} pos={mypos}  />
                    );
                })
            }
            </svg>
        );
    }
});

var d = document.getElementById('admataz-svg-logo');
if(d){
    ReactDom.render( < SvgContainer />, d);
}
