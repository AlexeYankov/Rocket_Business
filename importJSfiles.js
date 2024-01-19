const files = [
    "./app/common/burger_menu.js",
    "./app/common/slider.js",
    
];

function importFiles(files) {
    const selectAnchorJStag = document.getElementById("JSinject");
    files.map((el) => {
        const createJSfileConnect = document.createElement("script");
        createJSfileConnect.setAttribute("src", el);

        document.body.insertBefore(createJSfileConnect, selectAnchorJStag);
    });
}
importFiles(files);