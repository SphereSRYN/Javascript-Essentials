var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons:[
            { maker: "BMW" },
            { maker: "BMW2" }
        ]
    },
    drive: function(){ return "drive"; }
};

var array = [ 
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ return "drive"; }
];

var ably = {
    programmers : "good",
    quality : true,
    profits: true,
    selling:{
        product: true,
        provide: "good items",
        tools:[{phones: [{p1: "android"}, {p2:"apple"}]},
               {web: "webs"}]
    },
    appeal : function (){
        console.log("gonna hire you")
        // return "good experience"
    }
}
console.log( car.make );
console.log(car.engine.make);
ably.appeal()
console.log(car.engine.pistons[0].maker)
console.log(ably.selling.tools[0].phones[0].p1)