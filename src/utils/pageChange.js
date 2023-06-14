export function pageChange(langParam = "", pathParam = "") {
    const params = getUrlParams();
    const path = pathParam != "" ? pathParam.toLowerCase() : location.pathname.replace("/", "");
    const lang = langParam !== "" ? langParam : params['lang'];

    let url = "";
    if (path !== "" && path !== undefined) {
        url += ("path=" + path);
    }

    if (lang !== "" && lang !== undefined) {
        url += (url != "" ? ("&lang=" + lang) : "lang=" + lang);
    }

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