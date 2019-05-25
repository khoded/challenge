var express = require('express');
var router = express.Router();
var readline = require('readline');
var fs = require('fs');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Customer Reward System', reward : 'upload input File' });
});


router.post('/upload',function(req,res, next){
	
	var a = {};

	class Graph{
		constructor(){
			this.graph={}
		}
		
		addEdge(u,v){
			if(this.graph.hasOwnProperty(u)){
				this.graph[u].push(v);
			}
			else{
				this.graph[u]=[v];
			}
		}
		
		pnts(s){
			var visited = {};
			var i;
			for (i in this.graph){
				visited[i]= false;
			}
			var queue=[];
			queue.push([s,0]);
			visited[s]=true;
			var j = 0;
			var points = 0;
			while(queue.length){
				s = queue.shift()
				if(s[0] != null){ 
					points+= s[1];
				}
				for(var i=0; i<this.graph[s[0]].length; i++){
					if(this.graph[s[0]][i] != null && visited[this.graph[s[0]][i]] == false){
						queue.push([this.graph[s[0]][i],Math.pow(1/2,j)]);
						visited[this.graph[s[0]][i]] = true;
					}
				}
				j++;
			}
			return points;
		}
	}

	function lint(i){
	
		var x = /([\S]*) recommends ([\S]*)/.exec(i);

		if(x != null){
			if( !a.hasOwnProperty(x[2])){
				a[x[2]]=x[1];
			}
		}
		else{
			x = /([\S]*) accepts/.exec(i);
			if(a.hasOwnProperty(x[1])){
				g.addEdge(a[x[1]],x[1]);
				g.addEdge(x[1],null);
			}
		}
	}

	var g = new Graph();
	var inputData = req.files.inputFile;
	var lineReader = readline.createInterface({
	  input: fs.createReadStream(inputData.tempFilePath)
	});

	lineReader.on('line', (input) => {lint(input);});

	lineReader.on(
		'close', 
		function(){
			var b = {};
			var i;
			for(i in g.graph){
				var t = g.pnts(i);
				if(t != 0){
					b[i]=t;
				}
			}
			// console.log(b);
			// res.send(b);
			res.render('index', { reward: JSON.stringify(b)  , title : "Customer Reward System" });
		}
	);


   
});
module.exports = router;
