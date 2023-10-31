window.onload= function(){
    var ctx=document.getElementById("ChartcitoLosLagos");
    var Chartcito= new Chart(ctx,{
        type:"polarArea",
        data:{
            labels: ['Residencial','Hotel','Apart Hotel', 'Camping sitios','Camping Cabaña','otros'],
            datasets:[{
                    data:[7371, 12250,15437,9394,2820,339],
                    borderColor:['rgb(226, 114, 241)', 'rgb(114, 120, 241)','rgb(233, 173, 28)','rgb(209, 29, 55)','rgb(25, 124, 148)','rgb(15, 102, 54)','rgb(32, 119, 27)','rgb(69, 179, 157)','rgb(155, 89, 182)','rgb(46, 134, 193)','rgb(231, 76, 60)', 'rgb(186, 74, 0)','rgb(230, 126, 34)','rgb(19, 141, 117)','rgb(40, 180, 99)','rgb(101, 45, 198)'],
                    backgroundColor:[
                        'rgb(226, 114, 241, 0.3)',
                        'rgb(114, 120, 241, 0.3)',
                        'rgb(233, 173, 28, 0.3)',
                        'rgb(209, 29, 55, 0.3)',
                        'rgb(25, 124, 148, 0.3)',
                        'rgb(15, 102, 54, 0.3)',
                        'rgb(32, 119, 27, 0.3)',
                        'rgb(69, 179, 157, 0.3)',
                        'rgb(155, 89, 182, 0.3)',
                        'rgb(46, 134, 193, 0.3)',
                        'rgb(231, 76, 60, 0.3)',
                        'rgb(186, 74, 0, 0.3)',
                        'rgb(230, 126, 34, 0.3)',
                        'rgb(19, 141, 117, 0.3)',
                        'rgb(40, 180, 99, 0.3)',
                        'rgb(101, 45, 198, 0.3)',
                    ]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Donde se quedan los turistas'
                }
            }
        });
       
}