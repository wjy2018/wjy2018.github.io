(function () {
    if (
        ["localhost", "127.0.0.1"].indexOf(window.location.hostname) != -1
    ) {
        document.getElementById("gitalk-container").innerHTML =
            "Gitalk comments not available by default when the website is previewed locally.";
        return;
    }

    const gitalk = new Gitalk({
        clientID: clientIDPath,
        clientSecret: clientSecretPath,
        repo: repoPath,
        owner: ownerPath,
        admin: adminPath,
        distractionFreeMode: false, // Facebook-like distraction free mode
        id: decodeURI(window.location.pathname), // Max Location.pathname Legth:75  https://github.com/gitalk/gitalk/issues/102 md5(location.pathname)
        proxy: proxyPath,
    });

    gitalk.render("gitalk-container");
})();

// clientID: '{{-.Site.params.comments.gitalk.clientID -}}',
// clientSecret: '{{- .Site.params.comments.gitalk.clientSecret -}}',
// repo: '{{- .Site.params.comments.gitalk.repo -}}',
// owner: '{{- .Site.params.comments.gitalk.owner -}}',
// admin: '[{{- .Site.params.comments.gitalk.admin -}}]',
// distractionFreeMode: false, // Facebook-like distraction free mode
// id: decodeURI(window.location.pathname), // Max Location.pathname Legth:75  https://github.com/gitalk/gitalk/issues/102 md5(location.pathname)
// proxy: '{{- .Site.params.comments.gitalk.proxy -}}' ,