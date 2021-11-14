const pi=3.14;
let obj={
            height:7,
            radius:5,
            cylinderVol:  function (){ 
                            var calVol=pi*this.radius*this.radius*this.height;                         
                            console.log("Volume of Cylinder is "+calVol)
                        },
            surfaceArea: function() {
                var calSurfaceArea=(2*pi*this.radius*this.radius)+(2*pi*this.radius*this.height); 
                console.log("Surface area of Cylinder is "+calSurfaceArea);
                      }
     
        }
        obj.cylinderVol();
        obj.surfaceArea();



    //     let calPower=(v,c) => {

    //         return(console.log(v*c));
    //     }
    //  var v=prompt("enter voltage value");
    //    var c= prompt("enter current value");
    //     calPower(v,c);

        let calPower=() => {
            var v=prompt("enter voltage value");
         var c= prompt("enter current value");
            return(alert("calculated power is "+v*c));
        }
     
    let bucketObj={
        paint:"navy blue",
        n:500,
        w:10,
        h:50,
        completeWalls:function(){
            let area=this.w*this.h;
            console.log("you can paint maximum "+this.n/area +" walls")
        }

    }

    bucketObj.completeWalls();