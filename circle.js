// circle.js
// Requires script.aculo.us

// Copyright (c) 2009 Leigh Caplan (http://www.github.com/texel, http://onehub.com)

Point = function(x, y) {
	this.x = x;
	this.y = y;
};

var Circle = Class.create();
Object.extend(Circle.prototype, Object);

Circle.prototype = {
	initialize: function(startX, startY, centerX, centerY) {
		this.startPoint		= new Point(startX, startY);	
		this.centerPoint	= new Point(centerX, centerY);

		this.dx = startX - centerX;
		this.dy = startY - centerY;

		this.radius = Math.sqrt(Math.pow(this.dx, 2) + Math.pow(this.dy, 2));
		this.diameter = this.radius * 2;
		this.circumfrence = 2 * Math.PI * this.radius;
	},
	
	pointForPosition: function(position) {		
		var originalAngle = Math.atan2(this.dy, this.dx);
		
		// Get theta in radians
		var theta = originalAngle + 2 * Math.PI * position;
		
		// Calculate dx
		var x = Math.cos(theta) * this.radius;
		
		// Calculate dy
		var y = Math.sin(theta) * this.radius;
		
		return new Point(this.centerPoint.x + x, this.centerPoint.y + y);
	},
	
	// Trace the path of the circle, marking the start point and the center point.
	// This is very useful for debugging purposes.
	trace: function() {
		var steps = $R(1, 100).collect(function(i) { return i / 100.0; });
		steps.each(function(step) {
			var point = this.pointForPosition(step);
			this.tracePoint(point.x, point.y, "#FF0000");
		}.bind(this));
		
		// Clearly show the start point
		this.tracePoint(this.startPoint.x, this.startPoint.y, "#00FF00");
		this.tracePoint(this.centerPoint.x, this.centerPoint.y, "#00FF00");
	},
	
	tracePoint: function(x, y, color) {
		var div = new Element('div', {style: "position: absolute; left: " + x + "px; top: " + y + "px; width: 1px; height: 1px; background-color: " + color + "; z-index: 9999;"});
		document.body.insert(div);
	}
};

Effect.Circle = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      x:    0,
      y:    0,
      mode: 'relative'
    }, arguments[1] || { });
    this.start(options);
  },
  setup: function() {
    this.element.makePositioned();
    this.originalLeft = parseFloat(this.element.getStyle('left') || '0');
    this.originalTop  = parseFloat(this.element.getStyle('top')  || '0');
    if (this.options.mode == 'relative') {
      this.options.x = this.options.x + this.originalLeft;
      this.options.y = this.options.y + this.originalTop;
    }
		this.circle = new Circle(this.originalLeft, this.originalTop, this.options.x, this.options.y);
		
		if (this.options.trace) {
			this.circle.trace();
		};
  },
  update: function(position) {
		position = position * (this.options.rotations || 1);
		var point = this.circle.pointForPosition(position);
		
		if (this.options.trace) {
			this.circle.tracePoint(point.x, point.y, "#FFFFFF");
		};
		
    this.element.setStyle({
			left: point.x.round() + 'px',
			top: point.y.round() + 'px'
    });
  }
});