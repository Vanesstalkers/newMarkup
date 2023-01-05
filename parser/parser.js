
fs = require("fs");
htmlparser = require("htmlparser");

var handler = new htmlparser.DefaultHandler(function (error, dom) {
    if (error)
		console.log('error', error);
    else{
		var xaocDOM = [];
		
		function parseDOM(o, p){
			if(o && o.length){
				o.forEach((e)=>{
					if(e.type == 'text'){
						p.push(['span', {text: (e.data||'').trim()}]);
					}
					if(e.type == 'tag'){
						var t = [e.name, {}, []];
						if(e.attribs){
							for(var a in e.attribs) t[1][a] = e.attribs[a];
						}
						if(e.children){
							parseDOM(e.children, t[2]);
						}
						if(t[2].length == 0){
							t.pop();
							if(Object.keys(t[1]).length == 0) t.pop();
						}
						p.push(t);
					}
				});
			}
		}
		
		function tabs(tabIndex){
			var tabStr = '';
			for( var i=0; i<tabIndex; i++){
				tabStr += '\t';
			}
			return tabStr;
		}
		
		function rearranger(str){
			str = str.replace(/\n\t+/g, '');
			var sLen = str.length;
			var tabIndex = 0;
			var newStr = '';
			var previous = '';
			var next = '';
			for( var i=0; i<sLen; i++){
				next = str[i+1];
				if(previous == '[' && str[i] == '['){
					tabIndex++;
					newStr += '\n' + tabs(tabIndex);
				}
				newStr += str[i];
				if(str[i] ==']'){
					if(previous == '}' && next != ','){
						tabIndex--;
						newStr += '\n' + tabs(tabIndex);
					}
					if(newStr.slice(-2)[0] == ']' && next== ']'){
						tabIndex--;
						newStr += '\n' + tabs(tabIndex);
					}
				}
				if(str[i] ==',' && next == '[' && previous == ']' && newStr.slice(-2)[0] == ']'){
					newStr += '\n' + tabs(tabIndex);
				}
				previous = str[i];
			}
			return newStr;
		}
		parseDOM(dom, xaocDOM);
		
		var str = JSON.stringify(xaocDOM, null, '	');
		str = str.replace( /"(\w+)":/g, '$1:' );
		str = rearranger(str);
		str = str.replace(/\["(.*?)",/gm, (x,y)=>y.toUpperCase()+'(').replace(/(]])/gm, ')').replace(/(}])/gm, '})').replace(/(},\[)/gm, '},');

		fs.writeFileSync("parser/result.js", str);
	}
},{ verbose: false, ignoreWhitespace: true });

var parser = new htmlparser.Parser(handler);
parser.parseComplete( fs.readFileSync("parser/parse.htm").toString() );
