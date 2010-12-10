//This points to the f7u12 CSS file
var cssLive = "http://www.reddit.com/r/fffffffuuuuuuuuuuuu/stylesheet.css?v=c7d7d1c7d1aaff8983ffe735852c9f4a"

var req = new XMLHttpRequest();
req.open(
    "GET",
    cssLive,
    false);
req.setRequestHeader('Content-type', 'text/html');
req.send('');
var styleScript = req.responseText; 
// Use a style tag to inject applied_subreddit_stylesheet classes
var rageStyles = "<style type=\"text/css\" title=\"applied_subreddit_stylesheet\"> ";
var rageIndex = styleScript.indexOf("a[href=");
while (rageIndex < styleScript.length)
{
    // Copy all a[href styles, until the edning bracket.
    if (styleScript.substring(rageIndex, rageIndex+7) == "a[href=")
    {
        // Rageface, copy to <style> while not }
        while (rageIndex < styleScript.length && styleScript.charAt(rageIndex) != '}')
        {
          rageStyles = rageStyles + styleScript.charAt(rageIndex);
          rageIndex = rageIndex + 1;
        }
        rageStyles = rageStyles + '} ';
        rageIndex = rageIndex + 1;
    }
    else
    {
        // Not a rage face, find one!
        rageIndex = rageIndex + 1;
    }
}
// End this with </style>
rageStyles = rageStyles + " </style>";
document.head.innerHTML = document.head.innerHTML + rageStyles;
// Whew, done!