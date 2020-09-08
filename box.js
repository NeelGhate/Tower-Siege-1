class Box {
    constructor(x,y,width,height) {
        var options = {
            'isStatic': false,
            'restitution': 1.8,
            'density': 1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        var engine = Engine.create();
        var world = engine.world;
        World.add(world, this.body);
      }
      display(){
        Engine.update(engine);
        var pos = this.body.position;
        rectMode(CENTER);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);
    }
  
  };
  