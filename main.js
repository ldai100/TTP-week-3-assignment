var me = {firstName:'Li',lastName:'Dai', birthday:'09/12/1987', interest: ["gaming","snowboard","other"]};

function House(type, rooms){
	this.type=type;
	this.rooms=rooms;
}

var home= new House("condo",4);
var cabin= new House("cabin",8);

function Multiplier(supplied){
	this.currentN=1;
	this.multiply=function(){
		return this.currentN=this.currentN*supplied;
	}

	this.getCurrentValue=function(){
		return this.currentN;
	}
}

function school(name,location){
	this.name=name;
	this.location=location;
	this.thing=function(){
		return "This is a school.";
	}
}

function teacher(){
	this.teacher=true;
	school.apply(this,arguments);
}
function student(){
	this.student=true;
	school.apply(this,arguments);
}

teacher.prototype = new school();
student.prototype = new school();

var mr_x= new teacher("x","somewhere");
var lil_x= new student("lx","some_where_else");