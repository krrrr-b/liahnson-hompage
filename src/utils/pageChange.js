export function pageChange(langParam = "") {
    const params = getUrlParams();
    const path = location.pathname.replace("/", "");
    const lang = langParam !== "" ? langParam : params['lang'];

    let url = "";
    if (path !== "" && path !== undefined) {
        url += ("path=" + path);
    }

    if (lang !== "" && lang !== undefined) {
        url += (url != "" ? ("&lang=" + lang) : "lang=" + lang);
    }

    console.log(url);
    if (url !== "" && window.parent.location.host == "liahnson.com") {
        const redirectUrl = "?" + url;
        window.parent.location.href = 'http://www.liahnson.com/test.html' + redirectUrl;
    }

    function getUrlParams() {
        var params = {};
        location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
            function (str, key, value) {
                params[key] = value;
            }
        );
        return params;
    }
}