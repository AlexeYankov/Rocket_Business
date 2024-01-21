const files = [
    "./app/common/burger_menu.js",
    "./app/common/slider.js",
    "./app/common/contact_form.js",
    "./app/common/send_form.js",
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