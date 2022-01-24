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
    drive: function(){ return "dive"; }
};

var array = [ 
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ return "dive"; }
];

var array2 = ["string", 100, ["100","^_^"],
{car: "ford"}]

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
        return "good experience"
    }
}