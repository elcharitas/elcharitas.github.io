/**
 * Inject required scripts into head
 *
 * @param string src
 * @returns void
 */
function loadScript(src)
{
    var el = document.createElement("script");
    var head = document.getElementsByTagName("head")[0];
    el.src = src;
    el.async = true;
    //detach the loaded script
    el.onload = function()
    {
        head.removeChild(el);
    }
    head.appendChild(el);
}

/**
 * Simple function to save or retrieve user details
 * Uses localStorage | cookies | object
 *
 * @param string key
 * @param any|undefined item
 * @returns string
 */
function Store(key, item)
{
    var handle = localStorage ||
    {
        getItem: function(key)
        {
            return Storex[key];
        },
        setItem: function(key, item)
        {
            document.cookie = key + '=' + item;
            return Storex[key] = item;
        }
    };
    
    if(key && typeof item === "undefined")
    {
        return handle.getItem(key);
    } else if(key){
        return handle.setItem(key, item);
    }
}

//optimal data storage
var Storex = {};

//current location without hash or query
var currentLocation = location.href.split('#')[0].split('?')[0];

//htmlcommentbox variables
var hcb_user = {
    comments_header: 'Leave a Reply.',
    name_label: 'Your Name:',
    content_label: 'Your reply...',
    submit: 'Submit',
    logout_link: 'Logout',
    admin_link: '  ',
    no_comments_msg: 'No replies yet!',
    add: 'Reply Post',
    again: 'New Reply',
    rss: ' ',
    said: 'said:',
    prev_page: 'Older',
    next_page: 'Newer',
    showing: 'Showing',
    to: 'to',
    website_label: 'Your Website (optional)',
    email_label: 'Email Address',
    anonymous: 'Stay Anonymous?',
    mod_label: 'Super User',
    subscribe: 'Notifications?',
    add_image: '+',
    are_you_sure: 'Thanks for helping. Are you sure this is Spammy?',
    reply: 'Comment',
    flag: 'Flag',
    like: 'Like',
    days_ago: 'days ago',
    hours_ago: 'hrs ago',
    minutes_ago: 'mins ago',
    within_the_last_minute: 'just now',
    msg_thankyou: 'Thank you for replying!',
    err_bad_html: 'Your reply contained bad html.',
    err_bad_email: 'Please enter a valid email address.',
    err_too_frequent: 'You must wait a few seconds before new replies.',
    err_comment_empty: 'Your reply was not posted because it was empty!',
    err_denied: 'Your reply was not accepted.',
    err_unknown: 'Your reply was blocked for unknown reasons, please report this.',
    err_spam: 'Your reply was detected as spam.',
    err_blocked: 'Your reply was blocked by site policy.',
    MAX_CHARS: 8192,
    PAGE: "https://wcodr.mybb.us/pages/gb",
    USER: {
        name: localStorage
    },
    ON_COMMENT: function() {

    },
    onload: function() {
        alert(typeof $);
    },
    RELATIVE_DATES: true
};

//offload htmlcommentbox
loadScript("https://www.htmlcommentbox.com/jread?opts=2045&page=" + hcb_user.PAGE);