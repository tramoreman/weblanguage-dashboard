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
            
             var surveysection_dim = ndx.dimension(dc.pluck('surveysection'));
        var web_design_languages = surveysection_dim.group().reduceSum(dc.pluck('total'));
        
        dc.pieChart('#two')
            .height(200)
            .radius(200)
            
            .transitionDuration(1800)
            .dimension(surveysection_dim)
            .group(web_design_languages);
            
            var section_dim = ndx.dimension(dc.pluck('section'));
        var web_design_languages = section_dim.group().reduceSum(dc.pluck('total'));
      
        dc.pieChart('#three')
           .height(200)
            .radius(200)
            .transitionDuration(1500)
            .dimension(section_dim)
            .group(web_design_languages);
            
             var survey_dim = ndx.dimension(dc.pluck('survey'));
        var web_design_languages = survey_dim.group().reduceSum(dc.pluck('total'));
        dc.pieChart('#four')
            .height(200)
            .radius(200)
            .transitionDuration(1500)
            .dimension(survey_dim)
            .group(web_design_languages);
            
              var year_dim = ndx.dimension(dc.pluck('year'));
        var web_design_languages = year_dim.group().reduceSum(dc.pluck('total'));
        dc.pieChart('#five')
           .height(200)
            .radius(200)
            .transitionDuration(1500)
            .dimension(year_dim)
            .group(web_design_languages);
            
               dc.renderAll();
    }