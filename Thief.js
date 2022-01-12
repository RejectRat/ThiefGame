(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,3000);


(lib.cum = function() {
	this.initialize(img.cum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,3000);


(lib.Thief2 = function() {
	this.initialize(img.Thief2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,3000);


(lib.Thief3 = function() {
	this.initialize(img.Thief3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,3000);


(lib.Thief_1 = function() {
	this.initialize(img.Thief_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,3000);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.thiefTwo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Thief2();
	this.instance.setTransform(-700,-1400,0.4667,0.4667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.thiefTwo, new cjs.Rectangle(-700,-1400,1400,1400), null);


(lib.thiefThree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Thief3();
	this.instance.setTransform(-700,-1400,0.4667,0.4667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.thiefThree, new cjs.Rectangle(-700,-1400,1400,1400), null);


(lib.thiefOne = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Thief_1();
	this.instance.setTransform(-700,-1400,0.4667,0.4667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.thiefOne, new cjs.Rectangle(-700,-1400,1400,1400), null);


(lib.spBall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AlGFGQiHiHAAi/QAAi+CHiIQCIiHC+AAQC/AACHCHQCICIAAC+QAAC/iICHQiHCIi/AAQi+AAiIiIg");
	this.shape.setTransform(46.15,46.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.3,92.3);


(lib.meter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgJQgxtIShAAMAAABjbIyhAAg");
	this.shape.setTransform(59.275,318.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("EgJQAxuMAAAhjaIShAAMAAABjag");
	this.shape_1.setTransform(59.275,318.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.meter, new cjs.Rectangle(-1,-1,120.6,638.3), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.meter = new lib.meter();
	this.meter.name = "meter";
	this.meter.setTransform(-0.05,-318.1,1,1,0,0,0,59.2,318.2);

	this.timeline.addTween(cjs.Tween.get(this.meter).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-59.7,-636.8,119.5,637.3), null);


// stage content:
(lib.Thief = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,89];
	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		this.thiefTwo.visible = false;
		
		this.spBall.addEventListener("mousedown", Stim)
		
		function Stim() {
		
			root.thiefTwo.visible = true;
			root.thiefOne.visible = false;
		
		}
		
		this.spBall.addEventListener("pressup", unStim)
		
		function unStim() {
		
			root.thiefTwo.visible = false;
			root.thiefOne.visible = true;
		
		
		}
		
		this.spBall2.addEventListener("mousedown", Stim)
		
		function Stim() {
		
			root.thiefTwo.visible = true;
			root.thiefOne.visible = false;
		
		}
		
		this.spBall2.addEventListener("pressup", unStim)
		
		function unStim() {
		
			root.thiefTwo.visible = false;
			root.thiefOne.visible = true;
		
		
		}
		
		this.spBall3.addEventListener("mousedown", Stim)
		
		function Stim() {
		
			root.thiefTwo.visible = true;
			root.thiefOne.visible = false;
		
		}
		
		this.spBall3.addEventListener("pressup", unStim)
		
		function unStim() {
		
			root.thiefTwo.visible = false;
			root.thiefOne.visible = true;
		
		
		}
		
		this.spBall4.addEventListener("mousedown", Stim)
		
		function Stim() {
		
			root.thiefTwo.visible = true;
			root.thiefOne.visible = false;
		
		}
		
		this.spBall4.addEventListener("pressup", unStim)
		
		function unStim() {
		
			root.thiefTwo.visible = false;
			root.thiefOne.visible = true;
		
		
		}
		
		
		
		this.spBall.addEventListener("mouseover", Stim)
		
		function Stim() {
		
			root.thiefTwo.visible = true;
			root.thiefOne.visible = false;
		
		}
		
		this.spBall.addEventListener("mouseout", unStim)
		
		function unStim() {
		
			root.thiefTwo.visible = false;
			root.thiefOne.visible = true;
		
		
		}
		
		this.spBall2.addEventListener("mouseover", Stim)
		
		function Stim() {
		
			root.thiefTwo.visible = true;
			root.thiefOne.visible = false;
		
		}
		
		this.spBall2.addEventListener("mouseout", unStim)
		
		function unStim() {
		
			root.thiefTwo.visible = false;
			root.thiefOne.visible = true;
		
		
		}
		
		this.spBall3.addEventListener("mouseover", Stim)
		
		function Stim() {
		
			root.thiefTwo.visible = true;
			root.thiefOne.visible = false;
		
		}
		
		this.spBall3.addEventListener("mouseout", unStim)
		
		function unStim() {
		
			root.thiefTwo.visible = false;
			root.thiefOne.visible = true;
		
		
		}
		
		this.spBall4.addEventListener("mouseover", Stim)
		
		function Stim() {
		
			root.thiefTwo.visible = true;
			root.thiefOne.visible = false;
		
		}
		
		this.spBall4.addEventListener("mouseout", unStim)
		
		function unStim() {
		
			root.thiefTwo.visible = false;
			root.thiefOne.visible = true;
		
		
		}
		
		
		
		
		//this.total.text = "";
		
		//var count = 0;
		
		//this.spBall.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		//function fl_MouseClickHandler() {
		
		//	count = count + 1;
		
		//	this.spBall = "X"
		//	this.total.text = count;
		
		//}
		
		
		//this.spBall2.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		//function fl_MouseClickHandler() {
		
		//	count = count + 1;
		
		//	this.spBall2 = "X"
		//	this.total.text = count;
		
		//}
		
		//this.spBall3.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		//function fl_MouseClickHandler() {
		
		//	count = count + 1;
		
		//	this.spBall3 = "X"
		//	this.total.text = count;
		
		//}
		
		//this.spBall4.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		//function fl_MouseClickHandler() {
		
		//	count = count + 1;
		
		//	this.spBall4 = "X"
		//	this.total.text = count;
		
		//}
		
		//this.stop();
		
		
		
		//if (count >= 10) {
		
		//	this.gotoAndPlay(1);
		
		//}
		
		
		
		// Symbol name for meter fill button - spBall
		
		// Symbol name for animated meter - meter
		
		// Change scaleY to scaleX in order to change direction. Origon point relative to direction on edge.
		
		// Var Setup
		
		this.stop();
		
		var root = this;
		
		
		var fillerDropRate = 0.005; // 0 to 1, Higher Value, Higher Drop Rate.
		
		var spBallFillRate = 0.05; // 0 to 1, Higher Value, Higher Fill per click.
		var spBall2FillRate = 0.05;
		var spBall3FillRate = 0.05;
		var spBall4FillRate = 0.05;
		
		this.meter.scaleY = 0;
		
		//////-----/////
		
		// Update
		
		this.addEventListener("tick", fillerAnim);
		
		function fillerAnim()
		
		{
		
			if (root.meter.scaleY >= 0)
		
			{
		
				root.meter.scaleY -= (fillerDropRate / 10);
		
			}
		
		
		}
		
		//////-----/////
		
		// Mouse Events
		
		this.spBall.addEventListener("click", spBallFill);
		this.spBall.addEventListener("mouseover", spBallFill);
		
		var go = this;
		
		function spBallFill()
		
		{
		
			root.meter.scaleY += spBallFillRate;
		
			if (root.meter.scaleY >= 1)
		
			{
		
				root.removeEventListener("tick", fillerAnim);
		
				root.spBall.removeEventListener("click", spBallFill);
				root.spBall.removeEventListener("mouseover", spBallFill);
		
		
				go.gotoAndPlay(1);
		
		
			}
		
		}
		
		this.spBall2.addEventListener("click", spBall2Fill);
		this.spBall2.addEventListener("mouseover", spBall2Fill);
		
		var go = this;
		
		function spBall2Fill()
		
		{
		
			root.meter.scaleY += spBallFillRate;
		
			if (root.meter.scaleY >= 1)
		
			{
		
				root.removeEventListener("tick", fillerAnim);
		
				root.spBall2.removeEventListener("click", spBall2Fill);
				root.spBall2.removeEventListener("mouseover", spBall2Fill);
		
		
				go.gotoAndPlay(1);
		
		
			}
		
		}
		
		this.spBall3.addEventListener("click", spBall3Fill);
		this.spBall3.addEventListener("mouseover", spBall3Fill);
		
		var go = this;
		
		function spBall3Fill()
		
		{
		
			root.meter.scaleY += spBall3FillRate;
		
			if (root.meter.scaleY >= 1)
		
			{
		
				root.removeEventListener("tick", fillerAnim);
		
				root.spBall3.removeEventListener("click", spBall3Fill);
				root.spBall3.removeEventListener("mouseover", spBall3Fill);
		
		
				go.gotoAndPlay(1);
		
		
			}
		
		}
		
		this.spBall4.addEventListener("click", spBall4Fill);
		this.spBall4.addEventListener("mouseover", spBall4Fill);
		
		var go = this;
		
		function spBall4Fill()
		
		{
		
			root.meter.scaleY += spBallFillRate;
		
			if (root.meter.scaleY >= 1)
		
			{
		
				root.removeEventListener("tick", fillerAnim);
		
				root.spBall4.removeEventListener("click", spBall4Fill);
				root.spBall4.removeEventListener("mouseover", spBall4Fill);
		
		
				go.gotoAndPlay(1);
		
		
			}
		
		}
	}
	this.frame_1 = function() {
		playSound("cumwav");
	}
	this.frame_89 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(88).call(this.frame_89).wait(3));

	// Meter
	this.meter = new lib.Symbol1();
	this.meter.name = "meter";
	this.meter.setTransform(1186.6,360.65,1,1,0,0,0,0,-318.2);

	this.timeline.addTween(cjs.Tween.get(this.meter).to({_off:true},90).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgOXg3LIcvAAMAAABuXIouAA");
	this.shape.setTransform(1188.025,354.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EgFeA2dQiHgkiLg+MAAAhqnQKSjFJPDFMAAABqnQh6A+h+AkQivAyi2AAQi1AAi9gyg");
	this.shape_1.setTransform(1186.475,359.6374);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(92));

	// Stim_Points
	this.spBall4 = new lib.spBall();
	this.spBall4.name = "spBall4";
	this.spBall4.setTransform(668.95,661.95,1,1,0,0,0,46.1,46.1);
	this.spBall4.compositeOperation = "overlay";
	this.spBall4.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.spBall4.cache(-2,-2,96,96);
	new cjs.ButtonHelper(this.spBall4, 0, 1, 1);

	this.spBall3 = new lib.spBall();
	this.spBall3.name = "spBall3";
	this.spBall3.setTransform(714.9,540.95,1.12,2.2185,0,11.8203,0,46.1,45.8);
	this.spBall3.compositeOperation = "overlay";
	this.spBall3.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.spBall3.cache(-2,-2,96,96);
	new cjs.ButtonHelper(this.spBall3, 0, 1, 1);

	this.spBall2 = new lib.spBall();
	this.spBall2.name = "spBall2";
	this.spBall2.setTransform(718.55,254.95,1,1,0,0,0,46.1,46.1);
	this.spBall2.compositeOperation = "overlay";
	this.spBall2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.spBall2.cache(-2,-2,96,96);
	new cjs.ButtonHelper(this.spBall2, 0, 1, 1);

	this.spBall = new lib.spBall();
	this.spBall.name = "spBall";
	this.spBall.setTransform(529.8,305.6,1,1,0,0,0,46.1,46.1);
	this.spBall.compositeOperation = "overlay";
	this.spBall.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(50, 0, -100, 0))];
	this.spBall.cache(-2,-2,96,96);
	new cjs.ButtonHelper(this.spBall, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spBall},{t:this.spBall2},{t:this.spBall3},{t:this.spBall4}]}).to({state:[]},1).wait(91));

	// Thief_1
	this.thiefOne = new lib.thiefOne();
	this.thiefOne.name = "thiefOne";
	this.thiefOne.setTransform(657,579,1,1,0,0,0,0,-700);

	this.timeline.addTween(cjs.Tween.get(this.thiefOne).to({_off:true},1).wait(91));

	// Thief_2
	this.thiefTwo = new lib.thiefTwo();
	this.thiefTwo.name = "thiefTwo";
	this.thiefTwo.setTransform(657,579,1,1,0,0,0,0,-700);

	this.timeline.addTween(cjs.Tween.get(this.thiefTwo).to({_off:true},1).wait(91));

	// Cum
	this.instance = new lib.cum();
	this.instance.setTransform(-43,-121,0.4667,0.4667);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},90).wait(1));

	// Thief_3
	this.thiefThree = new lib.thiefThree();
	this.thiefThree.name = "thiefThree";
	this.thiefThree.setTransform(657,579,1,1,0,0,0,0,-700);
	this.thiefThree._off = true;

	this.timeline.addTween(cjs.Tween.get(this.thiefThree).wait(1).to({_off:false},0).to({_off:true},90).wait(1));

	// BG
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(-43,-179,0.4667,0.4667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},91).wait(1));

	// stageBackground
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Ehljg5zMDLHAAAMAAABznMjLHAAAg");
	this.shape_2.setTransform(640,360);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EhljA50MAAAhznMDLHAAAMAAABzng");
	this.shape_3.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(92));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(597,181,760,1098);
// library properties:
lib.properties = {
	id: 'A8A0C353ABFD734BAE4F40CD7B2B714E',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.png", id:"bg"},
		{src:"images/cum.png", id:"cum"},
		{src:"images/Thief2.png", id:"Thief2"},
		{src:"images/Thief3.png", id:"Thief3"},
		{src:"images/Thief_1.png", id:"Thief_1"},
		{src:"sounds/cumwav.mp3", id:"cumwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A8A0C353ABFD734BAE4F40CD7B2B714E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;