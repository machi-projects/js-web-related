//Add the Purify Html Styles .js files before run these

var htmlString = "<div class='flet' style='color:red;display:none'> <span style='margin-left:10px'> testing </span> </div>"
purifyHtmlStyles = new PurifyHtmlStyles( htmlString );
htmlString = purifyHtmlStyles.run();

console.log( htmlString );
