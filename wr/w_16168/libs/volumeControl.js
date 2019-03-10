(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 200,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:
(lib.trackbaseMc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(baseColor).s().p("AnKBJQghAAgXgVQgYgWAAgeQAAgcAYgWQAXgWAhAAIOWAAQAfAAAYAWQAYAWAAAcQAAAegYAWQgYAVgfAAg");
	this.shape.setTransform(53.9,7.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107.8,14.7);


(lib.sliderTrack_mc2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,2,0.1)").s().p("An0AvIAAhdIPpAAIAABdg");
	this.shape.setTransform(50.2,-0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-5.2,100.3,9.4);


(lib.sliderBase_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(baseColor).s().p("AnHApQgVAAgOgMQgOgMAAgRQAAgPAOgNQAOgMAVAAIOPAAQAUAAAPAMQAOANAAAPQAAARgOAMQgPAMgUAAg");
	this.shape.setTransform(50.6,4.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101.1,8.3);


(lib.prog_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(99));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAH3QgPAAgKgKQgMgKAAgOIAAupQAAgOAMgKQAKgKAPAAIAAAAQARAAAKAKQALAKAAAOIAAOpQAAAPgLAJQgKAKgRAAg");
	mask.setTransform(3.9,50);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(trackColor).s().p("AAAA+QgOAAgLgMQgMgNAAgQIAAgpQAAgQAMgNQALgMAOAAIAAAAQAQAAALAMQALAMAAARIAAApQAAARgLAMQgLAMgQAAg");
	this.shape.setTransform(3.9,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(trackColor).s().p("AAABDQgOAAgLgMQgMgNAAgQIAAgzQAAgQAMgNQALgMAOAAIAAAAQAQAAALAMQALAMAAARIAAAzQAAARgLAMQgLAMgQAAg");
	this.shape_1.setTransform(3.9,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(trackColor).s().p("AAABIQgOAAgLgMQgMgNAAgQIAAg9QAAgQAMgNQALgMAOAAIAAAAQAQAAALAMQALAMAAARIAAA9QAAARgLAMQgLAMgQAAg");
	this.shape_2.setTransform(3.9,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(trackColor).s().p("AAABNQgOAAgLgMQgMgNAAgQIAAhHQAAgQAMgNQALgMAOAAIAAAAQAQAAALAMQALAMAAARIAABHQAAARgLAMQgLAMgQAAg");
	this.shape_3.setTransform(3.9,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(trackColor).s().p("AAABSQgOAAgLgMQgMgNAAgQIAAhRQAAgQAMgNQALgLAOAAIAAAAQAQAAALALQALANAAAQIAABRQAAARgLAMQgLAMgQAAg");
	this.shape_4.setTransform(3.9,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(trackColor).s().p("AAABXQgOAAgLgMQgMgNAAgRIAAhaQAAgQAMgNQALgLAOAAIAAAAQAQAAALALQALAMAAARIAABaQAAASgLAMQgLAMgQAAg");
	this.shape_5.setTransform(3.9,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(trackColor).s().p("AAABbQgOABgLgMQgMgNAAgQIAAhlQAAgQAMgNQALgLAOAAIAAAAQAQAAALALQALAMAAARIAABlQAAARgLAMQgLAMgQgBg");
	this.shape_6.setTransform(3.9,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(trackColor).s().p("AAABgQgOAAgLgLQgMgNAAgQIAAhvQAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAQIAABvQAAARgLAMQgLALgQAAg");
	this.shape_7.setTransform(3.9,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f(trackColor).s().p("AAABlQgOAAgLgMQgMgMAAgQIAAh5QAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALALAAARIAAB5QAAARgLALQgLAMgQAAg");
	this.shape_8.setTransform(3.9,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(trackColor).s().p("AAABqQgOAAgLgMQgMgMAAgRIAAiCQAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALALAAARIAACCQAAASgLALQgLAMgQAAg");
	this.shape_9.setTransform(3.9,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(trackColor).s().p("AAABvQgOAAgLgMQgMgMAAgRIAAiLQAAgRAMgNQALgLAOAAIAAAAQAQAAALALQALAMAAASIAACLQAAASgLALQgLAMgQAAg");
	this.shape_10.setTransform(3.9,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f(trackColor).s().p("AAAB0QgOAAgLgMQgMgNAAgPIAAiWQAAgRAMgNQALgLAOAAIAAAAQAQAAALALQALAMAAASIAACWQAAAQgLAMQgLAMgQAAg");
	this.shape_11.setTransform(3.9,2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f(trackColor).s().p("AAAB5QgOAAgLgMQgMgMAAgRIAAifQAAgRAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAARIAACfQAAASgLALQgLAMgQAAg");
	this.shape_12.setTransform(3.9,3.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f(trackColor).s().p("AAAB+QgOAAgLgMQgMgMAAgRIAAipQAAgRAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAARIAACpQAAASgLALQgLAMgQAAg");
	this.shape_13.setTransform(3.9,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f(trackColor).s().p("AAACDQgOAAgLgMQgMgNAAgQIAAi0QAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAQIAAC0QAAARgLAMQgLAMgQAAg");
	this.shape_14.setTransform(3.9,4.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f(trackColor).s().p("AAACIQgOAAgLgMQgMgNAAgQIAAi+QAAgQAMgMQALgLAOAAIAAAAQAQAAALALQALAMAAAQIAAC+QAAARgLAMQgLAMgQAAg");
	this.shape_15.setTransform(3.9,4.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f(trackColor).s().p("AAACNQgOAAgLgMQgMgNAAgQIAAjIQAAgQAMgMQALgLAOAAIAAAAQAQAAALALQALAMAAAQIAADIQAAARgLAMQgLAMgQAAg");
	this.shape_16.setTransform(3.9,5.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f(trackColor).s().p("AAACSQgOAAgLgMQgMgNAAgQIAAjRQAAgQAMgNQALgLAOgBIAAAAQAQABALALQALAMAAARIAADRQAAARgLAMQgLAMgQAAg");
	this.shape_17.setTransform(3.9,5.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f(trackColor).s().p("AAACXQgOAAgLgMQgMgNAAgQIAAjbQAAgQAMgNQALgLAOgBIAAAAQAQABALALQALAMAAARIAADbQAAARgLAMQgLAMgQAAg");
	this.shape_18.setTransform(3.9,6.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f(trackColor).s().p("AAACcQgOgBgLgMQgMgLAAgRIAAjlQAAgQAMgNQALgLAOgBIAAAAQAQABALALQALAMAAARIAADlQAAARgLALQgLAMgQABg");
	this.shape_19.setTransform(3.9,6.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f(trackColor).s().p("AAACgQgOAAgLgLQgMgNAAgQIAAjvQAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAQIAADvQAAARgLAMQgLALgQAAg");
	this.shape_20.setTransform(3.9,7.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f(trackColor).s().p("AAAClQgOAAgLgLQgMgNAAgQIAAj5QAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAQIAAD5QAAARgLAMQgLALgQAAg");
	this.shape_21.setTransform(3.9,7.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f(trackColor).s().p("AAACqQgOAAgLgMQgMgMAAgQIAAkDQAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALALAAARIAAEDQAAARgLALQgLAMgQAAg");
	this.shape_22.setTransform(3.9,8.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f(trackColor).s().p("AAACvQgOAAgLgMQgMgMAAgQIAAkNQAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALALAAARIAAENQAAARgLALQgLAMgQAAg");
	this.shape_23.setTransform(3.9,8.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f(trackColor).s().p("AAAC0QgOAAgLgMQgMgMAAgQIAAkXQAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALALAAARIAAEXQAAARgLALQgLAMgQAAg");
	this.shape_24.setTransform(3.9,9.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f(trackColor).s().p("AAAC5QgOAAgLgMQgMgMAAgQIAAkhQAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAQIAAEhQAAARgLALQgLAMgQAAg");
	this.shape_25.setTransform(3.9,9.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f(trackColor).s().p("AAAC+QgOAAgLgMQgMgMAAgQIAAkrQAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAQIAAErQAAARgLALQgLAMgQAAg");
	this.shape_26.setTransform(3.9,10.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f(trackColor).s().p("AAADDQgOAAgLgMQgMgMAAgQIAAk1QAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAQIAAE1QAAARgLALQgLAMgQAAg");
	this.shape_27.setTransform(3.9,10.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f(trackColor).s().p("AAADIQgOAAgLgMQgMgMAAgQIAAk+QAAgRAMgMQALgLAOgBIAAAAQAQABALALQALAMAAARIAAE+QAAAQgLAMQgLAMgQAAg");
	this.shape_28.setTransform(3.9,11.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f(trackColor).s().p("AAADNQgOAAgLgMQgMgNAAgQIAAlHQAAgRAMgMQALgLAOgBIAAAAQAQABALALQALAMAAARIAAFHQAAARgLAMQgLAMgQAAg");
	this.shape_29.setTransform(3.9,11.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f(trackColor).s().p("AAADRQgOAAgLgLQgMgMAAgQIAAlSQAAgQAMgNQALgLAOAAIAAAAQAQAAALALQALAMAAARIAAFSQAAARgLALQgLALgQAAg");
	this.shape_30.setTransform(3.9,12.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f(trackColor).s().p("AAADWQgOAAgLgLQgMgMAAgQIAAlcQAAgQAMgNQALgLAOAAIAAAAQAQAAALALQALAMAAARIAAFcQAAAQgLAMQgLALgQAAg");
	this.shape_31.setTransform(3.9,12.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f(trackColor).s().p("AAADbQgOAAgLgLQgMgNAAgQIAAlmQAAgPAMgNQALgLAOAAIAAAAQAQAAALALQALAMAAAQIAAFmQAAARgLAMQgLALgQAAg");
	this.shape_32.setTransform(3.9,13.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f(trackColor).s().p("AAADgQgOAAgLgMQgMgMAAgQIAAlwQAAgPAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAPIAAFwQAAARgLALQgLAMgQAAg");
	this.shape_33.setTransform(3.9,13.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f(trackColor).s().p("AAADlQgOAAgLgMQgMgMAAgQIAAl6QAAgPAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAPIAAF6QAAARgLALQgLAMgQAAg");
	this.shape_34.setTransform(3.9,14.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f(trackColor).s().p("AAADqQgOAAgLgMQgMgMAAgQIAAmEQAAgPAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAPIAAGEQAAARgLALQgLAMgQAAg");
	this.shape_35.setTransform(3.9,14.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f(trackColor).s().p("AAADvQgOAAgLgMQgMgMAAgQIAAmNQAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALALAAARIAAGNQAAARgLALQgLAMgQAAg");
	this.shape_36.setTransform(3.9,15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f(trackColor).s().p("AAAD0QgOAAgLgMQgMgMAAgQIAAmXQAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALALAAARIAAGXQAAARgLALQgLAMgQAAg");
	this.shape_37.setTransform(3.9,15.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f(trackColor).s().p("AAAD4QgOAAgLgLQgMgMAAgQIAAmhQAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAQIAAGhQAAARgLALQgLALgQAAg");
	this.shape_38.setTransform(3.9,16);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f(trackColor).s().p("AAAD+QgOAAgLgMQgMgMAAgQIAAmrQAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAQIAAGrQAAARgLALQgLAMgQAAg");
	this.shape_39.setTransform(3.9,16.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f(trackColor).s().p("AAAEDQgOAAgLgMQgMgMAAgQIAAm1QAAgQAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAQIAAG1QAAAQgLAMQgLAMgQAAg");
	this.shape_40.setTransform(3.9,17);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f(trackColor).s().p("AAAEHQgOAAgLgLQgMgMAAgQIAAm/QAAgQAMgMQALgLAOAAIAAAAQAQAAALALQALAMAAAQIAAG/QAAARgLALQgLALgQAAg");
	this.shape_41.setTransform(3.9,17.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f(trackColor).s().p("AAAEMQgOAAgLgLQgMgMAAgQIAAnJQAAgQAMgMQALgLAOAAIAAAAQAQAAALALQALAMAAAQIAAHJQAAARgLALQgLALgQAAg");
	this.shape_42.setTransform(3.9,18);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f(trackColor).s().p("AAAERQgOAAgLgLQgMgMAAgQIAAnTQAAgPAMgMQALgMAOAAIAAAAQAQAAALAMQALALAAAQIAAHTQAAARgLALQgLALgQAAg");
	this.shape_43.setTransform(3.9,18.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f(trackColor).s().p("AAAEWQgOAAgLgMQgMgMAAgPIAAndQAAgPAMgMQALgMAOAAIAAAAQAQAAALAMQALALAAAQIAAHdQAAAQgLALQgLAMgQAAg");
	this.shape_44.setTransform(3.9,19);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f(trackColor).s().p("AAAEbQgOAAgLgMQgMgMAAgQIAAnmQAAgPAMgMQALgMAOAAIAAAAQAQAAALAMQALALAAAQIAAHmQAAASgLAKQgLAMgQAAg");
	this.shape_45.setTransform(3.9,19.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f(trackColor).s().p("AAAEgQgOAAgLgLQgMgMAAgQIAAnxQAAgPAMgMQALgMAOAAIAAAAQAQAAALAMQALALAAAQIAAHxQAAAQgLAMQgLALgQAAg");
	this.shape_46.setTransform(3.9,19.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f(trackColor).s().p("AAAElQgOAAgLgMQgMgMAAgPIAAn7QAAgPAMgMQALgMAOAAIAAAAQAQAAALAMQALALAAAQIAAH7QAAAQgLALQgLAMgQAAg");
	this.shape_47.setTransform(3.9,20.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f(trackColor).s().p("AAAEqQgOAAgLgMQgMgMAAgQIAAoEQAAgPAMgMQALgMAOAAIAAAAQAQAAALAMQALALAAAQIAAIEQAAARgLALQgLAMgQAAg");
	this.shape_48.setTransform(3.9,20.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f(trackColor).s().p("AAAEuQgOAAgLgLQgMgMAAgQIAAoOQAAgPAMgMQALgMAOAAIAAAAQAQAAALAMQALAMAAAPIAAIOQAAARgLALQgLALgQAAg");
	this.shape_49.setTransform(3.9,21.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f(trackColor).s().p("AAAE0QgOAAgLgMQgMgMAAgPIAAoZQAAgPAMgMQALgMAOAAIAAAAQARAAAKAMQALALAAAQIAAIZQAAAQgLALQgKAMgRAAg");
	this.shape_50.setTransform(3.9,21.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f(trackColor).s().p("AAAE4QgOABgLgLQgMgNAAgPIAAoiQAAgQAMgMQALgMAOABIAAAAQARgBAKAMQALAMAAAQIAAIiQAAAQgLAMQgKALgRgBg");
	this.shape_51.setTransform(3.9,22.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f(trackColor).s().p("AAAE9QgOABgLgMQgMgMAAgPIAAosQAAgQAMgMQALgMAOABIAAAAQARgBAKAMQALAMAAAQIAAIsQAAAQgLALQgKAMgRgBg");
	this.shape_52.setTransform(3.9,22.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f(trackColor).s().p("AAAFCQgOAAgLgLQgMgMAAgPIAAo2QAAgQAMgMQALgMAOABIAAAAQARgBAKAMQALAMAAAQIAAI2QAAAQgLALQgKALgRAAg");
	this.shape_53.setTransform(3.9,23.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f(trackColor).s().p("AAAFHQgOAAgLgLQgMgMAAgPIAApAQAAgQAMgMQALgLAOAAIAAAAQARAAAKALQALAMAAAQIAAJAQAAAQgLALQgKALgRAAg");
	this.shape_54.setTransform(3.9,23.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f(trackColor).s().p("AAAFMQgOAAgLgLQgMgMAAgQIAApJQAAgQAMgMQALgLAOAAIAAAAQARAAAKALQALAMAAAQIAAJJQAAARgLALQgKALgRAAg");
	this.shape_55.setTransform(3.9,24.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f(trackColor).s().p("AAAFRQgOAAgLgLQgMgMAAgQIAApTQAAgQAMgMQALgLAOAAIAAAAQARAAAKALQALAMAAAQIAAJTQAAARgLALQgKALgRAAg");
	this.shape_56.setTransform(3.9,24.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f(trackColor).s().p("AAAFWQgOAAgLgLQgMgMAAgPIAApeQAAgPAMgNQALgLAOAAIAAAAQARAAAKALQALAMAAAQIAAJeQAAAQgLALQgKALgRAAg");
	this.shape_57.setTransform(3.9,25.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f(trackColor).s().p("AAAFbQgOAAgLgLQgMgMAAgQIAApnQAAgPAMgNQALgLAOAAIAAAAQARAAAKALQALAMAAAQIAAJnQAAARgLALQgKALgRAAg");
	this.shape_58.setTransform(3.9,25.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f(trackColor).s().p("AAAFgQgOAAgLgLQgMgMAAgQIAApxQAAgPAMgMQALgMAOAAIAAAAQARAAAKAMQALALAAAQIAAJxQAAARgLALQgKALgRAAg");
	this.shape_59.setTransform(3.9,26.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f(trackColor).s().p("AAAFlQgOAAgLgLQgMgMAAgQIAAp7QAAgPAMgMQALgMAOAAIAAAAQARAAAKAMQALALAAAQIAAJ7QAAAQgLAMQgKALgRAAg");
	this.shape_60.setTransform(3.9,26.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f(trackColor).s().p("AAAFqQgOAAgLgMQgMgLAAgQIAAqFQAAgPAMgMQALgMAOAAIAAAAQARAAAKAMQALALAAAQIAAKFQAAAQgLALQgKAMgRAAg");
	this.shape_61.setTransform(3.9,27.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f(trackColor).s().p("AAAFuQgOABgLgLQgMgNAAgPIAAqPQAAgPAMgMQALgMAOABIAAAAQARgBAKAMQALALAAAQIAAKPQAAARgLALQgKALgRgBg");
	this.shape_62.setTransform(3.9,27.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f(trackColor).s().p("AAAFzQgOABgLgMQgMgLAAgQIAAqZQAAgPAMgMQALgMAOABIAAAAQARgBAKAMQALALAAAQIAAKZQAAAQgLALQgKAMgRgBg");
	this.shape_63.setTransform(3.9,28.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f(trackColor).s().p("AAAF4QgOAAgLgLQgMgLAAgQIAAqjQAAgPAMgMQALgLAOAAIAAAAQARAAAKALQALALAAAQIAAKjQAAAQgLALQgKALgRAAg");
	this.shape_64.setTransform(3.9,28.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f(trackColor).s().p("AAAF9QgOAAgLgLQgMgMAAgPIAAqtQAAgPAMgMQALgLAOAAIAAAAQARAAAKALQALALAAAQIAAKtQAAAQgLALQgKALgRAAg");
	this.shape_65.setTransform(3.9,29.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f(trackColor).s().p("AAAGCQgOAAgLgLQgMgMAAgPIAAq3QAAgPAMgMQALgLAOAAIAAAAQARAAAKALQALALAAAQIAAK3QAAAQgLALQgKALgRAAg");
	this.shape_66.setTransform(3.9,29.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f(trackColor).s().p("AAAGHQgOAAgLgLQgMgMAAgPIAArBQAAgPAMgMQALgLAOAAIAAAAQARAAAKALQALALAAAQIAALBQAAAQgLALQgKALgRAAg");
	this.shape_67.setTransform(3.9,30.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f(trackColor).s().p("AAAGMQgOAAgLgLQgMgMAAgPIAArLQAAgPAMgMQALgLAOAAIAAAAQARAAAKALQALAMAAAPIAALLQAAAQgLALQgKALgRAAg");
	this.shape_68.setTransform(3.9,30.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f(trackColor).s().p("AAAGRQgOAAgLgLQgMgMAAgPIAArVQAAgPAMgMQALgLAOAAIAAAAQARAAAKALQALAMAAAPIAALVQAAAPgLAMQgKALgRAAg");
	this.shape_69.setTransform(3.9,31.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f(trackColor).s().p("AAAGWQgOAAgLgLQgMgMAAgPIAArfQAAgPAMgMQALgLAOAAIAAAAQARAAAKALQALAMAAAPIAALfQAAAQgLALQgKALgRAAg");
	this.shape_70.setTransform(3.9,31.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f(trackColor).s().p("AAAGbQgOAAgLgLQgMgMAAgQIAAroQAAgPAMgMQALgLAOAAIAAAAQARAAAKALQALAMAAAPIAALoQAAARgLALQgKALgRAAg");
	this.shape_71.setTransform(3.9,32.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f(trackColor).s().p("AAAGgQgOgBgLgKQgMgMAAgPIAAryQAAgPAMgMQALgLAOAAIAAAAQARAAAKALQALALAAAQIAALyQAAAPgLAMQgKAKgRABg");
	this.shape_72.setTransform(3.9,32.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f(trackColor).s().p("AAAGkQgOABgLgLQgMgMAAgPIAAr8QAAgPAMgMQALgLAOAAIAAAAQARAAAKALQALALAAAQIAAL8QAAAPgLAMQgKALgRgBg");
	this.shape_73.setTransform(3.9,33.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f(trackColor).s().p("AAAGpQgOABgLgLQgMgNAAgPIAAsFQAAgPAMgMQALgLAOAAIAAAAQARAAAKALQALALAAAQIAAMFQAAAQgLAMQgKALgRgBg");
	this.shape_74.setTransform(3.9,33.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f(trackColor).s().p("AAAGuQgPAAgKgLQgMgLAAgQIAAsPQAAgPAMgMQAKgLAPAAIAAAAQARAAAKALQALALAAAQIAAMPQAAAQgLALQgKALgRAAg");
	this.shape_75.setTransform(3.9,34.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f(trackColor).s().p("AAAGzQgPAAgKgLQgMgLAAgQIAAsZQAAgPAMgMQAKgLAPAAIAAAAQARAAAKALQALALAAAQIAAMZQAAAQgLALQgKALgRAAg");
	this.shape_76.setTransform(3.9,34.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f(trackColor).s().p("AAAG4QgPAAgKgKQgMgMAAgPIAAslQAAgOAMgMQAKgLAPAAIAAAAQARAAAKALQALAMAAAOIAAMlQAAAPgLAMQgKAKgRAAg");
	this.shape_77.setTransform(3.9,35.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f(trackColor).s().p("AAAG9QgPAAgKgLQgMgMAAgPIAAsuQAAgOAMgMQAKgLAPAAIAAAAQARAAAKALQALALAAAPIAAMuQAAAQgLALQgKALgRAAg");
	this.shape_78.setTransform(3.9,35.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f(trackColor).s().p("AAAHCQgPAAgKgLQgMgLAAgQIAAs4QAAgOAMgMQAKgLAPAAIAAAAQARAAAKALQALALAAAPIAAM4QAAAQgLALQgKALgRAAg");
	this.shape_79.setTransform(3.9,36.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f(trackColor).s().p("AAAHHQgPAAgKgLQgMgMAAgPIAAtBQAAgPAMgMQAKgLAPAAIAAAAQARAAAKALQALALAAAQIAANBQAAAQgLALQgKALgRAAg");
	this.shape_80.setTransform(3.9,36.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f(trackColor).s().p("AAAHMQgPAAgKgLQgMgMAAgPIAAtLQAAgPAMgMQAKgLAPAAIAAAAQARAAAKALQALALAAAQIAANLQAAAQgLALQgKALgRAAg");
	this.shape_81.setTransform(3.9,37.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f(trackColor).s().p("AAAHRQgPAAgKgLQgMgMAAgPIAAtVQAAgPAMgMQAKgLAPAAIAAAAQARAAAKALQALALAAAQIAANVQAAAQgLALQgKALgRAAg");
	this.shape_82.setTransform(3.9,37.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f(trackColor).s().p("AAAHWQgPAAgKgLQgMgMAAgPIAAtfQAAgPAMgLQAKgMAPAAIAAAAQARAAAKAMQALALAAAPIAANfQAAAQgLALQgKALgRAAg");
	this.shape_83.setTransform(3.9,38);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f(trackColor).s().p("AAAHbQgPAAgKgLQgMgMAAgPIAAtpQAAgPAMgLQAKgMAPAAIAAAAQARAAAKAMQALALAAAPIAANpQAAAQgLALQgKALgRAAg");
	this.shape_84.setTransform(3.9,38.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f(trackColor).s().p("AAAHgQgPAAgKgLQgMgMAAgPIAAtzQAAgOAMgMQAKgMAPAAIAAAAQARAAAKAMQALALAAAPIAANzQAAAQgLALQgKALgRAAg");
	this.shape_85.setTransform(3.9,39);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f(trackColor).s().p("AAAHlQgPAAgKgLQgMgMAAgPIAAt9QAAgOAMgMQAKgMAPAAIAAAAQARAAAKAMQALALAAAPIAAN9QAAAPgLAMQgKALgRAAg");
	this.shape_86.setTransform(3.9,39.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f(trackColor).s().p("AAAHqQgPgBgKgKQgMgMAAgPIAAuHQAAgOAMgMQAKgMAPAAIAAAAQARAAAKAMQALALAAAPIAAOHQAAAPgLAMQgKAKgRABg");
	this.shape_87.setTransform(3.9,40);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f(trackColor).s().p("AAAHuQgPAAgKgKQgMgMAAgPIAAuRQAAgOAMgMQAKgLAPAAIAAAAQARAAAKALQALALAAAPIAAORQAAAQgLALQgKAKgRAAg");
	this.shape_88.setTransform(3.9,40.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f(trackColor).s().p("AAAHzQgPAAgKgKQgMgMAAgPIAAubQAAgOAMgMQAKgLAPAAIAAAAQARAAAKALQALALAAAPIAAObQAAAPgLAMQgKAKgRAAg");
	this.shape_89.setTransform(3.9,41);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f(trackColor).s().p("AAAH4QgPAAgKgLQgMgLAAgPIAAukQAAgPAMgMQAKgLAPAAIAAAAQARAAAKALQALAMAAAPIAAOkQAAAQgLAKQgKALgRAAg");
	this.shape_90.setTransform(3.9,41.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f(trackColor).s().p("AAAH9QgPAAgKgKQgMgMAAgPIAAuuQAAgPAMgMQAKgLAPAAIAAAAQARAAAKALQALAMAAAPIAAOuQAAAQgLALQgKAKgRAAg");
	this.shape_91.setTransform(3.9,42);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f(trackColor).s().p("AAAICQgPAAgKgLQgMgMAAgOIAAu4QAAgPAMgMQAKgLAPAAIAAAAQARAAAKALQALALAAAQIAAO4QAAAPgLALQgKALgRAAg");
	this.shape_92.setTransform(3.9,42.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f(trackColor).s().p("AAAIHQgPAAgKgLQgMgLAAgPIAAvCQAAgPAMgMQAKgLAPAAIAAAAQARAAAKALQALALAAAQIAAPCQAAAPgLALQgKALgRAAg");
	this.shape_93.setTransform(3.9,42.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f(trackColor).s().p("AAAIMQgPAAgKgLQgMgLAAgPIAAvMQAAgPAMgMQAKgLAPAAIAAAAQARAAAKALQALALAAAQIAAPMQAAAPgLALQgKALgRAAg");
	this.shape_94.setTransform(3.9,43.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f(trackColor).s().p("AAAIRQgPAAgKgLQgMgMAAgPIAAvWQAAgOAMgMQAKgLAPAAIAAAAQARAAAKALQALALAAAPIAAPWQAAAQgLALQgKALgRAAg");
	this.shape_95.setTransform(3.9,43.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f(trackColor).s().p("AAAIWQgPAAgKgLQgMgLAAgPIAAvhQAAgOAMgMQAKgLAPAAIAAAAQARAAAKALQALAMAAAOIAAPhQAAAPgLALQgKALgRAAg");
	this.shape_96.setTransform(3.9,44.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f(trackColor).s().p("AAAIbQgPAAgKgLQgMgMAAgOIAAvrQAAgOAMgMQAKgLAPAAIAAAAQARAAAKALQALAMAAAOIAAPrQAAAPgLALQgKALgRAAg");
	this.shape_97.setTransform(3.9,44.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f(trackColor).s().p("AAAIfQgPAAgKgKQgMgMAAgPIAAvzQAAgPAMgLQAKgLAPAAIAAAAQARAAAKALQALALAAAPIAAPzQAAAQgLALQgKAKgRAAg");
	this.shape_98.setTransform(3.9,45.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f(trackColor).s().p("AAAIkQgPAAgKgKQgMgMAAgPIAAv9QAAgPAMgLQAKgLAPAAIAAAAQARAAAKALQALALAAAPIAAP9QAAAQgLALQgKAKgRAAg");
	this.shape_99.setTransform(3.9,45.9);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,7.7,4);


(lib.basemc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AnPBQQgigBgXgXQgYgYAAggQAAggAYgXQAXgYAiAAIOfAAQAiAAAXAYQAYAXgBAgQABAggYAYQgXAXgiABg");
	this.shape.setTransform(54.5,8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,109,16);


(lib.base_mc2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgWAlIgjgmIAjgjIBQAAIAABJg");
	this.shape.setTransform(5.9,3.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.8,7.5);


(lib.slider = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.base_mc2();
	this.instance.setTransform(5.9,0.1,1,1,0,0,0,5.9,3.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("AA6AlIhQAAIgjgmIAjgjIBQAAg");
	this.shape.setTransform(5.9,0);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-4.7,13.8,9.5);


(lib.pbcVolSlider_mc = function() {
	this.initialize();

	// slider
	this.volSliderBar_mc = new lib.slider();
	this.volSliderBar_mc.setTransform(59,6.7,0.96,0.96,-90,0,0,5.8,3.7);

	// track
	this.volSliderTrack_mc = new lib.sliderTrack_mc2();
	this.volSliderTrack_mc.setTransform(54.4,12.5,1,1,0,0,0,50.2,3.9);

	// mask
	this.volMask_mc = new lib.prog_mc();
	this.volMask_mc.setTransform(20.5,8,1,1,-90,0,0,3.9,16);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(0.9,1,1).p("AHJApQATAAAPgMQAOgMAAgRQAAgPgOgNQgPgMgTAAIuRAAQgUAAgOAMQgOANAAAPQAAARAOAMQAOAMAUAAg");
	this.shape.setTransform(54.5,8);

	this.sliderBase_mc = new lib.sliderBase_mc();
	this.sliderBase_mc.setTransform(54.6,8,1,1,0,0,0,50.6,4.1);

	// border
	this.base_mc = new lib.trackbaseMc();
	this.base_mc.setTransform(54.5,8.1,1,1,0,0,0,53.9,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("AH5AAQAAgPgOgNQgPgMgUAAIuQAAQgUAAgOAMQgOANAAAPQAAARAOAMQAOAMAUAAIOQAAQAUAAAPgMQAOgMAAgRg");
	this.shape_1.setTransform(54.6,8.1);

	this.base = new lib.basemc();
	this.base.setTransform(54.5,8,1,1,0,0,0,54.5,8);

	this.addChild(this.base,this.shape_1,this.base_mc,this.sliderBase_mc,this.shape,this.volMask_mc,this.volSliderTrack_mc,this.volSliderBar_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,0,113.4,16);


(lib.customvolumeControlruntimeActions = function() {
	this.initialize();

	// Layer 1
	this.pbcVolSlider_mc = new lib.pbcVolSlider_mc();
	this.pbcVolSlider_mc.setTransform(52.2,9.9,1,1,0,0,0,52.2,10.1);

	this.addChild(this.pbcVolSlider_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,-0.2,113.4,16);


// stage content:
(lib.volumeControl = function() {
	this.initialize();

	// Layer 1
	this.runTime_mc = new lib.customvolumeControlruntimeActions();
	this.runTime_mc.setTransform(45.5,13);

	this.addChild(this.runTime_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(141.1,42.8,113.4,16);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;