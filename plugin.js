(function () {
    function create() {
        return (hook) => {
            const TARGET_QUERY = 'id';
            const SCROLL_DELAY = 500;

            hook.doneEach(function () {
                if (!location.hash.includes('?')) return;
                let searchParams = new URLSearchParams(location.hash.split('?')[1]);
                let header = document.querySelector('#' + searchParams.get(TARGET_QUERY));
                header && setTimeout(() => header.scrollIntoView(), SCROLL_DELAY);
            });
        };
    }

    if (typeof $docsify === 'object') {
        $docsify.plugins = [].concat(create(), $docsify.plugins);
    }
})();
