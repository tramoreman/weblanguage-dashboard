queue()
        .defer(d3.csv, "web.csv")
      
        .await(makeGraphs);
    function makeGraphs(error, transactionsData) {
        
         var ndx = crossfilter(transactionsData);
        var language_dim = ndx.dimension(dc.pluck('language'));
        var web_design_languages = language_dim.group().reduceSum(dc.pluck('total'));
        
        dc.barChart("#one")
            .width(1200)
            .height(300)
            .margins({top: 10, right: 50, bottom: 60, left: 50})
            .dimension(language_dim)
            .group(web_design_languages)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .yAxis().ticks(4);