# Delicious Tags 

## What?
This is demo script that will build an unordered list of links using a users delicious feed and one or more tags. The standard feed URL allows for more then one tag, but will only show links that have all the tags. This code query each tag and only out put a link once. Since the AJAX calls are asynchronous, the json calls can come back in different order. 

This code was written to give my blog a dynamic element. I add tags into the Jekyll front matter. When the code renders on the client (in the browser), this code will fetch an links using those same tags from Delicious. I am lazy, so as I tag links, they will find they way into the existing Blog posts. I am way to slow to actually ready own blog and update the links :).
<br>
<br>
<br>
Test runs with a feed from my delicious account, and tags 'couchdb nosql'.

    http://feeds.delicious.com/v2/json/{ username }/{tag+tag+tag}
    http://feeds.delicious.com/v2/json/stephansmith93/nosql

    var settings = { username: 'stephansmith93', 
                 target: '#reading',
                 separator: ' '
               };
               <br>

    get_delicous_json( 'couchdb nosql', settings);

Grab the code for a quick demo from https://gist.github.com/1721433